import IconStar from "../icons/Star";
import { ResultType } from "../types/apiTypes";

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
                    <tr className="py-4 text-gray-500" key={result.id}>
                        <td className="px-3 py-2 truncate">{result.full_name}</td>
                        <td className="px-3 py-2 truncate">{result.owner.login}</td>
                        <td className="px-3 py-2 flex items-center space-x-1">
                            <IconStar />
                            <span>{result.stargazers_count}</span>
                        </td>
                        <td className="px-3 py-2">{result.created_at}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Results;