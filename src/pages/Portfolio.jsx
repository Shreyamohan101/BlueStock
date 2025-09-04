import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, DollarSign, BarChart3, PieChart, Calendar, Target } from 'lucide-react';
import { stocksData } from '../data/data';

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [user, setUser] = useState(null);
  const [timeframe, setTimeframe] = useState('1D');

  useEffect(() => {
    // Check user authentication
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    // Load portfolio from localStorage
    const savedPortfolio = localStorage.getItem('portfolio');
    if (savedPortfolio) {
      setPortfolio(JSON.parse(savedPortfolio));
    }
  }, []);

  const getPortfolioValue = () => {
    return portfolio.reduce((total, item) => {
      const currentStock = stocksData.find(s => s.symbol === item.symbol);
      return total + (item.quantity * (currentStock?.price || 0));
    }, 0);
  };

  const getPortfolioPnL = () => {
    return portfolio.reduce((total, item) => {
      const currentStock = stocksData.find(s => s.symbol === item.symbol);
      if (!currentStock) return total;
      const currentValue = item.quantity * currentStock.price;
      const investedValue = item.quantity * item.avgPrice;
      return total + (currentValue - investedValue);
    }, 0);
  };

  const getTotalInvested = () => {
    return portfolio.reduce((total, item) => {
      return total + (item.quantity * item.avgPrice);
    }, 0);
  };

  const getPortfolioReturn = () => {
    const invested = getTotalInvested();
    const pnl = getPortfolioPnL();
    return invested > 0 ? (pnl / invested) * 100 : 0;
  };

  const formatNumber = (num) => {
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
    return num.toFixed(2);
  };

  const getSectorAllocation = () => {
    const sectorMap = {};
    portfolio.forEach(item => {
      const stock = stocksData.find(s => s.symbol === item.symbol);
      if (stock) {
        const value = item.quantity * stock.price;
        sectorMap[stock.sector] = (sectorMap[stock.sector] || 0) + value;
      }
    });
    return sectorMap;
  };

  const sectorAllocation = getSectorAllocation();
  const totalValue = getPortfolioValue();

  if (!user) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '50vh',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <div style={{ fontSize: '1.125rem', color: '#64748b' }}>Please login to view your portfolio</div>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '0.5rem' }}>
            Portfolio Overview
          </h1>
          <p style={{ color: '#64748b' }}>
            Track your investments and performance
          </p>
        </div>

        {/* Portfolio Summary Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ 
                background: '#4F46E5', 
                padding: '0.75rem', 
                borderRadius: '8px' 
              }}>
                <DollarSign size={24} color="white" />
              </div>
              <div>
                <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Total Value</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c' }}>
                  ${formatNumber(totalValue)}
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {getPortfolioReturn() >= 0 ? <TrendingUp size={16} color="#10b981" /> : <TrendingDown size={16} color="#ef4444" />}
              <span style={{ 
                color: getPortfolioReturn() >= 0 ? '#10b981' : '#ef4444',
                fontWeight: '600',
                fontSize: '0.875rem'
              }}>
                {getPortfolioReturn() >= 0 ? '+' : ''}{getPortfolioReturn().toFixed(2)}%
              </span>
            </div>
          </div>

          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ 
                background: getPortfolioPnL() >= 0 ? '#10b981' : '#ef4444', 
                padding: '0.75rem', 
                borderRadius: '8px' 
              }}>
                {getPortfolioPnL() >= 0 ? <TrendingUp size={24} color="white" /> : <TrendingDown size={24} color="white" />}
              </div>
              <div>
                <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Total P&L</p>
                <p style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  color: getPortfolioPnL() >= 0 ? '#10b981' : '#ef4444'
                }}>
                  {getPortfolioPnL() >= 0 ? '+' : ''}${formatNumber(Math.abs(getPortfolioPnL()))}
                </p>
              </div>
            </div>
            <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
              Since inception
            </p>
          </div>

          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ 
                background: '#f59e0b', 
                padding: '0.75rem', 
                borderRadius: '8px' 
              }}>
                <Target size={24} color="white" />
              </div>
              <div>
                <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Invested</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c' }}>
                  ${formatNumber(getTotalInvested())}
                </p>
              </div>
            </div>
            <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
              Total capital deployed
            </p>
          </div>

          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ 
                background: '#8b5cf6', 
                padding: '0.75rem', 
                borderRadius: '8px' 
              }}>
                <BarChart3 size={24} color="white" />
              </div>
              <div>
                <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Holdings</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c' }}>
                  {portfolio.length}
                </p>
              </div>
            </div>
            <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
              Unique positions
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          {/* Holdings Table */}
          <div style={{ 
            background: 'white', 
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            overflow: 'hidden'
          }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a202c' }}>
                Your Holdings
              </h3>
            </div>
            
            {portfolio.length === 0 ? (
              <div style={{ 
                padding: '3rem', 
                textAlign: 'center',
                color: '#64748b'
              }}>
                <BarChart3 size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
                <p>No holdings yet. Start investing to see your portfolio here.</p>
              </div>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead style={{ background: '#f8fafc' }}>
                    <tr>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Stock</th>
                      <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600' }}>Qty</th>
                      <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600' }}>Avg Price</th>
                      <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600' }}>Current Price</th>
                      <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600' }}>Value</th>
                      <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600' }}>P&L</th>
                    </tr>
                  </thead>
                  <tbody>
                    {portfolio.map(item => {
                      const currentStock = stocksData.find(s => s.symbol === item.symbol);
                      if (!currentStock) return null;
                      
                      const currentValue = item.quantity * currentStock.price;
                      const investedValue = item.quantity * item.avgPrice;
                      const pnl = currentValue - investedValue;
                      const pnlPercent = (pnl / investedValue) * 100;
                      
                      return (
                        <tr key={item.symbol} style={{ borderBottom: '1px solid #f1f5f9' }}>
                          <td style={{ padding: '1rem' }}>
                            <div>
                              <p style={{ fontWeight: '600', color: '#4F46E5' }}>{item.symbol}</p>
                              <p style={{ fontSize: '0.875rem', color: '#64748b' }}>{currentStock.name}</p>
                            </div>
                          </td>
                          <td style={{ padding: '1rem', textAlign: 'right', fontWeight: '600' }}>
                            {item.quantity}
                          </td>
                          <td style={{ padding: '1rem', textAlign: 'right' }}>
                            ${item.avgPrice.toFixed(2)}
                          </td>
                          <td style={{ padding: '1rem', textAlign: 'right', fontWeight: '600' }}>
                            ${currentStock.price.toFixed(2)}
                          </td>
                          <td style={{ padding: '1rem', textAlign: 'right', fontWeight: '600' }}>
                            ${currentValue.toFixed(2)}
                          </td>
                          <td style={{ 
                            padding: '1rem', 
                            textAlign: 'right', 
                            fontWeight: '600',
                            color: pnl >= 0 ? '#10b981' : '#ef4444'
                          }}>
                            {pnl >= 0 ? '+' : ''}${pnl.toFixed(2)}
                            <br />
                            <span style={{ fontSize: '0.875rem' }}>
                              ({pnl >= 0 ? '+' : ''}{pnlPercent.toFixed(2)}%)
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Sector Allocation */}
          <div style={{ 
            background: 'white', 
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1.5rem' }}>
              Sector Allocation
            </h3>
            
            {Object.keys(sectorAllocation).length === 0 ? (
              <div style={{ textAlign: 'center', color: '#64748b', padding: '2rem 0' }}>
                <PieChart size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
                <p>No sector data available</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {Object.entries(sectorAllocation)
                  .sort(([,a], [,b]) => b - a)
                  .map(([sector, value], index) => {
                    const percentage = (value / totalValue) * 100;
                    const colors = ['#4F46E5', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];
                    
                    return (
                      <div key={sector}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                          <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>{sector}</span>
                          <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
                            {percentage.toFixed(1)}%
                          </span>
                        </div>
                        <div style={{ 
                          width: '100%', 
                          height: '8px', 
                          background: '#f1f5f9', 
                          borderRadius: '4px',
                          overflow: 'hidden'
                        }}>
                          <div style={{
                            width: `${percentage}%`,
                            height: '100%',
                            background: colors[index % colors.length],
                            borderRadius: '4px'
                          }} />
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;