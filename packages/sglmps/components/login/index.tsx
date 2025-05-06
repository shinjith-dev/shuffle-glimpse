"use client";
import { auth } from "@/api";
import { useWidth } from "@/hooks";
import { THEME } from "@/lib";
import { Button } from "@/ui/button";
import Image from "@/ui/image";
import { XStack, YStack } from "@/ui/layout";
import Link from "@/ui/link";
import Text from "@/ui/text";
import React from "react";
import { View } from "react-native";

const Login: React.FC = () => {
  const { isMobile } = useWidth();
  const handleLogin = () => {
    try {
      auth.login();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <YStack
      gap={20}
      alignItems="center"
      justifyContent="center"
      flex={1}
      style={{
        height: "100%",
        backgroundColor: THEME.color.bg,
        padding: isMobile ? 12 : 20,
      }}
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

      <Image
        width={128}
        height={128}
        alt="logo"
        src={require("@/assets/images/text-logo.svg")}
        style={{
          top: isMobile ? 16 : 28,
          left: isMobile ? 12 : 20,
          position: "absolute",
          height: isMobile ? 36 : 44,
          width: isMobile ? 100 : 120,
        }}
        objectFit="contain"
      />

      <XStack
        alignItems="center"
        gap={12}
        style={{
          top: isMobile ? 16 : 28,
          right: isMobile ? 12 : 20,
          position: "absolute",
        }}
      >
        <Text color={THEME.color.brand} variant="body3">
          Built with
        </Text>
        <Image
          width={128}
          height={128}
          alt="logo"
          src={require("@/assets/images/text-spotify.svg")}
          style={{
            height: isMobile ? 28 : 36,
            width: isMobile ? 92 : 112,
          }}
          objectFit="contain"
        />
      </XStack>

      <YStack
        alignItems="center"
        justifyContent="center"
        style={{ flexGrow: 1 }}
      >
        <div className="auth-text-gradient mb-4 text-center sm:mb-5">
          <h1 className="mb-2 py-3 text-5xl font-semibold text-white sm:mb-3 sm:text-6xl md:text-7xl">
            A Glimpse of Your Spotify Listening
          </h1>
          <p className="mx-auto max-w-5xl text-xl font-medium italic sm:text-2xl md:text-3xl md:leading-[44px]">
            Shuffle Glimpse shows your Spotify top tracks, favorite artists, and
            listening habits. No more waiting for year-end recaps.
          </p>
        </div>

        <YStack gap={8}>
          <Button
            onClick={handleLogin}
            color="primary"
            size={isMobile ? "md" : "lg"}
            startIcon={
              <Image
                width={64}
                height={64}
                alt="spotify-logo"
                src={require("@/assets/images/spotify-black.svg")}
                style={{ height: 20, width: 20 }}
                objectFit="contain"
              />
            }
          >
            Login with Spotify
          </Button>
        </YStack>
      </YStack>

      <XStack
        gap={6}
        alignItems="center"
        justifyContent="center"
        style={{ flexWrap: "wrap" }}
      >
        <Text
          variant="body3"
          color={THEME.color["bg-70"]}
          style={{ textAlign: "center" }}
        >
          We only access your data temporarily and never store it. By logging
          in, you agree to our
        </Text>
        <Link href="/terms-and-conditions">
          <Text color={THEME.color["bg-90"]} variant="body3">
            Terms & Conditions
          </Text>
        </Link>
        <Text color={THEME.color["bg-70"]} variant="body3">
          and
        </Text>
        <Link href="/privacy-policy">
          <Text color={THEME.color["bg-90"]} variant="body3">
            Privacy Policy.
          </Text>
        </Link>
      </XStack>
    </YStack>
  );
};

export default Login;
