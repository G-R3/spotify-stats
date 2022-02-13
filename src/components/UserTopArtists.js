import React from "react";
import useGetItems from "../hooks/useGetItems";
import ArtistCard from "./ArtistCard";

export default function UserTopArtists({ artists }) {
    let { data, getNext, getPrevious } = useGetItems(artists);

    return data ? (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Top artist this month</h2>
                <div className="">
                    <button
                        onClick={() => getPrevious(data.previous)}
                        className="hover:bg-neutral-800 py-1 px-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!data.previous}
                    >
                        &#60;
                    </button>
                    <button
                        onClick={() => getNext(data.next)}
                        className="hover:bg-neutral-800 py-1 px-2 rounded  disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!data.next}
                    >
                        &#62;
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-10">
                {data.items.map((artist, i) => (
                    <ArtistCard artist={artist} key={artist.id} />
                ))}
            </div>
        </div>
    ) : (
        <p className="w-full lg:w-[400px] h-16 text-center">Loading...</p>
    );
}
