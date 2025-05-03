"use client";
import React from "react";
import TopTracksGlimpse from "../top-tracks/glimpse";
import styles from "./style";
import TopArtistsGlimpse from "../top-artists/glimpse";
import { ScrollView } from "react-native";
import ProfileGlimpse from "../profile/glimpse";
import { YStack } from "@/ui";
import AppGradient from "./gradient";
import RecentlyPlayedGlimpse from "../recently-played/glimpse";
import { useWidth } from "@/hooks";

const Glimpse: React.FC = () => {
  const { isMobile } = useWidth();

  return (
    <ScrollView
      style={[styles.glimpseCont, isMobile && styles.glimpseContMobile]}
    >
      <ProfileGlimpse />
      <YStack style={[styles.glimpse, isMobile && styles.glimpseMobile]}>
        <AppGradient />
        <TopTracksGlimpse />
        <TopArtistsGlimpse />
        <RecentlyPlayedGlimpse />
      </YStack>
    </ScrollView>
  );
};

export default Glimpse;
