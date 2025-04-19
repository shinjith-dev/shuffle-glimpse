import { YStack } from "@/ui";
import React from "react";
import TopTracksGlimpse from "../top-tracks/glimpse";
import styles from "./style";
import TopArtistsGlimpse from "../top-artists/glimpse";
import { ScrollView } from "react-native";

const Glimpse: React.FC = () => {
  return (
    <ScrollView
      style={styles.glimpseCont}
      contentContainerStyle={styles.glimpse}
    >
      <TopTracksGlimpse />
      <TopArtistsGlimpse />
    </ScrollView>
  );
};

export default Glimpse;
