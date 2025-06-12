'use client';
import { useState, useEffect } from 'react';

export default function useFilters(articles) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        author: '',
        dateFrom: '',
        dateTo: '',
        type: ''
    });
    const [filteredArticles, setFilteredArticles] = useState(articles);

    useEffect(() => {
        filterArticles();
    }, [articles, searchTerm, filters]);

    const filterArticles = () => {
        let filtered = [...articles];

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(article =>
                article.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                article.author?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                article.description?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Author filter
        if (filters.author) {
            filtered = filtered.filter(article =>
                article.author?.toLowerCase().includes(filters.author.toLowerCase())
            );
        }

        // Type filter
        if (filters.type) {
            filtered = filtered.filter(article => article.type === filters.type);
        }

        // Date range filter
        if (filters.dateFrom) {
            filtered = filtered.filter(article =>
                new Date(article.publishedAt) >= new Date(filters.dateFrom)
            );
        }

        if (filters.dateTo) {
            filtered = filtered.filter(article =>
                new Date(article.publishedAt) <= new Date(filters.dateTo)
            );
        }

        setFilteredArticles(filtered);
    };

    return {
        searchTerm,
        setSearchTerm,
        filters,
        setFilters,
        filteredArticles
    };
}