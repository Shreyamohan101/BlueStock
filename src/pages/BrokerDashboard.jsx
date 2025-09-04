import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  DollarSign, 
  Users, 
  Activity,
  Calendar,
  Clock,
  Target,
  Briefcase
} from 'lucide-react';

const BrokerDashboard = () => {
  const [user, setUser] = useState(null);
  const [timeframe, setTimeframe] = useState('1m');

  useEffect(() => {
    // Check if user is broker
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      if (userData.role !== 'broker') {
        window.location.href = '/';
        return;
      }
      setUser(userData);
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
      {/* Header */}
      <div style={{ 
        background: '#1e293b', 
        padding: '1rem 2rem',
        borderBottom: '1px solid #334155'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img
                src={user.avatar}
                alt={user.name}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '2px solid #4F46E5'
                }}
              />
              <div>
                <h2 style={{ fontSize: '1.125rem', fontWeight: 'bold', margin: 0 }}>
                  {user.name}
                </h2>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem', margin: 0 }}>
                  Account: 4451728902
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '2rem' }}>
              <div>
                <p style={{ color: '#94a3b8', fontSize: '0.75rem', margin: 0 }}>Portfolio Balance</p>
                <p style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>
                  $623,098.17
                </p>
              </div>
              <div>
                <p style={{ color: '#94a3b8', fontSize: '0.75rem', margin: 0 }}>Available Funds</p>
                <p style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>
                  $122,912.50
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <input
              type="text"
              placeholder="Search"
              style={{
                background: '#0f172a',
                border: '1px solid #374151',
                borderRadius: '6px',
                padding: '0.5rem 1rem',
                color: 'white',
                width: '200px'
              }}
            />
          </div>
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <div style={{ 
          width: '60px', 
          background: '#1e293b', 
          minHeight: 'calc(100vh - 80px)',
          padding: '1rem 0',
          borderRight: '1px solid #334155'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            {[
              { icon: BarChart3, active: true },
              { icon: TrendingUp },
              { icon: Users },
              { icon: Briefcase },
              { icon: Activity },
              { icon: Calendar },
              { icon: Target }
            ].map((item, index) => (
              <button
                key={index}
                style={{
                  background: item.active ? '#4F46E5' : 'transparent',
                  border: 'none',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  color: item.active ? 'white' : '#94a3b8'
                }}
              >
                <item.icon size={20} />
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: '2rem' }}>
          {/* Dashboard Header */}
          <div style={{ marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Dashboard
            </h1>
            <p style={{ color: '#94a3b8' }}>
              IPO Dashboard India
            </p>
          </div>

          {/* Stats Cards */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            <div style={{ 
              background: '#1e293b', 
              padding: '1.5rem', 
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  background: '#4F46E5', 
                  padding: '0.75rem', 
                  borderRadius: '8px' 
                }}>
                  <TrendingUp size={24} color="white" />
                </div>
                <div>
                  <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>IPO in 2024</p>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    8
                  </p>
                </div>
              </div>
            </div>

            <div style={{ 
              background: '#1e293b', 
              padding: '1.5rem', 
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  background: '#f59e0b', 
                  padding: '0.75rem', 
                  borderRadius: '8px' 
                }}>
                  <Activity size={24} color="white" />
                </div>
                <div>
                  <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Hot IPOs</p>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    30
                  </p>
                </div>
              </div>
            </div>

            <div style={{ 
              background: '#1e293b', 
              padding: '1.5rem', 
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  background: '#10b981', 
                  padding: '0.75rem', 
                  borderRadius: '8px' 
                }}>
                  <Users size={24} color="white" />
                </div>
                <div>
                  <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>SME IPOs</p>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    20
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 300px', 
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {/* Main Chart */}
            <div style={{ 
              background: '#1e293b', 
              borderRadius: '12px', 
              padding: '1.5rem',
              border: '1px solid #334155'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>
                  Quick Links
                </h3>
                <button style={{
                  background: '#4F46E5',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.875rem'
                }}>
                  View Report
                </button>
              </div>

              {/* Chart Placeholder */}
              <div style={{ 
                height: '300px', 
                background: '#0f172a',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #334155'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <BarChart3 size={48} color="#4F46E5" style={{ margin: '0 auto 1rem' }} />
                  <p style={{ color: '#94a3b8' }}>Chart visualization would go here</p>
                </div>
              </div>
            </div>

            {/* Side Panel */}
            <div style={{ 
              background: '#1e293b', 
              borderRadius: '12px', 
              padding: '1.5rem',
              border: '1px solid #334155'
            }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                Main Board IPO
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '1rem' }}>
                From 01 Jan 2024
              </p>

              {/* Circular Progress */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                height: '150px',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: `conic-gradient(#4F46E5 0deg 144deg, #f59e0b 144deg 216deg, #10b981 216deg 360deg)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: '#1e293b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                  }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>16</span>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Total</span>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '12px', height: '12px', background: '#4F46E5', borderRadius: '50%' }} />
                  <span style={{ fontSize: '0.875rem' }}>Upcoming: 8</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '12px', height: '12px', background: '#f59e0b', borderRadius: '50%' }} />
                  <span style={{ fontSize: '0.875rem' }}>New Listed: 5</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '12px', height: '12px', background: '#10b981', borderRadius: '50%' }} />
                  <span style={{ fontSize: '0.875rem' }}>Ongoing: 3</span>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem'
          }}>
            <div style={{ 
              background: '#1e293b', 
              padding: '1.5rem', 
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ 
                  background: '#10b981', 
                  padding: '0.75rem', 
                  borderRadius: '8px' 
                }}>
                  <TrendingUp size={20} color="white" />
                </div>
                <div>
                  <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Total Gains</p>
                  <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#10b981' }}>
                    +$12,450
                  </p>
                </div>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.75rem' }}>
                +15.2% from last month
              </p>
            </div>

            <div style={{ 
              background: '#1e293b', 
              padding: '1.5rem', 
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ 
                  background: '#ef4444', 
                  padding: '0.75rem', 
                  borderRadius: '8px' 
                }}>
                  <TrendingDown size={20} color="white" />
                </div>
                <div>
                  <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Total Losses</p>
                  <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#ef4444' }}>
                    -$3,200
                  </p>
                </div>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.75rem' }}>
                -2.1% from last month
              </p>
            </div>

            <div style={{ 
              background: '#1e293b', 
              padding: '1.5rem', 
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ 
                  background: '#8b5cf6', 
                  padding: '0.75rem', 
                  borderRadius: '8px' 
                }}>
                  <Activity size={20} color="white" />
                </div>
                <div>
                  <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Active Trades</p>
                  <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                    24
                  </p>
                </div>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.75rem' }}>
                8 pending orders
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrokerDashboard;