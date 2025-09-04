import React, { useState } from 'react';
import { Search, Filter, TrendingUp, TrendingDown, Star, Info } from 'lucide-react';

const MutualFunds = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const mutualFunds = [
    {
      id: 1,
      name: 'Bluestock Large Cap Growth Fund',
      category: 'Large Cap',
      nav: 45.67,
      change: 1.23,
      changePercent: 2.77,
      aum: 2500000000,
      expenseRatio: 0.65,
      rating: 5,
      minInvestment: 1000,
      exitLoad: '1% if redeemed within 1 year',
      manager: 'Sarah Johnson',
      inception: '2018-03-15'
    },
    {
      id: 2,
      name: 'Bluestock Mid Cap Opportunities Fund',
      category: 'Mid Cap',
      nav: 32.45,
      change: -0.87,
      changePercent: -2.61,
      aum: 1200000000,
      expenseRatio: 0.85,
      rating: 4,
      minInvestment: 500,
      exitLoad: '1% if redeemed within 1 year',
      manager: 'Michael Chen',
      inception: '2019-06-20'
    },
    {
      id: 3,
      name: 'Bluestock Small Cap Discovery Fund',
      category: 'Small Cap',
      nav: 28.91,
      change: 2.15,
      changePercent: 8.03,
      aum: 800000000,
      expenseRatio: 1.25,
      rating: 4,
      minInvestment: 500,
      exitLoad: '2% if redeemed within 2 years',
      manager: 'Emily Rodriguez',
      inception: '2020-01-10'
    },
    {
      id: 4,
      name: 'Bluestock Balanced Advantage Fund',
      category: 'Hybrid',
      nav: 18.76,
      change: 0.45,
      changePercent: 2.46,
      aum: 1800000000,
      expenseRatio: 0.95,
      rating: 5,
      minInvestment: 1000,
      exitLoad: '1% if redeemed within 1 year',
      manager: 'David Park',
      inception: '2017-09-05'
    },
    {
      id: 5,
      name: 'Bluestock Technology Innovation Fund',
      category: 'Sectoral',
      nav: 52.34,
      change: 3.21,
      changePercent: 6.53,
      aum: 950000000,
      expenseRatio: 1.15,
      rating: 4,
      minInvestment: 1000,
      exitLoad: '1% if redeemed within 1 year',
      manager: 'Lisa Thompson',
      inception: '2019-11-12'
    },
    {
      id: 6,
      name: 'Bluestock Debt Opportunities Fund',
      category: 'Debt',
      nav: 12.89,
      change: 0.12,
      changePercent: 0.94,
      aum: 2200000000,
      expenseRatio: 0.45,
      rating: 5,
      minInvestment: 1000,
      exitLoad: 'Nil',
      manager: 'Robert Kim',
      inception: '2016-04-18'
    },
    {
      id: 7,
      name: 'Bluestock International Equity Fund',
      category: 'International',
      nav: 24.67,
      change: -1.23,
      changePercent: -4.75,
      aum: 650000000,
      expenseRatio: 1.85,
      rating: 3,
      minInvestment: 5000,
      exitLoad: '2% if redeemed within 1 year',
      manager: 'Amanda Wilson',
      inception: '2020-08-25'
    },
    {
      id: 8,
      name: 'Bluestock ELSS Tax Saver Fund',
      category: 'ELSS',
      nav: 38.92,
      change: 1.87,
      changePercent: 5.05,
      aum: 1400000000,
      expenseRatio: 1.05,
      rating: 4,
      minInvestment: 500,
      exitLoad: 'Lock-in period of 3 years',
      manager: 'James Lee',
      inception: '2018-12-01'
    }
  ];

  const categories = ['All', 'Large Cap', 'Mid Cap', 'Small Cap', 'Hybrid', 'Sectoral', 'Debt', 'International', 'ELSS'];

  const filteredFunds = mutualFunds.filter(fund => {
    const matchesSearch = fund.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         fund.manager.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || fund.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatNumber = (num) => {
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
    return num.toString();
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        fill={i < rating ? '#f59e0b' : 'none'}
        color={i < rating ? '#f59e0b' : '#d1d5db'}
      />
    ));
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Large Cap': '#4F46E5',
      'Mid Cap': '#10b981',
      'Small Cap': '#f59e0b',
      'Hybrid': '#8b5cf6',
      'Sectoral': '#ef4444',
      'Debt': '#06b6d4',
      'International': '#ec4899',
      'ELSS': '#84cc16'
    };
    return colors[category] || '#64748b';
  };

  return (
    <div style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>
            Mutual Funds
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#64748b' }}>
            Discover and invest in professionally managed mutual fund schemes
          </p>
        </div>

        {/* Search and Filter */}
        <div style={{ 
          background: 'white', 
          padding: '2rem', 
          borderRadius: '12px', 
          marginBottom: '2rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <div style={{ position: 'relative', flex: '1', minWidth: '300px' }}>
              <Search size={20} style={{ 
                position: 'absolute', 
                left: '12px', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: '#64748b'
              }} />
              <input
                type="text"
                placeholder="Search mutual funds..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.75rem 0.75rem 2.5rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>
          </div>

          {/* Category Filter */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '0.5rem 1rem',
                  border: 'none',
                  borderRadius: '20px',
                  background: selectedCategory === category ? '#4F46E5' : '#f1f5f9',
                  color: selectedCategory === category ? 'white' : '#64748b',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  transition: 'all 0.3s'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Mutual Funds Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '1.5rem'
        }}>
          {filteredFunds.map(fund => (
            <div key={fund.id} style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}>
              {/* Fund Header */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a202c', flex: 1 }}>
                    {fund.name}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    {renderStars(fund.rating)}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{
                    background: getCategoryColor(fund.category),
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    {fund.category}
                  </span>
                  <span style={{ color: '#64748b', fontSize: '0.875rem' }}>
                    Managed by {fund.manager}
                  </span>
                </div>
              </div>

              {/* NAV and Performance */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '1rem', 
                marginBottom: '1.5rem',
                padding: '1rem',
                background: '#f8fafc',
                borderRadius: '8px'
              }}>
                <div>
                  <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Current NAV</p>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c' }}>
                    ₹{fund.nav.toFixed(2)}
                  </p>
                </div>
                <div>
                  <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.25rem' }}>1D Change</p>
                  <div>
                    <p style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: 'bold', 
                      color: fund.changePercent >= 0 ? '#10b981' : '#ef4444'
                    }}>
                      {fund.changePercent >= 0 ? '+' : ''}{fund.changePercent.toFixed(2)}%
                    </p>
                    <p style={{ 
                      fontSize: '0.875rem', 
                      color: fund.changePercent >= 0 ? '#10b981' : '#ef4444'
                    }}>
                      {fund.change >= 0 ? '+' : ''}₹{fund.change.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Fund Details */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.25rem' }}>AUM</p>
                  <p style={{ fontWeight: '600', color: '#1a202c' }}>₹{formatNumber(fund.aum)}</p>
                </div>
                <div>
                  <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Expense Ratio</p>
                  <p style={{ fontWeight: '600', color: '#1a202c' }}>{fund.expenseRatio}%</p>
                </div>
                <div>
                  <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Min Investment</p>
                  <p style={{ fontWeight: '600', color: '#1a202c' }}>₹{formatNumber(fund.minInvestment)}</p>
                </div>
                <div>
                  <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Exit Load</p>
                  <p style={{ fontWeight: '600', color: '#1a202c', fontSize: '0.875rem' }}>{fund.exitLoad}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button style={{
                  flex: 1,
                  background: '#4F46E5',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>
                  Invest Now
                </button>
                <button style={{
                  flex: 1,
                  background: 'transparent',
                  color: '#4F46E5',
                  border: '2px solid #4F46E5',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>
                  View Details
                </button>
                <button style={{
                  padding: '0.75rem',
                  background: '#f1f5f9',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}>
                  <Info size={16} color="#64748b" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1rem',
          marginTop: '3rem'
        }}>
          <div style={{ 
            background: 'white', 
            padding: '1.5rem', 
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#4F46E5', fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              {filteredFunds.length}
            </h3>
            <p style={{ color: '#64748b' }}>Available Funds</p>
          </div>
          <div style={{ 
            background: 'white', 
            padding: '1.5rem', 
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#10b981', fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              ₹{formatNumber(filteredFunds.reduce((sum, fund) => sum + fund.aum, 0))}
            </h3>
            <p style={{ color: '#64748b' }}>Total AUM</p>
          </div>
          <div style={{ 
            background: 'white', 
            padding: '1.5rem', 
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#f59e0b', fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              {categories.length - 1}
            </h3>
            <p style={{ color: '#64748b' }}>Fund Categories</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MutualFunds;