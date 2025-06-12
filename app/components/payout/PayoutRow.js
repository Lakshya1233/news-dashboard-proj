'use client';
import { useState } from 'react';
import { Edit2, Check, X } from 'lucide-react';

export default function PayoutRow({ stat, darkMode, updateAuthorPayout }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editingRate, setEditingRate] = useState(stat.rate.toString());

    const handleSave = () => {
        const newRate = parseFloat(editingRate);
        if (!isNaN(newRate) && newRate >= 0) {
            updateAuthorPayout(stat.author, newRate);
        }
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditingRate(stat.rate.toString());
        setIsEditing(false);
    };

    return (
        <tr>
            <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                {stat.author}
            </td>
            <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                {stat.count}
            </td>
            <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                {isEditing ? (
                    <div className="flex items-center space-x-2">
                        <input
                            type="number"
                            className={`w-20 px-2 py-1 border rounded ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'
                                }`}
                            value={editingRate}
                            onChange={(e) => setEditingRate(e.target.value)}
                            min="0"
                            step="0.01"
                        />
                        <button
                            onClick={handleSave}
                            className="text-green-600 hover:text-green-700"
                        >
                            <Check className="h-4 w-4" />
                        </button>
                        <button
                            onClick={handleCancel}
                            className="text-red-600 hover:text-red-700"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center space-x-2">
                        <span>${stat.rate.toFixed(2)}</span>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="text-indigo-600 hover:text-indigo-700"
                        >
                            <Edit2 className="h-4 w-4" />
                        </button>
                    </div>
                )}
            </td>
            <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                ${stat.payout.toFixed(2)}
            </td>
        </tr>
    );
}