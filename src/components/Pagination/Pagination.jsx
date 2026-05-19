import React from "react";

function Pagination({ page, limit, total, setPage }) {
    const totalPages = Math.ceil(total / limit);

    return (
        <div className="flex justify-center space-x-2">
            {/* Previous Button */}
            <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className={`px-3 py-1 rounded border border-gray-600 
          ${page === 1
                        ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                        : "bg-gray-900 text-gray-200 hover:bg-gray-700"}
        `}
            >
                Prev
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <button
                    key={num}
                    onClick={() => setPage(num)}
                    className={`px-3 py-1 rounded border border-gray-600 
            ${page === num
                            ? "bg-blue-600 text-white"
                            : "bg-gray-900 text-gray-200 hover:bg-gray-700"}
          `}
                >
                    {num}
                </button>
            ))}

            {/* Next Button */}
            <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
                className={`px-3 py-1 rounded border border-gray-600 
          ${page === totalPages
                        ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                        : "bg-gray-900 text-gray-200 hover:bg-gray-700"}
        `}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;
