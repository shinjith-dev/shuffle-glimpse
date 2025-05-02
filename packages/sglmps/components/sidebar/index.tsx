"use client";
import React from "react";
import { View } from "react-native";
import styles from "./style";
import Image from "../../ui/image";
import { XStack, YStack } from "@/ui/layout";
import MenuItem from "./menu-item";
import usePathname from "@/hooks/usePathname";
import { SidebarGradient } from "./gradient";
import { useWidth } from "@/hooks";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const { isTab, isMobile } = useWidth();
  const collapsed = isMobile || isTab;

  if (pathname.split("/")?.length > 2) return null;
  return (
    <View style={[styles.sidebar, collapsed && styles.collapsed]}>
      <SidebarGradient />
      <View>
        {collapsed ? (
          <Image
            width={128}
            height={128}
            alt="logo"
            src={require("@/assets/images/logo.svg")}
            style={{ height: 40, width: 40 }}
            objectFit="contain"
          />
        ) : (
          <Image
            width={512}
            height={128}
            alt="logo"
            src={require("@/assets/images/text-logo.svg")}
            style={{ height: 60, width: 150, margin: "0 4px" }}
            objectFit="contain"
          />
        )}
      </View>

      <YStack style={{ flexGrow: 1, gap: collapsed ? 12 : 4 }}>
        <MenuItem label="Glimpse" icon="hugeicons:home-11" path="/" />
        <MenuItem
          label="Top Artists"
          icon="hugeicons:ai-mic"
          path="/top-artists"
        />
        <MenuItem
          label="Top Songs"
          icon="hugeicons:music-note-03"
          path="/top-tracks"
        />

        <View style={styles.divider} />

        <MenuItem
          label="Liked Songs"
          icon="hugeicons:favourite"
          path="/saved-tracks"
        />
        {/*  <MenuItem
          label="Playlists"
          icon="hugeicons:playlist-01"
          path="/playlists"
        />*/}
        <MenuItem
          label="Recent Played"
          icon="hugeicons:headset"
          path="/recently-played"
        />
        {/*<MenuItem
          label="Saved"
          icon="hugeicons:collections-bookmark"
          path="/saved"
        />*/}
      </YStack>

      <XStack justifyContent="center">
        {collapsed ? (
          <Image
            width={128}
            height={128}
            alt="logo"
            src={require("@/assets/images/spotify-white.svg")}
            style={{ height: 36, width: 36 }}
            objectFit="contain"
          />
        ) : (
          <Image
            width={400}
            height={112}
            alt="logo"
            src={require("@/assets/images/text-spotify-white.svg")}
            style={{ height: 56, width: 140, margin: "0 4px" }}
            objectFit="contain"
          />
        )}
      </XStack>
    </View>
  );
};

export default Sidebar;
