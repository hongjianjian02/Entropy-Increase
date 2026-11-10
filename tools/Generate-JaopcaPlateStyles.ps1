param(
    [string]$InstanceMinecraft = 'D:/PrismLauncher/instances/Entropy-Increase-1.0.0-build-d2a52aa/minecraft',
    [string]$RepositoryRoot = (Split-Path -Parent $PSScriptRoot)
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression.FileSystem
Add-Type -AssemblyName System.Drawing
$utf8 = [Text.UTF8Encoding]::new($false)
$assetsRelative = 'minecraft/config/paxi/resourcepacks/jaopca_zh_cn/assets'
$assetsRoot = Join-Path $RepositoryRoot $assetsRelative
$materialsRoot = Join-Path $RepositoryRoot 'minecraft/config/jaopca/materials'
$base = [Drawing.Bitmap]::new((Join-Path $assetsRoot 'jaopca/textures/item/custom/plates_base.png'))
$extraItems = @(
    'ae2lt:overload_alloy_plate',
    'ironfurnaces:rainbow_plating',
    'neovitae:revenant_plate',
    'neovitae:revenant_plating',
    'nuclearcraftneohaul:basic_plating',
    'nuclearcraftneohaul:advanced_plating',
    'nuclearcraftneohaul:du_plating',
    'nuclearcraftneohaul:elite_plating'
)
$targets = [ordered]@{}
$generatedTextures = @{}
$records = [Collections.Generic.List[object]]::new()
$outputFiles = [Collections.Generic.HashSet[string]]::new()

function Read-ZipText($Entry) {
    $reader = [IO.StreamReader]::new($Entry.Open())
    try { return $reader.ReadToEnd() } finally { $reader.Dispose() }
}

function Get-FrameColor($Bitmap, [int]$Frame) {
    # 与 JAOPCA 默认 gamma=2 一致；排除透明像素，并按 alpha 加权。
    $red = 0.0; $green = 0.0; $blue = 0.0; $weight = 0.0
    for ($y = 0; $y -lt 16; $y++) {
        for ($x = 0; $x -lt 16; $x++) {
            $pixel = $Bitmap.GetPixel($x, $Frame * 16 + $y)
            $alpha = $pixel.A / 255.0
            $red += $pixel.R * $pixel.R * $alpha
            $green += $pixel.G * $pixel.G * $alpha
            $blue += $pixel.B * $pixel.B * $alpha
            $weight += $alpha
        }
    }
    if ($weight -eq 0) { throw 'Empty source plate frame' }
    return [Drawing.Color]::FromArgb(255, [int][Math]::Sqrt($red / $weight), [int][Math]::Sqrt($green / $weight), [int][Math]::Sqrt($blue / $weight))
}

try {
    if ($base.Width -ne 16 -or $base.Height -ne 16) { throw 'Expected 16x16 JAOPCA plate base' }
    $jars = Get-ChildItem -LiteralPath (Join-Path $InstanceMinecraft 'mods') -Filter '*.jar'
    foreach ($jar in $jars) {
        $zip = [IO.Compression.ZipFile]::OpenRead($jar.FullName)
        try {
            foreach ($entry in $zip.Entries) {
                if ($entry.FullName -match '^data/c/tags/item/plates/([a-z0-9_.-]+)\.json$') {
                    $material = $Matches[1]
                    foreach ($item in (Read-ZipText $entry | ConvertFrom-Json).values) {
                        if ($item -is [string] -and $item -match '^[a-z0-9_.-]+:[a-z0-9_.-]+$') {
                            $targets[$item] = $material
                        } else { throw "Unsupported plate tag entry: $($entry.FullName)" }
                    }
                }
            }
        } finally { $zip.Dispose() }
    }
    foreach ($item in $extraItems) { $targets[$item] = $null }

    foreach ($jar in $jars) {
        $zip = [IO.Compression.ZipFile]::OpenRead($jar.FullName)
        try {
            foreach ($item in $targets.Keys) {
                $parts = $item.Split(':')
                $modelRelative = "$($parts[0])/models/item/$($parts[1]).json"
                $modelEntry = $zip.GetEntry("assets/$modelRelative")
                if (-not $modelEntry) { continue }
                $model = Read-ZipText $modelEntry | ConvertFrom-Json
                if ($model.parent -notin @('minecraft:item/generated', 'item/generated') -or $model.overrides) { throw "Unsupported plate model: $item" }
                $textureParts = ([string]$model.textures.layer0).Split(':')
                if ($textureParts.Count -ne 2) { throw "Unsupported texture reference: $item" }
                $textureEntry = $zip.GetEntry("assets/$($textureParts[0])/textures/$($textureParts[1]).png")
                if (-not $textureEntry) { throw "Missing plate texture: $item" }
                $textureStream = $textureEntry.Open()
                $memory = [IO.MemoryStream]::new()
                try { $textureStream.CopyTo($memory) } finally { $textureStream.Dispose() }
                $memory.Position = 0
                $source = [Drawing.Bitmap]::new($memory)
                try {
                    if ($source.Width -ne 16 -or $source.Height % 16 -ne 0) { throw "Unsupported plate texture size: $item" }
                    $frames = [int]($source.Height / 16)
                    $meta = $zip.GetEntry($textureEntry.FullName + '.mcmeta')
                    if ($frames -gt 1 -and -not $meta) { throw "Missing animation metadata: $item" }
                    $material = $targets[$item]
                    $materialFile = if ($material) { Join-Path $materialsRoot ($material + '.toml') } else { $null }
                    $configuredColor = $null
                    if ($materialFile -and (Test-Path -LiteralPath $materialFile)) {
                        $colorMatch = [Regex]::Match((Get-Content -Raw -LiteralPath $materialFile), '\bcolor\s*=\s*(0x[0-9a-fA-F_]+|[0-9_]+)')
                        if (-not $colorMatch.Success) { throw "Missing JAOPCA material color: $material" }
                        $colorText = $colorMatch.Groups[1].Value.Replace('_', '')
                        $colorNumber = if ($colorText.StartsWith('0x')) { [Convert]::ToInt32($colorText.Substring(2), 16) } else { [int]$colorText }
                        $configuredColor = [Drawing.Color]::FromArgb(255, ($colorNumber -shr 16) -band 255, ($colorNumber -shr 8) -band 255, $colorNumber -band 255)
                    }
                    $palette = $item -eq 'ironfurnaces:rainbow_plating'
                    $textureName = if ($configuredColor) { $material } else { $parts -join '_' }
                    $textureRelative = "jaopca/textures/item/unified_plates/$textureName.png"
                    $outputTexture = Join-Path $assetsRoot $textureRelative
                    $frameColors = [Collections.Generic.List[int]]::new()
                    if (-not $generatedTextures.ContainsKey($textureName)) {
                        $result = [Drawing.Bitmap]::new(16, $frames * 16, [Drawing.Imaging.PixelFormat]::Format32bppArgb)
                        try {
                            for ($frame = 0; $frame -lt $frames; $frame++) {
                                $color = if ($configuredColor) { $configuredColor } else { Get-FrameColor $source $frame }
                                $frameColors.Add($color.ToArgb() -band 0xffffff)
                                for ($y = 0; $y -lt 16; $y++) {
                                    for ($x = 0; $x -lt 16; $x++) {
                                        $pixel = $base.GetPixel($x, $y)
                                        $tint = $color
                                        if ($palette) {
                                            $sample = $source.GetPixel($x, $frame * 16 + $y)
                                            if ($sample.A -gt 0) { $tint = $sample }
                                        }
                                        $result.SetPixel($x, $frame * 16 + $y, [Drawing.Color]::FromArgb($pixel.A, [int]($pixel.R * $tint.R / 255), [int]($pixel.G * $tint.G / 255), [int]($pixel.B * $tint.B / 255)))
                                    }
                                }
                            }
                            New-Item -ItemType Directory -Path (Split-Path -Parent $outputTexture) -Force | Out-Null
                            $result.Save($outputTexture, [Drawing.Imaging.ImageFormat]::Png)
                            [void]$outputFiles.Add($assetsRelative + '/' + $textureRelative)
                            if ($meta) {
                                [IO.File]::WriteAllText($outputTexture + '.mcmeta', (Read-ZipText $meta), $utf8)
                                [void]$outputFiles.Add($assetsRelative + '/' + $textureRelative + '.mcmeta')
                            }
                            $generatedTextures[$textureName] = @($frameColors)
                        } finally { $result.Dispose() }
                    }
                    $outputModel = Join-Path $assetsRoot $modelRelative
                    New-Item -ItemType Directory -Path (Split-Path -Parent $outputModel) -Force | Out-Null
                    # 原物品没有 JAOPCA 染色器，因此颜色烘焙进 layer0；layer1 高光原样复用。
                    $replacementModel = @{ parent = 'minecraft:item/generated'; textures = [ordered]@{layer0 = "jaopca:item/unified_plates/$textureName"; layer1 = 'jaopca:item/custom/plates_overlay'} }
                    [IO.File]::WriteAllText($outputModel, ($replacementModel | ConvertTo-Json -Depth 4) + "`n", $utf8)
                    [void]$outputFiles.Add($assetsRelative + '/' + $modelRelative)
                    $records.Add([ordered]@{item=$item; material=$material; originalJar=$jar.Name; originalTexture=$model.textures.layer0; texture="jaopca:item/unified_plates/$textureName"; frames=$frames; colorSource=$(if($palette){'original_palette'}elseif($configuredColor){'jaopca_material'}else{'original_texture_gamma_2'}); frameColors=$generatedTextures[$textureName]})
                } finally { $source.Dispose(); $memory.Dispose() }
            }
        } finally { $zip.Dispose() }
    }
    if ($records.Count -ne $targets.Count) { throw "Model coverage mismatch: $($records.Count)/$($targets.Count)" }
    $manifestPath = Join-Path $RepositoryRoot 'docs/JAOPCA_PLATE_STYLES.json'
    [IO.File]::WriteAllText($manifestPath, (@($records) | ConvertTo-Json -Depth 6) + "`n", $utf8)
    $outputFiles | Sort-Object
    Write-Host "Generated $($records.Count) plate models, $($generatedTextures.Count) colored bases; preserved source animations and JAOPCA highlights."
} finally { $base.Dispose() }
