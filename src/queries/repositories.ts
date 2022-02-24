export const fetchRepositories = async (repoName: string = '', perPage: number = 2, sort: string = '', page: number = 1) => {
    const response = await fetch(`https://api.github.com/search/repositories?q=${repoName}&sort=${sort}&per_page=${perPage}&page=${page}`);

    if (!response.ok) {
        throw new Error("Ups...Something went wrong!");
    }

    return response.json();
};
