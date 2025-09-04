import React, { useState } from 'react';
import { Search, Filter, TrendingUp, TrendingDown, BarChart3, Download, Calendar } from 'lucide-react';

const MarketResearch = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const researchReports = [
    {
      id: 1,
      title: 'Q4 2024 Technology Sector Analysis',
      category: 'Sector Analysis',
      author: 'Sarah Johnson',
      date: '2024-03-15',
      summary: 'Comprehensive analysis of technology sector performance and future outlook.',
      tags: ['Technology', 'Growth', 'AI', 'Cloud Computing'],
      downloadUrl: '#',
      premium: false
    },
    {
      id: 2,
      title: 'Federal Reserve Policy Impact on Markets',
      category: 'Economic Analysis',
      author: 'Michael Chen',
      date: '2024-03-12',
      summary: 'Analysis of recent Fed decisions and their impact on equity markets.',
      tags: ['Federal Reserve', 'Interest Rates', 'Monetary Policy'],
      downloadUrl: '#',
      premium: true
    },
    {
      id: 3,
      title: 'Emerging Markets Investment Opportunities',
      category: 'Global Markets',
      author: 'Emily Rodriguez',
      date: '2024-03-10',
      summary: 'Identifying growth opportunities in emerging market economies.',
      tags: ['Emerging Markets', 'International', 'Growth'],
      downloadUrl: '#',
      premium: true
    },
    {
      id: 4,
      title: 'ESG Investing Trends and Performance',
      category: 'ESG Research',
      author: 'David Park',
      date: '2024-03-08',
      summary: 'Analysis of ESG investment strategies and their market performance.',
      tags: ['ESG', 'Sustainable Investing', 'Performance'],
      downloadUrl: '#',
      premium: false
    },
    {
      id: 5,
      title: 'Cryptocurrency Market Outlook 2024',
      category: 'Alternative Assets',
      author: 'Lisa Thompson',
      date: '2024-03-05',
      summary: 'Comprehensive outlook on cryptocurrency markets and blockchain adoption.',
      tags: ['Cryptocurrency', 'Blockchain', 'Digital Assets'],
      downloadUrl: '#',
      premium: true
    },
    {
      id: 6,
      title: 'Healthcare Sector Post-Pandemic Analysis',
      category: 'Sector Analysis',
      author: 'Robert Kim',
      date: '2024-03-03',
      summary: 'Healthcare sector transformation and investment opportunities.',
      tags: ['Healthcare', 'Biotech', 'Medical Devices'],
      downloadUrl: '#',
      premium: false
    }
  ];

  const categories = ['All', 'Sector Analysis', 'Economic Analysis', 'Global Markets', 'ESG Research', 'Alternative Assets'];

  const filteredReports = researchReports.filter(report => {
    const matchesCategory = selectedCategory === 'All' || report.category === selectedCategory;
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Sector Analysis': '#4F46E5',
      'Economic Analysis': '#10b981',
      'Global Markets': '#f59e0b',
      'ESG Research': '#84cc16',
      'Alternative Assets': '#8b5cf6'
    };
    return colors[category] || '#64748b';
  };

  return (
    <div style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>
            Market Research
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#64748b' }}>
            In-depth analysis and insights from our research team
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
                placeholder="Search research reports..."
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
            <button style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#4F46E5',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              cursor: 'pointer'
            }}>
              <Filter size={16} />
              Advanced Filter
            </button>
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

        {/* Research Reports Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {filteredReports.map(report => (
            <div key={report.id} style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}>
              {/* Header */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <span style={{
                    background: getCategoryColor(report.category),
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    {report.category}
                  </span>
                  {report.premium && (
                    <span style={{
                      background: '#f59e0b',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      Premium
                    </span>
                  )}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '0.5rem' }}>
                  {report.title}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#64748b', fontSize: '0.875rem' }}>
                  <span>By {report.author}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Calendar size={14} />
                    {formatDate(report.date)}
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                {report.summary}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {report.tags.map((tag, index) => (
                  <span key={index} style={{
                    background: '#f1f5f9',
                    color: '#475569',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '12px',
                    fontSize: '0.75rem'
                  }}>
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button style={{
                  flex: 1,
                  background: '#4F46E5',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}>
                  <Download size={16} />
                  Download
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
                  Read Online
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Market Insights Summary */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem'
        }}>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <BarChart3 size={32} color="#4F46E5" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ color: '#4F46E5', fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              {filteredReports.length}
            </h3>
            <p style={{ color: '#64748b' }}>Research Reports</p>
          </div>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <TrendingUp size={32} color="#10b981" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ color: '#10b981', fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              {categories.length - 1}
            </h3>
            <p style={{ color: '#64748b' }}>Research Categories</p>
          </div>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <TrendingDown size={32} color="#f59e0b" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ color: '#f59e0b', fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Weekly
            </h3>
            <p style={{ color: '#64748b' }}>Update Frequency</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketResearch;