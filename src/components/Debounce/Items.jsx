const Item = ({ result }) => {

    return (

        <article className="bg-[#1e293b] border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] hover:-translate-y-2 transition-all duration-300">

            {
                result?.thumbnail?.source && (
                    <img
                        src={result.thumbnail.source}
                        alt={result.title}
                        className="w-full h-56 object-cover"
                    />
                )
            }

            <div className="p-6">

                <h2 className="text-2xl font-semibold mb-4 text-emerald-400">
                    <a
                        href={`https://en.wikipedia.org/?curid=${result.pageid}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {result.title}
                    </a>
                </h2>

                <p className="text-gray-300 leading-8 tracking-wide">
                    {result.extract}
                </p>

                <a
                    href={`https://en.wikipedia.org/?curid=${result.pageid}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-6 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 transition-all duration-300"
                >
                    Read More
                </a>

            </div>

        </article>
    )
}

export default Item