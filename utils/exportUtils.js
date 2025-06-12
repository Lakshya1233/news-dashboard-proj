export function exportToCSV(authorStats) {
    const csvContent = [
        ['Author', 'Articles', 'Rate ($)', 'Payout ($)'],
        ...authorStats.map(stat => [stat.author, stat.count, stat.rate, stat.payout])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `payout-report-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
}

export function exportToPDF() {
    window.print();
}

export function exportToGoogleSheets(authorStats) {
    const tsvContent = [
        ['Author', 'Articles', 'Rate ($)', 'Payout ($)'].join('\t'),
        ...authorStats.map(stat => [stat.author, stat.count, stat.rate, stat.payout].join('\t'))
    ].join('\n');

    navigator.clipboard.writeText(tsvContent).then(() => {
        alert('Data copied to clipboard! You can now paste it into Google Sheets.');
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy data. Please try again.');
    });
}