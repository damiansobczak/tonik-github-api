import IconStar from "../icons/Star";
import { ResultType } from "../../types/apiTypes";
import { formatDate } from "../../utils/utils";

interface ResultsProps {
    items: Array<ResultType>;
    children?: JSX.Element | JSX.Element[];
}

const Results: React.FC<ResultsProps> = ( { items, children } ): JSX.Element => {
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
                        <td className="px-3 py-3">{formatDate(result.created_at)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            {children}
        </div>
    );
}

export default Results;