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
        <OutlinedButton color="primary" size="sm">
          Logout
        </OutlinedButton>
      </XStack>
    </YStack>
  );
});

export default ProfileGlimpse;
