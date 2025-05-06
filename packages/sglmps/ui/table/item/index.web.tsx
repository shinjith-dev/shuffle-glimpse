"use client";
import Text from "@/ui/text";
import { HeaderItem } from "../header";
import styles from "../style";
import { getNestedValue, THEME } from "@/lib";
import { View } from "react-native";

interface TableItemProps {
  header: HeaderItem[];
  item: Record<string, any> & { id: string; sino?: number };
  hover: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export default function TableItem({
  header,
  item,
  hover,
  disabled = false,
  onClick,
}: TableItemProps) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      className={`flex w-full items-center rounded-md p-3 ${!disabled && hover && "hover:bg-bg-30/20"} ${!disabled && onClick && "cursor-pointer"}`}
    >
      {header.map((h) => {
        const content = getNestedValue(item, h.key);

        if (typeof content === "string" || typeof content === "number")
          return (
            <Text
              key={h.key}
              variant="body2"
              color={disabled ? THEME.color["bg-60"] : THEME.color["bg-80"]}
              numberOfLines={1}
              style={[
                styles.itemContent,
                { width: h.width },
                h.key === "sino" && { paddingRight: 0 },
              ]}
            >
              {content}
            </Text>
          );

        return (
          <View
            key={h.key}
            style={[styles.itemContent, { width: h.width, maxWidth: h.width }]}
          >
            {content}
          </View>
        );
      })}
    </button>
  );
}
