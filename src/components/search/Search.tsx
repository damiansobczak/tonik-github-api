import IconSearch from "../icons/Search";

const Search = () => {
  return (
      <div className="p-5 bg-white rounded-lg shadow-xl w-full flex items-center justify-between ring-0 ring-gray-200 focus-within:ring-4 transition">
          <input type="text" placeholder="Search repositories..." className="h-full w-full flex-1 py-2 text-gray-700 appearance-none outline-0"/>
          <button className="rounded-md bg-gray-900 text-white text-sm h-10 pl-5 pr-6 hover:bg-gray-800 flex items-center space-x-1">
              <IconSearch />
              <span>Search</span>
          </button>
      </div>
  );
}

export default Search;