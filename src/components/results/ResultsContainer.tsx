import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { fetchRepositories } from "../../queries/repositories";
import ResultsSkeleton from "./ResultsSkeleton";
import ResultsError from "./ResultsError";
import Results from "./Results";
import ResultsNone from "./ResultsNone";
import {useSearch} from "../../context/search";

const ResultsContainer = () => {
    const { isLoading, error, data } = useQuery('repositories', () => fetchRepositories(state.search), {enabled: false});
    const { state } = useSearch();

    if (isLoading) {
        return <ResultsSkeleton />
    }

    if (error) {
        return <ResultsError />
    }

    if (!data || !data?.items) {
        return <ResultsNone />
    }

    return <Results items={data?.items}/>
}

export default ResultsContainer;