"use client";
import { maxOfArray, THEME } from "@/lib";
import { usePlaylistsGlimpse, useProfile } from "@/queries/profile";
import { OutlinedButton, XStack, YStack } from "@/ui";
import { Avatar } from "@/ui/avatar";
import { memo, useMemo } from "react";
import styles from "./style";
import ProfileGradient from "./gradient";
import Text from "@/ui/text";
import { Platform, View } from "react-native";
import Image from "@/ui/image";
import LinearGradient from "react-native-linear-gradient";
import { useWidth } from "@/hooks";

const ProfileGlimpse: React.FC = memo(() => {
  const { data: profile } = useProfile();
  const { data: playlists } = usePlaylistsGlimpse();
  const image = maxOfArray(profile?.images, "width");
  const { isMobile } = useWidth();

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
    <YStack style={[styles.container, isMobile && styles.containerMobile]}>
      <ProfileGradient src={image.url} />
      <LinearGradient
        style={styles.gradient}
        colors={[THEME.color.bg, "transparent", "transparent"]}
        locations={[0, 0.3, 1]}
        start={{ x: 0.9, y: 0 }}
        end={{ x: 0, y: 0.9 }}
      />
      <Image
        width={128}
        height={128}
        alt="logo"
        src={require("@/assets/images/spotify.svg")}
        style={{
          top: 20,
          right: 20,
          position: "absolute",
          height: isMobile ? 36 : 44,
          width: isMobile ? 36 : 44,
        }}
        objectFit="contain"
      />

      <View style={isMobile ? styles.contentCol : styles.contentRow}>
        <Avatar
          size={isMobile ? "5xl" : "9xl"}
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
        <XStack gap={12} alignItems="flex-end" style={{ flexGrow: 1 }}>
          <YStack
            gap={isMobile ? 4 : 12}
            style={[styles.content, isMobile && { paddingVertical: 0 }]}
          >
            <Text variant={isMobile ? "heading2" : "heading1"}>
              {profile.display_name}
            </Text>
            <Text variant="body2" color={THEME.color["bg-90"]}>
              {description}
            </Text>
          </YStack>
          <OutlinedButton color="primary" size={isMobile ? "xs" : "sm"}>
            Logout
          </OutlinedButton>
        </XStack>
      </View>
    </YStack>
  );
});

export default ProfileGlimpse;
