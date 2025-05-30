"use client";
import { maxOfArray, THEME } from "@/lib";
import { usePlaylistsGlimpse, useProfile } from "@/queries/profile";
import { Button, OutlinedButton, XStack, YStack } from "@/ui";
import { Avatar } from "@/ui/avatar";
import { memo, useCallback, useMemo } from "react";
import styles from "./style";
import ProfileGradient from "./gradient";
import Text from "@/ui/text";
import { Platform, View } from "react-native";
import Image from "@/ui/image";
import LinearGradient from "react-native-linear-gradient";
import { useWidth } from "@/hooks";
import ContentLoader, { Circle, Rect } from "react-content-loader/native";
import { useAuthStore, useIsSaved } from "@/store";
import useRouter from "@/hooks/useRouter";

const ProfileGlimpse: React.FC = memo(() => {
  const { data: profile } = useProfile();
  const { data: playlists } = usePlaylistsGlimpse();
  const image = maxOfArray(profile?.images, "width");
  const { isMobile, contentWidth } = useWidth();
  const logout = useAuthStore((state) => state.clearTokens);
  const clearSaved = useIsSaved((state) => state.clear);
  const router = useRouter();

  const description = useMemo(
    () =>
      [
        profile?.followers.total ? `${profile.followers.total} Followers` : "",
        playlists?.total ? `${playlists.total} Playlists` : "",
      ].join("  ·  "),
    [profile, playlists?.total],
  );

  const handleLogout = useCallback(() => {
    logout();
    clearSaved();
    router.push("/login");
  }, [logout]);

  if (!profile)
    return (
      <ContentLoader
        speed={1}
        width={contentWidth}
        height={isMobile ? 244 : 260}
        viewBox={`0 0 ${contentWidth} ${isMobile ? 244 : 260}`}
        backgroundColor={THEME.color["bg-10"]}
        foregroundColor={THEME.color["bg-30"]}
      >
        <Circle
          cx={isMobile ? 76 : 128}
          cy={isMobile ? 76 : 128}
          r={isMobile ? 60 : 100}
        />
        <Rect
          x={isMobile ? 16 : 250}
          y={isMobile ? 156 : 120}
          rx={8}
          ry={8}
          width={contentWidth / 2}
          height={isMobile ? 40 : 60}
        />
        <Rect
          x={isMobile ? 16 : 250}
          y={isMobile ? 208 : 200}
          rx={4}
          ry={4}
          width={contentWidth / 3}
          height={16}
        />
      </ContentLoader>
    );

  return (
    <YStack style={[styles.container, isMobile && styles.containerMobile]}>
      {image?.url && <ProfileGradient src={image.url} />}
      <LinearGradient
        style={styles.gradient}
        colors={[THEME.color.bg, "transparent", "transparent"]}
        locations={[0, 0.3, 1]}
        start={{ x: 0.8, y: 0 }}
        end={{ x: 0, y: 0.8 }}
      />
      <Image
        width={128}
        height={128}
        alt="logo"
        src={require("@/assets/images/text-spotify.svg")}
        style={{
          top: isMobile ? 16 : 28,
          right: isMobile ? 12 : 20,
          position: "absolute",
          height: isMobile ? 36 : 44,
          width: isMobile ? 100 : 120,
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
        <YStack
          gap={12}
          alignItems={isMobile ? "flex-start" : "flex-end"}
          style={{ flexGrow: 1, flexDirection: isMobile ? "column" : "row" }}
        >
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
          <XStack gap={12}>
            <Button
              size={isMobile ? "xs" : "sm"}
              color="primary"
              startIcon={
                <Image
                  width={64}
                  height={64}
                  alt="spotify-logo"
                  src={require("@/assets/images/spotify-black.svg")}
                  style={{ height: 22, width: 22 }}
                  objectFit="contain"
                />
              }
              onClick={() => router.push(profile.external_urls.spotify)}
            >
              Show on Spotify
            </Button>

            <OutlinedButton
              color="primary"
              size={isMobile ? "xs" : "sm"}
              onClick={handleLogout}
            >
              Logout
            </OutlinedButton>
          </XStack>
        </YStack>
      </View>
    </YStack>
  );
});

export default ProfileGlimpse;
