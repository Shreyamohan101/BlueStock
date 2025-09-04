import React, { useState } from 'react';
import { Users, Award, Globe, ChevronDown, ChevronUp } from 'lucide-react';

const About = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Bluestock?",
      answer: "Bluestock is a comprehensive financial platform that provides real-time market data, advanced analytics, and investment tools to help both individual and institutional investors make informed decisions."
    },
    {
      question: "How does Bluestock support traders?",
      answer: "We offer a suite of tools including real-time market data, technical analysis, portfolio management, risk assessment, and automated trading capabilities. Our platform is designed to support traders at all levels."
    },
    {
      question: "Is Bluestock secure?",
      answer: "Yes, security is our top priority. We use bank-level encryption, multi-factor authentication, and comply with all financial regulations to ensure your data and investments are protected."
    },
    {
      question: "What markets can I access?",
      answer: "Bluestock provides access to major global markets including NYSE, NASDAQ, LSE, and many others. You can trade stocks, ETFs, and other securities across multiple exchanges."
    },
    {
      question: "Do you offer customer support?",
      answer: "We provide 24/7 customer support through multiple channels including live chat, phone, and email. Our expert team is always ready to help with any questions or issues."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '700' }}>
            Bluestock is made only for stock market investing & trading.
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: '0.9' }}>
            We're dedicated to democratizing access to financial markets and empowering investors with the tools they need to succeed.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '4rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem',
            textAlign: 'center'
          }}>
            <div style={{
              background: '#4F46E5',
              color: 'white',
              padding: '3rem 2rem',
              borderRadius: '12px'
            }}>
              <Users size={48} style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>50K+</h3>
              <p style={{ fontSize: '1.125rem' }}>Active Users</p>
            </div>
            <div style={{
              background: '#10b981',
              color: 'white',
              padding: '3rem 2rem',
              borderRadius: '12px'
            }}>
              <Award size={48} style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>15+</h3>
              <p style={{ fontSize: '1.125rem' }}>Years Experience</p>
            </div>
            <div style={{
              background: '#f59e0b',
              color: 'white',
              padding: '3rem 2rem',
              borderRadius: '12px'
            }}>
              <Globe size={48} style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>25+</h3>
              <p style={{ fontSize: '1.125rem' }}>Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section style={{ padding: '4rem 2rem', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#1a202c' }}>
            Recent News
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <div style={{ 
                background: '#ef4444', 
                color: 'white', 
                padding: '0.5rem 1rem', 
                borderRadius: '20px', 
                fontSize: '0.75rem',
                fontWeight: 'bold',
                display: 'inline-block',
                marginBottom: '1rem'
              }}>
                Business Standard
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1a202c' }}>
                Bluestock announces new partnership with leading financial institutions
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
                March 15, 2024 • 5 min read
              </p>
            </div>
            
            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <div style={{ 
                background: '#1a202c', 
                color: 'white', 
                padding: '0.5rem 1rem', 
                borderRadius: '20px', 
                fontSize: '0.75rem',
                fontWeight: 'bold',
                display: 'inline-block',
                marginBottom: '1rem'
              }}>
                The Medium
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1a202c' }}>
                How Bluestock is revolutionizing retail investing with AI-powered insights
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
                March 12, 2024 • 7 min read
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <div style={{ 
                background: '#0ea5e9', 
                color: 'white', 
                padding: '0.5rem 1rem', 
                borderRadius: '20px', 
                fontSize: '0.75rem',
                fontWeight: 'bold',
                display: 'inline-block',
                marginBottom: '1rem'
              }}>
                TechCrunch
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1a202c' }}>
                Bluestock raises Rs50M Series C to expand global market access
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
                March 8, 2024 • 4 min read
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section style={{
        background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Want to join us?
          </h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: '0.9' }}>
            We're always looking for talented individuals who share our passion for financial technology and innovation.
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
            View Careers
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '4rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#1a202c' }}>
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: '100%',
                    padding: '1.5rem',
                    background: 'white',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#1a202c'
                  }}
                >
                  {faq.question}
                  {expandedFAQ === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedFAQ === index && (
                  <div style={{
                    padding: '0 1.5rem 1.5rem',
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
      </section>
    </div>
  );
};

export default About;