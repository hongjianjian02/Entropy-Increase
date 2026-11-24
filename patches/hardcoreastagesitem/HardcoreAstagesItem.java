package com.liquor.hardcoreastagesitem;

import com.liquor.hardcoreastagesitem.register.UnknownItem;
import com.mojang.logging.LogUtils;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.fml.common.Mod;
import org.slf4j.Logger;

@Mod(HardcoreAstagesItem.MODID)
public class HardcoreAstagesItem {
    public static final String MODID = "hardcoreastagesitem";
    public static final Logger LOGGER = LogUtils.getLogger();

    public HardcoreAstagesItem(IEventBus modEventBus) {
        UnknownItem.register(modEventBus);
    }
}
