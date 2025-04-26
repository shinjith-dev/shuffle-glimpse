"use client";
import { maxOfArray, THEME } from "@/lib";
import { usePlaylistsGlimpse, useProfile } from "@/queries/profile";
import { OutlinedButton, XStack, YStack } from "@/ui";
import { Avatar } from "@/ui/avatar";
import { memo, useMemo } from "react";
import styles from "./style";
import ProfileGradient from "./gradient";
import Text from "@/ui/text";
import { Platform } from "react-native";
import Image from "@/ui/image";
import LinearGradient from "react-native-linear-gradient";

const ProfileGlimpse: React.FC = memo(() => {
  const { data: profile } = useProfile();
  const { data: playlists } = usePlaylistsGlimpse();
  const image = maxOfArray(profile?.images, "width");

  const description = useMemo(
    () =>
      [
        profile?.followers.total ? `${profile.followers.total} Followers` : "",
        playlists?.total ? `${playlists.total} Playlists` : "",
      ].join("  ·  "),
    [profile, playlists?.total],
  );

  if (!profile || !image?.url) return null;
  return (
    <YStack style={styles.container}>
      <ProfileGradient src={image.url} />
      <LinearGradient
        style={styles.gradient}
        colors={[THEME.color.bg, "transparent", "transparent"]}
        locations={[0, 0.3, 1]}
        start={{ x: 0.9, y: 0 }}
        end={{ x: 0, y: 0.9 }}
      />

      <XStack style={styles.contentRow}>
        <Avatar
          size="9xl"
          src={image?.url}
          style={{
            ...Platform.select({
              ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 12 },
                shadowOpacity: 0.2,
                shadowRadius: 28,
              },
              android: {
                elevation: 8, // approximate
              },
              web: {
                boxShadow: `
          rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
          rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
          rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset
        `,
              },
            }),
          }}
        />
        <YStack gap={12} style={styles.content}>
          <Text variant="heading1">{profile.display_name}</Text>
          <Text variant="body2" color={THEME.color["bg-90"]}>
            {description}
          </Text>
        </YStack>
        <YStack
          alignItems="flex-end"
          justifyContent="space-between"
          style={{ height: "100%" }}
        >
          <Image
            width={128}
            height={128}
            alt="logo"
            src={require("@/assets/images/spotify.svg")}
            style={{ height: 44, width: 44 }}
            objectFit="contain"
          />

          <OutlinedButton color="primary" size="sm">
            Logout
          </OutlinedButton>
        </YStack>
      </XStack>
    </YStack>
  );
});

export default ProfileGlimpse;
