import React from 'react';
import './App.css';
import { QueryClientProvider, QueryClient} from "react-query";
import ResultsContainer from "./components/results/ResultsContainer";
import Search from "./components/search/Search";

function App() {

    const queryClient = new QueryClient();

  return (
      <QueryClientProvider client={queryClient}>
        <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
          <div className="flex flex-col space-y-3 w-full max-w-4xl">
              <Search />
              <ResultsContainer />
          </div>
        </div>
      </QueryClientProvider>
  );
}

export default App;
