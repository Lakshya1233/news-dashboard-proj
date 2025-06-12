export function generateMockData() {
    const authors = ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Brown', 'Charlie Wilson'];
    const types = ['news', 'blog'];
    const mockArticles = [];

    for (let i = 0; i < 50; i++) {
        mockArticles.push({
            id: i,
            title: `Article ${i + 1}: ${i % 2 === 0 ? 'Breaking News' : 'Industry Insights'}`,
            author: authors[Math.floor(Math.random() * authors.length)],
            type: types[Math.floor(Math.random() * types.length)],
            publishedAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            url: '#',
            urlToImage: `https://via.placeholder.com/300x200?text=Article+${i + 1}`
        });
    }

    return mockArticles;
}