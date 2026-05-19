import React, { useState } from 'react';

import SearchInput from "../../SearchInput";
import List from "./List";
import useDebounce from "../../hooks/useDebounce";

function SearchPage() {

    const [searchValue, setSearchValue] = useState('');

    const debouncedSearchValue = useDebounce(searchValue, 1000);

    return (
        <section className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center px-6 py-12">

            {/* Heading */}
            <div className="text-center mb-10">
                <h1 className="text-5xl font-bold tracking-wide bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    Wiki Search
                </h1>

                <p className="text-gray-400 mt-4 text-lg tracking-wide">
                    Search anything from Wikipedia instantly
                </p>
            </div>

            {/* Search Box */}
            <div className="w-full max-w-3xl sticky top-6 z-50">
                <SearchInput
                    className=""
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </div>

            {/* Results */}
            <div className="w-full max-w-6xl mt-12">
                <List searchTerm={debouncedSearchValue} />
            </div>

        </section>
    )
}

export default SearchPage;