param(
    [Parameter(Mandatory)] [string] $OriginalJar,
    [Parameter(Mandatory)] [string] $JdkBin,
    [Parameter(Mandatory)] [string[]] $Classpath,
    [Parameter(Mandatory)] [string] $OutputJar
)

$ErrorActionPreference = 'Stop'
$original = (Resolve-Path -LiteralPath $OriginalJar).Path
if ((Get-FileHash -Algorithm SHA1 -LiteralPath $original).Hash -ne '44012336993dd934c08a7fac5c122e51598885bc') {
    throw 'Expected the unmodified HardcoreAstagesItem 1.2.1 CurseForge JAR.'
}
if (Test-Path -LiteralPath $OutputJar) { throw "Already exists: $OutputJar" }
$outputDirectory = Split-Path -Parent $OutputJar
New-Item -ItemType Directory -Force -Path $outputDirectory | Out-Null
$classes = New-Item -ItemType Directory -Path (Join-Path ([IO.Path]::GetTempPath()) ('ei-hardcore-' + [guid]::NewGuid()))
$classRoot = 'com/liquor/hardcoreastagesitem'
$dependencies = @($original) + @($Classpath | ForEach-Object { (Resolve-Path -LiteralPath $_).Path })
& "$JdkBin/javac.exe" --release 21 -proc:none -classpath ($dependencies -join [IO.Path]::PathSeparator) -d $classes.FullName `
    "$PSScriptRoot/HardcoreAstagesItem.java"
if ($LASTEXITCODE -ne 0) { throw 'Compilation failed.' }

Copy-Item -LiteralPath $original -Destination $OutputJar
Add-Type -AssemblyName System.IO.Compression.FileSystem
$archive = [IO.Compression.ZipFile]::Open((Resolve-Path -LiteralPath $OutputJar).Path, [IO.Compression.ZipArchiveMode]::Update)
try {
    foreach ($class in @('HardcoreAstagesItem', 'events/AstagesEvent', 'register/Command', 'utils/Getitemlist', 'utils/ModelOperation')) {
        $archive.GetEntry("$classRoot/$class.class").Delete()
    }
    [IO.Compression.ZipFileExtensions]::CreateEntryFromFile(
        $archive,
        (Join-Path $classes.FullName "$classRoot/HardcoreAstagesItem.class"),
        "$classRoot/HardcoreAstagesItem.class"
    ) | Out-Null
    $entry = $archive.GetEntry('META-INF/neoforge.mods.toml')
    $reader = [IO.StreamReader]::new($entry.Open())
    try { $metadata = $reader.ReadToEnd() } finally { $reader.Dispose() }
    $entry.Delete()
    $metadata = $metadata.Replace('version="1.2.1-1.21.1"', 'version="1.2.1-1.21.1-ei.2"')
    $metadata = $metadata.Replace('versionRange="[2.0.3-1.21.1,)"', 'versionRange="[2.5.3-1.21.1,)"')
    $writer = [IO.StreamWriter]::new($archive.CreateEntry('META-INF/neoforge.mods.toml').Open())
    try { $writer.Write($metadata) } finally { $writer.Dispose() }
} finally {
    $archive.Dispose()
}
Get-FileHash -Algorithm SHA256 -LiteralPath $OutputJar
