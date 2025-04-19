import { XStack } from "@/ui/layout";
import Text from "@/ui/text";
import React from "react";
import { HeaderItem } from "../header";

interface TableItemProps {
  header: HeaderItem[];
  item: Record<string, any> & { id: string | number };
}

export default function TableItem({ header, item }: TableItemProps) {
  return (
    <XStack gap={20}>
      {header.map((h) => (
        <Text variant="body1">{item[h.key]}</Text>
      ))}
    </XStack>
  );
}
