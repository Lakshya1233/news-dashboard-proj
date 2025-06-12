export const CHART_COLORS = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444'];

export const API_ENDPOINTS = {
    NEWS_API_TOP: 'https://newsapi.org/v2/top-headlines',
    NEWS_API_EVERYTHING: 'https://newsapi.org/v2/everything',
    RSS_FEED: 'https://api.rss2json.com/v1/api.json'
};

export const ARTICLE_TYPES = {
    NEWS: 'news',
    BLOG: 'blog'
};

export const USER_ROLES = {
    ADMIN: 'admin',
    USER: 'user'
};

export const DEFAULT_PAYOUT_RATE = 10;

export const DATE_FORMAT_OPTIONS = {
    short: { month: 'short', day: 'numeric' },
    full: { year: 'numeric', month: 'long', day: 'numeric' }
};