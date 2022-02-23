import IconStar from "../icons/Star";
import { ResultType } from "../../types/apiTypes";

interface ResultsProps {
    items: Array<ResultType>;
}

const Results: React.FC<ResultsProps> = ( { items } ): JSX.Element => {
    return (
        <div className="p-5 bg-white rounded-lg shadow-xl w-full">
            <table className="table-fixed w-full">
                <thead>
                <tr className='bg-gray-50 uppercase text-sm text-gray-500 text-left'>
                    <th className="font-semibold px-3 py-2">Name</th>
                    <th className="font-semibold px-3 py-2">Owner</th>
                    <th className="font-semibold px-3 py-2">Stars</th>
                    <th className="font-semibold px-3 py-2">Created at</th>
                </tr>
                </thead>
                <tbody>
                {items.map((result: ResultType) => (
                    <tr className="py-4 text-gray-500 text-sm" key={result.id}>
                        <td className="px-3 py-3 truncate font-semibold">{result.full_name}</td>
                        <td className="px-3 py-3 truncate">{result.owner.login}</td>
                        <td className="px-3 py-3">
                            <div className="flex items-center h-full space-x-1">
                                <IconStar />
                                <span>{result.stargazers_count}</span>
                            </div>
                        </td>
                        <td className="px-3 py-3">{result.created_at}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <p className="text-gray-400 text-sm pt-4 px-3">Showing 10 results</p>
        </div>
    );
}

export default Results;