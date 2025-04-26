"use client";
import { FlatList, FlatListProps } from "react-native";
import TableItem from "./item";
import TableHeader, { HeaderItem } from "./header";
import styles from "./style";

interface TableProps<
  Header extends HeaderItem[],
  Keys extends Header[number]["key"],
  Row extends Record<Keys, any>,
> extends Omit<
    FlatListProps<Row & { id: string | number }>,
    "data" | "renderItem"
  > {
  header: Header;
  data: (Row & { id: string | number })[];
}

export default function Table<
  Header extends HeaderItem[],
  Keys extends Header[number]["key"],
  Row extends Record<Keys, any>,
>({ header, data, ...props }: TableProps<Header, Keys, Row>) {
  return (
    <FlatList
      data={data}
      style={styles.table}
      contentContainerStyle={styles.tableContents}
      renderItem={({ item }) => (
        <TableItem key={item.id} item={item} header={header} />
      )}
      ListHeaderComponent={() => <TableHeader header={header} />}
      stickyHeaderIndices={[0]}
      {...props}
    />
  );
}
