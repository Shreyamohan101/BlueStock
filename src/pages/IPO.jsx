import React, { useState, useEffect } from 'react';
import { Calendar, TrendingUp, Users, DollarSign, Star, Info, Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react';
import axios from 'axios';

const IPO = () => {
  const [ipos, setIpos] = useState([]);
  const [selectedIPOs, setSelectedIPOs] = useState([]);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  useEffect(() => {
    fetchIPOs();
  }, []);

  const fetchIPOs = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'}/api/ipos`);
      setIpos(response.data);
    } catch (error) {
      console.error('Error fetching IPOs:', error);
      // Enhanced mock data for demo
      setIpos([
        {
          _id: '1',
          companyName: 'TechCorp Solutions',
          symbol: 'TECH',
          priceRange: { min: 15, max: 18 },
          shares: 10000000,
          expectedDate: '2024-03-15',
          status: 'upcoming',
          description: 'Leading technology solutions provider specializing in AI and cloud computing',
          sector: 'Technology',
          lotSize: 100,
          marketMaker: 'Goldman Sachs',
          rating: 4.2,
          gmp: 25,
          listing: 'NSE, BSE'
        },
        {
          _id: '2',
          companyName: 'GreenEnergy Inc.',
          symbol: 'GREEN',
          priceRange: { min: 22, max: 25 },
          shares: 8500000,
          expectedDate: '2024-03-22',
          status: 'active',
          description: 'Renewable energy infrastructure company with solar and wind projects',
          sector: 'Energy',
          lotSize: 50,
          marketMaker: 'Morgan Stanley',
          rating: 4.5,
          gmp: 18,
          listing: 'NSE, BSE'
        },
        {
          _id: '3',
          companyName: 'HealthTech Innovations',
          symbol: 'HLTH',
          priceRange: { min: 12, max: 15 },
          shares: 12000000,
          expectedDate: '2024-02-28',
          status: 'completed',
          description: 'Digital healthcare platform connecting patients with doctors',
          sector: 'Healthcare',
          lotSize: 75,
          marketMaker: 'JP Morgan',
          rating: 3.8,
          gmp: 12,
          listing: 'NSE, BSE'
        },
        {
          _id: '4',
          companyName: 'FinanceFlow Systems',
          symbol: 'FLOW',
          priceRange: { min: 18, max: 22 },
          shares: 9500000,
          expectedDate: '2024-04-05',
          status: 'upcoming',
          description: 'Financial technology and payment solutions for businesses',
          sector: 'Fintech',
          lotSize: 60,
          marketMaker: 'Citigroup',
          rating: 4.1,
          gmp: 22,
          listing: 'NSE, BSE'
        },
        {
          _id: '5',
          companyName: 'CloudVision Technologies',
          symbol: 'CLOUD',
          priceRange: { min: 28, max: 32 },
          shares: 7500000,
          expectedDate: '2024-04-12',
          status: 'upcoming',
          description: 'Cloud computing and AI services for enterprise clients',
          sector: 'Technology',
          lotSize: 40,
          marketMaker: 'Deutsche Bank',
          rating: 4.6,
          gmp: 35,
          listing: 'NSE, BSE'
        },
        {
          _id: '6',
          companyName: 'BioPharm Dynamics',
          symbol: 'BPDY',
          priceRange: { min: 35, max: 40 },
          shares: 6000000,
          expectedDate: '2024-03-08',
          status: 'active',
          description: 'Pharmaceutical research and development company',
          sector: 'Biotechnology',
          lotSize: 30,
          marketMaker: 'Credit Suisse',
          rating: 4.3,
          gmp: 28,
          listing: 'NSE, BSE'
        },
        {
          _id: '7',
          companyName: 'EduTech Learning',
          symbol: 'EDU',
          priceRange: { min: 45, max: 50 },
          shares: 5500000,
          expectedDate: '2024-04-18',
          status: 'upcoming',
          description: 'Online education platform for professional courses',
          sector: 'Education',
          lotSize: 25,
          marketMaker: 'Barclays',
          rating: 4.0,
          gmp: 30,
          listing: 'NSE, BSE'
        },
        {
          _id: '8',
          companyName: 'FoodChain Logistics',
          symbol: 'FOOD',
          priceRange: { min: 20, max: 24 },
          shares: 8000000,
          expectedDate: '2024-04-25',
          status: 'upcoming',
          description: 'Supply chain management for food and beverage industry',
          sector: 'Logistics',
          lotSize: 55,
          marketMaker: 'UBS',
          rating: 3.9,
          gmp: 15,
          listing: 'NSE, BSE'
        },
        {
          _id: '9',
          companyName: 'RetailTech Solutions',
          symbol: 'RETAIL',
          priceRange: { min: 16, max: 19 },
          shares: 11000000,
          expectedDate: '2024-05-02',
          status: 'upcoming',
          description: 'Technology solutions for retail and e-commerce businesses',
          sector: 'Retail Tech',
          lotSize: 65,
          marketMaker: 'HSBC',
          rating: 4.2,
          gmp: 20,
          listing: 'NSE, BSE'
        },
        {
          _id: '10',
          companyName: 'AgriTech Innovations',
          symbol: 'AGRI',
          priceRange: { min: 25, max: 30 },
          shares: 7200000,
          expectedDate: '2024-05-10',
          status: 'upcoming',
          description: 'Agricultural technology and smart farming solutions',
          sector: 'Agriculture',
          lotSize: 45,
          marketMaker: 'Standard Chartered',
          rating: 4.4,
          gmp: 32,
          listing: 'NSE, BSE'
        },
        {
          _id: '11',
          companyName: 'SpaceTech Ventures',
          symbol: 'SPACE',
          priceRange: { min: 55, max: 65 },
          shares: 4500000,
          expectedDate: '2024-05-15',
          status: 'upcoming',
          description: 'Satellite technology and space exploration services',
          sector: 'Aerospace',
          lotSize: 20,
          marketMaker: 'Goldman Sachs',
          rating: 4.7,
          gmp: 45,
          listing: 'NSE, BSE'
        },
        {
          _id: '12',
          companyName: 'CleanWater Systems',
          symbol: 'WATER',
          priceRange: { min: 30, max: 35 },
          shares: 6800000,
          expectedDate: '2024-05-22',
          status: 'upcoming',
          description: 'Water purification and treatment technology',
          sector: 'Environment',
          lotSize: 35,
          marketMaker: 'Morgan Stanley',
          rating: 4.1,
          gmp: 25,
          listing: 'NSE, BSE'
        }
      ]);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'upcoming': return 'status-upcoming';
      case 'active': return 'status-active';
      case 'completed': return 'status-completed';
      default: return 'status-upcoming';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return '#f59e0b';
      case 'active': return '#10b981';
      case 'completed': return '#6b7280';
      default: return '#f59e0b';
    }
  };

  const toggleIPOSelection = (ipoId) => {
    setSelectedIPOs(prev => 
      prev.includes(ipoId) 
        ? prev.filter(id => id !== ipoId)
        : [...prev, ipoId]
    );
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

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is an IPO?",
      answer: "An Initial Public Offering (IPO) is when a private company offers its shares to the public for the first time. This allows the company to raise capital from public investors and become a publicly traded company."
    },
    {
      question: "How do I apply for an IPO?",
      answer: "You can apply for an IPO through your broker's online platform, mobile app, or by visiting their branch. You'll need to have a demat account and sufficient funds in your trading account."
    },
    {
      question: "What is the minimum investment required?",
      answer: "The minimum investment is determined by the lot size set by the company. For retail investors, you can apply for a minimum of 1 lot and maximum of 2 lots per category."
    },
    {
      question: "What is GMP (Grey Market Premium)?",
      answer: "GMP is the premium at which IPO shares are traded in the grey market before they are officially listed on the stock exchange. It gives an indication of market sentiment towards the IPO."
    },
    {
      question: "When will I know if my IPO application is successful?",
      answer: "IPO allotment results are typically announced 4-6 days after the issue closes. You can check the status on the registrar's website or through your broker."
    },
    {
      question: "What happens if the IPO is oversubscribed?",
      answer: "If an IPO is oversubscribed, shares are allotted through a lottery system. Retail investors have a separate quota, and allotment is done proportionally or through draw of lots."
    },
    {
      question: "Can I sell IPO shares immediately after listing?",
      answer: "Yes, you can sell your IPO shares immediately after they are listed on the stock exchange. However, consider the long-term prospects before making a decision."
    },
    {
      question: "What are the risks involved in IPO investment?",
      answer: "IPO investments carry risks including price volatility, company performance uncertainty, market conditions, and the possibility of listing at a discount to the issue price."
    }
  ];

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>
            IPO Center
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#64748b' }}>
            Compare and invest in the latest Initial Public Offerings
          </p>
        </div>

        {/* IPO Comparison Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          {ipos.map((ipo) => (
            <div key={ipo._id} style={{
              background: 'white',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: selectedIPOs.includes(ipo._id) ? '2px solid #4F46E5' : '2px solid transparent',
              transition: 'all 0.3s'
            }}>
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '0.25rem' }}>
                    {ipo.companyName}
                  </h3>
                  <p style={{ color: '#4F46E5', fontWeight: '600', fontSize: '0.875rem' }}>
                    {ipo.symbol}
                  </p>
                </div>
                <button
                  onClick={() => toggleIPOSelection(ipo._id)}
                  style={{
                    background: selectedIPOs.includes(ipo._id) ? '#4F46E5' : '#f1f5f9',
                    color: selectedIPOs.includes(ipo._id) ? 'white' : '#64748b',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '0.5rem',
                    cursor: 'pointer'
                  }}
                >
                  {selectedIPOs.includes(ipo._id) ? <Minus size={16} /> : <Plus size={16} />}
                </button>
              </div>

              {/* Status and Rating */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{
                  background: getStatusColor(ipo.status),
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>
                  {ipo.status.charAt(0).toUpperCase() + ipo.status.slice(1)}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  {renderStars(ipo.rating)}
                  <span style={{ fontSize: '0.875rem', fontWeight: '600', marginLeft: '0.25rem' }}>
                    {ipo.rating}
                  </span>
                </div>
              </div>

              {/* Price Range */}
              <div style={{ 
                background: '#f8fafc', 
                padding: '1rem', 
                borderRadius: '8px', 
                marginBottom: '1rem'
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <p style={{ color: '#64748b', fontSize: '0.75rem', marginBottom: '0.25rem' }}>PRICE RANGE</p>
                    <p style={{ fontWeight: 'bold', color: '#1a202c' }}>
                      ₹{ipo.priceRange.min} - ₹{ipo.priceRange.max}
                    </p>
                  </div>
                  <div>
                    <p style={{ color: '#64748b', fontSize: '0.75rem', marginBottom: '0.25rem' }}>LOT SIZE</p>
                    <p style={{ fontWeight: 'bold', color: '#1a202c' }}>
                      {ipo.lotSize} shares
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Details */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
                <div>
                  <p style={{ color: '#64748b', fontSize: '0.75rem', marginBottom: '0.25rem' }}>ISSUE SIZE</p>
                  <p style={{ fontWeight: '600', color: '#1a202c', fontSize: '0.875rem' }}>
                    {(ipo.shares / 1000000).toFixed(1)}M shares
                  </p>
                </div>
                <div>
                  <p style={{ color: '#64748b', fontSize: '0.75rem', marginBottom: '0.25rem' }}>GMP</p>
                  <p style={{ fontWeight: '600', color: '#10b981', fontSize: '0.875rem' }}>
                    +₹{ipo.gmp}
                  </p>
                </div>
                <div>
                  <p style={{ color: '#64748b', fontSize: '0.75rem', marginBottom: '0.25rem' }}>LISTING</p>
                  <p style={{ fontWeight: '600', color: '#1a202c', fontSize: '0.875rem' }}>
                    {ipo.listing}
                  </p>
                </div>
                <div>
                  <p style={{ color: '#64748b', fontSize: '0.75rem', marginBottom: '0.25rem' }}>SECTOR</p>
                  <p style={{ fontWeight: '600', color: '#1a202c', fontSize: '0.875rem' }}>
                    {ipo.sector}
                  </p>
                </div>
              </div>

              {/* Date */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Calendar size={14} color="#64748b" />
                <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
                  {formatDate(ipo.expectedDate)}
                </span>
              </div>

              {/* Description */}
              <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: '1.4', marginBottom: '1.5rem' }}>
                {ipo.description}
              </p>

              {/* Action Button */}
              <button style={{
                width: '100%',
                background: ipo.status === 'active' ? '#10b981' : 
                           ipo.status === 'upcoming' ? '#4F46E5' : '#6b7280',
                color: 'white',
                border: 'none',
                padding: '0.75rem',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '0.875rem'
              }}>
                {ipo.status === 'active' ? 'Apply Now' : 
                 ipo.status === 'upcoming' ? 'Get Notified' : 'View Details'}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div style={{ 
          background: 'white', 
          borderRadius: '12px', 
          padding: '2rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1.5rem', textAlign: 'center' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                marginBottom: '0.5rem',
                overflow: 'hidden'
              }}>
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'white',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#1a202c'
                  }}
                >
                  {faq.question}
                  {expandedFAQ === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedFAQ === index && (
                  <div style={{
                    padding: '0 1rem 1rem',
                    background: '#f8fafc',
                    color: '#64748b',
                    lineHeight: '1.6'
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPO;