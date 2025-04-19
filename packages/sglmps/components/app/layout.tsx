import React, { ReactNode } from "react";
import { View } from "react-native";
import styles from "./style";
import Sidebar from "../sidebar";

const App: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <View style={styles.layout}>
      <Sidebar />
      <View style={styles.layoutContent}>{children}</View>
    </View>
  );
};

export default App;
