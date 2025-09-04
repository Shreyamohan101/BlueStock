import React, { useState } from 'react';
import { X, Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';
import { validateCredentials, getRegisteredEmails } from '../data/authDatabase';

const AuthModal = ({ isOpen, onClose, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user',
    rememberMe: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');
    
    // Simulate API call delays
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    try {
      if (isLogin) {
        // Login validation
        const validation = validateCredentials(formData.email, formData.password, formData.role);
        
        if (validation.isValid) {
          const userData = {
            ...validation.user,
            avatar: `https://ui-avatars.com/api/?name=Rs{encodeURIComponent(validation.user.name)}&background=4F46E5&color=fff`,
            loginMethod: 'email',
            loginTime: new Date().toISOString()
          };

          // Store user data in localStorage
          localStorage.setItem('user', JSON.stringify(userData));
          
          setSuccess(`Welcome back, Rs{userData.name}!`);
          
          setTimeout(() => {
            setIsLoading(false);
            onLogin(userData);
            onClose();
            resetForm();
          }, 1000);
          
        } else {
          setError(validation.error);
          setIsLoading(false);
        }
      } else {
        // Signup validation
        if (formData.role === 'admin' || formData.role === 'broker') {
          setError(`Cannot create new Rs{formData.role} accounts. Please contact system administrator.`);
          setIsLoading(false);
          return;
        }

        // Create new user account (only for regular users)
        const userData = {
          id: `user_Rs{Date.now()}`,
          name: formData.name,
          email: formData.email,
          role: 'user',
          accountType: 'Individual Investor',
          avatar: `https://ui-avatars.com/api/?name=Rs{encodeURIComponent(formData.name)}&background=4F46E5&color=fff`,
          loginMethod: 'email',
          createdAt: new Date().toISOString()
        };

        localStorage.setItem('user', JSON.stringify(userData));
        
        setSuccess(`Account created successfully! Welcome to Bluestock, Rs{userData.name}!`);
        
        setTimeout(() => {
          setIsLoading(false);
          onLogin(userData);
          onClose();
          resetForm();
        }, 1000);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      role: 'user',
      rememberMe: false
    });
    setError('');
    setSuccess('');
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    resetForm();
  };

  const showRegisteredAccounts = () => {
    const adminEmails = getRegisteredEmails('admin');
    const brokerEmails = getRegisteredEmails('broker');
    
    alert(`Registered Accounts:\n\nAdmins:\nRs{adminEmails.join('\n')}\n\nBrokers:\nRs{brokerEmails.join('\n')}\n\nNote: All passwords are available in the source code for demo purposes.`);
  };

  if (!isOpen) return null;

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
      zIndex: 1000,
      padding: '1rem'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '2rem',
        width: '100%',
        maxWidth: '420px',
        position: 'relative',
        maxHeight: '90vh',
        overflow: 'auto'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          disabled={isLoading}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            color: '#64748b',
            padding: '0.5rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s',
            opacity: isLoading ? 0.5 : 1
          }}
          onMouseEnter={(e) => {
            if (!isLoading) {
              e.target.style.background = '#f1f5f9';
              e.target.style.color = '#1a202c';
            }
          }}
          onMouseLeave={(e) => {
            if (!isLoading) {
              e.target.style.background = 'none';
              e.target.style.color = '#64748b';
            }
          }}
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            color: '#4F46E5',
            marginBottom: '0.5rem'
          }}>
            # BLUESTOCK
          </h2>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1a202c' }}>
            {isLogin ? 'Welcome back' : 'Create your account'}
          </h3>
          <p style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '0.5rem' }}>
            {isLogin ? 'Sign in to your account' : 'Join thousands of investors'}
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div style={{
            background: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '8px',
            padding: '0.75rem',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <AlertCircle size={16} color="#ef4444" />
            <span style={{ color: '#dc2626', fontSize: '0.875rem' }}>{error}</span>
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div style={{
            background: '#f0fdf4',
            border: '1px solid #bbf7d0',
            borderRadius: '8px',
            padding: '0.75rem',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <CheckCircle size={16} color="#10b981" />
            <span style={{ color: '#059669', fontSize: '0.875rem' }}>{success}</span>
          </div>
        )}

        {/* Demo Accounts Button */}
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <button
            type="button"
            onClick={showRegisteredAccounts}
            disabled={isLoading}
            style={{
              background: '#f0f4ff',
              color: '#4F46E5',
              border: '1px solid #c7d2fe',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              fontSize: '0.75rem',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              opacity: isLoading ? 0.5 : 1
            }}
          >
            View Demo Accounts
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {!isLogin && (
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required={!isLogin}
                disabled={isLoading}
                placeholder="Enter your full name"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  opacity: isLoading ? 0.7 : 1,
                  cursor: isLoading ? 'not-allowed' : 'text'
                }}
              />
            </div>
          )}

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              disabled={isLoading}
              placeholder="your@email.com"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #e2e8f0',
                borderRadius: '8px',
                fontSize: '1rem',
                opacity: isLoading ? 0.7 : 1,
                cursor: isLoading ? 'not-allowed' : 'text'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                disabled={isLoading}
                placeholder="Enter your password"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  paddingRight: '3rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  opacity: isLoading ? 0.7 : 1,
                  cursor: isLoading ? 'not-allowed' : 'text'
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
                style={{
                  position: 'absolute',
                  right: '0.75rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  color: '#64748b',
                  opacity: isLoading ? 0.5 : 1
                }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Account Type Selection */}
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
              Account Type
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #e2e8f0',
                borderRadius: '8px',
                fontSize: '1rem',
                background: 'white',
                opacity: isLoading ? 0.7 : 1,
                cursor: isLoading ? 'not-allowed' : 'pointer'
              }}
            >
              <option value="user">Individual Investor</option>
              <option value="admin">Platform Administrator</option>
              <option value="broker">Licensed Broker</option>
            </select>
            {!isLogin && (formData.role === 'admin' || formData.role === 'broker') && (
              <p style={{ 
                fontSize: '0.75rem', 
                color: '#f59e0b', 
                marginTop: '0.25rem',
                fontStyle: 'italic'
              }}>
                ⚠️ Admin and Broker accounts cannot be created through signup
              </p>
            )}
          </div>

          {/* Remember Me / Terms */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleInputChange}
              disabled={isLoading}
              id="rememberMe"
              style={{ cursor: isLoading ? 'not-allowed' : 'pointer' }}
            />
            <label htmlFor="rememberMe" style={{ fontSize: '0.875rem', color: '#64748b', cursor: isLoading ? 'not-allowed' : 'pointer' }}>
              {isLogin ? 'Keep me signed in' : 'I agree to the Terms of Service and Privacy Policy'}
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              background: isLoading ? '#94a3b8' : '#4F46E5',
              color: 'white',
              border: 'none',
              padding: '0.75rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              marginTop: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              transition: 'background 0.3s'
            }}
          >
            {isLoading && (
              <div style={{
                width: '16px',
                height: '16px',
                border: '2px solid rgba(255,255,255,0.3)',
                borderTop: '2px solid white',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }} />
            )}
            {isLoading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
          </button>

          {/* Forgot Password Link (only for login) */}
          {isLogin && (
            <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
              <button
                type="button"
                disabled={isLoading}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#4F46E5',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  fontSize: '0.875rem',
                  textDecoration: 'underline',
                  opacity: isLoading ? 0.5 : 1
                }}
                onClick={() => alert('Password reset functionality would be implemented here')}
              >
                Forgot your password?
              </button>
            </div>
          )}

          {/* Switch Mode */}
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <span style={{ color: '#64748b', fontSize: '0.875rem' }}>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
            </span>
            <button
              type="button"
              onClick={switchMode}
              disabled={isLoading}
              style={{
                background: 'none',
                border: 'none',
                color: '#4F46E5',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                fontSize: '0.875rem',
                fontWeight: '600',
                textDecoration: 'underline',
                opacity: isLoading ? 0.5 : 1
              }}
            >
              {isLogin ? 'Sign up here' : 'Sign in here'}
            </button>
          </div>
        </form>

        {/* Loading Overlay */}
        {isLoading && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(255,255,255,0.8)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                border: '4px solid #e2e8f0',
                borderTop: '4px solid #4F46E5',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }} />
              <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
                {isLogin ? 'Verifying credentials...' : 'Creating your account...'}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default AuthModal;