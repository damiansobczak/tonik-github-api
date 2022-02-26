import React, { useEffect } from "react";
import ResultsSkeleton from "./ResultsSkeleton";
import ResultsError from "./ResultsError";
import Results from "./Results";
import ResultsNone from "./ResultsNone";
import {useSearch} from "../../context/search";
import {useSearchQuery} from "../../hooks/searchHook";

const ResultsContainer = () => {
    const { state } = useSearch();
    const { isFetching, error, data, refetch } = useSearchQuery(state.search, state.show, state.sort, state.page);

    useEffect(() => {
        if (state.search) {
            refetch();
        }
    }, [state.search, state.page, state.show, state.sort, refetch]);

    if (isFetching) {
        return <ResultsSkeleton />
    }

    if (error) {
        return <ResultsError />
    }

    if (!data || !data?.items?.length) {
        return <ResultsNone />
    }

    return <Results items={data?.items}/>
}

export default ResultsContainer;