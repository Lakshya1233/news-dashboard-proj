'use client';

export default function ApiConfig({ darkMode, apiKey, setApiKey, onSave }) {
    return (
        <div className={`mb-6 p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow`}>
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                API Configuration
            </h3>
            <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                To fetch real news data, you need a free API key from NewsAPI.
            </p>
            <ol className={`text-sm mb-4 list-decimal list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>Go to <a href="https://newsapi.org/register" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">https://newsapi.org/register</a></li>
                <li>Sign up for a free account</li>
                <li>Copy your API key and paste it below</li>
            </ol>
            <div className="flex items-center space-x-3">
                <input
                    type="text"
                    className={`flex-1 px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'
                        }`}
                    placeholder="Enter your NewsAPI key"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                />
                <button
                    onClick={onSave}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Save & Refresh
                </button>
            </div>
            <p className={`text-xs mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Note: The app will also try free RSS feeds if NewsAPI fails.
            </p>
        </div>
    );
}