import React, { ReactElement, ReactNode } from "react";
import { XStack } from "../layout";
import Text from "../text";
import styles from "./style";

export type HeaderItem = {
  key: string;
  label: ReactNode;
};

interface TableHeaderProps {
  header: HeaderItem[];
}

export default function TabelHeader({ header }: TableHeaderProps) {
  return (
    <XStack gap={20} style={styles.header}>
      {header.map((h) => (
        <Text variant="body2" key={h.key}>
          {h.label}
        </Text>
      ))}
    </XStack>
  );
}
