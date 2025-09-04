import React, { useState } from 'react';
import { Calendar, Download, ExternalLink, Search, Filter } from 'lucide-react';

const Press = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const pressReleases = [
    {
      id: 1,
      title: 'Bluestock Announces $50M Series C Funding Round',
      category: 'Funding',
      date: '2024-03-15',
      summary: 'Leading fintech company raises Series C to expand global market access and enhance AI-powered trading tools.',
      content: 'Bluestock, a leading financial technology platform, today announced the completion of a $50 million Series C funding round led by prominent venture capital firms...',
      downloadUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Bluestock Partners with Major Financial Institutions',
      category: 'Partnership',
      date: '2024-03-12',
      summary: 'Strategic partnerships with leading banks to provide enhanced trading and investment services.',
      content: 'Bluestock has formed strategic partnerships with several major financial institutions to expand its reach and provide enhanced services...',
      downloadUrl: '#',
      featured: false
    },
    {
      id: 3,
      title: 'New AI-Powered Portfolio Management Features Launched',
      category: 'Product',
      date: '2024-03-10',
      summary: 'Revolutionary AI technology helps investors optimize their portfolios with advanced machine learning algorithms.',
      content: 'Bluestock today unveiled its latest AI-powered portfolio management features, designed to help investors make smarter decisions...',
      downloadUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Bluestock Wins FinTech Innovation Award 2024',
      category: 'Awards',
      date: '2024-03-08',
      summary: 'Recognition for outstanding innovation in financial technology and user experience design.',
      content: 'Bluestock has been honored with the prestigious FinTech Innovation Award 2024 for its groundbreaking approach to retail investing...',
      downloadUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Expansion into European Markets Announced',
      category: 'Expansion',
      date: '2024-03-05',
      summary: 'Bluestock to launch services in 15 European countries, bringing advanced trading tools to new markets.',
      content: 'Following successful operations in North America, Bluestock is expanding its services to European markets...',
      downloadUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Q4 2023 Financial Results Released',
      category: 'Financial',
      date: '2024-02-28',
      summary: 'Strong quarterly performance with 150% year-over-year growth in active users.',
      content: 'Bluestock reported strong Q4 2023 financial results, demonstrating continued growth and market expansion...',
      downloadUrl: '#',
      featured: false
    },
    {
      id: 7,
      title: 'Bluestock CEO Featured in Forbes 30 Under 30',
      category: 'Recognition',
      date: '2024-02-25',
      summary: 'Company leadership recognized for innovation and impact in financial technology sector.',
      content: 'Bluestock CEO has been featured in Forbes 30 Under 30 list, highlighting the company\'s innovative approach...',
      downloadUrl: '#',
      featured: false
    },
    {
      id: 8,
      title: 'New Mobile App Features Enhance User Experience',
      category: 'Product',
      date: '2024-02-22',
      summary: 'Latest mobile app update includes advanced charting tools and real-time notifications.',
      content: 'Bluestock has released a major update to its mobile application, introducing new features that enhance the trading experience...',
      downloadUrl: '#',
      featured: false
    }
  ];

  const categories = ['All', 'Funding', 'Partnership', 'Product', 'Awards', 'Expansion', 'Financial', 'Recognition'];

  const filteredReleases = pressReleases.filter(release => {
    const matchesCategory = selectedCategory === 'All' || release.category === selectedCategory;
    const matchesSearch = release.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         release.summary.toLowerCase().includes(searchTerm.toLowerCase());
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
      'Funding': '#4F46E5',
      'Partnership': '#10b981',
      'Product': '#f59e0b',
      'Awards': '#8b5cf6',
      'Expansion': '#ef4444',
      'Financial': '#06b6d4',
      'Recognition': '#ec4899'
    };
    return colors[category] || '#64748b';
  };

  return (
    <div style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>
            Press & Media
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#64748b' }}>
            Latest news and announcements from Bluestock
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
                placeholder="Search press releases..."
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
              <Download size={16} />
              Media Kit
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

        {/* Featured Press Release */}
        {filteredReleases.find(release => release.featured) && (
          <div style={{ 
            background: 'white', 
            borderRadius: '12px', 
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
            marginBottom: '3rem'
          }}>
            <div style={{ 
              background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
              color: 'white',
              padding: '2rem'
            }}>
              <span style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '0.25rem 0.75rem',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: '600'
              }}>
                Featured
              </span>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>
                {filteredReleases.find(release => release.featured)?.title}
              </h2>
              <p style={{ fontSize: '1.125rem', opacity: '0.9' }}>
                {filteredReleases.find(release => release.featured)?.summary}
              </p>
            </div>
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#64748b' }}>
                  <Calendar size={16} />
                  {formatDate(filteredReleases.find(release => release.featured)?.date)}
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button style={{
                    background: '#4F46E5',
                    color: 'white',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <ExternalLink size={16} />
                    Read Full Release
                  </button>
                  <button style={{
                    background: 'transparent',
                    color: '#4F46E5',
                    border: '2px solid #4F46E5',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <Download size={16} />
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Press Releases Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {filteredReleases.filter(release => !release.featured).map(release => (
            <div key={release.id} style={{
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
                    background: getCategoryColor(release.category),
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    {release.category}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#64748b', fontSize: '0.875rem' }}>
                    <Calendar size={14} />
                    {formatDate(release.date)}
                  </div>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '0.5rem' }}>
                  {release.title}
                </h3>
              </div>

              {/* Summary */}
              <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                {release.summary}
              </p>

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
                  <ExternalLink size={16} />
                  Read More
                </button>
                <button style={{
                  padding: '0.75rem',
                  background: '#f1f5f9',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}>
                  <Download size={16} color="#64748b" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Media Contact */}
        <div style={{
          background: 'white',
          padding: '3rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>
            Media Contact
          </h2>
          <p style={{ color: '#64748b', marginBottom: '2rem' }}>
            For press inquiries, interviews, or additional information, please contact our media team.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1a202c', marginBottom: '0.5rem' }}>
                Press Inquiries
              </h3>
              <p style={{ color: '#64748b' }}>press@bluestock.com</p>
              <p style={{ color: '#64748b' }}>+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1a202c', marginBottom: '0.5rem' }}>
                Partnership Inquiries
              </h3>
              <p style={{ color: '#64748b' }}>partnerships@bluestock.com</p>
              <p style={{ color: '#64748b' }}>+1 (555) 123-4568</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1a202c', marginBottom: '0.5rem' }}>
                General Information
              </h3>
              <p style={{ color: '#64748b' }}>info@bluestock.com</p>
              <p style={{ color: '#64748b' }}>+1 (555) 123-4569</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press;