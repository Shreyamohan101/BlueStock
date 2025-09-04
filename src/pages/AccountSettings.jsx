import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, Building, Edit, Save, X, Camera } from 'lucide-react';

const AccountSettings = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    username: '',
    dateOfBirth: '',
    country: '',
    state: '',
    postalCode: '',
    companyName: '',
    cityState: ''
  });

  useEffect(() => {
    // Check user authentication
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setFormData({
        name: userData.name || '',
        email: userData.email || '',
        phone: userData.phone || '(123) 456-7890',
        username: userData.username || 'wtftraderidarian',
        dateOfBirth: userData.dateOfBirth || 'December 17, 1990',
        country: userData.country || 'India',
        state: userData.state || 'Pune, MH',
        postalCode: userData.postalCode || '451 Kolhrud',
        companyName: userData.companyName || 'Designer Inc.',
        cityState: userData.cityState || 'Chicago, Illinois'
      });
    } else {
      window.location.href = '/';
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Update user data in localStorage
    const updatedUser = { ...user, ...formData };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setUser(updatedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset form data to original user data
    setFormData({
      name: user.name || '',
      email: user.email || '',
      phone: user.phone || '(123) 456-7890',
      username: user.username || 'wtftraderidarian',
      dateOfBirth: user.dateOfBirth || 'December 17, 1990',
      country: user.country || 'India',
      state: user.state || 'Pune, MH',
      postalCode: user.postalCode || '451 Kolhrud',
      companyName: user.companyName || 'Designer Inc.',
      cityState: user.cityState || 'Chicago, Illinois'
    });
    setIsEditing(false);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ 
      background: '#0f172a', 
      minHeight: '100vh',
      color: 'white'
    }}>
      {/* Sidebar */}
      <div style={{ display: 'flex' }}>
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
              { id: 'account', label: 'Account', icon: User, active: true },
              { id: 'notifications', label: 'Notifications & Messages', icon: Mail },
              { id: 'security', label: 'Security & Privacy', icon: User },
              { id: 'appearance', label: 'Appearance', icon: User },
              { id: 'chart', label: 'Chart Settings', icon: User },
              { id: 'navigation', label: 'Navigation Settings', icon: User },
              { id: 'quotes', label: 'Quotes Preferences', icon: User },
              { id: 'documents', label: 'Documents', icon: User },
              { id: 'community', label: 'Community Settings', icon: User },
              { id: 'history', label: 'History', icon: User },
              { id: 'spend', label: 'Spend/Queries', icon: User },
              { id: 'rewards', label: 'Rewards', icon: User }
            ].map(item => (
              <button
                key={item.id}
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
                  fontSize: '0.875rem'
                }}
              >
                <item.icon size={16} />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: '2rem' }}>
          {/* Header */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '2rem'
          }}>
            <div>
              <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                Account Settings
              </h1>
              <p style={{ color: '#94a3b8' }}>
                Manage your account details such as name, email address, contact information, etc.
              </p>
            </div>
          </div>

          {/* Profile Section */}
          <div style={{ 
            background: '#1e293b', 
            borderRadius: '12px', 
            padding: '2rem',
            marginBottom: '2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
              <div style={{ position: 'relative' }}>
                <img
                  src={user.avatar}
                  alt={user.name}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    border: '3px solid #4F46E5'
                  }}
                />
                <button style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  background: '#4F46E5',
                  border: 'none',
                  borderRadius: '50%',
                  padding: '0.5rem',
                  cursor: 'pointer'
                }}>
                  <Camera size={16} color="white" />
                </button>
              </div>
              <div>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Account Number</p>
                <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                  4451728902
                </p>
                <button style={{
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  marginTop: '0.5rem'
                }}>
                  Deactivate Account
                </button>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div style={{ 
            background: '#1e293b', 
            borderRadius: '12px', 
            padding: '2rem',
            marginBottom: '2rem'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '2rem'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                Personal Information
              </h3>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#4F46E5',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                >
                  <Edit size={16} />
                  Edit
                </button>
              ) : (
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    onClick={handleSave}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: '#10b981',
                      color: 'white',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    <Save size={16} />
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: '#6b7280',
                      color: 'white',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    <X size={16} />
                    Cancel
                  </button>
                </div>
              )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                  First Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={formData.name.split(' ')[0] || ''}
                    onChange={(e) => setFormData({...formData, name: e.target.value + ' ' + (formData.name.split(' ')[1] || '')})}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: '#0f172a',
                      border: '1px solid #374151',
                      borderRadius: '6px',
                      color: 'white'
                    }}
                  />
                ) : (
                  <p style={{ fontSize: '1rem', fontWeight: '500' }}>
                    {formData.name.split(' ')[0] || 'Pratik'}
                  </p>
                )}
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                  Last Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.name.split(' ')[1] || ''}
                    onChange={(e) => setFormData({...formData, name: (formData.name.split(' ')[0] || '') + ' ' + e.target.value})}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: '#0f172a',
                      border: '1px solid #374151',
                      borderRadius: '6px',
                      color: 'white'
                    }}
                  />
                ) : (
                  <p style={{ fontSize: '1rem', fontWeight: '500' }}>
                    {formData.name.split(' ')[1] || 'Patil'}
                  </p>
                )}
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                  Date of Birth
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: '#0f172a',
                      border: '1px solid #374151',
                      borderRadius: '6px',
                      color: 'white'
                    }}
                  />
                ) : (
                  <p style={{ fontSize: '1rem', fontWeight: '500' }}>
                    {formData.dateOfBirth}
                  </p>
                )}
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                  Email Address
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: '#0f172a',
                      border: '1px solid #374151',
                      borderRadius: '6px',
                      color: 'white'
                    }}
                  />
                ) : (
                  <p style={{ fontSize: '1rem', fontWeight: '500' }}>
                    {formData.email}
                  </p>
                )}
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                  Phone Number
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: '#0f172a',
                      border: '1px solid #374151',
                      borderRadius: '6px',
                      color: 'white'
                    }}
                  />
                ) : (
                  <p style={{ fontSize: '1rem', fontWeight: '500' }}>
                    {formData.phone}
                  </p>
                )}
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                  Username
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: '#0f172a',
                      border: '1px solid #374151',
                      borderRadius: '6px',
                      color: 'white'
                    }}
                  />
                ) : (
                  <p style={{ fontSize: '1rem', fontWeight: '500' }}>
                    {formData.username}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Address */}
          <div style={{ 
            background: '#1e293b', 
            borderRadius: '12px', 
            padding: '2rem',
            marginBottom: '2rem'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '2rem'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                Address
              </h3>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#4F46E5',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                >
                  <Edit size={16} />
                  Edit
                </button>
              )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                  Country
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: '#0f172a',
                      border: '1px solid #374151',
                      borderRadius: '6px',
                      color: 'white'
                    }}
                  />
                ) : (
                  <p style={{ fontSize: '1rem', fontWeight: '500' }}>
                    {formData.country}
                  </p>
                )}
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                  City/State
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: '#0f172a',
                      border: '1px solid #374151',
                      borderRadius: '6px',
                      color: 'white'
                    }}
                  />
                ) : (
                  <p style={{ fontSize: '1rem', fontWeight: '500' }}>
                    {formData.state}
                  </p>
                )}
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                  Postal Address
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: '#0f172a',
                      border: '1px solid #374151',
                      borderRadius: '6px',
                      color: 'white'
                    }}
                  />
                ) : (
                  <p style={{ fontSize: '1rem', fontWeight: '500' }}>
                    {formData.postalCode}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Employer */}
          <div style={{ 
            background: '#1e293b', 
            borderRadius: '12px', 
            padding: '2rem'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '2rem'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                Employer
              </h3>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#4F46E5',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                >
                  <Edit size={16} />
                  Edit
                </button>
              )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                  Company Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: '#0f172a',
                      border: '1px solid #374151',
                      borderRadius: '6px',
                      color: 'white'
                    }}
                  />
                ) : (
                  <p style={{ fontSize: '1rem', fontWeight: '500' }}>
                    {formData.companyName}
                  </p>
                )}
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                  City/State
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="cityState"
                    value={formData.cityState}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: '#0f172a',
                      border: '1px solid #374151',
                      borderRadius: '6px',
                      color: 'white'
                    }}
                  />
                ) : (
                  <p style={{ fontSize: '1rem', fontWeight: '500' }}>
                    {formData.cityState}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;