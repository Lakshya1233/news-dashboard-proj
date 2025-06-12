'use client';
import ArticleCard from './ArticleCard';

export default function ArticleGrid({ darkMode, articles, loading }) {
    if (loading) {
        return (
            <div className="col-span-full text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    if (articles.length === 0) {
        return (
            <div className="col-span-full text-center py-8">
                <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                    No articles found matching your criteria.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.slice(0, 12).map((article) => (
                <ArticleCard
                    key={article.id}
                    article={article}
                    darkMode={darkMode}
                />
            ))}
        </div>
    );
}