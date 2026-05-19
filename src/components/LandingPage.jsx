import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-8 bg-[#212f3d] text-white px-4">

            <h1 className="text-3xl md:text-5xl font-bold text-center tracking-wide bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Welcome To My Project
            </h1>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center items-center w-full max-w-2xl">

                <Link
                    to="/posts"
                    className="bg-green-500 px-6 py-3 rounded-lg w-full sm:w-auto text-center hover:bg-green-600 transition"
                >
                    Todo App
                </Link>

                <Link
                    to="/DebounceWiki"
                    className="bg-blue-500 px-6 py-3 rounded-lg w-full sm:w-auto text-center hover:bg-blue-600 transition"
                >
                    Debounce App
                </Link>

                <Link
                    to="/Pagination"
                    className="bg-gray-500 px-6 py-3 rounded-lg w-full sm:w-auto text-center hover:bg-gray-600 transition"
                >
                    Pagination
                </Link>

                <Link
                    to="/InfiniteScroll"
                    className="bg-blue-500 px-6 py-3 rounded-lg w-full sm:w-auto text-center hover:bg-blue-600 transition"
                >
                    Infinite Scroll
                </Link>

            </div>
        </div>
    );
}

export default LandingPage;