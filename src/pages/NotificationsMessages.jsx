import React, { useState, useEffect } from 'react';
import { Bell, Mail, Settings, Check, X, Filter, Search } from 'lucide-react';

const NotificationsMessages = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('notifications');
  const [notifications, setNotifications] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Check user authentication
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      window.location.href = '/';
    }

    // Mock notifications
    setNotifications([
      {
        id: 1,
        type: 'price_alert',
        title: 'AAPL Price Alert',
        message: 'Apple Inc. has reached your target price of $175.00',
        time: '2 minutes ago',
        read: false,
        icon: '📈'
      },
      {
        id: 2,
        type: 'portfolio',
        title: 'Portfolio Update',
        message: 'Your portfolio gained 2.5% today',
        time: '1 hour ago',
        read: false,
        icon: '💼'
      },
      {
        id: 3,
        type: 'news',
        title: 'Market News',
        message: 'Federal Reserve announces interest rate decision',
        time: '3 hours ago',
        read: true,
        icon: '📰'
      },
      {
        id: 4,
        type: 'system',
        title: 'System Maintenance',
        message: 'Scheduled maintenance tonight from 2-4 AM EST',
        time: '1 day ago',
        read: true,
        icon: '🔧'
      }
    ]);

    // Mock messages
    setMessages([
      {
        id: 1,
        from: 'Support Team',
        subject: 'Welcome to Bluestock!',
        preview: 'Thank you for joining our platform. Here\'s how to get started...',
        time: '2 days ago',
        read: false,
        avatar: '🎯'
      },
      {
        id: 2,
        from: 'Market Analyst',
        subject: 'Weekly Market Report',
        preview: 'This week\'s market analysis and key insights for your portfolio...',
        time: '3 days ago',
        read: true,
        avatar: '📊'
      },
      {
        id: 3,
        from: 'Account Manager',
        subject: 'Account Verification Complete',
        preview: 'Your account has been successfully verified. You can now access all features...',
        time: '1 week ago',
        read: true,
        avatar: '✅'
      }
    ]);
  }, []);

  const markAsRead = (id, type) => {
    if (type === 'notification') {
      setNotifications(prev => 
        prev.map(notif => 
          notif.id === id ? { ...notif, read: true } : notif
        )
      );
    } else {
      setMessages(prev => 
        prev.map(msg => 
          msg.id === id ? { ...msg, read: true } : msg
        )
      );
    }
  };

  const deleteItem = (id, type) => {
    if (type === 'notification') {
      setNotifications(prev => prev.filter(notif => notif.id !== id));
    } else {
      setMessages(prev => prev.filter(msg => msg.id !== id));
    }
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
              { id: 'account', label: 'Account', path: '/account-settings' },
              { id: 'notifications', label: 'Notifications & Messages', path: '/notifications-messages', active: true },
              { id: 'security', label: 'Security & Privacy', path: '/security-privacy' },
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
              Notifications & Messages
            </h1>
            <p style={{ color: '#94a3b8' }}>
              Manage your notifications and messages
            </p>
          </div>

          {/* Tabs */}
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            marginBottom: '2rem',
            borderBottom: '1px solid #334155'
          }}>
            <button
              onClick={() => setActiveTab('notifications')}
              style={{
                padding: '1rem 2rem',
                background: 'none',
                border: 'none',
                color: activeTab === 'notifications' ? '#4F46E5' : '#94a3b8',
                borderBottom: activeTab === 'notifications' ? '2px solid #4F46E5' : 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600'
              }}
            >
              <Bell size={16} style={{ marginRight: '0.5rem' }} />
              Notifications ({notifications.filter(n => !n.read).length})
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              style={{
                padding: '1rem 2rem',
                background: 'none',
                border: 'none',
                color: activeTab === 'messages' ? '#4F46E5' : '#94a3b8',
                borderBottom: activeTab === 'messages' ? '2px solid #4F46E5' : 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600'
              }}
            >
              <Mail size={16} style={{ marginRight: '0.5rem' }} />
              Messages ({messages.filter(m => !m.read).length})
            </button>
          </div>

          {/* Content */}
          <div style={{ 
            background: '#1e293b', 
            borderRadius: '12px', 
            padding: '2rem'
          }}>
            {activeTab === 'notifications' ? (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                    Notifications
                  </h3>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button style={{
                      background: '#4F46E5',
                      color: 'white',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}>
                      Mark All Read
                    </button>
                    <button style={{
                      background: '#374151',
                      color: 'white',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}>
                      <Filter size={16} />
                    </button>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {notifications.map(notification => (
                    <div key={notification.id} style={{
                      background: notification.read ? '#0f172a' : '#1e293b',
                      border: notification.read ? '1px solid #334155' : '1px solid #4F46E5',
                      borderRadius: '8px',
                      padding: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ fontSize: '1.5rem' }}>{notification.icon}</div>
                        <div>
                          <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                            {notification.title}
                          </h4>
                          <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                            {notification.message}
                          </p>
                          <p style={{ color: '#64748b', fontSize: '0.75rem' }}>
                            {notification.time}
                          </p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        {!notification.read && (
                          <button
                            onClick={() => markAsRead(notification.id, 'notification')}
                            style={{
                              background: '#10b981',
                              border: 'none',
                              borderRadius: '4px',
                              padding: '0.5rem',
                              cursor: 'pointer'
                            }}
                          >
                            <Check size={16} color="white" />
                          </button>
                        )}
                        <button
                          onClick={() => deleteItem(notification.id, 'notification')}
                          style={{
                            background: '#ef4444',
                            border: 'none',
                            borderRadius: '4px',
                            padding: '0.5rem',
                            cursor: 'pointer'
                          }}
                        >
                          <X size={16} color="white" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                    Messages
                  </h3>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ position: 'relative' }}>
                      <Search size={16} style={{ 
                        position: 'absolute', 
                        left: '12px', 
                        top: '50%', 
                        transform: 'translateY(-50%)',
                        color: '#64748b'
                      }} />
                      <input
                        type="text"
                        placeholder="Search messages..."
                        style={{
                          background: '#0f172a',
                          border: '1px solid #374151',
                          borderRadius: '6px',
                          padding: '0.5rem 0.5rem 0.5rem 2.5rem',
                          color: 'white',
                          width: '200px'
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {messages.map(message => (
                    <div key={message.id} style={{
                      background: message.read ? '#0f172a' : '#1e293b',
                      border: message.read ? '1px solid #334155' : '1px solid #4F46E5',
                      borderRadius: '8px',
                      padding: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ 
                          fontSize: '1.5rem',
                          width: '40px',
                          height: '40px',
                          background: '#4F46E5',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          {message.avatar}
                        </div>
                        <div>
                          <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                            {message.subject}
                          </h4>
                          <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                            From: {message.from}
                          </p>
                          <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                            {message.preview}
                          </p>
                          <p style={{ color: '#64748b', fontSize: '0.75rem' }}>
                            {message.time}
                          </p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        {!message.read && (
                          <button
                            onClick={() => markAsRead(message.id, 'message')}
                            style={{
                              background: '#10b981',
                              border: 'none',
                              borderRadius: '4px',
                              padding: '0.5rem',
                              cursor: 'pointer'
                            }}
                          >
                            <Check size={16} color="white" />
                          </button>
                        )}
                        <button
                          onClick={() => deleteItem(message.id, 'message')}
                          style={{
                            background: '#ef4444',
                            border: 'none',
                            borderRadius: '4px',
                            padding: '0.5rem',
                            cursor: 'pointer'
                          }}
                        >
                          <X size={16} color="white" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsMessages;