"use client";
import React from "react";
import TopTracksGlimpse from "../top-tracks/glimpse";
import styles from "./style";
import TopArtistsGlimpse from "../top-artists/glimpse";
import { ScrollView } from "react-native";
import ProfileGlimpse from "../profile/glimpse";
import { XStack, YStack } from "@/ui";
import AppGradient from "./gradient";
import RecentlyPlayedGlimpse from "../recently-played/glimpse";
import { useWidth } from "@/hooks";
import Link from "@/ui/link";
import Text from "@/ui/text";
import { THEME } from "@/lib";

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

      <XStack gap={8} alignItems="center">
        <Link href="https://github.com/shinjith-dev/shuffle-glimpse">
          <Text color={THEME.color["bg-70"]} variant="body3">
            Github
          </Text>
        </Link>
        <Text color={THEME.color["bg-70"]} variant="body3">
          ·
        </Text>
        <Link href="/privacy-policy">
          <Text color={THEME.color["bg-70"]} variant="body3">
            Privacy Policy
          </Text>
        </Link>
        <Text color={THEME.color["bg-70"]} variant="body3">
          ·
        </Text>
        <Link href="/terms-and-conditions">
          <Text color={THEME.color["bg-70"]} variant="body3">
            Terms & Conditions
          </Text>
        </Link>
      </XStack>
    </ScrollView>
  );
};

export default Glimpse;
