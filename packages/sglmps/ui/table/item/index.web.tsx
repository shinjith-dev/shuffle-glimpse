import Text from "@/ui/text";
import React from "react";
import { HeaderItem } from "../header";

interface TableItemProps {
  header: HeaderItem[];
  item: Record<string, any> & { id: string | number };
}

export default function TableItem({ header, item }: TableItemProps) {
  return (
    <div className="flex gap-5 p-2">
      {header.map((h) => (
        <Text key={h.key} variant="body1">
          {item[h.key]}
        </Text>
      ))}
    </div>
  );
}
