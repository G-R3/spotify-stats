import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <nav
            className="bg-black fixed bottom-0 left-0 w-full flex lg:flex-col p-4 gap-5 lg:h-screen lg:w-48 lg:top-0
        "
        >
            <h2 className="text-2xl font-bold hidden lg:block">SpotifyStats</h2>
            <section className="flex gap-2 w-ful items-center lg:items-start lg:flex-col">
                <h3 className="font-semibold">Browse</h3>
                <ul className="flex lg:flex-col gap-1 text-neutral-400 w-full">
                    <li className=" hover:text-white hover:bg-neutral-800 rounded-md">
                        <Link
                            to="/"
                            className="py-1 cursor-pointer w-full block"
                        >
                            Profile
                        </Link>
                    </li>
                    <li className=" hover:text-white hover:bg-neutral-800 rounded-md">
                        <Link
                            to="/playlists"
                            className="py-1 cursor-pointer w-full block"
                        >
                            Playlists
                        </Link>
                    </li>
                    <li className="hover:text-white hover:bg-neutral-800 rounded-md">
                        <Link
                            to="/tracks"
                            className="py-1 cursor-pointer w-full block"
                        >
                            Tracks
                        </Link>
                    </li>
                </ul>
            </section>
        </nav>
    );
}
