"use client";
import { ArtistsDTO } from "@/types/Types";

export default function ArtistsCard({ artist }: { artist: ArtistsDTO }) {
 
    const { id, name, image, nationality } = artist

    return (
        <div key={id} className="border rounded-lg p-4 shadow-lg">
            {image?.url && (
                <img
                    src={image.url}
                    alt={artist.name}
                    className="w-full h-48 object-cover mb-4"
                />
            )}
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-600">{nationality}</p>
        </div>
    )
}