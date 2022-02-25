import {useSearch} from "../../context/search";
import {useSearchQuery} from "../../hooks/searchHook";
import Show from "../show/Show";

const Pagination = () => {
  const { state, dispatch } = useSearch();
  const { isFetching, data } = useSearchQuery();

  return (
      <div className="flex items-center py-4 border-t mt-4">
        <div className="flex items-center space-x-2 flex-1">
            <button className="border rounded-md bg-white text-sm text-gray-600 h-10 px-6 shadow-sm hover:bg-gray-50 disabled:opacity-40" disabled={isFetching || state.page === 1} onClick={() => dispatch({type: 'search/pagination/decrement'})}>Previous</button>
            <button className="border rounded-md bg-white text-sm text-gray-600 h-10 px-6 shadow-sm hover:bg-gray-50 disabled:opacity-40" disabled={isFetching || state.page * state.show >= data.total_count } onClick={() => dispatch({type: 'search/pagination/increment'})}>Next</button>
        </div>
          <Show />
      </div>
  );
}

export default Pagination;