export const fetchRepositories = async (repoName: string = 'tonik/theme', perPage: number = 10, sort: string = '') => {
    const response = await fetch(`https://api.github.com/search/repositories?q=${repoName}&sort=${sort}&per_page=${perPage}`);

    if (!response.ok) {
        throw new Error("Ups...Something went wrong!");
    }

    return response.json();
};
