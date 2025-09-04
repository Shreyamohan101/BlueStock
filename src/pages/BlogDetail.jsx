import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, Clock, Share2, Bookmark, ArrowLeft, ThumbsUp, MessageCircle } from 'lucide-react';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock blog data - in real app, this would fetch from API
    const mockBlog = {
      _id: id,
      title: 'Understanding Market Fundamentals: A Comprehensive Guide to Stock Market Investing',
      content: `
        <p>The stock market can seem intimidating to newcomers, but understanding its fundamental principles is crucial for anyone looking to build wealth through investing. In this comprehensive guide, we'll break down the essential concepts every investor should know.</p>

        <h2>What is the Stock Market?</h2>
        <p>The stock market is a collection of markets where stocks (pieces of ownership in businesses) are traded between investors. It usually refers to the exchanges where stocks and other securities are bought and sold.</p>

        <h2>Key Market Fundamentals</h2>
        <p>Before diving into investing, it's essential to understand these core concepts:</p>

        <h3>1. Supply and Demand</h3>
        <p>Stock prices are determined by supply and demand. When more people want to buy a stock (demand) than sell it (supply), the price moves up. Conversely, if more people want to sell a stock than buy it, there would be greater supply than demand, and the price would fall.</p>

        <h3>2. Market Capitalization</h3>
        <p>Market cap is the total value of a company's shares. It's calculated by multiplying the stock price by the number of outstanding shares. Companies are typically categorized as:</p>
        <ul>
          <li><strong>Large-cap:</strong> Over $10 billion</li>
          <li><strong>Mid-cap:</strong> $2 billion to $10 billion</li>
          <li><strong>Small-cap:</strong> $300 million to $2 billion</li>
        </ul>

        <h3>3. Volatility</h3>
        <p>Volatility refers to the degree of variation in a stock's price over time. Higher volatility means larger price swings, which can present both opportunities and risks for investors.</p>

        <h2>Types of Analysis</h2>
        <p>There are two main approaches to analyzing stocks:</p>

        <h3>Fundamental Analysis</h3>
        <p>This involves evaluating a company's financial health, management quality, competitive position, and growth prospects. Key metrics include:</p>
        <ul>
          <li>Price-to-Earnings (P/E) ratio</li>
          <li>Revenue growth</li>
          <li>Debt-to-equity ratio</li>
          <li>Return on equity (ROE)</li>
        </ul>

        <h3>Technical Analysis</h3>
        <p>Technical analysis focuses on price patterns and trading volume to predict future price movements. Common tools include:</p>
        <ul>
          <li>Moving averages</li>
          <li>Support and resistance levels</li>
          <li>Chart patterns</li>
          <li>Technical indicators</li>
        </ul>

        <h2>Risk Management</h2>
        <p>Successful investing isn't just about picking winners; it's about managing risk. Here are key principles:</p>

        <h3>Diversification</h3>
        <p>Don't put all your eggs in one basket. Spread your investments across different sectors, company sizes, and even asset classes to reduce risk.</p>

        <h3>Position Sizing</h3>
        <p>Never invest more than you can afford to lose in any single stock. A common rule is to limit individual positions to 5-10% of your total portfolio.</p>

        <h3>Stop Losses</h3>
        <p>Set predetermined exit points to limit losses. This helps remove emotion from selling decisions and protects your capital.</p>

        <h2>Getting Started</h2>
        <p>For beginners, consider these steps:</p>
        <ol>
          <li><strong>Educate yourself:</strong> Read books, take courses, and stay informed about market news</li>
          <li><strong>Start small:</strong> Begin with a small amount you can afford to lose</li>
          <li><strong>Use dollar-cost averaging:</strong> Invest a fixed amount regularly regardless of market conditions</li>
          <li><strong>Consider index funds:</strong> These provide instant diversification and are perfect for beginners</li>
          <li><strong>Stay disciplined:</strong> Stick to your investment plan and avoid emotional decisions</li>
        </ol>

        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li>Trying to time the market</li>
          <li>Following hot tips without research</li>
          <li>Panic selling during market downturns</li>
          <li>Not having a clear investment strategy</li>
          <li>Ignoring fees and taxes</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Understanding market fundamentals is the foundation of successful investing. While the stock market can be volatile in the short term, it has historically provided strong returns for patient, disciplined investors. Remember, investing is a marathon, not a sprint. Focus on building a solid foundation of knowledge, develop a clear strategy, and stay committed to your long-term goals.</p>

        <p>The key to success in the stock market isn't about finding the next big winner—it's about consistently making informed decisions based on solid fundamentals and maintaining discipline through market ups and downs.</p>
      `,
      author: 'Sarah Johnson',
      category: 'Education',
      tags: ['Investing', 'Stock Market', 'Fundamentals', 'Beginner Guide'],
      publishedAt: '2024-03-15T10:00:00Z',
      readTime: '12 min read',
      imageUrl: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg',
      likes: 234,
      comments: 45,
      shares: 67
    };

    const mockRelatedBlogs = [
      {
        _id: '2',
        title: 'Top 5 Investment Strategies for 2024',
        author: 'Michael Chen',
        category: 'Strategy',
        publishedAt: '2024-03-12',
        imageUrl: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg',
        readTime: '8 min read'
      },
      {
        _id: '3',
        title: 'How AI is Transforming Stock Analysis',
        author: 'Emily Rodriguez',
        category: 'Technology',
        publishedAt: '2024-03-10',
        imageUrl: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg',
        readTime: '6 min read'
      },
      {
        _id: '4',
        title: 'Risk Management: Protecting Your Portfolio',
        author: 'David Park',
        category: 'Risk Management',
        publishedAt: '2024-03-08',
        imageUrl: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg',
        readTime: '10 min read'
      }
    ];

    setBlog(mockBlog);
    setRelatedBlogs(mockRelatedBlogs);
    setLoading(false);
  }, [id]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Education': '#3b82f6',
      'Strategy': '#10b981',
      'Technology': '#8b5cf6',
      'Risk Management': '#ef4444',
      'Global Markets': '#f59e0b',
      'Income Investing': '#06b6d4',
      'ESG': '#84cc16',
      'Cryptocurrency': '#f97316',
      'Psychology': '#ec4899',
      'IPO': '#6366f1',
      'Options': '#14b8a6',
      'Real Estate': '#f43f5e'
    };
    return colors[category] || '#64748b';
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '50vh' 
      }}>
        <div style={{ fontSize: '1.125rem', color: '#64748b' }}>Loading...</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '50vh',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <div style={{ fontSize: '1.125rem', color: '#64748b' }}>Blog post not found</div>
        <Link to="/blog" style={{ color: '#4F46E5', textDecoration: 'none' }}>
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh' }}>
      {/* Back Navigation */}
      <div style={{ background: 'white', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 2rem' }}>
          <Link 
            to="/blog" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              color: '#4F46E5',
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem' }}>
          {/* Main Content */}
          <article style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            {/* Hero Image */}
            <div style={{ 
              height: '400px', 
              backgroundImage: `url(${blog.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} />

            {/* Article Content */}
            <div style={{ padding: '3rem' }}>
              {/* Category Badge */}
              <div style={{ marginBottom: '1rem' }}>
                <span style={{
                  background: getCategoryColor(blog.category),
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  {blog.category}
                </span>
              </div>

              {/* Title */}
              <h1 style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold', 
                color: '#1a202c', 
                marginBottom: '1.5rem',
                lineHeight: '1.2'
              }}>
                {blog.title}
              </h1>

              {/* Meta Information */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '2rem', 
                marginBottom: '2rem',
                paddingBottom: '2rem',
                borderBottom: '1px solid #e2e8f0'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <User size={16} color="#64748b" />
                  <span style={{ color: '#64748b', fontWeight: '500' }}>{blog.author}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Calendar size={16} color="#64748b" />
                  <span style={{ color: '#64748b' }}>{formatDate(blog.publishedAt)}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={16} color="#64748b" />
                  <span style={{ color: '#64748b' }}>{blog.readTime}</span>
                </div>
              </div>

              {/* Social Actions */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                marginBottom: '3rem',
                padding: '1rem',
                background: '#f8fafc',
                borderRadius: '8px'
              }}>
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'none',
                  border: 'none',
                  color: '#64748b',
                  cursor: 'pointer',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  transition: 'all 0.3s'
                }}>
                  <ThumbsUp size={16} />
                  {blog.likes}
                </button>
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'none',
                  border: 'none',
                  color: '#64748b',
                  cursor: 'pointer',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  transition: 'all 0.3s'
                }}>
                  <MessageCircle size={16} />
                  {blog.comments}
                </button>
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'none',
                  border: 'none',
                  color: '#64748b',
                  cursor: 'pointer',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  transition: 'all 0.3s'
                }}>
                  <Share2 size={16} />
                  Share
                </button>
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'none',
                  border: 'none',
                  color: '#64748b',
                  cursor: 'pointer',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  transition: 'all 0.3s',
                  marginLeft: 'auto'
                }}>
                  <Bookmark size={16} />
                  Save
                </button>
              </div>

              {/* Article Content */}
              <div 
                style={{ 
                  color: '#374151', 
                  lineHeight: '1.8', 
                  fontSize: '1.125rem',
                  marginBottom: '3rem'
                }}
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Tags */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1a202c', marginBottom: '1rem' }}>
                  Tags
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {blog.tags.map((tag, index) => (
                    <span key={index} style={{
                      background: '#f1f5f9',
                      color: '#475569',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div style={{ 
                background: '#f8fafc', 
                padding: '2rem', 
                borderRadius: '12px',
                border: '1px solid #e2e8f0'
              }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1a202c', marginBottom: '1rem' }}>
                  About the Author
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 'bold'
                  }}>
                    {blog.author.charAt(0)}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1a202c', marginBottom: '0.25rem' }}>
                      {blog.author}
                    </h4>
                    <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
                      Senior Financial Analyst with over 10 years of experience in market research and investment strategy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside>
            {/* Related Articles */}
            <div style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              marginBottom: '2rem'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1a202c', marginBottom: '1.5rem' }}>
                Related Articles
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {relatedBlogs.map((relatedBlog) => (
                  <Link 
                    key={relatedBlog._id}
                    to={`/blog/${relatedBlog._id}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div style={{ display: 'flex', gap: '1rem', cursor: 'pointer' }}>
                      <div style={{
                        width: '80px',
                        height: '60px',
                        borderRadius: '8px',
                        backgroundImage: `url(${relatedBlog.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        flexShrink: 0
                      }} />
                      <div>
                        <h4 style={{ 
                          fontSize: '0.875rem', 
                          fontWeight: '600', 
                          color: '#1a202c', 
                          marginBottom: '0.5rem',
                          lineHeight: '1.3'
                        }}>
                          {relatedBlog.title}
                        </h4>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ color: '#64748b', fontSize: '0.75rem' }}>
                            {relatedBlog.author}
                          </span>
                          <span style={{ color: '#64748b', fontSize: '0.75rem' }}>•</span>
                          <span style={{ color: '#64748b', fontSize: '0.75rem' }}>
                            {relatedBlog.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div style={{ 
              background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', 
              color: 'white',
              padding: '2rem', 
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
                Stay Updated
              </h3>
              <p style={{ fontSize: '0.875rem', marginBottom: '1.5rem', opacity: '0.9' }}>
                Get the latest market insights and investment tips delivered to your inbox.
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: 'none',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}
              />
              <button style={{
                width: '100%',
                background: 'white',
                color: '#4F46E5',
                border: 'none',
                padding: '0.75rem',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Subscribe
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;