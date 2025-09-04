import React, { useState } from 'react';
import { TrendingUp, TrendingDown, BarChart3, PieChart } from 'lucide-react';
import { stocksData } from '../data/data';

const Sectors = () => {
  const [selectedSector, setSelectedSector] = useState('All');

  // Calculate sector data
  const sectorData = stocksData.reduce((acc, stock) => {
    if (!acc[stock.sector]) {
      acc[stock.sector] = {
        name: stock.sector,
        stocks: [],
        totalMarketCap: 0,
        avgChange: 0,
        gainers: 0,
        losers: 0
      };
    }
    acc[stock.sector].stocks.push(stock);
    acc[stock.sector].totalMarketCap += stock.marketCap;
    return acc;
  }, {});

  // Calculate averages and counts
  Object.keys(sectorData).forEach(sector => {
    const data = sectorData[sector];
    data.avgChange = data.stocks.reduce((sum, stock) => sum + stock.changePercent, 0) / data.stocks.length;
    data.gainers = data.stocks.filter(stock => stock.changePercent > 0).length;
    data.losers = data.stocks.filter(stock => stock.changePercent < 0).length;
  });

  const sectors = Object.values(sectorData).sort((a, b) => b.totalMarketCap - a.totalMarketCap);

  const formatNumber = (num) => {
    if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    return num.toString();
  };

  const getSectorIcon = (sectorName) => {
    const icons = {
      'Technology': '💻',
      'Healthcare': '🏥',
      'Finance': '🏦',
      'Energy': '⚡',
      'Consumer': '🛍️',
      'Industrial': '🏭',
      'Materials': '🔧',
      'Utilities': '💡',
      'Real Estate': '🏠',
      'Telecommunications': '📱'
    };
    return icons[sectorName] || '📊';
  };

  const getSectorColor = (index) => {
    const colors = [
      '#4F46E5', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6',
      '#06b6d4', '#84cc16', '#f97316', '#ec4899', '#6366f1'
    ];
    return colors[index % colors.length];
  };

  return (
    <div style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>
            Sector Analysis
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#64748b' }}>
            Comprehensive sector performance and market analysis
          </p>
        </div>

        {/* Sector Overview Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {sectors.map((sector, index) => (
            <div key={sector.name} style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer',
              border: selectedSector === sector.name ? `3px solid ${getSectorColor(index)}` : '3px solid transparent'
            }}
            onClick={() => setSelectedSector(selectedSector === sector.name ? 'All' : sector.name)}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  fontSize: '2rem',
                  marginRight: '1rem',
                  width: '60px',
                  height: '60px',
                  background: `${getSectorColor(index)}20`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {getSectorIcon(sector.name)}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '0.25rem' }}>
                    {sector.name}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
                    {sector.stocks.length} companies
                  </p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Market Cap</p>
                  <p style={{ fontWeight: 'bold', color: '#1a202c' }}>
                    ${formatNumber(sector.totalMarketCap)}
                  </p>
                </div>
                <div>
                  <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Avg Change</p>
                  <p style={{ 
                    fontWeight: 'bold', 
                    color: sector.avgChange >= 0 ? '#10b981' : '#ef4444'
                  }}>
                    {sector.avgChange >= 0 ? '+' : ''}{sector.avgChange.toFixed(2)}%
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <TrendingUp size={16} color="#10b981" />
                  <span style={{ color: '#10b981', fontWeight: '600' }}>{sector.gainers}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <TrendingDown size={16} color="#ef4444" />
                  <span style={{ color: '#ef4444', fontWeight: '600' }}>{sector.losers}</span>
                </div>
                <div style={{
                  background: getSectorColor(index),
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>
                  #{index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Sector View */}
        {selectedSector !== 'All' && (
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            marginBottom: '2rem'
          }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1.5rem' }}>
              {selectedSector} Sector Details
            </h2>
            
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#374151' }}>Company</th>
                    <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: '#374151' }}>Price</th>
                    <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: '#374151' }}>Change %</th>
                    <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: '#374151' }}>Market Cap</th>
                    <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: '#374151' }}>Volume</th>
                  </tr>
                </thead>
                <tbody>
                  {sectorData[selectedSector].stocks
                    .sort((a, b) => b.marketCap - a.marketCap)
                    .map((stock) => (
                    <tr key={stock.symbol} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '1rem' }}>
                        <div>
                          <p style={{ fontWeight: '600', color: '#4F46E5' }}>{stock.symbol}</p>
                          <p style={{ fontSize: '0.875rem', color: '#64748b' }}>{stock.name}</p>
                        </div>
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: '#1a202c' }}>
                        ${stock.price.toFixed(2)}
                      </td>
                      <td style={{ 
                        padding: '1rem', 
                        textAlign: 'right', 
                        fontWeight: '600',
                        color: stock.changePercent >= 0 ? '#10b981' : '#ef4444'
                      }}>
                        {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'right', color: '#64748b' }}>
                        ${formatNumber(stock.marketCap)}
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'right', color: '#64748b' }}>
                        {formatNumber(stock.volume)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Market Summary */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1rem'
        }}>
          <div style={{ 
            background: 'white', 
            padding: '1.5rem', 
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <BarChart3 size={32} color="#4F46E5" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ color: '#4F46E5', fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              {sectors.length}
            </h3>
            <p style={{ color: '#64748b' }}>Active Sectors</p>
          </div>
          <div style={{ 
            background: 'white', 
            padding: '1.5rem', 
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <TrendingUp size={32} color="#10b981" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ color: '#10b981', fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              {sectors.filter(s => s.avgChange > 0).length}
            </h3>
            <p style={{ color: '#64748b' }}>Positive Sectors</p>
          </div>
          <div style={{ 
            background: 'white', 
            padding: '1.5rem', 
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <PieChart size={32} color="#f59e0b" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ color: '#f59e0b', fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              ${formatNumber(sectors.reduce((sum, sector) => sum + sector.totalMarketCap, 0))}
            </h3>
            <p style={{ color: '#64748b' }}>Total Market Cap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectors;