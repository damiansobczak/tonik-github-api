import { useQuery } from "react-query";
import { fetchRepositories } from "../queries/repositories";
import ResultsSkeleton from "./ResultsSkeleton";
import ResultsError from "./ResultsError";
import Results from "./Results";

const ResultsContainer = () => {
    const { isLoading, error, data } = useQuery('repositories', () =>
        fetchRepositories('tonik')
    );

    if (isLoading) {
        return <ResultsSkeleton />
    }

    if (error || !data.items) {
        return <ResultsError />
    }

    return <Results items={data.items}/>
}

export default ResultsContainer;