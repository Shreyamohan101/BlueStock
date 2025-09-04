import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import axios from 'axios';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddBlogModal, setShowAddBlogModal] = useState(false);
  const [user, setUser] = useState(null);
  const blogsPerPage = 6;

  useEffect(() => {
    // Check user role
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'}/api/blogs`);
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      // Mock data for demo
      setBlogs([
        {
          _id: '1',
          title: 'Understanding Market Fundamentals: A Beginner\'s Guide',
          author: 'Sarah Johnson',
          category: 'Education',
          publishedAt: '2024-03-15',
          imageUrl: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg',
          readTime: '12 min read'
        },
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
        },
        {
          _id: '5',
          title: 'Global Markets: Opportunities in Emerging Economies',
          author: 'Lisa Thompson',
          category: 'Global Markets',
          publishedAt: '2024-03-05',
          imageUrl: 'https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg',
          readTime: '7 min read'
        },
        {
          _id: '6',
          title: 'Dividend Investing: Building Passive Income',
          author: 'Robert Kim',
          category: 'Income Investing',
          publishedAt: '2024-03-03',
          imageUrl: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg',
          readTime: '9 min read'
        },
        {
          _id: '7',
          title: 'ESG Investing: Sustainable Finance Trends',
          author: 'Amanda Wilson',
          category: 'ESG',
          publishedAt: '2024-03-01',
          imageUrl: 'https://images.pexels.com/photos/9763859/pexels-photo-9763859.jpeg',
          readTime: '11 min read'
        },
        {
          _id: '8',
          title: 'Cryptocurrency Integration in Traditional Portfolios',
          author: 'James Lee',
          category: 'Cryptocurrency',
          publishedAt: '2024-02-28',
          imageUrl: 'https://images.pexels.com/photos/7567565/pexels-photo-7567565.jpeg',
          readTime: '8 min read'
        },
        {
          _id: '9',
          title: 'Market Psychology: Understanding Investor Behavior',
          author: 'Dr. Rachel Green',
          category: 'Psychology',
          publishedAt: '2024-02-25',
          imageUrl: 'https://images.pexels.com/photos/8370754/pexels-photo-8370754.jpeg',
          readTime: '13 min read'
        },
        {
          _id: '10',
          title: 'IPO Analysis: Evaluating New Market Entrants',
          author: 'Thomas Brown',
          category: 'IPO',
          publishedAt: '2024-02-22',
          imageUrl: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg',
          readTime: '6 min read'
        },
        {
          _id: '11',
          title: 'Options Trading: Advanced Strategies Explained',
          author: 'Jennifer White',
          category: 'Options',
          publishedAt: '2024-02-20',
          imageUrl: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg',
          readTime: '15 min read'
        },
        {
          _id: '12',
          title: 'Real Estate Investment Trusts: REITs Guide',
          author: 'Mark Johnson',
          category: 'Real Estate',
          publishedAt: '2024-02-18',
          imageUrl: 'https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg',
          readTime: '10 min read'
        },
        {
          _id: '13',
          title: 'Forex Trading: Currency Market Fundamentals',
          author: 'Carlos Rodriguez',
          category: 'Forex',
          publishedAt: '2024-02-15',
          imageUrl: 'https://images.pexels.com/photos/7567521/pexels-photo-7567521.jpeg',
          readTime: '14 min read'
        },
        {
          _id: '14',
          title: 'Commodities Trading: Gold, Oil, and Beyond',
          author: 'Maria Santos',
          category: 'Commodities',
          publishedAt: '2024-02-12',
          imageUrl: 'https://images.pexels.com/photos/6801872/pexels-photo-6801872.jpeg',
          readTime: '12 min read'
        },
        {
          _id: '15',
          title: 'Retirement Planning: Building Your Future',
          author: 'John Davis',
          category: 'Retirement',
          publishedAt: '2024-02-10',
          imageUrl: 'https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg',
          readTime: '16 min read'
        },
        {
          _id: '16',
          title: 'Tax-Efficient Investing Strategies',
          author: 'Patricia Miller',
          category: 'Tax Planning',
          publishedAt: '2024-02-08',
          imageUrl: 'https://images.pexels.com/photos/7567564/pexels-photo-7567564.jpeg',
          readTime: '11 min read'
        },
        {
          _id: '17',
          title: 'Behavioral Finance: Avoiding Common Pitfalls',
          author: 'Dr. Kevin Wong',
          category: 'Psychology',
          publishedAt: '2024-02-05',
          imageUrl: 'https://images.pexels.com/photos/8370755/pexels-photo-8370755.jpeg',
          readTime: '9 min read'
        },
        {
          _id: '18',
          title: 'Alternative Investments: Beyond Stocks and Bonds',
          author: 'Sophie Turner',
          category: 'Alternative',
          publishedAt: '2024-02-03',
          imageUrl: 'https://images.pexels.com/photos/6801875/pexels-photo-6801875.jpeg',
          readTime: '13 min read'
        }
      ]);
    }
  };

  // Calculate pagination
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = blogs.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
      'Real Estate': '#f43f5e',
      'Forex': '#0ea5e9',
      'Commodities': '#eab308',
      'Retirement': '#7c3aed',
      'Tax Planning': '#059669',
      'Alternative': '#dc2626'
    };
    return colors[category] || '#64748b';
  };

  const AddBlogModal = () => {
    const [formData, setFormData] = useState({
      title: '',
      author: '',
      category: 'Education',
      content: '',
      imageUrl: '',
      readTime: ''
    });

    const categories = [
      'Education', 'Strategy', 'Technology', 'Risk Management', 'Global Markets',
      'Income Investing', 'ESG', 'Cryptocurrency', 'Psychology', 'IPO',
      'Options', 'Real Estate', 'Forex', 'Commodities', 'Retirement',
      'Tax Planning', 'Alternative'
    ];

    const handleSubmit = (e) => {
      e.preventDefault();
      const newBlog = {
        _id: (blogs.length + 1).toString(),
        ...formData,
        publishedAt: new Date().toISOString().split('T')[0]
      };
      setBlogs([newBlog, ...blogs]);
      setShowAddBlogModal(false);
      setFormData({
        title: '',
        author: '',
        category: 'Education',
        content: '',
        imageUrl: '',
        readTime: ''
      });
    };

    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '2rem'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '2rem',
          maxWidth: '600px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c' }}>
              Add New Blog Post
            </h2>
            <button
              onClick={() => setShowAddBlogModal(false)}
              style={{ 
                background: 'none', 
                border: 'none', 
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#64748b'
              }}
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
                Title
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
                placeholder="Enter blog title"
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
                  Author
                </label>
                <input
                  type="text"
                  required
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                  placeholder="Author name"
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    background: 'white'
                  }}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
                  Image URL
                </label>
                <input
                  type="url"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
                  Read Time
                </label>
                <input
                  type="text"
                  required
                  value={formData.readTime}
                  onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                  placeholder="5 min read"
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
                Content Preview
              </label>
              <textarea
                required
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={4}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
                placeholder="Enter a brief description or excerpt of the blog post..."
              />
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={() => setShowAddBlogModal(false)}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'transparent',
                  color: '#64748b',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{
                  padding: '0.75rem 1.5rem',
                  background: '#4F46E5',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Publish Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div style={{ padding: '2rem' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#1a202c' }}>
              BLUESTOCK BLOG
            </h1>
            <p style={{ fontSize: '1.125rem', color: '#64748b', lineHeight: '1.6' }}>
              Stay informed with the latest insights, analysis, and trends in financial markets and investment strategies.
            </p>
          </div>
          
          {/* Only show Add Blog button for Admin users */}
          {user && user.role === 'admin' && (
            <button
              onClick={() => setShowAddBlogModal(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#4F46E5',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'background 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.background = '#3730A3'}
              onMouseLeave={(e) => e.target.style.background = '#4F46E5'}
            >
              <Plus size={20} />
              Add Blog
            </button>
          )}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="blog-container">
        <div className="blog-grid">
          {currentBlogs.map((blog) => (
            <Link key={blog._id} to={`/blog/${blog._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <article className="blog-card">
                <div 
                  className="blog-image"
                  style={{
                    backgroundImage: blog.imageUrl ? `url(${blog.imageUrl})` : 'linear-gradient(45deg, #667eea, #764ba2)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="blog-content">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <span style={{
                      background: getCategoryColor(blog.category),
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      {blog.category}
                    </span>
                  </div>
                  
                  <h2 className="blog-title">{blog.title}</h2>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <User size={14} color="#64748b" />
                      <span className="blog-meta">{blog.author}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Calendar size={14} color="#64748b" />
                      <span className="blog-meta">{formatDate(blog.publishedAt)}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#64748b', fontSize: '0.875rem' }}>
                      {blog.readTime}
                    </span>
                    <button style={{
                      background: 'transparent',
                      color: '#4F46E5',
                      border: '2px solid #4F46E5',
                      padding: '0.5rem 1rem',
                      borderRadius: '6px',
                      fontWeight: '600',
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}>
                      Read More
                    </button>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Enhanced Pagination */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '0.5rem',
          marginTop: '3rem',
          flexWrap: 'wrap'
        }}>
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              border: '2px solid #e5e7eb',
              background: currentPage === 1 ? '#f9fafb' : 'white',
              color: currentPage === 1 ? '#9ca3af' : '#64748b',
              borderRadius: '6px',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s'
            }}
          >
            <ChevronLeft size={16} />
            Previous
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;
            const isCurrentPage = page === currentPage;
            
            // Show first page, last page, current page, and pages around current page
            const showPage = page === 1 || 
                           page === totalPages || 
                           (page >= currentPage - 1 && page <= currentPage + 1);
            
            // Show ellipsis
            const showEllipsis = (page === currentPage - 2 && currentPage > 3) ||
                               (page === currentPage + 2 && currentPage < totalPages - 2);

            if (showEllipsis) {
              return (
                <span key={`ellipsis-${page}`} style={{ 
                  padding: '0.5rem', 
                  color: '#64748b' 
                }}>
                  ...
                </span>
              );
            }

            if (!showPage) return null;

            return (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                style={{
                  padding: '0.5rem 1rem',
                  border: isCurrentPage ? '2px solid #4F46E5' : '2px solid #e5e7eb',
                  background: isCurrentPage ? '#4F46E5' : 'white',
                  color: isCurrentPage ? 'white' : '#64748b',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  minWidth: '40px',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  if (!isCurrentPage) {
                    e.target.style.background = '#f8fafc';
                    e.target.style.borderColor = '#4F46E5';
                    e.target.style.color = '#4F46E5';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isCurrentPage) {
                    e.target.style.background = 'white';
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.color = '#64748b';
                  }
                }}
              >
                {page}
              </button>
            );
          })}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              border: '2px solid #e5e7eb',
              background: currentPage === totalPages ? '#f9fafb' : 'white',
              color: currentPage === totalPages ? '#9ca3af' : '#64748b',
              borderRadius: '6px',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s'
            }}
          >
            Next
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Pagination Info */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '1rem',
          color: '#64748b',
          fontSize: '0.875rem'
        }}>
          Showing {startIndex + 1}-{Math.min(endIndex, blogs.length)} of {blogs.length} articles
        </div>
      </div>

      {/* Add Blog Modal - Only for Admin */}
      {showAddBlogModal && user && user.role === 'admin' && <AddBlogModal />}
    </div>
  );
};

export default Blog;