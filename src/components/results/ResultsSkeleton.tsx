import React from "react";

const ResultsSkeleton = () => {
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
                <tr className="py-4 text-gray-500">
                    <td className="px-3 py-2"><div className="w-full h-6 rounded bg-gray-100"></div></td>
                    <td className="px-3 py-2"><div className="w-full h-6 rounded bg-gray-100"></div></td>
                    <td className="px-3 py-2"><div className="w-full h-6 rounded bg-gray-100"></div></td>
                    <td className="px-3 py-2"><div className="w-full h-6 rounded bg-gray-100"></div></td>
                </tr>
                <tr className="py-4 text-gray-500">
                    <td className="px-3 py-2"><div className="w-full h-6 rounded bg-gray-100"></div></td>
                    <td className="px-3 py-2"><div className="w-full h-6 rounded bg-gray-100"></div></td>
                    <td className="px-3 py-2"><div className="w-full h-6 rounded bg-gray-100"></div></td>
                    <td className="px-3 py-2"><div className="w-full h-6 rounded bg-gray-100"></div></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default  ResultsSkeleton;