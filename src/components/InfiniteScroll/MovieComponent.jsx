import React from "react";
import MovieCard from "./MovieCard";

const MovieComponent = ({ movieInfo }) => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-100 mb-6">List of cards</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {movieInfo.map((curVal, id) => {
                    return <MovieCard key={id} myData={curVal} />;
                })}
            </div>
        </div>
    );
};

export default MovieComponent;