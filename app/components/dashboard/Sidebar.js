'use client';

export default function Sidebar({
    darkMode,
    sidebarOpen,
    filters,
    setFilters,
    globalPayoutRate,
    setGlobalPayoutRate,
    user
}) {
    return (
        <aside className={`${sidebarOpen ? 'block' : 'hidden'} md:block w-64 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
            <div className="p-4 space-y-4">
                <h2 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Filters</h2>

                <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                        Author
                    </label>
                    <input
                        type="text"
                        className={`w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'
                            }`}
                        placeholder="Filter by author"
                        value={filters.author}
                        onChange={(e) => setFilters({ ...filters, author: e.target.value })}
                    />
                </div>

                <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                        Type
                    </label>
                    <select
                        className={`w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'
                            }`}
                        value={filters.type}
                        onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                    >
                        <option value="">All Types</option>
                        <option value="news">News</option>
                        <option value="blog">Blog</option>
                    </select>
                </div>

                <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                        Date From
                    </label>
                    <input
                        type="date"
                        className={`w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'
                            }`}
                        value={filters.dateFrom}
                        onChange={(e) => setFilters({ ...filters, dateFrom: e.target.value })}
                    />
                </div>

                <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                        Date To
                    </label>
                    <input
                        type="date"
                        className={`w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'
                            }`}
                        value={filters.dateTo}
                        onChange={(e) => setFilters({ ...filters, dateTo: e.target.value })}
                    />
                </div>

                {user?.isAdmin && (
                    <div className="pt-4 border-t border-gray-200">
                        <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                            Global Payout Rate ($/article)
                        </label>
                        <input
                            type="number"
                            className={`w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'
                                }`}
                            value={globalPayoutRate}
                            onChange={(e) => setGlobalPayoutRate(parseFloat(e.target.value) || 0)}
                            min="0"
                            step="0.01"
                        />
                    </div>
                )}
            </div>
        </aside>
    );
}