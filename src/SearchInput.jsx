const SearchInput = ({ searchValue, setSearchValue }) => {
    return (

        <div className="relative">

            <input
                className=" w-full rounded-2xl border border-gray-700 bg-[#1e293b] px-6 py-5 text-lg text-white outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-emerald-400 focus:shadow-[0_0_25px_rgba(16,185,129,0.35)]"
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search Wikipedia..."
                autoFocus
            />

            {/* Search Icon */}
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-2xl text-gray-400">
                🔍
            </span>

        </div >
    )
}
export default SearchInput