import React from 'react';
import './App.css';
import { QueryClientProvider, QueryClient} from "react-query";
import ResultsContainer from "./components/results/ResultsContainer";
import Search from "./components/search/Search";
import {SearchProvider} from "./context/search";

function App() {

    const queryClient = new QueryClient();

  return (
      <QueryClientProvider client={queryClient}>
        <SearchProvider>
            <div className="w-screen min-h-screen flex pt-24 justify-center bg-gray-100">
              <div className="flex flex-col space-y-3 w-full max-w-4xl">
                  <Search />
                  <ResultsContainer />
              </div>
            </div>
        </SearchProvider>
      </QueryClientProvider>
  );
}

export default App;
