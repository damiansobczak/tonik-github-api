import React, { useEffect } from "react";
import ResultsSkeleton from "./ResultsSkeleton";
import ResultsError from "./ResultsError";
import Results from "./Results";
import ResultsNone from "./ResultsNone";
import {useSearch} from "../../context/search";
import {useSearchQuery} from "../../hooks/searchHook";
import Pagination from "../pagination/Pagination";
import Show from "../show/Show";

const ResultsContainer = () => {
    const { state, dispatch } = useSearch();
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

    return (
        <Results items={data?.items}>
            <Pagination
                showPrevious={!isFetching && (state.page > 1)}
                showNext={!isFetching && state.page * state.show < data.total_count}
                next={() => dispatch({type: 'search/pagination/increment'})}
                previous={() => dispatch({type: 'search/pagination/decrement'})}>
                <Show />
            </Pagination>
        </Results>
    )
}

export default ResultsContainer;