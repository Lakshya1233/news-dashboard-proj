'use client';
import { useAuth } from 'contexts/AuthContext';
import { Menu, X, Sun, Moon, Settings, User, LogOut } from 'lucide-react';

export default function Header({
    darkMode,
    setDarkMode,
    sidebarOpen,
    setSidebarOpen,
    setShowApiConfig
}) {
    const { user, logout } = useAuth();

    return (
        <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                        >
                            {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                        <h1 className={`ml-4 text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            News Dashboard
                        </h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setShowApiConfig(prev => !prev)}
                            className={`p-2 rounded-md ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-500'}`}
                            title="API Settings"
                        >
                            <Settings className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-2 rounded-md ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-500'}`}
                        >
                            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </button>
                        <div className={`flex items-center space-x-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            <User className="h-5 w-5" />
                            <span>{user?.name}</span>
                            {user?.isAdmin && (
                                <span className="px-2 py-1 text-xs font-semibold text-white bg-purple-600 rounded-full">
                                    Admin
                                </span>
                            )}
                        </div>
                        <button
                            onClick={logout}
                            className={`p-2 rounded-md ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-500'}`}
                        >
                            <LogOut className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}