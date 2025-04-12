import React from "react";
import { View } from "react-native";
import styles from "./style";
import Sidebar from "../sidebar";

const App: React.FC = () => {
  return (
    <View style={styles.app}>
      <Sidebar />
    </View>
  );
};

export default App;
