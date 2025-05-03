"use client";
import React, { ReactNode } from "react";
import { View } from "react-native";
import styles from "./style";
import Sidebar from "../sidebar";
import AuthLayer from "./auth-layer";
import { useWidth } from "@/hooks";

const App: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isMobile } = useWidth();
  return (
    <AuthLayer>
      <View style={[styles.layout, isMobile && styles.mobileLayout]}>
        <View style={styles.layoutContent}>{children}</View>
        <Sidebar />
      </View>
    </AuthLayer>
  );
};

export default App;
