import { THEME } from "@/lib";
import { XStack, YStack } from "@/ui";
import Image from "@/ui/image";
import Link from "@/ui/link";
import Text from "@/ui/text";
import { ScrollView, View } from "react-native";

export default function TermsAndConditions() {
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
            Terms & Conditions
          </Text>

          <YStack gap={8}>
            <Text>Effective Date: 6th May 2025</Text>
          </YStack>

          <YStack gap={12}>
            <Text variant="heading5">1. Acceptance of Terms</Text>
            <Text>
              By accessing and using Shuffle Glimpse, you agree to be bound by
              these Terms and Conditions. If you do not agree, please do not use
              the Service.
            </Text>
          </YStack>

          <YStack gap={12}>
            <Text variant="heading5">2. Description of Service</Text>
            <Text>
              Shuffle Glimpse is a web application that integrates with the
              Spotify Web API to show personalized listening data from your
              Spotify account. It does not provide music playback or download
              functionality. This application is for personal, non-commercial
              use only.
            </Text>
          </YStack>

          <YStack gap={12}>
            <Text variant="heading5">3. Spotify API Usage</Text>
            <XStack gap={8} style={{ flexWrap: "wrap" }}>
              <Text>Our app uses Spotify's Web API and complies with</Text>
              <Link href="https://developer.spotify.com/terms">
                <Text color={THEME.color.brand}>
                  Spotify’s Developer Terms of Service
                </Text>
              </Link>
              <Text>and</Text>
              <Link href="https://developer.spotify.com/documentation/design">
                <Text color={THEME.color.brand}>
                  Branding and Design Guidelines
                </Text>
              </Link>
              <Text>
                . This app is not affiliated with or endorsed by Spotify AB.
              </Text>
            </XStack>
          </YStack>

          <YStack gap={12}>
            <Text variant="heading5">4. User Data and Privacy</Text>
            <Text>
              We access your Spotify data only with your explicit consent and
              use it solely to provide insights within your session. No data is
              stored or shared. For more details, see our Privacy Policy.
            </Text>
          </YStack>

          <YStack gap={12}>
            <Text variant="heading5">5. Intellectual Property</Text>
            <Text>
              All trademarks, logos, and branding related to Spotify are the
              property of Spotify AB. We do not claim ownership of any
              Spotify-related assets.
            </Text>
          </YStack>

          <YStack gap={12}>
            <Text variant="heading5">6. Termination</Text>
            <Text>
              You may stop using the Service at any time. We reserve the right
              to terminate access for any user who violates these Terms.
            </Text>
          </YStack>

          <YStack gap={12}>
            <Text variant="heading5">7. Changes</Text>
            <Text>
              We reserve the right to modify these Terms at any time. Continued
              use of the Service indicates your acceptance of any updated terms.
            </Text>
          </YStack>

          <YStack gap={12}>
            <Text variant="heading5">8. Contact</Text>
            <XStack gap={8} style={{ flexWrap: "wrap" }}>
              <Text>
                If you have any questions, feel free to contact us at:
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
