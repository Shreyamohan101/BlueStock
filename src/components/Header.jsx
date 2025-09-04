import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TrendingUp, MoreHorizontal, ChevronDown, User, LogOut, Settings, Briefcase, BarChart3, Building } from 'lucide-react';
import AuthModal from './AuthModal';

const Header = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleLogin = (userData) => {
    setUser(userData);
    console.log('User logged in:', userData);
    
    // Show welcome message based on role
    const roleMessages = {
      'admin': `Welcome back, Administrator Rs{userData.name}! You have full platform access.`,
      'broker': `Welcome back, Broker Rs{userData.name}! Your trading dashboard is ready.`,
      'user': `Welcome back, Rs{userData.name}! Happy investing!`
    };
    
    setTimeout(() => {
      alert(roleMessages[userData.role] || `Welcome back, Rs{userData.name}!`);
    }, 500);
  };

  const handleLogout = () => {
    const userName = user?.name || 'User';
    localStorage.removeItem('user');
    localStorage.removeItem('portfolio'); // Clear portfolio on logout
    setUser(null);
    setIsUserMenuOpen(false);
    
    // Show logout confirmation
    alert(`Goodbye, Rs{userName}! You have been successfully logged out.`);
    
    // Redirect to home if on protected pages
    const protectedPaths = ['/admin', '/broker', '/portfolio', '/account-settings'];
    if (protectedPaths.some(path => window.location.pathname.startsWith(path))) {
      window.location.href = '/';
    }
  };

  const getRoleDisplayName = (role) => {
    const roleNames = {
      'admin': 'Administrator',
      'broker': 'Licensed Broker',
      'user': 'Investor'
    };
    return roleNames[role] || role;
  };

  const getRoleBadgeColor = (role) => {
    const colors = {
      'admin': '#ef4444',
      'broker': '#f59e0b',
      'user': '#10b981'
    };
    return colors[role] || '#64748b';
  };

  const UserMenu = () => (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          transition: 'background 0.3s'
        }}
        onMouseEnter={(e) => e.target.style.background = '#f8fafc'}
        onMouseLeave={(e) => e.target.style.background = 'none'}
      >
        <img
          src={user.avatar}
          alt={user.name}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: `2px solid Rs{getRoleBadgeColor(user.role)}`
          }}
        />
        <div style={{ textAlign: 'left' }}>
          <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1a202c', margin: 0 }}>
            {user.name}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: getRoleBadgeColor(user.role)
            }} />
            <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0 }}>
              {getRoleDisplayName(user.role)}
            </p>
          </div>
        </div>
        <ChevronDown size={16} color="#64748b" />
      </button>

      {isUserMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 10
            }}
            onClick={() => setIsUserMenuOpen(false)}
          />
          
          {/* Dropdown Menu */}
          <div style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            background: 'white',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
            minWidth: '250px',
            zIndex: 20,
            marginTop: '0.5rem',
            overflow: 'hidden'
          }}>
            <div style={{ 
              padding: '1rem', 
              borderBottom: '1px solid #f1f5f9', 
              background: '#f8fafc'
            }}>
              <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1a202c', margin: 0 }}>
                {user.name}
              </p>
              <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0 }}>
                {user.email}
              </p>
              <div style={{ 
                display: 'inline-block',
                marginTop: '0.5rem',
                padding: '0.25rem 0.5rem',
                background: getRoleBadgeColor(user.role),
                color: 'white',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: '600'
              }}>
                {getRoleDisplayName(user.role)}
              </div>
            </div>

            {/* Role-specific menu items */}
            {user.role === 'user' && (
              <>
                <Link
                  to="/portfolio"
                  onClick={() => setIsUserMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    color: '#374151',
                    textDecoration: 'none',
                    borderBottom: '1px solid #f1f5f9',
                    transition: 'background 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#f8fafc'}
                  onMouseLeave={(e) => e.target.style.background = 'white'}
                >
                  <Briefcase size={16} />
                  Portfolio
                </Link>
                <Link
                  to="/account-settings"
                  onClick={() => setIsUserMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    color: '#374151',
                    textDecoration: 'none',
                    borderBottom: '1px solid #f1f5f9',
                    transition: 'background 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#f8fafc'}
                  onMouseLeave={(e) => e.target.style.background = 'white'}
                >
                  <User size={16} />
                  Account Settings
                </Link>
              </>
            )}

            {user.role === 'admin' && (
              <>
                <Link
                  to="/admin/dashboard"
                  onClick={() => setIsUserMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    color: '#374151',
                    textDecoration: 'none',
                    borderBottom: '1px solid #f1f5f9',
                    transition: 'background 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#f8fafc'}
                  onMouseLeave={(e) => e.target.style.background = 'white'}
                >
                  <Settings size={16} />
                  Admin Dashboard
                </Link>
                <Link
                  to="/account-settings"
                  onClick={() => setIsUserMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    color: '#374151',
                    textDecoration: 'none',
                    borderBottom: '1px solid #f1f5f9',
                    transition: 'background 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#f8fafc'}
                  onMouseLeave={(e) => e.target.style.background = 'white'}
                >
                  <User size={16} />
                  Account Settings
                </Link>
              </>
            )}

            {user.role === 'broker' && (
              <>
                <Link
                  to="/broker/dashboard"
                  onClick={() => setIsUserMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    color: '#374151',
                    textDecoration: 'none',
                    borderBottom: '1px solid #f1f5f9',
                    transition: 'background 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#f8fafc'}
                  onMouseLeave={(e) => e.target.style.background = 'white'}
                >
                  <BarChart3 size={16} />
                  Broker Dashboard
                </Link>
                <Link
                  to="/broker/market-overview"
                  onClick={() => setIsUserMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    color: '#374151',
                    textDecoration: 'none',
                    borderBottom: '1px solid #f1f5f9',
                    transition: 'background 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#f8fafc'}
                  onMouseLeave={(e) => e.target.style.background = 'white'}
                >
                  <Building size={16} />
                  Market Overview
                </Link>
                <Link
                  to="/account-settings"
                  onClick={() => setIsUserMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    color: '#374151',
                    textDecoration: 'none',
                    borderBottom: '1px solid #f1f5f9',
                    transition: 'background 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#f8fafc'}
                  onMouseLeave={(e) => e.target.style.background = 'white'}
                >
                  <User size={16} />
                  Account Settings
                </Link>
              </>
            )}

            <button
              onClick={handleLogout}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                width: '100%',
                padding: '0.75rem 1rem',
                background: 'none',
                border: 'none',
                color: '#ef4444',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'background 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.background = '#fef2f2'}
              onMouseLeave={(e) => e.target.style.background = 'white'}
            >
              <LogOut size={16} />
              Sign Out
            </button>
          </div>
        </>
      )}
    </div>
  );

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/" className="logo">
            <TrendingUp size={24} />
            BLUESTOCK
          </Link>
          
          <nav className="nav">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
            <Link to="/analytics" className={location.pathname === '/analytics' ? 'active' : ''}>
              Trading
            </Link>
            <Link to="/ipo" className={location.pathname === '/ipo' ? 'active' : ''}>
              IPO
            </Link>
            <Link to="/mutual-funds" className={location.pathname === '/mutual-funds' ? 'active' : ''}>
              Mutual Funds
            </Link>
            <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>
              Products
            </Link>
            
            {/* Dropdown Menu */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={toggleDropdown}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#666',
                  fontWeight: '500',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  padding: '0.5rem',
                  borderRadius: '4px',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.color = '#4F46E5'}
                onMouseLeave={(e) => e.target.style.color = '#666'}
              >
                <MoreHorizontal size={20} />
                <ChevronDown size={16} />
              </button>
              
              {isDropdownOpen && (
                <>
                  {/* Backdrop */}
                  <div
                    style={{
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: 10
                    }}
                    onClick={closeDropdown}
                  />
                  
                  {/* Dropdown Menu */}
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                    minWidth: '180px',
                    zIndex: 20,
                    marginTop: '0.5rem'
                  }}>
                    <Link 
                      to="/sectors" 
                      className={location.pathname === '/sectors' ? 'active' : ''}
                      onClick={closeDropdown}
                      style={{
                        display: 'block',
                        padding: '0.75rem 1rem',
                        color: '#666',
                        textDecoration: 'none',
                        fontWeight: '500',
                        borderBottom: '1px solid #f1f5f9',
                        transition: 'all 0.3s'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#f8fafc';
                        e.target.style.color = '#4F46E5';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'white';
                        e.target.style.color = '#666';
                      }}
                    >
                      Sectors
                    </Link>
                    <Link 
                      to="/stock-school" 
                      className={location.pathname === '/stock-school' ? 'active' : ''}
                      onClick={closeDropdown}
                      style={{
                        display: 'block',
                        padding: '0.75rem 1rem',
                        color: '#666',
                        textDecoration: 'none',
                        fontWeight: '500',
                        borderBottom: '1px solid #f1f5f9',
                        transition: 'all 0.3s'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#f8fafc';
                        e.target.style.color = '#4F46E5';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'white';
                        e.target.style.color = '#666';
                      }}
                    >
                      Stock School
                    </Link>
                    <Link 
                      to="/about" 
                      className={location.pathname === '/about' ? 'active' : ''}
                      onClick={closeDropdown}
                      style={{
                        display: 'block',
                        padding: '0.75rem 1rem',
                        color: '#666',
                        textDecoration: 'none',
                        fontWeight: '500',
                        borderBottom: '1px solid #f1f5f9',
                        transition: 'all 0.3s'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#f8fafc';
                        e.target.style.color = '#4F46E5';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'white';
                        e.target.style.color = '#666';
                      }}
                    >
                      About
                    </Link>
                    <Link 
                      to="/blog" 
                      className={location.pathname === '/blog' ? 'active' : ''}
                      onClick={closeDropdown}
                      style={{
                        display: 'block',
                        padding: '0.75rem 1rem',
                        color: '#666',
                        textDecoration: 'none',
                        fontWeight: '500',
                        transition: 'all 0.3s'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#f8fafc';
                        e.target.style.color = '#4F46E5';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'white';
                        e.target.style.color = '#666';
                      }}
                    >
                      Blog
                    </Link>
                  </div>
                </>
              )}
            </div>
          </nav>

          {/* User Section */}
          {user ? (
            <UserMenu />
          ) : (
            <button 
              className="login-btn"
              onClick={() => setIsAuthModalOpen(true)}
            >
              Login
            </button>
          )}
        </div>
      </header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
      />
    </>
  );
};

export default Header;