'use client';
import { useState, useEffect } from 'react';

export default function usePayouts(filteredArticles) {
    const [globalPayoutRate, setGlobalPayoutRate] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('globalPayoutRate');
            return saved ? parseFloat(saved) : 10;
        }
        return 10;
    });

    const [authorPayouts, setAuthorPayouts] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('authorPayouts');
            return saved ? JSON.parse(saved) : {};
        }
        return {};
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('globalPayoutRate', globalPayoutRate.toString());
        }
    }, [globalPayoutRate]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('authorPayouts', JSON.stringify(authorPayouts));
        }
    }, [authorPayouts]);

    const updateAuthorPayout = (author, rate) => {
        setAuthorPayouts(prev => ({
            ...prev,
            [author]: rate
        }));
    };

    const getAuthorStats = () => {
        const stats = {};
        filteredArticles.forEach(article => {
            const author = article.author || 'Unknown';
            if (!stats[author]) {
                stats[author] = { count: 0, payout: 0 };
            }
            stats[author].count++;
            const rate = authorPayouts[author] || globalPayoutRate;
            stats[author].payout = stats[author].count * rate;
        });

        return Object.entries(stats).map(([author, data]) => ({
            author,
            ...data,
            rate: authorPayouts[author] || globalPayoutRate
        }));
    };

    return {
        globalPayoutRate,
        setGlobalPayoutRate,
        authorPayouts,
        updateAuthorPayout,
        getAuthorStats
    };
}