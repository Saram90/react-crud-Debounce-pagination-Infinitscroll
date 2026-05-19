import React from "react";

const MovieCard = ({ myData }) => {
    const { title, body, id } = myData;
    return (
        <div className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
            <div className="space-y-3">
                <p className="text-sm text-gray-400">{id}</p>
                <p className="text-gray-300">{body.substr(0, 150)}</p>
                <h2 className="text-lg font-semibold text-blue-400">{title.substr(0, 15)}</h2>
            </div>
        </div>
    );
};

export default MovieCard;
