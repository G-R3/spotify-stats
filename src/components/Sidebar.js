import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const expand = () => {
        document
            .querySelector(".sidebar")
            .classList.toggle("-translate-x-full");
    };

    return (
        // background color: bg-black
        // li text-color: text-neutral-400    hover: text-white
        // li background-color on hover: bg-neutral-800
        <nav className="bg-black w-full py-4 px-3 lg:w-52 fixed transition">
            <div className="flex">
                <span className="px-4 font-bold text-xl">SpotifyStats</span>
                <button onClick={expand} className="ml-auto lg:hidden">
                    Expand
                </button>
            </div>
            <ul className="sidebar text-sm absolute left-0 bg-black w-52 h-screen -translate-x-full transition-transform py-4 px-3 lg:-translate-x-0 lg:w-full lg:relative lg:px-0">
                <li className="hover:bg-neutral-800">
                    <Link to="/" className="py-1 px-4 block">
                        Home
                    </Link>
                </li>
                <li className="hover:bg-neutral-800">
                    <Link to="/profile" className="py-1 px-4 block">
                        Profile
                    </Link>
                </li>
                <li className="hover:bg-neutral-800">
                    <Link to="/playlists" className="py-1 px-4 block">
                        Playlists
                    </Link>
                </li>
                <li className="hover:bg-neutral-800">
                    <Link to="/browse" className="py-1 px-4 block">
                        Browse
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
