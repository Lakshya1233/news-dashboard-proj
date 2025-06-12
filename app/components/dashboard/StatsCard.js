'use client';

export default function StatsCard({ darkMode, icon: Icon, iconColor, title, value }) {
    return (
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow`}>
            <div className="flex items-center">
                <Icon className={`h-8 w-8 ${iconColor}`} />
                <div className="ml-4">
                    <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {title}
                    </p>
                    <p className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {value}
                    </p>
                </div>
            </div>
        </div>
    );
}