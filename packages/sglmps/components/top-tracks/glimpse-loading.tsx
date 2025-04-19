import Text from "@/ui/text";
import React, { Fragment } from "react";
import { View } from "react-native";
import { Icon, TextButton, XStack, YStack } from "@/ui";
import { THEME } from "@/lib";
import styles from "./style";
import { timeRanges } from "@/constants";
import TableHeader from "@/ui/table/header";
import ContentLoader, { Rect, Circle } from "react-content-loader/native";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const TopTracksGlimpseLoading: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <YStack style={styles.glimpse}>
      <XStack style={styles.glimpseHeader}>
        <Text variant="heading2">Top Tracks</Text>

        <XStack gap={4}>
          {timeRanges.map((tp) => (
            <TextButton
              key={tp.key}
              size="sm"
              color={tp.key === "short_term" ? "brand" : "primary"}
              disabled
            >
              {tp.label}
            </TextButton>
          ))}
        </XStack>
      </XStack>

      <View style={styles.glimpseTable}>
        <TableHeader
          header={[
            { key: "sino", label: "#" },
            { key: "name", label: "Name", width: "50%" },
            { key: "album.name", label: "Album", width: "35%" },
            {
              key: "duration",
              label: (
                <Icon
                  name="hugeicons:time-quarter-02"
                  size={16}
                  color={THEME.color["bg-80"]}
                />
              ),
              width: "10%",
            },
          ]}
        />

        <ContentLoader
          speed={1.5}
          width={width - 416}
          height={504}
          viewBox={`0 0 ${width - 416} 504`}
          backgroundColor={THEME.color["bg-10"]}
          foregroundColor={THEME.color["bg-30"]}
        >
          {[...new Array(7)].map((_, index) => (
            <Fragment key={`top-tracks-skeleton-${index}`}>
              <Circle cx="68" cy={36 * (index + 1) + 36 * index} r="24" />
              <Rect
                x="100"
                y={12 * (index + 1) + 60 * index}
                rx="8"
                ry="8"
                width={width - 516}
                height="48"
              />
            </Fragment>
          ))}
        </ContentLoader>
      </View>
    </YStack>
  );
};

export default TopTracksGlimpseLoading;
