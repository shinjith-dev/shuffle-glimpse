"use client";
import React from "react";
import { View } from "react-native";
import styles from "./style";
import Image from "../../ui/image";
import { YStack } from "@/ui/layout";
import MenuItem from "./menu-item";
import usePathname from "@/hooks/usePathname";
import { SidebarGradient } from "./gradient";
import { useWidth } from "@/hooks";
import Text from "@/ui/text";
import Link from "@/ui/link";
import { THEME } from "@/lib";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const { isTab, isMobile } = useWidth();
  const collapsed = isMobile || isTab;

  if (pathname.split("/")?.length > 2) return null;
  return (
    <View
      style={[
        styles.sidebar,
        collapsed && styles.collapsed,
        isMobile && styles.bottomBar,
      ]}
    >
      <SidebarGradient />
      {!isMobile && (
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
      )}

      <YStack
        style={[
          { flexGrow: 1, gap: collapsed ? 12 : 4 },
          isMobile && {
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          },
        ]}
      >
        <MenuItem label="Glimpse" icon="hugeicons:home-11" path="/" />
        <MenuItem
          label={isMobile ? "Artists" : "Top Artists"}
          icon="hugeicons:ai-mic"
          path="/top-artists"
        />
        <MenuItem
          label={isMobile ? "Songs" : "Top Songs"}
          icon="hugeicons:music-note-03"
          path="/top-tracks"
        />

        {!isMobile && <View style={styles.divider} />}

        <MenuItem
          label={isMobile ? "Liked" : "Liked Songs"}
          icon="hugeicons:favourite"
          path="/saved-tracks"
        />
        {/*  <MenuItem
          label="Playlists"
          icon="hugeicons:playlist-01"
          path="/playlists"
        />*/}
        <MenuItem
          label={isMobile ? "Recent" : "Recent Played"}
          icon="hugeicons:headset"
          path="/recently-played"
        />
        {/*<MenuItem
          label="Saved"
          icon="hugeicons:collections-bookmark"
          path="/saved"
        />*/}
      </YStack>

      {!isMobile && !collapsed && (
        <YStack gap={4}>
          <Link href="https://github.com/shinjith-dev/shuffle-glimpse">
            <Text color={THEME.color["bg-70"]} variant="body3">
              Github
            </Text>
          </Link>
          <Link href="https://github.com/shinjith-dev/shuffle-glimpse">
            <Text color={THEME.color["bg-70"]} variant="body3">
              Privacy Policy
            </Text>
          </Link>
          <Link href="https://github.com/shinjith-dev/shuffle-glimpse">
            <Text color={THEME.color["bg-70"]} variant="body3">
              Terms & Conditions
            </Text>
          </Link>
        </YStack>
      )}
    </View>
  );
};

export default Sidebar;
