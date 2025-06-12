'use client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function TrendLineChart({ darkMode, articles }) {
    const timeData = {};

    articles.forEach(article => {
        const date = new Date(article.publishedAt).toLocaleDateString();
        if (!timeData[date]) {
            timeData[date] = 0;
        }
        timeData[date]++;
    });

    const lineData = Object.entries(timeData)
        .sort((a, b) => new Date(a[0]) - new Date(b[0]))
        .slice(-7) // Last 7 days
        .map(([date, count]) => ({
            date: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            count
        }));

    return (
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow lg:col-span-2`}>
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Article Trend (Last 7 Days)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={lineData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="count" stroke="#8B5CF6" name="Articles" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}