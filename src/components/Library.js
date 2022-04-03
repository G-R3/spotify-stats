import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserPlaylists } from "../api";
import Loader from "./Loader";
import { FaHeart } from "react-icons/fa";
import PlaylistCard from "./Playlists/PlaylistCard";

export default function Library() {
    let [playlists, setPlaylists] = useState("");
    useEffect(() => {
        const fetchAllPlaylists = async () => {
            const playlists = await getUserPlaylists();
            setPlaylists(playlists);
        };

        fetchAllPlaylists();
    }, []);
    return playlists ? (
        <div className="py-10 px-5">
            <h1 className="text-lg font-bold mb-5">Your Playlists</h1>
            <div className="grid grid-cols-auto-fit gap-10 pb-10">
                <Link
                    to="/saved"
                    className="sm:col-span-2 rounded-md py-5 bg-gradient-to-tl from-violet-500 to-indigo-700 flex flex-col items-center justify-center gap-5 hover:cursor-pointer hover:shadow-lg"
                >
                    <FaHeart className="text-5xl" />
                    <h2 className="text-2xl font-bold">Liked Songs</h2>
                </Link>
                {playlists.map((playlist, i) => (
                    <PlaylistCard playlist={playlist} key={playlist.id} />
                ))}
            </div>
        </div>
    ) : (
        <Loader />
    );
}
