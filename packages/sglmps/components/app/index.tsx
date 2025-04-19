import { YStack } from "@/ui";
import React from "react";
import TopTracksGlimpse from "../top-tracks/glimpse";
import styles from "./style";

const Glimpse: React.FC = () => {
  return (
    <YStack style={styles.glimpse}>
      <TopTracksGlimpse />
    </YStack>
  );
};

export default Glimpse;
