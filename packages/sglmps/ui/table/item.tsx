import React from "react";
import { XStack } from "../layout";

interface TableItemProps<T extends { id: string | number }> {
  item: T;
}

export default function TabelItem<T extends { id: string | number }>({
  item,
}: TableItemProps<T>) {
  return <XStack></XStack>;
}
