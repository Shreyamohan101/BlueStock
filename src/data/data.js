// Mock data for the application with real-time price simulation
export const stocksData = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 175.43,
    change: 2.34,
    changePercent: 1.35,
    volume: 45678900,
    marketCap: 2800000000000,
    sector: 'Technology',
    lastUpdated: new Date().toISOString()
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    price: 332.89,
    change: -1.56,
    changePercent: -0.47,
    volume: 23456789,
    marketCap: 2500000000000,
    sector: 'Technology',
    lastUpdated: new Date().toISOString()
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 2847.63,
    change: 12.45,
    changePercent: 0.44,
    volume: 12345678,
    marketCap: 1800000000000,
    sector: 'Technology',
    lastUpdated: new Date().toISOString()
  },
  {
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    price: 891.34,
    change: -8.92,
    changePercent: -0.99,
    volume: 34567890,
    marketCap: 850000000000,
    sector: 'Automotive',
    lastUpdated: new Date().toISOString()
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    price: 3344.29,
    change: 15.67,
    changePercent: 0.47,
    volume: 18765432,
    marketCap: 1700000000000,
    sector: 'E-commerce',
    lastUpdated: new Date().toISOString()
  },
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    price: 454.78,
    change: 7.23,
    changePercent: 1.61,
    volume: 28901234,
    marketCap: 1100000000000,
    sector: 'Technology',
    lastUpdated: new Date().toISOString()
  },
  {
    symbol: 'META',
    name: 'Meta Platforms Inc.',
    price: 298.45,
    change: -3.21,
    changePercent: -1.06,
    volume: 19876543,
    marketCap: 750000000000,
    sector: 'Technology',
    lastUpdated: new Date().toISOString()
  },
  {
    symbol: 'JPM',
    name: 'JPMorgan Chase & Co.',
    price: 145.67,
    change: 1.89,
    changePercent: 1.31,
    volume: 15432109,
    marketCap: 420000000000,
    sector: 'Finance',
    lastUpdated: new Date().toISOString()
  },
  {
    symbol: 'JNJ',
    name: 'Johnson & Johnson',
    price: 162.34,
    change: 0.78,
    changePercent: 0.48,
    volume: 8765432,
    marketCap: 430000000000,
    sector: 'Healthcare',
    lastUpdated: new Date().toISOString()
  },
  {
    symbol: 'V',
    name: 'Visa Inc.',
    price: 234.56,
    change: 2.11,
    changePercent: 0.91,
    volume: 6543210,
    marketCap: 480000000000,
    sector: 'Finance',
    lastUpdated: new Date().toISOString()
  },
  {
    symbol: 'WMT',
    name: 'Walmart Inc.',
    price: 158.92,
    change: -0.45,
    changePercent: -0.28,
    volume: 7890123,
    marketCap: 430000000000,
    sector: 'Retail',
    lastUpdated: new Date().toISOString()
  },
  {
    symbol: 'PG',
    name: 'Procter & Gamble',
    price: 142.78,
    change: 1.23,
    changePercent: 0.87,
    volume: 5432109,
    marketCap: 340000000000,
    sector: 'Consumer Goods',
    lastUpdated: new Date().toISOString()
  },
  {
    symbol: 'HD',
    name: 'Home Depot Inc.',
    price: 312.45,
    change: 4.56,
    changePercent: 1.48,
    volume: 9876543,
    marketCap: 320000000000,
    sector: 'Retail',
    lastUpdated: new Date().toISOString()
  },
  {
    symbol: 'BAC',
    name: 'Bank of America',
    price: 34.67,
    change: -0.23,
    changePercent: -0.66,
    volume: 45678901,
    marketCap: 280000000000,
    sector: 'Finance',
    lastUpdated: new Date().toISOString()
  },
  {
    symbol: 'DIS',
    name: 'Walt Disney Company',
    price: 89.12,
    change: 2.34,
    changePercent: 2.70,
    volume: 12345678,
    marketCap: 160000000000,
    sector: 'Entertainment',
    lastUpdated: new Date().toISOString()
  }
];

// Trading utility functions
export const generateRandomPriceChange = (currentPrice, volatility = 0.02) => {
  const change = (Math.random() - 0.5) * 2 * volatility * currentPrice;
  return {
    newPrice: Math.max(currentPrice + change, 0.01),
    change: change,
    changePercent: (change / currentPrice) * 100
  };
};

export const simulateMarketHours = () => {
  const now = new Date();
  const hour = now.getHours();
  // Market is open 9:30 AM to 4:00 PM EST (simplified)
  return hour >= 9 && hour <= 16;
};

export const getMarketStatus = () => {
  return simulateMarketHours() ? 'OPEN' : 'CLOSED';
};