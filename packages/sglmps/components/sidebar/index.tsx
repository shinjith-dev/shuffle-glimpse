"use client";
import React from "react";
import { View } from "react-native";
import styles from "./style";
import Image from "../../ui/image";
import { YStack } from "@/ui/layout";
import MenuItem from "./menu-item";

const Sidebar: React.FC = () => {
  return (
    <View style={styles.sidebar}>
      <Image
        width={512}
        height={128}
        alt="logo"
        src={require("@/assets/images/text-logo.svg")}
        style={{ height: 60, width: 150, margin: "0 4px" }}
        objectFit="contain"
      />
      <YStack>
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
        <MenuItem
          label="Playlists"
          icon="hugeicons:playlist-01"
          path="/playlists"
        />
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
    </View>
  );
};

export default Sidebar;
