export interface ResultsType {
    total_count: number;
    incomplete_results: boolean;
    items: Array<ResultType>;
}

export interface ResultType {
    id: number;
    name: string;
    full_name: string;
    owner: {
        login: string;
    }
    created_at: Date;
    stargazers_count: number;
}