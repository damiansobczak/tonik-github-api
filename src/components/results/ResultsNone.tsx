import IconSearch from "../icons/Search";

const ResultsNone = () => {
    return (
        <div className="flex flex-col items-center justify-center p-5 h-40 space-y-3 bg-white rounded-lg shadow-xl w-full">
            <div className="rounded-full bg-gray-100 text-gray-500 h-12 w-12 flex items-center justify-center">
                <IconSearch />
            </div>
            <p className="text-gray-600 text-sm text-center max-w-md">No results to display. Please start typing in the search field and hit search whenever you're ready!</p>
        </div>
    );
}

export default ResultsNone;