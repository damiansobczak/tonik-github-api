import { useQuery } from "react-query";
import { fetchRepositories } from "../queries/repositories";

export const useSearchQuery = (text: string = '', perPage: number = 5, sortBy: string = '', currentPage: number = 1) => {
    const { isLoading, error, data, refetch, isFetching, isPreviousData } = useQuery(['repositories', currentPage], () => fetchRepositories(text, perPage, sortBy, currentPage), {enabled: false, keepPreviousData: true});

    return { isLoading, error, data, refetch, isFetching, isPreviousData };
}