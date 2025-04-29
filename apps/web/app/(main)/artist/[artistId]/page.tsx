import Artist from "sglmps/components/artist";

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ artistId: string }>;
}) {
  const { artistId } = await params;

  return <Artist artistId={artistId} />;
}
