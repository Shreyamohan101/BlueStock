import React, { useState, useEffect } from 'react';
import { Shield, Lock, Eye, EyeOff, Key, Smartphone, AlertTriangle } from 'lucide-react';

const SecurityPrivacy = () => {
  const [user, setUser] = useState(null);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [loginAlerts, setLoginAlerts] = useState(true);
  const [dataSharing, setDataSharing] = useState(false);

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
              { id: 'security', label: 'Security & Privacy', path: '/security-privacy', active: true },
              { id: 'appearance', label: 'Appearance', path: '/appearance' },
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
              Security & Privacy
            </h1>
            <p style={{ color: '#94a3b8' }}>
              Manage your account security and privacy settings
            </p>
          </div>

          {/* Password Security */}
          <div style={{ 
            background: '#1e293b', 
            borderRadius: '12px', 
            padding: '2rem',
            marginBottom: '2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <Lock size={24} color="#4F46E5" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                Password Security
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                  Current Password
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showCurrentPassword ? 'text' : 'password'}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: '#0f172a',
                      border: '1px solid #374151',
                      borderRadius: '6px',
                      color: 'white'
                    }}
                  />
                  <button
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    style={{
                      position: 'absolute',
                      right: '0.75rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {showCurrentPassword ? <EyeOff size={16} color="#94a3b8" /> : <Eye size={16} color="#94a3b8" />}
                  </button>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                  New Password
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: '#0f172a',
                      border: '1px solid #374151',
                      borderRadius: '6px',
                      color: 'white'
                    }}
                  />
                  <button
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    style={{
                      position: 'absolute',
                      right: '0.75rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {showNewPassword ? <EyeOff size={16} color="#94a3b8" /> : <Eye size={16} color="#94a3b8" />}
                  </button>
                </div>
              </div>
            </div>

            <button style={{
              background: '#4F46E5',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              cursor: 'pointer',
              marginTop: '1rem'
            }}>
              Update Password
            </button>
          </div>

          {/* Two-Factor Authentication */}
          <div style={{ 
            background: '#1e293b', 
            borderRadius: '12px', 
            padding: '2rem',
            marginBottom: '2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <Smartphone size={24} color="#4F46E5" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                Two-Factor Authentication
              </h3>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Enable 2FA</p>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                  Add an extra layer of security to your account
                </p>
              </div>
              <label style={{ position: 'relative', display: 'inline-block', width: '60px', height: '34px' }}>
                <input
                  type="checkbox"
                  checked={twoFactorEnabled}
                  onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                  style={{ opacity: 0, width: 0, height: 0 }}
                />
                <span style={{
                  position: 'absolute',
                  cursor: 'pointer',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: twoFactorEnabled ? '#4F46E5' : '#374151',
                  transition: '0.4s',
                  borderRadius: '34px'
                }}>
                  <span style={{
                    position: 'absolute',
                    content: '',
                    height: '26px',
                    width: '26px',
                    left: twoFactorEnabled ? '30px' : '4px',
                    bottom: '4px',
                    backgroundColor: 'white',
                    transition: '0.4s',
                    borderRadius: '50%'
                  }} />
                </span>
              </label>
            </div>

            {twoFactorEnabled && (
              <div style={{ 
                background: '#0f172a', 
                padding: '1rem', 
                borderRadius: '8px',
                border: '1px solid #4F46E5'
              }}>
                <p style={{ color: '#4F46E5', fontSize: '0.875rem' }}>
                  Scan this QR code with your authenticator app to complete setup.
                </p>
              </div>
            )}
          </div>

          {/* Privacy Settings */}
          <div style={{ 
            background: '#1e293b', 
            borderRadius: '12px', 
            padding: '2rem',
            marginBottom: '2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <Shield size={24} color="#4F46E5" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                Privacy Settings
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Login Alerts</p>
                  <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                    Get notified when someone logs into your account
                  </p>
                </div>
                <label style={{ position: 'relative', display: 'inline-block', width: '60px', height: '34px' }}>
                  <input
                    type="checkbox"
                    checked={loginAlerts}
                    onChange={(e) => setLoginAlerts(e.target.checked)}
                    style={{ opacity: 0, width: 0, height: 0 }}
                  />
                  <span style={{
                    position: 'absolute',
                    cursor: 'pointer',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: loginAlerts ? '#4F46E5' : '#374151',
                    transition: '0.4s',
                    borderRadius: '34px'
                  }}>
                    <span style={{
                      position: 'absolute',
                      content: '',
                      height: '26px',
                      width: '26px',
                      left: loginAlerts ? '30px' : '4px',
                      bottom: '4px',
                      backgroundColor: 'white',
                      transition: '0.4s',
                      borderRadius: '50%'
                    }} />
                  </span>
                </label>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Data Sharing</p>
                  <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                    Allow sharing of anonymized data for market research
                  </p>
                </div>
                <label style={{ position: 'relative', display: 'inline-block', width: '60px', height: '34px' }}>
                  <input
                    type="checkbox"
                    checked={dataSharing}
                    onChange={(e) => setDataSharing(e.target.checked)}
                    style={{ opacity: 0, width: 0, height: 0 }}
                  />
                  <span style={{
                    position: 'absolute',
                    cursor: 'pointer',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: dataSharing ? '#4F46E5' : '#374151',
                    transition: '0.4s',
                    borderRadius: '34px'
                  }}>
                    <span style={{
                      position: 'absolute',
                      content: '',
                      height: '26px',
                      width: '26px',
                      left: dataSharing ? '30px' : '4px',
                      bottom: '4px',
                      backgroundColor: 'white',
                      transition: '0.4s',
                      borderRadius: '50%'
                    }} />
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Security Status */}
          <div style={{ 
            background: '#1e293b', 
            borderRadius: '12px', 
            padding: '2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <AlertTriangle size={24} color="#f59e0b" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                Security Status
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '1rem',
                background: '#0f172a',
                borderRadius: '8px'
              }}>
                <span>Password Strength</span>
                <span style={{ color: '#10b981' }}>Strong</span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '1rem',
                background: '#0f172a',
                borderRadius: '8px'
              }}>
                <span>Two-Factor Authentication</span>
                <span style={{ color: twoFactorEnabled ? '#10b981' : '#f59e0b' }}>
                  {twoFactorEnabled ? 'Enabled' : 'Disabled'}
                </span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '1rem',
                background: '#0f172a',
                borderRadius: '8px'
              }}>
                <span>Last Login</span>
                <span style={{ color: '#94a3b8' }}>Today, 2:30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPrivacy;