"use client";
import { auth } from "@/api";
import { opacity, THEME } from "@/lib";
import { Button } from "@/ui/button";
import Image from "@/ui/image";
import { XStack, YStack } from "@/ui/layout";
import Link from "@/ui/link";
import Text from "@/ui/text";
import React from "react";
import { View } from "react-native";

const Login: React.FC = () => {
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
      style={{ height: "100%", backgroundColor: THEME.color.bg, padding: 20 }}
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

      <YStack
        gap={16}
        alignItems="center"
        justifyContent="center"
        style={{ flexGrow: 1 }}
      >
        <Image
          width={512}
          height={128}
          alt="logo"
          src={require("@/assets/images/text-logo.svg")}
          style={{ height: 100, width: 300 }}
          objectFit="contain"
        />
        <Button
          onClick={handleLogin}
          color="primary"
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
    </YStack>
  );
};

export default Login;
