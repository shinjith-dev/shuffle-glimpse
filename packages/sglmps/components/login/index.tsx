"use client";
import { auth } from "@/api";
import { THEME } from "@/lib";
import { Button } from "@/ui/button";
import Image from "@/ui/image";
import { YStack } from "@/ui/layout";
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
      style={{ height: "100%", backgroundColor: THEME.color.bg }}
    >
      <Image
        width={512}
        height={128}
        alt="logo"
        src={require("@/assets/images/text-logo.svg")}
        style={{ height: 120, width: 300 }}
        objectFit="contain"
      />
      <View>
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
      </View>
    </YStack>
  );
};

export default Login;
