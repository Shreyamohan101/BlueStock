import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  Globe,
  Search,
  Filter,
  Calendar,
  Clock
} from 'lucide-react';

const MarketOverview = () => {
  const [user, setUser] = useState(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState('1h');

  useEffect(() => {
    // Check if user is broker
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      if (userData.role !== 'broker') {
        window.location.href = '/';
        return;
      }
      setUser(userData);
    } else {
      window.location.href = '/';
    }
  }, []);

  const indices = [
    { name: 'S&P 500 ETF', value: '509.90', change: '-2.05', changePercent: '-0.40%', color: '#ef4444' },
    { name: 'Dow Jones ETF', value: '30,000', change: '-3.05', changePercent: '+0.66%', color: '#10b981' },
    { name: 'NASDAQ', value: '452.90', change: '-3.05', changePercent: '-0.96%', color: '#ef4444' }
  ];

  const globalMarkets = [
    { region: 'NASDAQ', value: '452.90', change: '+0.66%', color: '#10b981' },
    { region: 'Dow Jones', value: '30,000', change: '+0.66%', color: '#10b981' },
    { region: 'S&P 500', value: '509.90', change: '-0.40%', color: '#ef4444' },
    { region: 'FTSE 100', value: '7,234', change: '+1.2%', color: '#10b981' },
    { region: 'DAX', value: '15,678', change: '-0.8%', color: '#ef4444' },
    { region: 'Nikkei', value: '28,456', change: '+2.1%', color: '#10b981' }
  ];

  const topNews = [
    {
      title: 'Retail Sales Slump Takes Toll on Market Sentiment',
      time: '10 min ago',
      source: 'Reuters'
    },
    {
      title: 'Tech Giant\'s Earnings Soar, Stock Hits New High',
      time: '2 min ago',
      source: 'Bloomberg'
    },
    {
      title: 'High-Profile IPO Falls Short of Expectations',
      time: '12 hrs ago',
      source: 'CNBC'
    },
    {
      title: 'Electric Vehicle Stocks Skyrocket as Demand Surges',
      time: '22 hrs ago',
      source: 'MarketWatch'
    },
    {
      title: 'Market Sentiment Turns Bearish, Stocks Decline',
      time: '2 hrs ago',
      source: 'Financial Times'
    }
  ];

  const topGainers = [
    { symbol: 'AAPL', name: 'Apple', price: '125', change: '6.36%', color: '#10b981' },
    { symbol: 'JPM', name: 'JPM Chase', price: '121', change: '21.75%', color: '#10b981' },
    { symbol: 'UBER', name: 'Uber', price: '80', change: '3.84%', color: '#10b981' },
    { symbol: 'NVDA', name: 'Nvidia', price: '435', change: '5.80%', color: '#10b981' },
    { symbol: 'GOOGL', name: 'Alphabet', price: '234', change: '6.45%', color: '#10b981' },
    { symbol: 'MSFT', name: 'Microsoft', price: '436', change: '9.54%', color: '#10b981' },
    { symbol: 'TGT', name: 'Target', price: '89', change: '11.80%', color: '#10b981' },
    { symbol: 'NFLX', name: 'Netflix', price: '123', change: '4.90%', color: '#10b981' },
    { symbol: 'AMZN', name: 'Amazon', price: '467', change: '5.98%', color: '#10b981' },
    { symbol: 'META', name: 'Meta Apps', price: '123', change: '18.94%', color: '#10b981' }
  ];

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ 
      background: '#0f172a', 
      minHeight: '100vh',
      color: 'white'
    }}>
      {/* Header */}
      <div style={{ 
        background: '#1e293b', 
        padding: '1rem 2rem',
        borderBottom: '1px solid #334155'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img
                src={user.avatar}
                alt={user.name}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '2px solid #4F46E5'
                }}
              />
              <div>
                <h2 style={{ fontSize: '1.125rem', fontWeight: 'bold', margin: 0 }}>
                  {user.name}
                </h2>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem', margin: 0 }}>
                  Account: 4451728902
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '2rem' }}>
              <div>
                <p style={{ color: '#94a3b8', fontSize: '0.75rem', margin: 0 }}>Portfolio Balance</p>
                <p style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>
                  $623,098.17
                </p>
              </div>
              <div>
                <p style={{ color: '#94a3b8', fontSize: '0.75rem', margin: 0 }}>Available Funds</p>
                <p style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>
                  $122,912.50
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <input
              type="text"
              placeholder="Search"
              style={{
                background: '#0f172a',
                border: '1px solid #374151',
                borderRadius: '6px',
                padding: '0.5rem 1rem',
                color: 'white',
                width: '200px'
              }}
            />
          </div>
        </div>
      </div>

      <div style={{ padding: '2rem' }}>
        {/* Main Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Indices */}
          <div style={{ 
            background: '#1e293b', 
            borderRadius: '12px', 
            padding: '1.5rem',
            border: '1px solid #334155'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>
                Indexes
              </h3>
              <button style={{
                background: 'none',
                border: 'none',
                color: '#94a3b8',
                cursor: 'pointer'
              }}>
                <Filter size={16} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {indices.map((index, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '1rem',
                  background: '#0f172a',
                  borderRadius: '8px'
                }}>
                  <div>
                    <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{index.name}</p>
                    <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{index.value}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ color: index.color, fontWeight: '600' }}>
                      {index.change}
                    </p>
                    <p style={{ color: index.color, fontSize: '0.875rem' }}>
                      {index.changePercent}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart Placeholder */}
            <div style={{ 
              height: '200px', 
              background: '#0f172a',
              borderRadius: '8px',
              marginTop: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <BarChart3 size={48} color="#4F46E5" />
            </div>
          </div>

          {/* Global Markets */}
          <div style={{ 
            background: '#1e293b', 
            borderRadius: '12px', 
            padding: '1.5rem',
            border: '1px solid #334155'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>
                Global Markets
              </h3>
              <button style={{
                background: 'none',
                border: 'none',
                color: '#94a3b8',
                cursor: 'pointer'
              }}>
                <Filter size={16} />
              </button>
            </div>

            {/* World Map Placeholder */}
            <div style={{ 
              height: '200px', 
              background: '#0f172a',
              borderRadius: '8px',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <Globe size={48} color="#4F46E5" />
              {/* Market indicators would be positioned on the map */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#10b981',
                color: 'white',
                padding: '0.25rem 0.5rem',
                borderRadius: '4px',
                fontSize: '0.75rem'
              }}>
                +2.1%
              </div>
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                background: '#ef4444',
                color: 'white',
                padding: '0.25rem 0.5rem',
                borderRadius: '4px',
                fontSize: '0.75rem'
              }}>
                -0.8%
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              {globalMarkets.slice(0, 6).map((market, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '0.5rem',
                  background: '#0f172a',
                  borderRadius: '4px'
                }}>
                  <span style={{ fontSize: '0.875rem' }}>{market.region}</span>
                  <span style={{ color: market.color, fontSize: '0.875rem', fontWeight: '600' }}>
                    {market.change}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr 1fr', 
          gap: '2rem'
        }}>
          {/* Heat Map */}
          <div style={{ 
            background: '#1e293b', 
            borderRadius: '12px', 
            padding: '1.5rem',
            border: '1px solid #334155'
          }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Heat Map
            </h3>
            
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Industries</span>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Time frame</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <select style={{
                  background: '#0f172a',
                  border: '1px solid #374151',
                  borderRadius: '4px',
                  padding: '0.25rem',
                  color: 'white',
                  fontSize: '0.75rem'
                }}>
                  <option>Popular</option>
                </select>
                <select style={{
                  background: '#0f172a',
                  border: '1px solid #374151',
                  borderRadius: '4px',
                  padding: '0.25rem',
                  color: 'white',
                  fontSize: '0.75rem'
                }}>
                  <option>D</option>
                  <option>W</option>
                  <option>M</option>
                  <option>Y</option>
                </select>
              </div>
            </div>

            {/* Heat Map Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(8, 1fr)', 
              gap: '2px',
              height: '150px'
            }}>
              {Array.from({ length: 64 }, (_, i) => (
                <div
                  key={i}
                  style={{
                    background: Math.random() > 0.5 ? '#10b981' : '#ef4444',
                    opacity: Math.random() * 0.8 + 0.2,
                    borderRadius: '2px'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Top News */}
          <div style={{ 
            background: '#1e293b', 
            borderRadius: '12px', 
            padding: '1.5rem',
            border: '1px solid #334155'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>
                Top News
              </h3>
              <button style={{
                background: 'none',
                border: 'none',
                color: '#94a3b8',
                cursor: 'pointer'
              }}>
                <Filter size={16} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {topNews.map((news, i) => (
                <div key={i} style={{ 
                  padding: '1rem',
                  background: '#0f172a',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}>
                  <h4 style={{ 
                    fontSize: '0.875rem', 
                    fontWeight: '600', 
                    marginBottom: '0.5rem',
                    lineHeight: '1.3'
                  }}>
                    {news.title}
                  </h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                      {news.source}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                      {news.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Gainers */}
          <div style={{ 
            background: '#1e293b', 
            borderRadius: '12px', 
            padding: '1.5rem',
            border: '1px solid #334155'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>
                Top Gainers
              </h3>
              <button style={{
                background: 'none',
                border: 'none',
                color: '#94a3b8',
                cursor: 'pointer'
              }}>
                <Filter size={16} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '300px', overflowY: 'auto' }}>
              {topGainers.map((stock, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '0.75rem',
                  background: '#0f172a',
                  borderRadius: '6px'
                }}>
                  <div>
                    <p style={{ fontWeight: '600', fontSize: '0.875rem' }}>{stock.symbol}</p>
                    <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{stock.name}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontWeight: '600', fontSize: '0.875rem' }}>{stock.price}</p>
                    <p style={{ color: stock.color, fontSize: '0.75rem', fontWeight: '600' }}>
                      +{stock.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketOverview;