'use client';
import { useState, useEffect } from 'react';
import { fetchNews } from 'services/newsApi';
import { generateMockData } from 'utils/mockData';

export default function useArticles() {
    const [articles, setArticles] = useState([]);
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [apiKey, setApiKey] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('newsApiKey') || '';
        }
        return '';
    });

    const fetchNewsData = async () => {
        try {
            setLoading(true);
            const data = await fetchNews(apiKey);

            if (data && data.articles && data.articles.length > 0) {
                const transformedArticles = data.articles.map((article, index) => ({
                    ...article,
                    id: index,
                    type: index % 3 === 0 ? 'news' : 'blog',
                    publishedAt: new Date(article.publishedAt).toISOString(),
                    author: article.author || article.source?.name || 'Unknown'
                }));

                setArticles(transformedArticles);
                setFilteredArticles(transformedArticles);
                setError(null);
            } else {
                throw new Error('No articles found');
            }
        } catch (err) {
            console.error('API Error:', err);
            setError('Unable to fetch live news. Using demonstration data. To use real data, please add your NewsAPI key.');
            const mockData = generateMockData();
            setArticles(mockData);
            setFilteredArticles(mockData);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNewsData();
    }, []);

    return {
        articles,
        filteredArticles,
        setFilteredArticles,
        loading,
        error,
        apiKey,
        setApiKey,
        fetchNewsData
    };
}