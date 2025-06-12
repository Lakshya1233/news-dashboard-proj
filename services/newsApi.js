export async function fetchNews(apiKey) {
    const API_KEY = apiKey || 'YOUR_API_KEY';

    const endpoints = [
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
        `https://newsapi.org/v2/everything?q=technology&sortBy=publishedAt&apiKey=${API_KEY}`,
        'https://api.rss2json.com/v1/api.json?rss_url=https://feeds.bbci.co.uk/news/rss.xml'
    ];

    let data = null;
    let apiError = null;

    for (const endpoint of endpoints) {
        try {
            const response = await fetch(endpoint);

            if (response.ok) {
                const responseData = await response.json();

                if (endpoint.includes('newsapi.org')) {
                    data = responseData;
                } else if (endpoint.includes('rss2json')) {
                    data = {
                        articles: responseData.items.map((item, index) => ({
                            title: item.title,
                            description: item.description,
                            url: item.link,
                            urlToImage: item.thumbnail || `https://via.placeholder.com/300x200?text=News+${index + 1}`,
                            publishedAt: item.pubDate,
                            author: item.author || 'BBC News',
                            source: { name: 'BBC News' }
                        }))
                    };
                }

                if (data && data.articles) {
                    break;
                }
            }
        } catch (err) {
            apiError = err;
            continue;
        }
    }

    if (!data || !data.articles || data.articles.length === 0) {
        throw new Error(apiError || 'No articles found');
    }

    return data;
}