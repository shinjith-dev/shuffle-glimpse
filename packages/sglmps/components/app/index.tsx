import { YStack } from "@/ui";
import React from "react";
import TopTracksGlimpse from "../top-tracks/glimpse";
import styles from "./style";
import TopArtistsGlimpse from "../top-artists/glimpse";

const Glimpse: React.FC = () => {
  return (
    <YStack style={styles.glimpse}>
      <TopTracksGlimpse />
      <TopArtistsGlimpse />
    </YStack>
  );
};

export default Glimpse;
