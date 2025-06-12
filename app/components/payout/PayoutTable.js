'use client';
import PayoutRow from './PayoutRow';
import ExportButtons from '@/components/common/ExportButtons';

export default function PayoutTable({
    darkMode,
    authorStats,
    authorPayouts,
    globalPayoutRate,
    updateAuthorPayout
}) {
    return (
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow mb-6`}>
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Payout Details
                </h3>
                <ExportButtons authorStats={authorStats} />
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
                        <tr>
                            <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-500'
                                }`}>
                                Author
                            </th>
                            <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-500'
                                }`}>
                                Articles
                            </th>
                            <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-500'
                                }`}>
                                Rate ($/article)
                            </th>
                            <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-500'
                                }`}>
                                Total Payout ($)
                            </th>
                        </tr>
                    </thead>
                    <tbody className={`divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                        {authorStats.map((stat, index) => (
                            <PayoutRow
                                key={index}
                                stat={stat}
                                darkMode={darkMode}
                                updateAuthorPayout={updateAuthorPayout}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}