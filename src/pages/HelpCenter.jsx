import React, { useState } from 'react';
import { Search, Book, MessageCircle, Video, Download, ChevronRight, Star, ThumbsUp, ThumbsDown } from 'lucide-react';

const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { id: 'All', name: 'All Topics', icon: Book, count: 45 },
    { id: 'getting-started', name: 'Getting Started', icon: Book, count: 12 },
    { id: 'trading', name: 'Trading', icon: MessageCircle, count: 15 },
    { id: 'account', name: 'Account Management', icon: Book, count: 8 },
    { id: 'billing', name: 'Billing & Payments', icon: Book, count: 6 },
    { id: 'technical', name: 'Technical Issues', icon: Book, count: 4 }
  ];

  const articles = [
    {
      id: 1,
      title: 'How to Get Started with Bluestock',
      category: 'getting-started',
      description: 'Complete guide to setting up your account and making your first trade.',
      readTime: '5 min read',
      rating: 4.8,
      helpful: 156,
      views: 2340
    },
    {
      id: 2,
      title: 'Understanding Stock Market Basics',
      category: 'getting-started',
      description: 'Learn the fundamentals of stock market investing and trading.',
      readTime: '8 min read',
      rating: 4.9,
      helpful: 203,
      views: 3120
    },
    {
      id: 3,
      title: 'How to Place Your First Trade',
      category: 'trading',
      description: 'Step-by-step guide to executing your first stock trade on our platform.',
      readTime: '6 min read',
      rating: 4.7,
      helpful: 189,
      views: 2890
    },
    {
      id: 4,
      title: 'Setting Up Price Alerts',
      category: 'trading',
      description: 'Learn how to set up and manage price alerts for your favorite stocks.',
      readTime: '4 min read',
      rating: 4.6,
      helpful: 134,
      views: 1560
    },
    {
      id: 5,
      title: 'Managing Your Portfolio',
      category: 'account',
      description: 'Tips and tricks for effectively managing your investment portfolio.',
      readTime: '7 min read',
      rating: 4.8,
      helpful: 167,
      views: 2100
    },
    {
      id: 6,
      title: 'Understanding Fees and Charges',
      category: 'billing',
      description: 'Complete breakdown of all fees and charges on our platform.',
      readTime: '5 min read',
      rating: 4.5,
      helpful: 98,
      views: 1890
    },
    {
      id: 7,
      title: 'Troubleshooting Login Issues',
      category: 'technical',
      description: 'Common solutions for login and authentication problems.',
      readTime: '3 min read',
      rating: 4.4,
      helpful: 87,
      views: 1230
    },
    {
      id: 8,
      title: 'Two-Factor Authentication Setup',
      category: 'account',
      description: 'How to enable and configure two-factor authentication for your account.',
      readTime: '4 min read',
      rating: 4.7,
      helpful: 145,
      views: 1670
    }
  ];

  const quickActions = [
    {
      title: 'Live Chat Support',
      description: 'Chat with our support team',
      icon: MessageCircle,
      action: 'Start Chat',
      color: '#4F46E5'
    },
    {
      title: 'Video Tutorials',
      description: 'Watch step-by-step guides',
      icon: Video,
      action: 'Watch Videos',
      color: '#10b981'
    },
    {
      title: 'Download Guides',
      description: 'PDF guides and resources',
      icon: Download,
      action: 'Download',
      color: '#f59e0b'
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={12}
        fill={i < Math.floor(rating) ? '#f59e0b' : 'none'}
        color={i < Math.floor(rating) ? '#f59e0b' : '#d1d5db'}
      />
    ));
  };

  return (
    <div style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>
            Help Center
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#64748b', marginBottom: '2rem' }}>
            Find answers to your questions and get the help you need
          </p>
          
          {/* Search Bar */}
          <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
            <Search size={20} style={{ 
              position: 'absolute', 
              left: '16px', 
              top: '50%', 
              transform: 'translateY(-50%)',
              color: '#64748b'
            }} />
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem 1rem 1rem 3rem',
                border: '2px solid #e2e8f0',
                borderRadius: '12px',
                fontSize: '1rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
              }}
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {quickActions.map((action, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              textAlign: 'center',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: `${action.color}20`,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem'
              }}>
                <action.icon size={24} color={action.color} />
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '0.5rem' }}>
                {action.title}
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1rem' }}>
                {action.description}
              </p>
              <button style={{
                background: action.color,
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                {action.action}
              </button>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '3rem' }}>
          {/* Categories Sidebar */}
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            height: 'fit-content'
          }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1.5rem' }}>
              Categories
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: selectedCategory === category.id ? '#f0f4ff' : 'transparent',
                    color: selectedCategory === category.id ? '#4F46E5' : '#64748b',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.3s'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <category.icon size={16} />
                    <span style={{ fontWeight: '500' }}>{category.name}</span>
                  </div>
                  <span style={{ 
                    background: selectedCategory === category.id ? '#4F46E5' : '#e2e8f0',
                    color: selectedCategory === category.id ? 'white' : '#64748b',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Articles */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c' }}>
                {selectedCategory === 'All' ? 'All Articles' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <span style={{ color: '#64748b' }}>
                {filteredArticles.length} articles found
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {filteredArticles.map(article => (
                <div key={article.id} style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '0.5rem' }}>
                        {article.title}
                      </h3>
                      <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '1rem' }}>
                        {article.description}
                      </p>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', fontSize: '0.875rem', color: '#64748b' }}>
                        <span>{article.readTime}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          {renderStars(article.rating)}
                          <span style={{ marginLeft: '0.25rem' }}>{article.rating}</span>
                        </div>
                        <span>{article.views} views</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <ThumbsUp size={12} />
                          <span>{article.helpful}</span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight size={20} color="#64748b" />
                  </div>
                </div>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div style={{ 
                textAlign: 'center', 
                padding: '3rem',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
              }}>
                <Book size={48} color="#64748b" style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1a202c', marginBottom: '0.5rem' }}>
                  No articles found
                </h3>
                <p style={{ color: '#64748b' }}>
                  Try adjusting your search terms or browse different categories.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Contact Support */}
        <div style={{
          background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
          color: 'white',
          padding: '3rem',
          borderRadius: '12px',
          textAlign: 'center',
          marginTop: '3rem'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Still Need Help?
          </h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: '0.9' }}>
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button style={{
              background: 'white',
              color: '#4F46E5',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Contact Support
            </button>
            <button style={{
              background: 'transparent',
              color: 'white',
              border: '2px solid white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;