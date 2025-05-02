import { ReactNode } from "react";
import { XStack } from "../layout";
import Text from "../text";
import styles from "./style";
import { DimensionValue, View } from "react-native";

export type HeaderItem = {
  key: string;
  label: ReactNode;
  width?: DimensionValue;
};

interface TableHeaderProps {
  header: HeaderItem[];
}

export default function TableHeader({ header }: TableHeaderProps) {
  return (
    <XStack style={styles.header}>
      {header.map((h) =>
        typeof h.label === "string" || typeof h.label === "number" ? (
          <Text
            key={h.key}
            variant="body2"
            numberOfLines={1}
            style={[
              styles.headerContent,
              { width: h.width },
              h.key === "sino" && { paddingRight: 0 },
            ]}
          >
            {h.label}
          </Text>
        ) : (
          <View key={h.key} style={[styles.headerContent, { width: h.width }]}>
            {h.label}
          </View>
        ),
      )}
    </XStack>
  );
}
