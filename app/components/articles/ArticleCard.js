'use client';

export default function ArticleCard({ article, darkMode }) {
    return (
        <div
            className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow`}
        >
            {article.urlToImage && (
                <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                />
            )}
            <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${article.type === 'news'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-purple-100 text-purple-800'
                        }`}>
                        {article.type}
                    </span>
                    <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {new Date(article.publishedAt).toLocaleDateString()}
                    </span>
                </div>
                <h3 className={`text-lg font-semibold mb-2 line-clamp-2 ${darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                    {article.title}
                </h3>
                <p className={`text-sm mb-2 line-clamp-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                    {article.description}
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    By {article.author || 'Unknown'}
                </p>
            </div>
        </div>
    );
}