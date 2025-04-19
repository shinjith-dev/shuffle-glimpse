import Text from "@/ui/text";
import { HeaderItem } from "../header";
import styles from "../style";
import { getNestedValue } from "@/lib";
import { View } from "react-native";

interface TableItemProps {
  header: HeaderItem[];
  item: Record<string, any> & { id: string | number };
}

export default function TableItem({ header, item }: TableItemProps) {
  return (
    <div className="flex w-full items-center p-2">
      {header.map((h) => {
        const content = getNestedValue(item, h.key);

        if (typeof content === "string" || typeof content === "number")
          return (
            <Text
              key={h.key}
              variant="body2"
              numberOfLines={1}
              style={[styles.itemContent, { width: h.width }]}
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
    </div>
  );
}
