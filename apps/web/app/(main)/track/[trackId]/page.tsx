import Track from "sglmps/components/track";

export default async function TrackPage({
  params,
}: {
  params: Promise<{ trackId: string }>;
}) {
  const { trackId } = await params;

  return <Track trackId={trackId} />;
}
