import React from "react";
import { XStack } from "../layout";

interface TableItemProps<T extends { id: string | number }> {
  header: T;
}

export default function TabelHeader<T extends { id: string | number }>({
  header,
}: TableItemProps<T>) {
  return <XStack></XStack>;
}
