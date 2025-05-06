"use client";
import { FlatList, FlatListProps } from "react-native";
import TableItem from "./item";
import TableHeader, { HeaderItem } from "./header";
import styles from "./style";
import { YStack } from "../layout";

interface TableProps<
  Header extends HeaderItem[],
  Keys extends Header[number]["key"],
  Row extends Record<Keys, any>,
> extends Omit<
    FlatListProps<Row & { id: string; sino?: number }>,
    "data" | "renderItem"
  > {
  header: Header;
  data: (Row & { id: string })[];
  hideHeader?: boolean;
  hover?: boolean;
  onRowClick?: (rowId: string) => void;
}

export default function Table<
  Header extends HeaderItem[],
  Keys extends Header[number]["key"],
  Row extends Record<Keys, any>,
>({
  header,
  data,
  hideHeader = false,
  hover = true,
  onRowClick,
  ...props
}: TableProps<Header, Keys, Row>) {
  return (
    <YStack style={{ flex: 1 }}>
      {!hideHeader && <TableHeader header={header} />}
      <FlatList
        data={data}
        style={[styles.table, props.style]}
        contentContainerStyle={[
          styles.tableContents,
          props.contentContainerStyle,
        ]}
        renderItem={({ item }) => (
          <TableItem
            hover={hover}
            key={item.id}
            item={item}
            header={header}
            onClick={onRowClick ? () => onRowClick(item.id) : undefined}
          />
        )}
        {...props}
      />
    </YStack>
  );
}
