import React, {ChangeEvent, useEffect, useState} from "react";
import IconSearch from "../icons/Search";
import {useSearch} from "../../context/search";
import {useQuery} from "react-query";
import {fetchRepositories} from "../../queries/repositories";

const Search = () => {
    const [searchInput, setSearchInput] = useState<string>('');
    const [typing, setTyping] = useState<boolean>(false);
    const { refetch } = useQuery('repositories', () => fetchRepositories(searchInput), {enabled: false});
    const { dispatch } = useSearch();

    const handleSearch = () => {
        if (searchInput) {
            refetch();
            dispatch({type: 'search/value', payload: searchInput});
        }
    }

    useEffect(() => {
        setTyping(true);
        const delayDebounceFn = setTimeout(() => {
            setTyping(false);
        }, 500)
        return () => clearTimeout(delayDebounceFn)
    }, [searchInput]);

  return (
      <div className="p-5 bg-white rounded-lg shadow-xl w-full flex items-center justify-between ring-0 ring-gray-200 focus-within:ring-4 transition">
          <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)} placeholder="Search repositories..." className="h-full w-full flex-1 py-2 text-gray-700 appearance-none outline-0"/>
          <button onClick={handleSearch} className="rounded-md bg-gray-900 text-white text-sm h-10 pl-5 pr-6 hover:bg-gray-800 flex items-center space-x-1 disabled:opacity-10" disabled={Boolean(typing)} >
              <IconSearch />
              <span>Search</span>
          </button>
      </div>
  );
}

export default Search;