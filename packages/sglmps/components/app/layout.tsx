import React, { ReactNode } from "react";
import { View } from "react-native";
import styles from "./style";
import Sidebar from "../sidebar";
import AuthLayer from "./auth-layer";

const App: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AuthLayer>
      <View style={styles.layout}>
        <Sidebar />
        <View style={styles.layoutContent}>{children}</View>
      </View>
    </AuthLayer>
  );
};

export default App;
