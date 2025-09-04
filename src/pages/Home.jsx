import React, { useState, useEffect } from 'react';
import { TrendingUp, BarChart3, PieChart, Shield, Zap, Users, Play, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [stocks, setStocks] = useState([]);
  const [showVideoModal, setShowVideoModal] = useState(false);

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'}/api/stocks`);
      setStocks(response.data.slice(0, 6)); // Show top 6 stocks
    } catch (error) {
      console.error('Error fetching stocks:', error);
      // Mock data for demo
      setStocks([
        { symbol: 'AAPL', name: 'Apple Inc.', price: 175.43, change: 2.34, changePercent: 1.35 },
        { symbol: 'MSFT', name: 'Microsoft', price: 332.89, change: -1.56, changePercent: -0.47 },
        { symbol: 'GOOGL', name: 'Alphabet', price: 2847.63, change: 12.45, changePercent: 0.44 },
        { symbol: 'TSLA', name: 'Tesla', price: 891.34, change: -8.92, changePercent: -0.99 },
        { symbol: 'AMZN', name: 'Amazon', price: 3344.29, change: 15.67, changePercent: 0.47 },
        { symbol: 'NVDA', name: 'NVIDIA', price: 454.78, change: 7.23, changePercent: 1.61 }
      ]);
    }
  };

  const VideoModal = () => (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '2rem'
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '900px',
        aspectRatio: '16/9',
        background: '#000',
        borderRadius: '12px',
        overflow: 'hidden'
      }}>
        <button
          onClick={() => setShowVideoModal(false)}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'rgba(0,0,0,0.7)',
            border: 'none',
            borderRadius: '50%',
            padding: '0.5rem',
            cursor: 'pointer',
            zIndex: 10,
            color: 'white'
          }}
        >
          <X size={24} />
        </button>
        
        {/* YouTube Video Embed */}
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
          title="Bluestock Platform Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: '12px' }}
        />
      </div>
    </div>
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1>Smart Stock Analytics Platform</h1>
          <p>Make informed investment decisions with real-time market data and advanced analytics</p>
          <div className="cta-buttons">
            <Link to="/products" className="btn-primary">Get Started</Link>
            <button 
              onClick={() => setShowVideoModal(true)}
              className="btn-secondary"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none'
              }}
            >
              <Play size={20} />
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section style={{ padding: '3rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="section-title">Market Overview</h2>
          <div className="features-grid">
            {stocks.map((stock) => (
              <div key={stock.symbol} className="feature-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3>{stock.symbol}</h3>
                  <span style={{ 
                    color: stock.change >= 0 ? '#10b981' : '#ef4444',
                    fontWeight: 'bold'
                  }}>
                    {stock.change >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                  </span>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '0.5rem' }}>{stock.name}</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c' }}>
                  ${stock.price.toFixed(2)}
                </p>
                <p style={{ 
                  color: stock.change >= 0 ? '#10b981' : '#ef4444',
                  fontSize: '0.9rem'
                }}>
                  {stock.change >= 0 ? '+' : ''}${stock.change.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <h2 className="section-title">Why Choose Bluestock?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <BarChart3 size={24} color="white" />
              </div>
              <h3>Real-time Analytics</h3>
              <p>Get instant access to live market data and comprehensive stock analysis tools.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <PieChart size={24} color="white" />
              </div>
              <h3>Portfolio Management</h3>
              <p>Track and optimize your investment portfolio with advanced analytics and insights.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={24} color="white" />
              </div>
              <h3>Secure Trading</h3>
              <p>Bank-level security ensures your investments and data are always protected.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Zap size={24} color="white" />
              </div>
              <h3>Lightning Fast</h3>
              <p>Execute trades in milliseconds with our high-performance trading engine.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <TrendingUp size={24} color="white" />
              </div>
              <h3>Market Insights</h3>
              <p>Access expert analysis and market predictions to stay ahead of trends.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Users size={24} color="white" />
              </div>
              <h3>Community Driven</h3>
              <p>Join thousands of investors sharing strategies and market insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <h3>$2.5B+</h3>
            <p>Assets Under Management</p>
          </div>
          <div className="stat-item">
            <h3>50K+</h3>
            <p>Active Investors</p>
          </div>
          <div className="stat-item">
            <h3>99.9%</h3>
            <p>Platform Uptime</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && <VideoModal />}
    </div>
  );
};

export default Home;