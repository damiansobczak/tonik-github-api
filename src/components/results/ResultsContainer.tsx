import { useQuery } from "react-query";
import { fetchRepositories } from "../../queries/repositories";
import ResultsSkeleton from "./ResultsSkeleton";
import ResultsError from "./ResultsError";
import Results from "./Results";
import ResultsNone from "./ResultsNone";

const ResultsContainer = () => {
    const { isLoading, error, data, refetch } = useQuery('repositories', () => fetchRepositories(), {enabled: false});

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