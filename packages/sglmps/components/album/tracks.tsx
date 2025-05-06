import { useWidth } from "@/hooks";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { THEME } from "@/lib";
import { useAlbum, useAlbumTracks } from "@/queries/album";
import { Icon, YStack } from "@/ui";
import Table from "@/ui/table";
import { HeaderItem } from "@/ui/table/header";
import Text from "@/ui/text";
import dayjs from "dayjs";
import { Fragment, useMemo } from "react";
import TrackListItem from "../track/list-item";
import HeartPop from "../track/heart-pop";
import { useIsSavedTrack } from "@/queries/profile";
import { useIsSaved } from "@/store";
import useRouter from "@/hooks/useRouter";
import ContentLoader, { Rect } from "react-content-loader/native";

interface Props {
  albumId: string;
}

export const AlbumTracks: React.FC<Props> = ({ albumId }) => {
  const { data: album } = useAlbum({ albumId });
  const {
    data: albumTracks,
    hasNextPage,
    fetchNextPage,
  } = useAlbumTracks({ albumId });
  useIsSavedTrack({
    enabled: !!albumTracks,
    trackIds:
      albumTracks?.pages[albumTracks?.pages.length - 1 || 0].items.map(
        (t) => t.id,
      ) || [],
  });
  const { tracks: savedDep, check: isSaved } = useIsSaved();
  const { isMobile, contentWidth } = useWidth();
  const { width } = useWindowDimensions();
  const router = useRouter();

  const headers = useMemo<HeaderItem[]>(
    () => [
      { key: "sino", label: "#" },
      {
        key: "name",
        label: "Name",
        width: "80%",
      },
      { key: "saved", label: "", width: "5%" },
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
    ],
    [width],
  );

  const tracks = useMemo(
    () =>
      albumTracks && album
        ? albumTracks?.pages
            .map(
              (page, pageIndex) =>
                page.items.map((t, index) => ({
                  ...t,
                  duration: dayjs({ milliseconds: t.duration_ms }).format(
                    t.duration_ms / 3_600_000 >= 1 ? "HH:mm:ss" : "mm:ss",
                  ),
                  sino: pageIndex * 20 + index + 1,
                  name: <TrackListItem album={album} track={t} />,
                  saved: isSaved(t.id) ? <HeartPop /> : null,
                })),
              [],
            )
            .flat()
        : [],
    [albumTracks, savedDep, album],
  );

  return (
    <YStack
      gap={12}
      style={{ flex: 1, width: "100%", height: "100%", maxWidth: "100%" }}
    >
      <Text
        variant={isMobile ? "heading5" : "heading4"}
        color={THEME.color["bg-90"]}
        style={{ paddingHorizontal: 8 }}
      >
        Songs from this album
      </Text>

      <YStack
        style={{
          width: "100%",
          flex: 1,
        }}
      >
        {albumTracks ? (
          <Table
            header={headers}
            data={tracks}
            hideHeader
            onRowClick={(id) => router.push(`/track/${id}`)}
            onEndReached={() => hasNextPage && fetchNextPage()}
            onEndReachedThreshold={1}
          />
        ) : (
          <ContentLoader
            speed={1}
            width={contentWidth}
            height={isMobile ? 320 : 360}
            viewBox={`0 0 ${contentWidth} ${isMobile ? 320 : 360}`}
            backgroundColor={THEME.color["bg-10"]}
            foregroundColor={THEME.color["bg-30"]}
          >
            {[...new Array(5)].map((_, index) => (
              <Fragment key={`top-tracks-skeleton-${index}`}>
                <Rect
                  x="8"
                  y={(isMobile ? 24 : 28) + index * (isMobile ? 64 : 72)}
                  rx="4"
                  ry="4"
                  width={16}
                  height={12}
                />
                <Rect
                  x="50"
                  y={12 + index * (isMobile ? 64 : 72)}
                  rx="4"
                  ry="4"
                  width={isMobile ? 40 : 48}
                  height={isMobile ? 40 : 48}
                />
                <Rect
                  x={isMobile ? 100 : 108}
                  y={16 + index * (isMobile ? 64 : 72)}
                  rx="4"
                  ry="4"
                  width={isMobile ? 240 : 400}
                  height={isMobile ? 16 : 20}
                />
                <Rect
                  x={isMobile ? 100 : 108}
                  y={(isMobile ? 38 : 44) + index * (isMobile ? 64 : 72)}
                  rx="4"
                  ry="4"
                  width={isMobile ? 160 : 300}
                  height={12}
                />
                {width >= 1500 && (
                  <Rect
                    x="50%"
                    y={28 + index * 72}
                    rx="4"
                    ry="4"
                    width="25%"
                    height={16}
                  />
                )}
                {width >= 1028 && (
                  <Rect
                    x="88%"
                    y={28 + index * 72}
                    rx="4"
                    ry="4"
                    width={40}
                    height={12}
                  />
                )}
              </Fragment>
            ))}
          </ContentLoader>
        )}
      </YStack>
    </YStack>
  );
};
