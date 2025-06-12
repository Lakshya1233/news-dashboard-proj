'use client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function AuthorBarChart({ darkMode, authorStats, isAdmin }) {
    const barData = authorStats.map(stat => ({
        name: stat.author.split(' ')[0], // First name only for space
        articles: stat.count,
        payout: stat.payout
    }));

    return (
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow`}>
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Articles by Author
            </h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="articles" fill="#3B82F6" />
                    {isAdmin && <Bar dataKey="payout" fill="#10B981" />}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}