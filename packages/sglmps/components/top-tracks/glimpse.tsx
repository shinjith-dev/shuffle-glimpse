import { YStack } from "@/ui/layout";
import Table from "@/ui/table";
import Text from "@/ui/text";
import React from "react";

const TopTracksGlimpse: React.FC = () => {
  return (
    <YStack gap={12} style={{ width: "100%" }}>
      <Text variant="heading1">Top tracks this month</Text>
      <Table
        header={[
          { key: "sino", label: "#" },
          { key: "name", label: "Name" },
        ]}
        data={[
          { id: "1212", sino: "1", name: "Shinjith" },
          { id: "1212", sino: "2", name: "loves" },
          { id: "1212", sino: "3", name: "Nandana" },
          { id: "1212", sino: "4", name: "sou much" },
          { id: "1212", sino: "5", name: "but Nandana" },
          { id: "1212", sino: "6", name: "has a" },
          { id: "1212", sino: "7", name: "boyfriend" },
        ]}
      />
    </YStack>
  );
};

export default TopTracksGlimpse;
