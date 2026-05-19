import useSWR from 'swr';
import Item from './Items';
import { getWikiSearchResults } from '../../api/WikiApi';

function List({ searchTerm }) {

    const {
        isLoading,
        error,
        data,
    } = useSWR(
        searchTerm ? searchTerm : null,
        getWikiSearchResults
    )

    let content
    if (isLoading) {
        content = (
            <div className="flex justify-center mt-10">
                <p className="text-xl tracking-wide animate-pulse text-emerald-400">
                    Searching...
                </p>
            </div>
        )
    }

    else if (error) {
        content = (
            <p className="text-center text-red-400 text-xl mt-10">
                {error.message}
            </p>
        )
    }

    else if (data?.query?.pages) {

        const results = data.query.pages

        content = (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {Object.values(results).map(result => {
                    return <Item key={result.pageid} result={result} />
                })}

            </div>
        )
    }


    return content
}
export default List
