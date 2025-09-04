import React, { useState } from 'react';
import { Cookie, Settings, Eye, BarChart3, Shield, CheckCircle } from 'lucide-react';

const CookiePolicy = () => {
  const [cookieSettings, setCookieSettings] = useState({
    essential: true,
    analytics: true,
    marketing: false,
    preferences: true
  });

  const handleCookieToggle = (type) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    
    setCookieSettings(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const saveCookieSettings = () => {
    localStorage.setItem('cookieSettings', JSON.stringify(cookieSettings));
    alert('Cookie preferences saved successfully!');
  };

  const cookieTypes = [
    {
      id: 'essential',
      title: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      examples: ['Authentication', 'Security', 'Form submission', 'Load balancing'],
      required: true,
      color: '#ef4444'
    },
    {
      id: 'analytics',
      title: 'Analytics Cookies',
      icon: BarChart3,
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: ['Page views', 'User behavior', 'Performance metrics', 'Error tracking'],
      required: false,
      color: '#4F46E5'
    },
    {
      id: 'marketing',
      title: 'Marketing Cookies',
      icon: Eye,
      description: 'These cookies are used to deliver personalized advertisements and track campaign effectiveness.',
      examples: ['Ad targeting', 'Campaign tracking', 'Social media integration', 'Retargeting'],
      required: false,
      color: '#f59e0b'
    },
    {
      id: 'preferences',
      title: 'Preference Cookies',
      icon: Settings,
      description: 'These cookies remember your preferences and settings to enhance your experience.',
      examples: ['Language settings', 'Theme preferences', 'Layout choices', 'Saved filters'],
      required: false,
      color: '#10b981'
    }
  ];

  return (
    <div style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: '#4F46E5',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 2rem'
          }}>
            <Cookie size={40} color="white" />
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>
            Cookie Policy
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#64748b', marginBottom: '1rem' }}>
            Learn about how we use cookies and manage your preferences.
          </p>
          <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
            Last updated: March 15, 2024
          </p>
        </div>

        {/* Introduction */}
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          marginBottom: '2rem'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>
            What Are Cookies?
          </h2>
          <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '1rem' }}>
            Cookies are small text files that are stored on your device when you visit our website. They help us provide you 
            with a better experience by remembering your preferences, analyzing how you use our site, and personalizing content.
          </p>
          <p style={{ color: '#64748b', lineHeight: '1.6' }}>
            We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on 
            your device for a set period or until you delete them).
          </p>
        </div>

        {/* Cookie Types */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '2rem', textAlign: 'center' }}>
            Types of Cookies We Use
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {cookieTypes.map((type) => (
              <div key={type.id} style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: `${type.color}20`,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <type.icon size={24} color={type.color} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '0.5rem' }}>
                        {type.title}
                      </h3>
                      {type.required && (
                        <span style={{
                          background: '#fef2f2',
                          color: '#dc2626',
                          padding: '0.25rem 0.5rem',
                          borderRadius: '12px',
                          fontSize: '0.75rem',
                          fontWeight: '600'
                        }}>
                          Required
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <label style={{ 
                    position: 'relative', 
                    display: 'inline-block', 
                    width: '60px', 
                    height: '34px',
                    opacity: type.required ? 0.5 : 1,
                    cursor: type.required ? 'not-allowed' : 'pointer'
                  }}>
                    <input
                      type="checkbox"
                      checked={cookieSettings[type.id]}
                      onChange={() => handleCookieToggle(type.id)}
                      disabled={type.required}
                      style={{ opacity: 0, width: 0, height: 0 }}
                    />
                    <span style={{
                      position: 'absolute',
                      cursor: type.required ? 'not-allowed' : 'pointer',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: cookieSettings[type.id] ? type.color : '#374151',
                      transition: '0.4s',
                      borderRadius: '34px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        content: '',
                        height: '26px',
                        width: '26px',
                        left: cookieSettings[type.id] ? '30px' : '4px',
                        bottom: '4px',
                        backgroundColor: 'white',
                        transition: '0.4s',
                        borderRadius: '50%'
                      }} />
                    </span>
                  </label>
                </div>

                <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '1rem' }}>
                  {type.description}
                </p>

                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#1a202c', marginBottom: '0.5rem' }}>
                    Examples:
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {type.examples.map((example, index) => (
                      <span key={index} style={{
                        background: '#f1f5f9',
                        color: '#475569',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '20px',
                        fontSize: '0.875rem'
                      }}>
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cookie Settings */}
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>
            Save Your Cookie Preferences
          </h3>
          <p style={{ color: '#64748b', marginBottom: '2rem' }}>
            Your current settings will be saved and applied to your browsing experience.
          </p>
          <button
            onClick={saveCookieSettings}
            style={{
              background: '#4F46E5',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              margin: '0 auto'
            }}
          >
            <CheckCircle size={20} />
            Save Preferences
          </button>
        </div>

        {/* Additional Information */}
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          marginBottom: '2rem'
        }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>
            Managing Cookies
          </h3>
          <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '1rem' }}>
            You can control and manage cookies in several ways:
          </p>
          <ul style={{ color: '#64748b', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
            <li>Use the cookie preference center above to enable or disable specific types of cookies</li>
            <li>Configure your browser settings to block or delete cookies</li>
            <li>Use browser extensions that manage cookie preferences</li>
            <li>Clear your browser's cache and cookies regularly</li>
          </ul>
          
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem', marginTop: '2rem' }}>
            Third-Party Cookies
          </h3>
          <p style={{ color: '#64748b', lineHeight: '1.6' }}>
            Some cookies are set by third-party services that appear on our pages. We don't control these cookies, 
            and you should check the relevant third party's website for more information about their cookies and how to manage them.
          </p>
        </div>

        {/* Contact Information */}
        <div style={{
          background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
          color: 'white',
          padding: '3rem',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <Cookie size={48} style={{ margin: '0 auto 1rem' }} />
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Questions About Cookies?
          </h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: '0.9' }}>
            If you have any questions about our use of cookies, please contact us:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
            <p>Email: privacy@bluestock.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;