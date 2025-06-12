'use client';
import { Download } from 'lucide-react';
import { exportToCSV, exportToPDF, exportToGoogleSheets } from 'utils/exportUtils';

export default function ExportButtons({ authorStats }) {
    return (
        <div className="flex space-x-2">
            <button
                onClick={() => exportToCSV(authorStats)}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center"
            >
                <Download className="h-4 w-4 mr-2" />
                CSV
            </button>
            <button
                onClick={exportToPDF}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 flex items-center"
            >
                <Download className="h-4 w-4 mr-2" />
                PDF
            </button>
            <button
                onClick={() => exportToGoogleSheets(authorStats)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center"
            >
                <Download className="h-4 w-4 mr-2" />
                Sheets
            </button>
        </div>
    );
}