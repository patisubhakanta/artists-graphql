"use client";
import { useQuery } from "@apollo/client";
import { ARTISTS_QUERY } from "@/lib/graphql/queries";
import ArtistsLoading from "@/components/ArtistsLoading";
import { ArtistsDTO } from "@/types/Types";
import ArtistsCard from "@/components/ArtistsCard";

export default function Home() {
  const { loading, error, data } = useQuery(ARTISTS_QUERY);

  if (loading) return (<ArtistsLoading />);

  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Artists</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.highlights.popularArtists.map((artist: ArtistsDTO) => (artist.image?.url) && (
            <ArtistsCard artist={artist} key={artist.id} />
          ))}
        </div>
      </div>
    </>
  );
}
