import React from "react";
import { FlatList, FlatListProps } from "react-native";
import TableItem from "./item";
import TableHeader from "./header";

interface TableProps<T extends { id: string | number }>
  extends Omit<FlatListProps<T>, "data" | "renderItem"> {
  header: T;
  data: T[];
}

export default function Table<T extends { id: string | number }>({
  header,
  data,
  ...props
}: TableProps<T>) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <TableItem key={item.id} item={item} />}
      ListHeaderComponent={() => <TableHeader header={header} />}
      {...props}
    />
  );
}
