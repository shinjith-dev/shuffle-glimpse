import { XStack } from "@/ui/layout";
import Text from "@/ui/text";
import { HeaderItem } from "../header";
import styles from "../style";
import { getNestedValue } from "@/lib";

interface TableItemProps {
  header: HeaderItem[];
  item: Record<string, any> & { id: string; sino?: number };
  hover: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export default function TableItem({ header, item }: TableItemProps) {
  return (
    <XStack gap={20} style={styles.item}>
      {header.map((h) => (
        <Text
          variant="body1"
          style={[styles.itemContent, h.key === "sino" && { paddingRight: 0 }]}
        >
          {getNestedValue(item, h.key)}
        </Text>
      ))}
    </XStack>
  );
}
