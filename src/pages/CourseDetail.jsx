import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Play, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  Lock, 
  Download,
  BookOpen,
  Award,
  X
} from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [user, setUser] = useState(null);
  const [isPaid, setIsPaid] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedModule, setSelectedModule] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check user authentication and role
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    // Mock course data - in real app, this would fetch from API
    const mockCourse = {
      id: parseInt(id),
      title: 'Basics of Technical Analysis',
      instructor: 'Michael Chen',
      duration: '8 hours',
      lessons: 24,
      rating: 4.9,
      students: 8750,
      price: id === '1' || id === '8' || id === '9' ? 'Free' : '₹2,999',
      category: 'Intermediate',
      description: 'Master chart patterns, indicators, and technical analysis strategies to make informed trading decisions.',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg',
      modules: [
        {
          title: 'Introduction',
          lessons: [
            { title: 'What is Technical Analysis?', duration: '15 min', completed: true },
            { title: 'History and Evolution', duration: '12 min', completed: true },
            { title: 'Technical vs Fundamental Analysis', duration: '18 min', completed: false }
          ]
        },
        {
          title: 'Chart Basics',
          lessons: [
            { title: 'Understanding Price Charts', duration: '20 min', completed: false },
            { title: 'Timeframes and Their Importance', duration: '16 min', completed: false },
            { title: 'Volume Analysis', duration: '22 min', completed: false }
          ]
        },
        {
          title: 'Chart Patterns',
          lessons: [
            { title: 'Support and Resistance', duration: '25 min', completed: false },
            { title: 'Trend Lines and Channels', duration: '30 min', completed: false },
            { title: 'Reversal Patterns', duration: '28 min', completed: false },
            { title: 'Continuation Patterns', duration: '24 min', completed: false }
          ]
        },
        {
          title: 'Technical Indicators',
          lessons: [
            { title: 'Moving Averages', duration: '20 min', completed: false },
            { title: 'RSI and Momentum Indicators', duration: '25 min', completed: false },
            { title: 'MACD and Signal Lines', duration: '22 min', completed: false },
            { title: 'Bollinger Bands', duration: '18 min', completed: false }
          ]
        },
        {
          title: 'Advanced Concepts',
          lessons: [
            { title: 'Fibonacci Retracements', duration: '30 min', completed: false },
            { title: 'Elliott Wave Theory', duration: '35 min', completed: false },
            { title: 'Market Psychology', duration: '25 min', completed: false }
          ]
        },
        {
          title: 'Practical Application',
          lessons: [
            { title: 'Building a Trading Strategy', duration: '40 min', completed: false },
            { title: 'Risk Management', duration: '30 min', completed: false },
            { title: 'Case Studies', duration: '45 min', completed: false }
          ]
        }
      ],
      content: `
        <h2>Course Overview</h2>
        <p>Technical analysis is a trading discipline that uses chart patterns, indicators, and price action to evaluate securities and identify trading opportunities. This comprehensive course will teach you how to read charts, identify trends, and make informed trading decisions.</p>
        
        <h3>What You'll Learn</h3>
        <ul>
          <li>Fundamental concepts of technical analysis</li>
          <li>How to read and interpret price charts</li>
          <li>Key chart patterns and their significance</li>
          <li>Popular technical indicators and their applications</li>
          <li>Risk management strategies</li>
          <li>How to develop your own trading system</li>
        </ul>

        <h3>Course Structure</h3>
        <p>This course is divided into 6 comprehensive modules, each building upon the previous one. You'll start with the basics and gradually progress to advanced concepts and practical applications.</p>

        <h3>Prerequisites</h3>
        <p>Basic understanding of financial markets and stock trading is recommended but not required. This course is designed to take you from beginner to intermediate level.</p>
      `,
      certificate: true,
      downloadableResources: 15,
      quizzes: 8
    };

    setCourse(mockCourse);
    // Check if user has paid for this course (mock logic)
    setIsPaid(mockCourse.price === 'Free' || Math.random() > 0.7);
    setLoading(false);
  }, [id]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        fill={i < Math.floor(rating) ? '#f59e0b' : 'none'}
        color={i < Math.floor(rating) ? '#f59e0b' : '#d1d5db'}
      />
    ));
  };

  const PaymentModal = () => {
    const handlePayment = () => {
      // Mock payment success
      setIsPaid(true);
      setShowPaymentModal(false);
      alert('Payment successful! You now have access to the course.');
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
        zIndex: 1000
      }}>
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '2rem',
          maxWidth: '500px',
          width: '90%',
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
              {course?.title}
            </h3>
            <p style={{ color: '#64748b', marginBottom: '1rem' }}>
              by {course?.instructor}
            </p>
            <div style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              color: '#4F46E5',
              marginBottom: '1rem'
            }}>
              {course?.price}
            </div>
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
            
            {/* Mock QR Code */}
            <div style={{
              width: '200px',
              height: '200px',
              background: 'white',
              border: '2px solid #e2e8f0',
              borderRadius: '8px',
              margin: '0 auto 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='white'/%3E%3Crect x='10' y='10' width='15' height='15' fill='black'/%3E%3Crect x='75' y='10' width='15' height='15' fill='black'/%3E%3Crect x='10' y='75' width='15' height='15' fill='black'/%3E%3Crect x='30' y='30' width='5' height='5' fill='black'/%3E%3Crect x='40' y='30' width='5' height='5' fill='black'/%3E%3Crect x='50' y='30' width='5' height='5' fill='black'/%3E%3Crect x='60' y='30' width='5' height='5' fill='black'/%3E%3Crect x='70' y='30' width='5' height='5' fill='black'/%3E%3Crect x='30' y='40' width='5' height='5' fill='black'/%3E%3Crect x='50' y='40' width='5' height='5' fill='black'/%3E%3Crect x='70' y='40' width='5' height='5' fill='black'/%3E%3Crect x='30' y='50' width='5' height='5' fill='black'/%3E%3Crect x='40' y='50' width='5' height='5' fill='black'/%3E%3Crect x='60' y='50' width='5' height='5' fill='black'/%3E%3Crect x='70' y='50' width='5' height='5' fill='black'/%3E%3Crect x='30' y='60' width='5' height='5' fill='black'/%3E%3Crect x='50' y='60' width='5' height='5' fill='black'/%3E%3Crect x='70' y='60' width='5' height='5' fill='black'/%3E%3Crect x='30' y='70' width='5' height='5' fill='black'/%3E%3Crect x='40' y='70' width='5' height='5' fill='black'/%3E%3Crect x='50' y='70' width='5' height='5' fill='black'/%3E%3Crect x='60' y='70' width='5' height='5' fill='black'/%3E%3Crect x='70' y='70' width='5' height='5' fill='black'/%3E%3C/svg%3E")`,
              backgroundSize: 'contain'
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
              onClick={handlePayment}
              style={{
                width: '100%',
                background: '#4F46E5',
                color: 'white',
                border: 'none',
                padding: '1rem',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              Pay with UPI
            </button>
            
            <button 
              onClick={handlePayment}
              style={{
                width: '100%',
                background: 'transparent',
                color: '#4F46E5',
                border: '2px solid #4F46E5',
                padding: '1rem',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              Pay with Card
            </button>
            
            <button 
              onClick={handlePayment}
              style={{
                width: '100%',
                background: 'transparent',
                color: '#4F46E5',
                border: '2px solid #4F46E5',
                padding: '1rem',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
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

  if (!course) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '50vh',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <div style={{ fontSize: '1.125rem', color: '#64748b' }}>Course not found</div>
        <Link to="/stock-school" style={{ color: '#4F46E5', textDecoration: 'none' }}>
          ← Back to Stock School
        </Link>
      </div>
    );
  }

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh' }}>
      {/* Back Navigation */}
      <div style={{ background: 'white', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '1rem 2rem' }}>
          <Link 
            to="/stock-school" 
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
            Back to Stock School
          </Link>
        </div>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '3rem' }}>
          {/* Main Content */}
          <div>
            {/* Course Header */}
            <div style={{ 
              background: 'white', 
              borderRadius: '16px', 
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
              marginBottom: '2rem'
            }}>
              <div style={{ 
                height: '300px', 
                backgroundImage: `url(${course.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'rgba(255,255,255,0.9)',
                  borderRadius: '50%',
                  padding: '1.5rem',
                  cursor: 'pointer'
                }}>
                  <Play size={32} color="#4F46E5" fill="#4F46E5" />
                </div>
              </div>

              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{
                    background: '#f59e0b',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    {course.category}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    {renderStars(course.rating)}
                    <span style={{ marginLeft: '0.5rem', fontWeight: '600' }}>{course.rating}</span>
                    <span style={{ color: '#64748b', fontSize: '0.875rem' }}>
                      ({course.students.toLocaleString()} students)
                    </span>
                  </div>
                </div>

                <h1 style={{ 
                  fontSize: '2rem', 
                  fontWeight: 'bold', 
                  color: '#1a202c', 
                  marginBottom: '1rem'
                }}>
                  {course.title}
                </h1>

                <p style={{ color: '#64748b', fontSize: '1.125rem', marginBottom: '1.5rem' }}>
                  {course.description}
                </p>

                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '2rem',
                  color: '#64748b',
                  fontSize: '0.875rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Users size={16} />
                    By {course.instructor}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Clock size={16} />
                    {course.duration}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <BookOpen size={16} />
                    {course.lessons} lessons
                  </div>
                </div>
              </div>
            </div>

            {/* Course Content */}
            <div style={{ 
              background: 'white', 
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '2rem' }}>
                {/* Module Units Sidebar */}
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1.5rem' }}>
                    Module Units
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {course.modules.map((module, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedModule(index)}
                        style={{
                          padding: '0.75rem 1rem',
                          background: selectedModule === index ? '#4F46E5' : 'transparent',
                          color: selectedModule === index ? 'white' : '#64748b',
                          border: selectedModule === index ? 'none' : '1px solid #e2e8f0',
                          borderRadius: '8px',
                          textAlign: 'left',
                          cursor: 'pointer',
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          transition: 'all 0.3s'
                        }}
                      >
                        {index + 1}. {module.title}
                      </button>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <button style={{
                      padding: '0.75rem',
                      background: '#ef4444',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontSize: '0.875rem'
                    }}>
                      Start
                    </button>
                    <button style={{
                      padding: '0.75rem',
                      background: '#10b981',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontSize: '0.875rem'
                    }}>
                      Notes
                    </button>
                  </div>
                </div>

                {/* Module Content */}
                <div>
                  <div style={{ 
                    background: '#f0f4ff', 
                    padding: '2rem', 
                    borderRadius: '12px',
                    marginBottom: '2rem'
                  }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>
                      {course.modules[selectedModule].title}
                    </h2>
                    
                    <div 
                      style={{ 
                        color: '#374151', 
                        lineHeight: '1.6',
                        fontSize: '1rem'
                      }}
                      dangerouslySetInnerHTML={{ __html: course.content }}
                    />
                  </div>

                  {/* Lessons List */}
                  <div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1a202c', marginBottom: '1rem' }}>
                      Lessons in this module:
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {course.modules[selectedModule].lessons.map((lesson, index) => (
                        <div key={index} style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '1rem',
                          background: lesson.completed ? '#f0fdf4' : '#f8fafc',
                          border: `1px solid ${lesson.completed ? '#bbf7d0' : '#e2e8f0'}`,
                          borderRadius: '8px'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            {lesson.completed ? (
                              <CheckCircle size={20} color="#10b981" />
                            ) : isPaid || course.price === 'Free' ? (
                              <Play size={20} color="#4F46E5" />
                            ) : (
                              <Lock size={20} color="#64748b" />
                            )}
                            <div>
                              <h4 style={{ 
                                fontSize: '1rem', 
                                fontWeight: '500', 
                                color: '#1a202c',
                                marginBottom: '0.25rem'
                              }}>
                                {lesson.title}
                              </h4>
                              <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
                                {lesson.duration}
                              </p>
                            </div>
                          </div>
                          {!isPaid && course.price !== 'Free' && user && user.role === 'user' && (
                            <button
                              onClick={() => setShowPaymentModal(true)}
                              style={{
                                background: '#4F46E5',
                                color: 'white',
                                border: 'none',
                                padding: '0.5rem 1rem',
                                borderRadius: '6px',
                                fontSize: '0.875rem',
                                fontWeight: '600',
                                cursor: 'pointer'
                              }}
                            >
                              Unlock
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Did you like this unit? */}
                  <div style={{
                    background: '#f0f4ff',
                    border: '2px solid #4F46E5',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    textAlign: 'center',
                    marginTop: '2rem'
                  }}>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1a202c', marginBottom: '1rem' }}>
                      Did you like this unit?
                    </h4>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                      <button style={{
                        background: '#10b981',
                        color: 'white',
                        border: 'none',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '20px',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}>
                        👍 Yes
                      </button>
                      <button style={{
                        background: '#ef4444',
                        color: 'white',
                        border: 'none',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '20px',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}>
                        👎 No
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Course Info Card */}
            <div style={{ 
              background: 'white', 
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
              marginBottom: '2rem'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: 'bold', 
                  color: course.price === 'Free' ? '#10b981' : '#4F46E5',
                  marginBottom: '0.5rem'
                }}>
                  {course.price}
                </div>
                {course.price !== 'Free' && (
                  <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
                    One-time payment • Lifetime access
                  </p>
                )}
              </div>

              {!isPaid && course.price !== 'Free' && user && user.role === 'user' ? (
                <button
                  onClick={() => setShowPaymentModal(true)}
                  style={{
                    width: '100%',
                    background: '#4F46E5',
                    color: 'white',
                    border: 'none',
                    padding: '1rem',
                    borderRadius: '12px',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    marginBottom: '1rem'
                  }}
                >
                  Enroll Now
                </button>
              ) : (
                <button style={{
                  width: '100%',
                  background: '#10b981',
                  color: 'white',
                  border: 'none',
                  padding: '1rem',
                  borderRadius: '12px',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginBottom: '1rem'
                }}>
                  {course.price === 'Free' || isPaid ? 'Continue Learning' : 'Access Restricted'}
                </button>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Clock size={18} color="#64748b" />
                  <span style={{ color: '#64748b' }}>{course.duration} of content</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <BookOpen size={18} color="#64748b" />
                  <span style={{ color: '#64748b' }}>{course.lessons} lessons</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Download size={18} color="#64748b" />
                  <span style={{ color: '#64748b' }}>{course.downloadableResources} downloadable resources</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Award size={18} color="#64748b" />
                  <span style={{ color: '#64748b' }}>Certificate of completion</span>
                </div>
              </div>
            </div>

            {/* Course Features */}
            <div style={{ 
              background: 'white', 
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1a202c', marginBottom: '1.5rem' }}>
                This course includes:
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle size={18} color="#10b981" />
                  <span style={{ color: '#64748b' }}>Lifetime access</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle size={18} color="#10b981" />
                  <span style={{ color: '#64748b' }}>Mobile and desktop access</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle size={18} color="#10b981" />
                  <span style={{ color: '#64748b' }}>Certificate of completion</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle size={18} color="#10b981" />
                  <span style={{ color: '#64748b' }}>Downloadable resources</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle size={18} color="#10b981" />
                  <span style={{ color: '#64748b' }}>Interactive quizzes</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle size={18} color="#10b981" />
                  <span style={{ color: '#64748b' }}>Expert instructor support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal - Only for Users */}
      {showPaymentModal && user && user.role === 'user' && <PaymentModal />}
    </div>
  );
};

export default CourseDetail;