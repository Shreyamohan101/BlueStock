import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, BookOpen, Award, Clock, Users, Star, ChevronRight } from 'lucide-react';

const StockSchool = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const courses = [
    {
      id: 1,
      title: 'Stock Market Basics for Beginners',
      category: 'Beginner',
      instructor: 'Sarah Johnson',
      duration: '4 hours',
      lessons: 12,
      rating: 4.8,
      students: 15420,
      price: 'Free',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg',
      description: 'Learn the fundamentals of stock market investing from scratch.',
      topics: ['Market Basics', 'Stock Types', 'Trading Platforms', 'Risk Management']
    },
    {
      id: 2,
      title: 'Technical Analysis Masterclass',
      category: 'Intermediate',
      instructor: 'Michael Chen',
      duration: '8 hours',
      lessons: 24,
      rating: 4.9,
      students: 8750,
      price: '₹2,999',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg',
      description: 'Master chart patterns, indicators, and technical analysis strategies.',
      topics: ['Chart Patterns', 'Technical Indicators', 'Trend Analysis', 'Entry/Exit Strategies']
    },
    {
      id: 3,
      title: 'Fundamental Analysis Deep Dive',
      category: 'Intermediate',
      instructor: 'Emily Rodriguez',
      duration: '6 hours',
      lessons: 18,
      rating: 4.7,
      students: 6230,
      price: '₹2,499',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg',
      description: 'Analyze company financials and make informed investment decisions.',
      topics: ['Financial Statements', 'Ratio Analysis', 'Valuation Methods', 'Industry Analysis']
    },
    {
      id: 4,
      title: 'Options Trading Strategies',
      category: 'Advanced',
      instructor: 'David Park',
      duration: '10 hours',
      lessons: 30,
      rating: 4.6,
      students: 4180,
      price: '₹4,999',
      image: 'https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg',
      description: 'Advanced options strategies for experienced traders.',
      topics: ['Options Basics', 'Strategies', 'Greeks', 'Risk Management']
    },
    {
      id: 5,
      title: 'Portfolio Management & Asset Allocation',
      category: 'Intermediate',
      instructor: 'Lisa Thompson',
      duration: '5 hours',
      lessons: 15,
      rating: 4.8,
      students: 7890,
      price: '₹1,999',
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg',
      description: 'Build and manage a diversified investment portfolio.',
      topics: ['Asset Allocation', 'Diversification', 'Rebalancing', 'Performance Tracking']
    },
    {
      id: 6,
      title: 'Cryptocurrency & Digital Assets',
      category: 'Advanced',
      instructor: 'Robert Kim',
      duration: '7 hours',
      lessons: 21,
      rating: 4.5,
      students: 5670,
      price: '₹3,499',
      image: 'https://images.pexels.com/photos/7567565/pexels-photo-7567565.jpeg',
      description: 'Understanding blockchain technology and crypto investing.',
      topics: ['Blockchain Basics', 'Crypto Analysis', 'DeFi', 'Risk Assessment']
    },
    {
      id: 7,
      title: 'Market Psychology & Behavioral Finance',
      category: 'Intermediate',
      instructor: 'Dr. Rachel Green',
      duration: '4 hours',
      lessons: 12,
      rating: 4.9,
      students: 9340,
      price: '₹1,799',
      image: 'https://images.pexels.com/photos/8370754/pexels-photo-8370754.jpeg',
      description: 'Understand market psychology and overcome emotional trading.',
      topics: ['Behavioral Biases', 'Market Sentiment', 'Emotional Control', 'Decision Making']
    },
    {
      id: 8,
      title: 'IPO Analysis & Investment',
      category: 'Beginner',
      instructor: 'Thomas Brown',
      duration: '3 hours',
      lessons: 9,
      rating: 4.6,
      students: 4520,
      price: 'Free',
      image: 'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg',
      description: 'Learn how to evaluate and invest in Initial Public Offerings.',
      topics: ['IPO Process', 'Company Analysis', 'Valuation', 'Application Strategy']
    },
    {
      id: 9,
      title: 'Mutual Funds & ETF Investing',
      category: 'Beginner',
      instructor: 'Jennifer White',
      duration: '3.5 hours',
      lessons: 10,
      rating: 4.7,
      students: 11200,
      price: 'Free',
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg',
      description: 'Complete guide to mutual funds and ETF investments.',
      topics: ['Fund Types', 'Selection Criteria', 'Cost Analysis', 'Tax Implications']
    }
  ];

  const categories = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = courses.filter(course => 
    selectedCategory === 'All' || course.category === selectedCategory
  );

  const getCategoryColor = (category) => {
    const colors = {
      'Beginner': '#10b981',
      'Intermediate': '#f59e0b',
      'Advanced': '#ef4444'
    };
    return colors[category] || '#64748b';
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

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Stock School
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: '0.9' }}>
            Master the art of investing with our comprehensive courses designed by industry experts
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>50+</h3>
              <p style={{ opacity: '0.8' }}>Expert Courses</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>100K+</h3>
              <p style={{ opacity: '0.8' }}>Students</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>4.8★</h3>
              <p style={{ opacity: '0.8' }}>Average Rating</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '3rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Category Filter */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '1rem', 
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '0.75rem 1.5rem',
                  border: 'none',
                  borderRadius: '25px',
                  background: selectedCategory === category ? '#4F46E5' : 'white',
                  color: selectedCategory === category ? 'white' : '#64748b',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '600',
                  transition: 'all 0.3s',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', 
            gap: '2rem'
          }}>
            {filteredCourses.map(course => (
              <Link 
                key={course.id} 
                to={`/course/${course.id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div style={{
                  background: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
                }}
                >
                  {/* Course Image */}
                  <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                    <div style={{
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url(${course.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }} />
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: getCategoryColor(course.category),
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      {course.category}
                    </div>
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      background: 'rgba(255,255,255,0.9)',
                      borderRadius: '50%',
                      padding: '1rem',
                      cursor: 'pointer'
                    }}>
                      <Play size={24} color="#4F46E5" fill="#4F46E5" />
                    </div>
                  </div>

                  {/* Course Content */}
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: 'bold', 
                      color: '#1a202c', 
                      marginBottom: '0.5rem',
                      lineHeight: '1.4'
                    }}>
                      {course.title}
                    </h3>
                    
                    <p style={{ color: '#64748b', marginBottom: '1rem', lineHeight: '1.5' }}>
                      {course.description}
                    </p>

                    {/* Course Stats */}
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '1rem', 
                      marginBottom: '1rem',
                      fontSize: '0.875rem',
                      color: '#64748b'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Clock size={14} />
                        {course.duration}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <BookOpen size={14} />
                        {course.lessons} lessons
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Users size={14} />
                        {course.students.toLocaleString()}
                      </div>
                    </div>

                    {/* Rating */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        {renderStars(course.rating)}
                      </div>
                      <span style={{ fontWeight: '600', color: '#1a202c' }}>{course.rating}</span>
                      <span style={{ color: '#64748b', fontSize: '0.875rem' }}>
                        ({course.students.toLocaleString()} students)
                      </span>
                    </div>

                    {/* Instructor */}
                    <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1rem' }}>
                      By {course.instructor}
                    </p>

                    {/* Topics */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {course.topics.slice(0, 3).map((topic, index) => (
                          <span key={index} style={{
                            background: '#f1f5f9',
                            color: '#475569',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '12px',
                            fontSize: '0.75rem'
                          }}>
                            {topic}
                          </span>
                        ))}
                        {course.topics.length > 3 && (
                          <span style={{
                            background: '#f1f5f9',
                            color: '#475569',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '12px',
                            fontSize: '0.75rem'
                          }}>
                            +{course.topics.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Price and Action */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <span style={{ 
                          fontSize: '1.5rem', 
                          fontWeight: 'bold', 
                          color: course.price === 'Free' ? '#10b981' : '#4F46E5'
                        }}>
                          {course.price}
                        </span>
                      </div>
                      <button style={{
                        background: '#4F46E5',
                        color: 'white',
                        border: 'none',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '8px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'background 0.3s'
                      }}>
                        {course.price === 'Free' ? 'Start Learning' : 'Enroll Now'}
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '3rem 2rem',
            borderRadius: '16px',
            textAlign: 'center',
            marginTop: '4rem'
          }}>
            <Award size={48} style={{ margin: '0 auto 1rem' }} />
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Get Certified
            </h2>
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: '0.9' }}>
              Complete courses and earn certificates to showcase your investment knowledge
            </p>
            <button style={{
              background: 'white',
              color: '#4F46E5',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '1rem'
            }}>
              View All Certificates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockSchool;