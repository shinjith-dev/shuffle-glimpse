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

const Glimpse: React.FC = () => {
  return (
    <ScrollView style={styles.glimpseCont}>
      <ProfileGlimpse />
      <YStack style={styles.glimpse}>
        <AppGradient />
        <TopTracksGlimpse />
        <TopArtistsGlimpse />
        <RecentlyPlayedGlimpse />
      </YStack>
    </ScrollView>
  );
};

export default Glimpse;
