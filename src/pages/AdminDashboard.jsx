import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  Calendar,
  Building,
  Star
} from 'lucide-react';

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [ipos, setIpos] = useState([]);
  const [showAddIPOModal, setShowAddIPOModal] = useState(false);

  useEffect(() => {
    // Check if user is admin
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      if (userData.role !== 'admin') {
        window.location.href = '/';
        return;
      }
      setUser(userData);
    } else {
      window.location.href = '/';
    }

    // Load IPOs
    loadIPOs();
  }, []);

  const loadIPOs = () => {
    // Mock IPO data for admin dashboard
    setIpos([
      {
        id: 1,
        company: 'Adani Power',
        priceRange: '₹99 - 106',
        open: '2024-06-01',
        close: '2024-06-05',
        issueSize: '4500.15 Cr',
        issueType: 'Book Built',
        listingDate: '2024-06-10',
        status: 'Upcoming'
      },
      {
        id: 2,
        company: 'VBL LTD',
        priceRange: '₹225 - 196',
        open: '2024-06-03',
        close: '2024-06-05',
        issueSize: '1310.15 Cr',
        issueType: 'Book Built',
        listingDate: '2024-06-10',
        status: 'Upcoming'
      },
      {
        id: 3,
        company: 'Tata Motor',
        priceRange: '₹ 2504 - 186',
        open: '2024-06-05',
        close: '2024-06-05',
        issueSize: '1500.15 Cr',
        issueType: 'Book Built',
        listingDate: '2024-06-10',
        status: 'New Listed'
      },
      {
        id: 4,
        company: 'HDFC LTD',
        priceRange: '₹ 2544 - 186',
        open: '2024-06-05',
        close: '2024-06-05',
        issueSize: '800.15 Cr',
        issueType: 'Book Built',
        listingDate: '2024-06-11',
        status: 'Upcoming'
      },
      {
        id: 5,
        company: 'Tata Motor',
        priceRange: '₹ 1800 - 186',
        open: '2024-06-05',
        close: '2024-06-05',
        issueSize: '800.15 Cr',
        issueType: 'Book Built',
        listingDate: '2024-06-10',
        status: 'Upcoming'
      }
    ]);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Upcoming': return '#f59e0b';
      case 'New Listed': return '#10b981';
      case 'Ongoing': return '#3b82f6';
      default: return '#6b7280';
    }
  };

  const AddIPOModal = () => {
    const [formData, setFormData] = useState({
      company: '',
      symbol: '',
      priceMin: '',
      priceMax: '',
      openDate: '',
      closeDate: '',
      issueSize: '',
      listingDate: '',
      issueType: 'Book Built'
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      const newIPO = {
        id: ipos.length + 1,
        company: formData.company,
        priceRange: `₹${formData.priceMin} - ${formData.priceMax}`,
        open: formData.openDate,
        close: formData.closeDate,
        issueSize: `${formData.issueSize} Cr`,
        issueType: formData.issueType,
        listingDate: formData.listingDate,
        status: 'Upcoming'
      };
      setIpos([...ipos, newIPO]);
      setShowAddIPOModal(false);
      setFormData({
        company: '',
        symbol: '',
        priceMin: '',
        priceMax: '',
        openDate: '',
        closeDate: '',
        issueSize: '',
        listingDate: '',
        issueType: 'Book Built'
      });
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
          borderRadius: '12px',
          padding: '2rem',
          width: '90%',
          maxWidth: '600px',
          maxHeight: '90vh',
          overflow: 'auto'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
            Add New IPO
          </h2>
          
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Company Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Symbol
                </label>
                <input
                  type="text"
                  required
                  value={formData.symbol}
                  onChange={(e) => setFormData({...formData, symbol: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Price Min (₹)
                </label>
                <input
                  type="number"
                  required
                  value={formData.priceMin}
                  onChange={(e) => setFormData({...formData, priceMin: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Price Max (₹)
                </label>
                <input
                  type="number"
                  required
                  value={formData.priceMax}
                  onChange={(e) => setFormData({...formData, priceMax: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Open Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.openDate}
                  onChange={(e) => setFormData({...formData, openDate: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Close Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.closeDate}
                  onChange={(e) => setFormData({...formData, closeDate: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Issue Size (Cr)
                </label>
                <input
                  type="number"
                  required
                  value={formData.issueSize}
                  onChange={(e) => setFormData({...formData, issueSize: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Listing Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.listingDate}
                  onChange={(e) => setFormData({...formData, listingDate: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <button
                type="button"
                onClick={() => setShowAddIPOModal(false)}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  background: '#f1f5f9',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  background: '#4F46E5',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Add IPO
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc' }}>
      {/* Sidebar */}
      <div style={{ 
        width: '250px', 
        background: 'white', 
        borderRight: '1px solid #e2e8f0',
        padding: '2rem 0'
      }}>
        <div style={{ padding: '0 1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#4F46E5' }}>
            Bluestock Finance
          </h2>
          <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Admin Panel</p>
        </div>

        <nav style={{ padding: '0 1rem' }}>
          {[
            { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
            { id: 'ipos', label: 'IPO Management', icon: TrendingUp },
            { id: 'users', label: 'User Management', icon: Users },
            { id: 'analytics', label: 'Analytics', icon: BarChart3 },
            { id: 'settings', label: 'Settings', icon: Building }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                background: activeTab === item.id ? '#f0f4ff' : 'transparent',
                color: activeTab === item.id ? '#4F46E5' : '#64748b',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                marginBottom: '0.5rem',
                textAlign: 'left'
              }}
            >
              <item.icon size={18} />
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
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a202c' }}>
              {activeTab === 'dashboard' ? 'Dashboard' : 
               activeTab === 'ipos' ? 'IPO Management' : 
               activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
            <p style={{ color: '#64748b' }}>
              Welcome back, {user.name}
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: '#64748b' }}>Hi, {user.name}</span>
            <img
              src={user.avatar}
              alt={user.name}
              style={{ width: '40px', height: '40px', borderRadius: '50%' }}
            />
          </div>
        </div>

        {/* Dashboard Content */}
        {activeTab === 'dashboard' && (
          <div>
            {/* Stats Cards */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div style={{ 
                background: 'white', 
                padding: '1.5rem', 
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
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
                    <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Total IPOs</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c' }}>
                      {ipos.length}
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ 
                background: 'white', 
                padding: '1.5rem', 
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
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
                    <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Active Users</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c' }}>
                      12,450
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ 
                background: 'white', 
                padding: '1.5rem', 
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ 
                    background: '#f59e0b', 
                    padding: '0.75rem', 
                    borderRadius: '8px' 
                  }}>
                    <DollarSign size={24} color="white" />
                  </div>
                  <div>
                    <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Total Volume</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c' }}>
                      ₹2.5B
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent IPOs */}
            <div style={{ 
              background: 'white', 
              borderRadius: '12px', 
              padding: '1.5rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                Recent IPOs
              </h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600' }}>Company</th>
                      <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600' }}>Status</th>
                      <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600' }}>Issue Size</th>
                      <th style={{ padding: '0.75rem', textAlign: 'left', fontWeight: '600' }}>Listing Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ipos.slice(0, 5).map(ipo => (
                      <tr key={ipo.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '0.75rem' }}>{ipo.company}</td>
                        <td style={{ padding: '0.75rem' }}>
                          <span style={{
                            background: getStatusColor(ipo.status),
                            color: 'white',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '20px',
                            fontSize: '0.75rem'
                          }}>
                            {ipo.status}
                          </span>
                        </td>
                        <td style={{ padding: '0.75rem' }}>{ipo.issueSize}</td>
                        <td style={{ padding: '0.75rem' }}>{ipo.listingDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* IPO Management */}
        {activeTab === 'ipos' && (
          <div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                Upcoming IPO | Dashboard
              </h3>
              <button
                onClick={() => setShowAddIPOModal(true)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: '#4F46E5',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                <Plus size={16} />
                Register IPO
              </button>
            </div>

            <div style={{ 
              background: 'white', 
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              overflow: 'hidden'
            }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead style={{ background: '#f8fafc' }}>
                    <tr>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Company</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Price Band</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Open</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Close</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Issue Size</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Issue Type</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Listing Date</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Status</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Action</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Details/View</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ipos.map(ipo => (
                      <tr key={ipo.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '1rem' }}>{ipo.company}</td>
                        <td style={{ padding: '1rem' }}>{ipo.priceRange}</td>
                        <td style={{ padding: '1rem' }}>{ipo.open}</td>
                        <td style={{ padding: '1rem' }}>{ipo.close}</td>
                        <td style={{ padding: '1rem' }}>{ipo.issueSize}</td>
                        <td style={{ padding: '1rem' }}>{ipo.issueType}</td>
                        <td style={{ padding: '1rem' }}>{ipo.listingDate}</td>
                        <td style={{ padding: '1rem' }}>
                          <span style={{
                            background: getStatusColor(ipo.status),
                            color: 'white',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '20px',
                            fontSize: '0.75rem'
                          }}>
                            {ipo.status}
                          </span>
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <button style={{
                            background: '#4F46E5',
                            color: 'white',
                            border: 'none',
                            padding: '0.5rem 1rem',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '0.75rem'
                          }}>
                            Update
                          </button>
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button style={{
                              background: '#f1f5f9',
                              border: 'none',
                              padding: '0.5rem',
                              borderRadius: '4px',
                              cursor: 'pointer'
                            }}>
                              <Eye size={16} color="#64748b" />
                            </button>
                            <button style={{
                              background: '#f1f5f9',
                              border: 'none',
                              padding: '0.5rem',
                              borderRadius: '4px',
                              cursor: 'pointer'
                            }}>
                              <Edit size={16} color="#64748b" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                padding: '1rem',
                borderTop: '1px solid #f1f5f9'
              }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {[1, 2, 3, 4, 5].map(page => (
                    <button
                      key={page}
                      style={{
                        padding: '0.5rem 0.75rem',
                        border: page === 1 ? '2px solid #4F46E5' : '1px solid #e2e8f0',
                        background: page === 1 ? '#4F46E5' : 'white',
                        color: page === 1 ? 'white' : '#64748b',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Add IPO Modal */}
      {showAddIPOModal && <AddIPOModal />}
    </div>
  );
};

export default AdminDashboard;