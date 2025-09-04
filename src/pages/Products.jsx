import React, { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, Shield, Smartphone, Globe, Users, CheckCircle, X, Star, CreditCard, Smartphone as Phone, Building } from 'lucide-react';

const Products = () => {
  const [user, setUser] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [userSubscriptions, setUserSubscriptions] = useState([]);

  useEffect(() => {
    // Check user authentication
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    // Load user subscriptions
    const savedSubscriptions = localStorage.getItem('userSubscriptions');
    if (savedSubscriptions) {
      setUserSubscriptions(JSON.parse(savedSubscriptions));
    }
  }, []);

  const products = [
    {
      id: 1,
      icon: <BarChart3 size={32} />,
      title: 'Stock Analytics Pro',
      description: 'Advanced stock analysis with real-time data, technical indicators, and predictive modeling.',
      features: [
        'Real-time market data from 50+ exchanges',
        'Advanced technical analysis tools',
        'AI-powered price predictions',
        'Comprehensive risk assessment',
        'Custom alerts and notifications',
        'Portfolio optimization suggestions'
      ],
      price: 2999,
      originalPrice: 4999,
      duration: 'month',
      category: 'Analytics',
      rating: 4.8,
      users: 15420,
      detailedDescription: `Stock Analytics Pro is our flagship product designed for serious traders and investors. Get access to institutional-grade analytics tools that were previously only available to hedge funds and investment banks.

      Key Features:
      • Real-time data from NYSE, NASDAQ, BSE, NSE and 46+ other exchanges
      • Advanced charting with 100+ technical indicators
      • Machine learning algorithms for price prediction
      • Risk analysis with VaR calculations
      • Backtesting capabilities for strategy validation
      • Custom screeners and watchlists
      • Mobile app with push notifications
      • 24/7 customer support

      Perfect for: Day traders, swing traders, and active investors who need professional-grade tools.`,
      benefits: [
        'Increase trading accuracy by up to 35%',
        'Save 10+ hours per week on research',
        'Access to exclusive market insights',
        'Priority customer support',
        'Free mobile app included'
      ]
    },
    {
      id: 2,
      icon: <TrendingUp size={32} />,
      title: 'Portfolio Manager',
      description: 'Comprehensive portfolio management with automated rebalancing and performance tracking.',
      features: [
        'Automated portfolio rebalancing',
        'Performance analytics and reporting',
        'Tax-loss harvesting',
        'Asset allocation optimization',
        'Multi-account management',
        'Benchmark comparison tools'
      ],
      price: 4999,
      originalPrice: 7999,
      duration: 'month',
      category: 'Management',
      rating: 4.9,
      users: 8750,
      detailedDescription: `Portfolio Manager is designed for investors who want to optimize their investment portfolios with minimal effort. Our AI-driven platform automatically rebalances your portfolio and provides detailed performance analytics.

      Advanced Features:
      • Automatic rebalancing based on your risk tolerance
      • Tax-loss harvesting to minimize tax liability
      • Performance attribution analysis
      • Risk-adjusted returns calculation
      • Correlation analysis across assets
      • ESG scoring and sustainable investing options
      • Integration with major brokerages
      • Detailed tax reporting

      Perfect for: Long-term investors, retirement planners, and wealth managers.`,
      benefits: [
        'Optimize returns with smart rebalancing',
        'Reduce tax burden by up to 20%',
        'Professional-grade reporting',
        'Multi-brokerage account sync',
        'Dedicated portfolio advisor'
      ]
    },
    {
      id: 3,
      icon: <Shield size={32} />,
      title: 'Risk Management Suite',
      description: 'Advanced risk assessment tools to protect and optimize your investment strategies.',
      features: [
        'Value at Risk (VaR) calculations',
        'Stress testing scenarios',
        'Portfolio correlation analysis',
        'Monte Carlo simulations',
        'Risk-adjusted performance metrics',
        'Compliance monitoring tools'
      ],
      price: 7999,
      originalPrice: 12999,
      duration: 'month',
      category: 'Risk Management',
      rating: 4.7,
      users: 3240,
      detailedDescription: `Risk Management Suite provides institutional-level risk analysis tools to help you protect your investments and optimize risk-adjusted returns.

      Professional Tools:
      • Value at Risk (VaR) calculations with multiple methodologies
      • Stress testing with historical and hypothetical scenarios
      • Portfolio correlation and covariance analysis
      • Monte Carlo simulations for scenario planning
      • Sharpe ratio and other risk-adjusted metrics
      • Regulatory compliance monitoring
      • Risk budgeting and allocation tools
      • Custom risk reports and dashboards

      Perfect for: Institutional investors, fund managers, and risk-conscious traders.`,
      benefits: [
        'Reduce portfolio volatility by 25%',
        'Meet regulatory compliance requirements',
        'Advanced scenario planning',
        'Professional risk reporting',
        'Dedicated risk consultant'
      ]
    },
    {
      id: 4,
      icon: <Smartphone size={32} />,
      title: 'Mobile Trading App',
      description: 'Trade on-the-go with our feature-rich mobile application for iOS and Android.',
      features: [
        'Real-time trading capabilities',
        'Advanced order types',
        'Push notifications for alerts',
        'Biometric security features',
        'Offline chart analysis',
        'Social trading features'
      ],
      price: 0,
      originalPrice: 1999,
      duration: 'month',
      category: 'Mobile',
      rating: 4.6,
      users: 25680,
      detailedDescription: `Our Mobile Trading App brings the full power of Bluestock to your smartphone. Trade anywhere, anytime with professional-grade mobile trading tools.

      Mobile Features:
      • Real-time trading with instant execution
      • Advanced order types (stop-loss, limit, bracket orders)
      • Customizable watchlists and alerts
      • Touch ID and Face ID security
      • Offline chart analysis and drawing tools
      • Social trading and copy trading features
      • Voice commands for quick trades
      • Apple Watch and Android Wear support

      Perfect for: Mobile traders, busy professionals, and anyone who needs trading access on-the-go.`,
      benefits: [
        'Trade from anywhere in the world',
        'Never miss a trading opportunity',
        'Bank-level security on mobile',
        'Free with any paid subscription',
        'Regular feature updates'
      ]
    },
    {
      id: 5,
      icon: <Globe size={32} />,
      title: 'Global Markets Access',
      description: 'Access international markets and trade stocks from around the world.',
      features: [
        'Access to 50+ global exchanges',
        'Multi-currency trading support',
        'International market data',
        'Cross-border settlement',
        'Currency hedging tools',
        'Global economic calendar'
      ],
      price: 9999,
      originalPrice: 15999,
      duration: 'month',
      category: 'Global Trading',
      rating: 4.5,
      users: 5420,
      detailedDescription: `Global Markets Access opens up investment opportunities across the world's major financial markets. Trade international stocks, ETFs, and other securities with ease.

      Global Features:
      • Access to NYSE, NASDAQ, LSE, TSE, HKEX, and 45+ other exchanges
      • Multi-currency trading in 25+ currencies
      • Real-time international market data
      • Automated currency conversion
      • Cross-border tax optimization
      • Global economic calendar and news
      • International compliance management
      • 24/5 global trading support

      Perfect for: International investors, expats, and traders seeking global diversification.`,
      benefits: [
        'Diversify across global markets',
        'Access emerging market opportunities',
        'Multi-currency portfolio management',
        'Global market insights',
        'International tax optimization'
      ]
    },
    {
      id: 6,
      icon: <Users size={32} />,
      title: 'Institutional Platform',
      description: 'Enterprise-grade solution for institutional investors and fund managers.',
      features: [
        'Bulk trading operations',
        'API access for integration',
        'Custom reporting tools',
        'Dedicated account management',
        'White-label solutions',
        'Compliance and audit tools'
      ],
      price: 'Custom',
      originalPrice: 'Contact',
      duration: 'month',
      category: 'Enterprise',
      rating: 4.9,
      users: 180,
      detailedDescription: `Institutional Platform is designed for large-scale investors, fund managers, and financial institutions who need enterprise-grade trading and portfolio management capabilities.

      Enterprise Features:
      • Bulk order management and execution
      • RESTful API for system integration
      • Custom reporting and analytics
      • Multi-user access controls
      • White-label platform options
      • Regulatory compliance tools
      • Dedicated relationship manager
      • 24/7 priority support
      • Custom feature development
      • On-premise deployment options

      Perfect for: Hedge funds, asset managers, pension funds, and large institutional investors.`,
      benefits: [
        'Scale operations efficiently',
        'Integrate with existing systems',
        'Custom solutions for unique needs',
        'Dedicated support team',
        'Enterprise-grade security'
      ]
    }
  ];

  const handleLearnMore = (product) => {
    setSelectedProduct(product);
    setShowDetailsModal(true);
  };

  const handleGetStarted = (product) => {
    if (!user) {
      alert('Please login to subscribe to products');
      return;
    }

    if (product.price === 'Custom') {
      alert('Please contact our sales team for enterprise pricing and setup.');
      return;
    }

    if (product.price === 0) {
      // Free product - instant activation
      const newSubscription = {
        productId: product.id,
        productName: product.title,
        subscribedAt: new Date().toISOString(),
        status: 'active',
        price: 0
      };

      const updatedSubscriptions = [...userSubscriptions, newSubscription];
      setUserSubscriptions(updatedSubscriptions);
      localStorage.setItem('userSubscriptions', JSON.stringify(updatedSubscriptions));
      
      alert(`${product.title} has been activated for your account!`);
      return;
    }

    setSelectedProduct(product);
    setShowPaymentModal(true);
  };

  const executePayment = () => {
    const newSubscription = {
      productId: selectedProduct.id,
      productName: selectedProduct.title,
      subscribedAt: new Date().toISOString(),
      status: 'active',
      price: selectedProduct.price,
      nextBilling: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
    };

    const updatedSubscriptions = [...userSubscriptions, newSubscription];
    setUserSubscriptions(updatedSubscriptions);
    localStorage.setItem('userSubscriptions', JSON.stringify(updatedSubscriptions));
    
    setShowPaymentModal(false);
    setSelectedProduct(null);
    alert(`Payment successful! ${selectedProduct.title} has been activated for your account.`);
  };

  const isSubscribed = (productId) => {
    return userSubscriptions.some(sub => sub.productId === productId && sub.status === 'active');
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        fill={i < Math.floor(rating) ? '#f59e0b' : 'none'}
        color={i < Math.floor(rating) ? '#f59e0b' : '#d1d5db'}
      />
    ));
  };

  const PaymentModal = () => (
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
        maxWidth: '500px',
        width: '100%',
        maxHeight: '90vh',
        overflow: 'auto'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c' }}>
            Complete Payment
          </h2>
          <button
            onClick={() => setShowPaymentModal(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <X size={24} color="#64748b" />
          </button>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1a202c', marginBottom: '0.5rem' }}>
            {selectedProduct?.title}
          </h3>
          <div style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            color: '#4F46E5',
            marginBottom: '0.5rem'
          }}>
            ₹{selectedProduct?.price.toLocaleString()}
          </div>
          <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
            per {selectedProduct?.duration} • Auto-renewable
          </p>
        </div>

        {/* QR Code Section */}
        <div style={{ 
          background: '#f8fafc', 
          padding: '2rem', 
          borderRadius: '12px',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1a202c', marginBottom: '1rem' }}>
            Scan QR Code to Pay
          </h4>
          
          <div style={{
            width: '200px',
            height: '200px',
            background: 'white',
            border: '2px solid #e2e8f0',
            borderRadius: '8px',
            margin: '0 auto 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '180px',
              height: '180px',
              background: `repeating-linear-gradient(
                0deg,
                #000 0px,
                #000 3px,
                transparent 3px,
                transparent 6px
              ),
              repeating-linear-gradient(
                90deg,
                #000 0px,
                #000 3px,
                transparent 3px,
                transparent 6px
              )`,
              borderRadius: '4px'
            }} />
          </div>
          
          <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
            Use any UPI app to scan and pay
          </p>
        </div>

        {/* Payment Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <button 
            onClick={executePayment}
            style={{
              width: '100%',
              background: '#4F46E5',
              color: 'white',
              border: 'none',
              padding: '1rem',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
          >
            <Phone size={20} />
            Pay with UPI
          </button>
          
          <button 
            onClick={executePayment}
            style={{
              width: '100%',
              background: 'transparent',
              color: '#4F46E5',
              border: '2px solid #4F46E5',
              padding: '1rem',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
          >
            <CreditCard size={20} />
            Pay with Card
          </button>
          
          <button 
            onClick={executePayment}
            style={{
              width: '100%',
              background: 'transparent',
              color: '#4F46E5',
              border: '2px solid #4F46E5',
              padding: '1rem',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
          >
            <Building size={20} />
            Net Banking
          </button>
        </div>

        <p style={{ 
          textAlign: 'center', 
          color: '#64748b', 
          fontSize: '0.875rem',
          marginTop: '1rem'
        }}>
          Secure payment powered by Razorpay
        </p>
      </div>
    </div>
  );

  const DetailsModal = () => (
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
        maxWidth: '800px',
        width: '100%',
        maxHeight: '90vh',
        overflow: 'auto'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c' }}>
            {selectedProduct?.title}
          </h2>
          <button
            onClick={() => setShowDetailsModal(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <X size={24} color="#64748b" />
          </button>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ color: '#4F46E5' }}>
              {selectedProduct?.icon}
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                {renderStars(selectedProduct?.rating)}
                <span style={{ fontWeight: '600' }}>{selectedProduct?.rating}</span>
                <span style={{ color: '#64748b', fontSize: '0.875rem' }}>
                  ({selectedProduct?.users.toLocaleString()} users)
                </span>
              </div>
              <p style={{ color: '#64748b' }}>{selectedProduct?.description}</p>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
            Detailed Description
          </h3>
          <div style={{ 
            color: '#374151', 
            lineHeight: '1.6',
            whiteSpace: 'pre-line'
          }}>
            {selectedProduct?.detailedDescription}
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
            Key Benefits
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {selectedProduct?.benefits.map((benefit, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={16} color="#10b981" />
                <span style={{ color: '#374151' }}>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ 
          background: '#f8fafc', 
          padding: '1.5rem', 
          borderRadius: '12px',
          marginBottom: '2rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem' }}>
                {selectedProduct?.price === 'Custom' ? 'Enterprise Pricing' : 'Monthly Subscription'}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ 
                  fontSize: '2rem', 
                  fontWeight: 'bold', 
                  color: selectedProduct?.price === 'Custom' ? '#f59e0b' : '#4F46E5'
                }}>
                  {selectedProduct?.price === 'Custom' ? 'Contact Sales' : 
                   selectedProduct?.price === 0 ? 'Free' : 
                   `₹${selectedProduct?.price.toLocaleString()}`}
                </span>
                {selectedProduct?.originalPrice !== 'Contact' && selectedProduct?.originalPrice !== selectedProduct?.price && (
                  <span style={{ 
                    fontSize: '1.25rem', 
                    color: '#64748b',
                    textDecoration: 'line-through'
                  }}>
                    ₹{selectedProduct?.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={() => {
                setShowDetailsModal(false);
                handleGetStarted(selectedProduct);
              }}
              disabled={isSubscribed(selectedProduct?.id)}
              style={{
                background: isSubscribed(selectedProduct?.id) ? '#10b981' : '#4F46E5',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: isSubscribed(selectedProduct?.id) ? 'default' : 'pointer',
                fontSize: '1rem'
              }}
            >
              {isSubscribed(selectedProduct?.id) ? 'Subscribed' : 
               selectedProduct?.price === 'Custom' ? 'Contact Sales' :
               selectedProduct?.price === 0 ? 'Activate Free' : 'Subscribe Now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#1a202c' }}>
          Professional Trading & Investment Solutions
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#64748b', lineHeight: '1.6' }}>
          Choose from our comprehensive suite of tools designed to help you make smarter investment decisions
          and achieve better returns in today's dynamic markets.
        </p>
      </div>

      {/* User Subscriptions */}
      {user && userSubscriptions.length > 0 && (
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto 3rem',
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>
            Your Active Subscriptions
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {userSubscriptions.map((sub, index) => (
              <div key={index} style={{
                background: '#f0fdf4',
                border: '1px solid #bbf7d0',
                padding: '1rem',
                borderRadius: '8px'
              }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#059669', marginBottom: '0.5rem' }}>
                  {sub.productName}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#065f46' }}>
                  {sub.price === 0 ? 'Free Plan' : `₹${sub.price.toLocaleString()}/month`}
                </p>
                <p style={{ fontSize: '0.75rem', color: '#064e3b' }}>
                  Active since {new Date(sub.subscribedAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '2rem' }}>
          {products.map((product, index) => (
            <div key={product.id} style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: isSubscribed(product.id) ? '2px solid #10b981' : '2px solid transparent',
              transition: 'transform 0.3s, box-shadow 0.3s',
              position: 'relative'
            }}>
              {/* Subscription Badge */}
              {isSubscribed(product.id) && (
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: '#10b981',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>
                  Active
                </div>
              )}

              <div style={{ 
                color: '#4F46E5', 
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '60px',
                background: '#f0f4ff',
                borderRadius: '12px'
              }}>
                {product.icon}
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1a202c' }}>
                {product.title}
              </h3>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                {renderStars(product.rating)}
                <span style={{ fontWeight: '600' }}>{product.rating}</span>
                <span style={{ color: '#64748b', fontSize: '0.875rem' }}>
                  ({product.users.toLocaleString()} users)
                </span>
              </div>

              <p style={{ color: '#64748b', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                {product.description}
              </p>

              <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                {product.features.map((feature, idx) => (
                  <li key={idx} style={{ 
                    color: '#64748b', 
                    marginBottom: '0.5rem',
                    paddingLeft: '1.5rem',
                    position: 'relative'
                  }}>
                    <CheckCircle size={16} color="#10b981" style={{
                      position: 'absolute',
                      left: '0',
                      top: '0.125rem'
                    }} />
                    {feature}
                  </li>
                ))}
              </ul>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <span style={{ 
                    fontSize: '2rem', 
                    fontWeight: 'bold', 
                    color: product.price === 'Custom' ? '#f59e0b' : product.price === 0 ? '#10b981' : '#4F46E5'
                  }}>
                    {product.price === 'Custom' ? 'Custom' : 
                     product.price === 0 ? 'Free' : 
                     `₹${product.price.toLocaleString()}`}
                  </span>
                  {product.originalPrice !== 'Contact' && product.originalPrice !== product.price && (
                    <span style={{ 
                      fontSize: '1.25rem', 
                      color: '#64748b',
                      textDecoration: 'line-through'
                    }}>
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                {product.price !== 'Custom' && product.price !== 0 && (
                  <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
                    per {product.duration} • Auto-renewable
                  </p>
                )}
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button 
                  onClick={() => handleGetStarted(product)}
                  disabled={isSubscribed(product.id)}
                  style={{
                    flex: 1,
                    background: isSubscribed(product.id) ? '#10b981' : '#4F46E5',
                    color: 'white',
                    border: 'none',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    fontWeight: '600',
                    cursor: isSubscribed(product.id) ? 'default' : 'pointer',
                    transition: 'background 0.3s'
                  }}
                >
                  {isSubscribed(product.id) ? 'Subscribed' : 
                   product.price === 'Custom' ? 'Contact Sales' :
                   product.price === 0 ? 'Activate Free' : 'Get Started'}
                </button>
                <button 
                  onClick={() => handleLearnMore(product)}
                  style={{
                    flex: 1,
                    background: 'transparent',
                    color: '#4F46E5',
                    border: '2px solid #4F46E5',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center',
        marginTop: '4rem',
        borderRadius: '12px',
        maxWidth: '1200px',
        margin: '4rem auto 0'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Ready to Transform Your Investment Strategy?
        </h2>
        <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: '0.9' }}>
          Join thousands of investors who trust Bluestock for their trading and investment needs.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button style={{
            background: 'white',
            color: '#4F46E5',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            Start Free Trial
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
            Contact Sales
          </button>
        </div>
      </div>

      {/* Modals */}
      {showPaymentModal && selectedProduct && <PaymentModal />}
      {showDetailsModal && selectedProduct && <DetailsModal />}
    </div>
  );
};

export default Products;