import React, { useState, useEffect } from 'react';
import { Palette, Monitor, Sun, Moon, Eye, Type, Layout } from 'lucide-react';

const Appearance = () => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('dark');
  const [fontSize, setFontSize] = useState('medium');
  const [colorScheme, setColorScheme] = useState('blue');
  const [layout, setLayout] = useState('default');

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      window.location.href = '/';
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  const themes = [
    { id: 'light', name: 'Light', icon: Sun, preview: '#ffffff' },
    { id: 'dark', name: 'Dark', icon: Moon, preview: '#1e293b' },
    { id: 'auto', name: 'Auto', icon: Monitor, preview: 'linear-gradient(45deg, #ffffff 50%, #1e293b 50%)' }
  ];

  const colorSchemes = [
    { id: 'blue', name: 'Blue', color: '#4F46E5' },
    { id: 'green', name: 'Green', color: '#10b981' },
    { id: 'purple', name: 'Purple', color: '#8b5cf6' },
    { id: 'orange', name: 'Orange', color: '#f59e0b' },
    { id: 'red', name: 'Red', color: '#ef4444' },
    { id: 'pink', name: 'Pink', color: '#ec4899' }
  ];

  const fontSizes = [
    { id: 'small', name: 'Small', size: '14px' },
    { id: 'medium', name: 'Medium', size: '16px' },
    { id: 'large', name: 'Large', size: '18px' },
    { id: 'extra-large', name: 'Extra Large', size: '20px' }
  ];

  const layouts = [
    { id: 'default', name: 'Default', description: 'Standard layout with sidebar' },
    { id: 'compact', name: 'Compact', description: 'Condensed layout for smaller screens' },
    { id: 'wide', name: 'Wide', description: 'Full-width layout for large screens' }
  ];

  return (
    <div style={{ 
      background: '#0f172a', 
      minHeight: '100vh',
      color: 'white'
    }}>
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <div style={{ 
          width: '250px', 
          background: '#1e293b', 
          minHeight: '100vh',
          padding: '2rem 0'
        }}>
          <div style={{ padding: '0 1.5rem', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#4F46E5' }}>
              Settings
            </h2>
          </div>

          <nav style={{ padding: '0 1rem' }}>
            {[
              { id: 'account', label: 'Account', path: '/account-settings' },
              { id: 'notifications', label: 'Notifications & Messages', path: '/notifications-messages' },
              { id: 'security', label: 'Security & Privacy', path: '/security-privacy' },
              { id: 'appearance', label: 'Appearance', path: '/appearance', active: true },
              { id: 'chart', label: 'Chart Settings', path: '/chart-settings' },
              { id: 'navigation', label: 'Navigation Settings', path: '/navigation-settings' },
              { id: 'quotes', label: 'Quotes Preferences', path: '/quotes-preferences' },
              { id: 'documents', label: 'Documents', path: '/documents' },
              { id: 'community', label: 'Community Settings', path: '/community-settings' },
              { id: 'history', label: 'History', path: '/history' },
              { id: 'spend', label: 'Spend/Queries', path: '/spend-queries' },
              { id: 'rewards', label: 'Rewards', path: '/rewards' }
            ].map(item => (
              <a
                key={item.id}
                href={item.path}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  background: item.active ? '#4F46E5' : 'transparent',
                  color: item.active ? 'white' : '#94a3b8',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  marginBottom: '0.5rem',
                  textAlign: 'left',
                  fontSize: '0.875rem',
                  textDecoration: 'none'
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: '2rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Appearance
            </h1>
            <p style={{ color: '#94a3b8' }}>
              Customize the look and feel of your Bluestock experience
            </p>
          </div>

          {/* Theme Selection */}
          <div style={{ 
            background: '#1e293b', 
            borderRadius: '12px', 
            padding: '2rem',
            marginBottom: '2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <Palette size={24} color="#4F46E5" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                Theme
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
              {themes.map(themeOption => (
                <div
                  key={themeOption.id}
                  onClick={() => setTheme(themeOption.id)}
                  style={{
                    padding: '1rem',
                    border: theme === themeOption.id ? '2px solid #4F46E5' : '2px solid #374151',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    textAlign: 'center',
                    transition: 'all 0.3s'
                  }}
                >
                  <div style={{
                    width: '60px',
                    height: '40px',
                    background: themeOption.preview,
                    borderRadius: '4px',
                    margin: '0 auto 1rem',
                    border: '1px solid #374151'
                  }} />
                  <themeOption.icon size={20} style={{ margin: '0 auto 0.5rem' }} />
                  <p style={{ fontWeight: '600' }}>{themeOption.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Color Scheme */}
          <div style={{ 
            background: '#1e293b', 
            borderRadius: '12px', 
            padding: '2rem',
            marginBottom: '2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <Eye size={24} color="#4F46E5" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                Color Scheme
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem' }}>
              {colorSchemes.map(scheme => (
                <div
                  key={scheme.id}
                  onClick={() => setColorScheme(scheme.id)}
                  style={{
                    padding: '1rem',
                    border: colorScheme === scheme.id ? `2px solid ${scheme.color}` : '2px solid #374151',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    textAlign: 'center',
                    transition: 'all 0.3s'
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: scheme.color,
                    borderRadius: '50%',
                    margin: '0 auto 1rem'
                  }} />
                  <p style={{ fontWeight: '600' }}>{scheme.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Font Size */}
          <div style={{ 
            background: '#1e293b', 
            borderRadius: '12px', 
            padding: '2rem',
            marginBottom: '2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <Type size={24} color="#4F46E5" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                Font Size
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
              {fontSizes.map(size => (
                <div
                  key={size.id}
                  onClick={() => setFontSize(size.id)}
                  style={{
                    padding: '1rem',
                    border: fontSize === size.id ? '2px solid #4F46E5' : '2px solid #374151',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    textAlign: 'center',
                    transition: 'all 0.3s'
                  }}
                >
                  <p style={{ fontSize: size.size, fontWeight: '600', marginBottom: '0.5rem' }}>Aa</p>
                  <p style={{ fontSize: '0.875rem' }}>{size.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Layout */}
          <div style={{ 
            background: '#1e293b', 
            borderRadius: '12px', 
            padding: '2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <Layout size={24} color="#4F46E5" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                Layout
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {layouts.map(layoutOption => (
                <div
                  key={layoutOption.id}
                  onClick={() => setLayout(layoutOption.id)}
                  style={{
                    padding: '1rem',
                    border: layout === layoutOption.id ? '2px solid #4F46E5' : '2px solid #374151',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{layoutOption.name}</p>
                      <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{layoutOption.description}</p>
                    </div>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      border: layout === layoutOption.id ? '6px solid #4F46E5' : '2px solid #374151'
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <button style={{
              background: '#4F46E5',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Save Appearance Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appearance;