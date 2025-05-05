"use client";
import { THEME } from "@/lib";
import Image from "@/ui/image";
import { View } from "react-native";

export default function Loading() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: THEME.color.bg,
        flex: 1,
        height: "100%",
        width: "100%",
      }}
    >
      <Image
        width={512}
        height={128}
        alt="logo"
        src={require("@/assets/images/logo.svg")}
        style={{ height: 120, width: 120 }}
        objectFit="contain"
      />
    </View>
  );
}
