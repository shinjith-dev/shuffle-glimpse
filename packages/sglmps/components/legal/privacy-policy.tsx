import { THEME } from "@/lib";
import { XStack, YStack } from "@/ui";
import Image from "@/ui/image";
import Link from "@/ui/link";
import Text from "@/ui/text";
import { ScrollView, View } from "react-native";

export default function PrivacyPolicy() {
  return (
    <YStack
      alignItems="center"
      justifyContent="center"
      flex={1}
      style={{ height: "100%", backgroundColor: THEME.color.bg }}
    >
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Image
          width={2048}
          height={2048}
          alt="logo"
          src={require("@/assets/images/auth-gradient.png")}
          style={{ height: "100%", width: "100%", opacity: 0.2 }}
          objectFit="cover"
        />
      </View>

      <ScrollView style={{ flex: 1, height: "100%", width: "100%" }}>
        <YStack
          gap={20}
          style={{ maxWidth: 1000, padding: 28, marginHorizontal: "auto" }}
        >
          <Text
            style={{ textAlign: "center", width: "100%" }}
            variant="heading2"
          >
            Privacy Policy
          </Text>
          <YStack gap={8}>
            <Text>Effective Date: 6th May 2025</Text>
            <Text>Last Updated: 6th May 2025</Text>
          </YStack>

          <YStack gap={12}>
            <Text variant="heading5">1. Introduction</Text>
            <XStack gap={8} alignItems="center" style={{ flexWrap: "wrap" }}>
              <Text>
                This Privacy Policy explains how Shuffle Glimpse (“we”, “our”,
                or “us”) uses and protects your data when you connect your
                Spotify account to our website. We are not affiliated,
                associated, or endorsed by Spotify AB. We strictly follow
              </Text>
              <Link href="https://developer.spotify.com/terms">
                <Text color={THEME.color.brand}>
                  Spotify’s Developer Terms of Service
                </Text>
              </Link>
              <Text>and</Text>
              <Link href="https://developer.spotify.com/documentation/web-api">
                <Text color={THEME.color.brand}>
                  Spotify’s Web API Guidelines.
                </Text>
              </Link>
            </XStack>
          </YStack>

          <YStack gap={12}>
            <Text variant="heading5">2. Information We Access</Text>
            <Text>
              With your explicit consent, we use the Spotify Web API to access
              the following data:
              <br />
              Your top tracks and artists
              <br />
              Your saved tracks and albums
              <br />
              Your recently played tracks
              <br />
              Your Spotify profile information
              <br />
              Your private playlists
              <br />
              This data is accessed only temporarily during your session and is
              not stored, logged, or shared with any third parties.
            </Text>
          </YStack>

          <YStack gap={12}>
            <Text variant="heading5">3. How We Use Your Data</Text>
            <Text>
              We use your Spotify data solely for the following purposes:
              <br />
              To generate and display insights about your listening behavior
              <br />
              To personalize your experience on our site
              <br />
              We do not store, share, resell, or process this data beyond what
              is needed to show it to you during your session.
            </Text>
          </YStack>

          <YStack gap={12}>
            <Text variant="heading5">4. Data Retention</Text>
            <Text>
              We do not retain any Spotify data after your session ends. No data
              is stored on our servers or databases.
            </Text>
          </YStack>

          <YStack gap={12}>
            <Text variant="heading5">5. User Control</Text>
            <XStack gap={8} style={{ flexWrap: "wrap" }}>
              <Text>
                You can revoke access to your Spotify data at any time from your
              </Text>
              <Link href="https://www.spotify.com/account/apps/">
                <Text color={THEME.color.brand}>
                  Spotify Account App Settings,
                </Text>
              </Link>
              <Text>
                which will immediately prevent us from accessing your account.
              </Text>
            </XStack>
          </YStack>

          <YStack gap={12}>
            <Text variant="heading5">6. Third Parties</Text>
            <XStack gap={8} style={{ flexWrap: "wrap" }}>
              <Text>
                Our website uses the Spotify Web API as provided by Spotify AB.
                Your use of Spotify is governed by Spotify’s
              </Text>
              <Link href="https://www.spotify.com/legal/privacy-policy/">
                <Text color={THEME.color.brand}>Privacy Policy.</Text>
              </Link>
            </XStack>
          </YStack>
          <YStack gap={12}>
            <Text variant="heading5">7. Contact</Text>
            <XStack gap={8} style={{ flexWrap: "wrap" }}>
              <Text>
                If you have any questions about this Privacy Policy, please
                contact us at:
              </Text>
              <Link href="mailto:shinjithdev@gmail.com">
                <Text color={THEME.color.brand}>shinjithdev@gmail.com</Text>
              </Link>
            </XStack>
          </YStack>
        </YStack>
      </ScrollView>
    </YStack>
  );
}
