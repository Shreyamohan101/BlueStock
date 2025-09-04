import React, { useState } from 'react';
import { MapPin, Clock, DollarSign, Users, Briefcase, Search, Filter } from 'lucide-react';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$120,000 - $160,000',
      description: 'Join our engineering team to build next-generation financial technology platforms.',
      requirements: ['5+ years of software development experience', 'React, Node.js, Python', 'Financial services experience preferred'],
      posted: '2024-03-15'
    },
    {
      id: 2,
      title: 'Financial Analyst',
      department: 'Finance',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$80,000 - $100,000',
      description: 'Analyze market trends and provide insights for our investment strategies.',
      requirements: ['CFA or MBA preferred', '3+ years in financial analysis', 'Strong Excel and SQL skills'],
      posted: '2024-03-12'
    },
    {
      id: 3,
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$130,000 - $170,000',
      description: 'Lead product development for our trading and analytics platforms.',
      requirements: ['5+ years product management experience', 'Fintech background preferred', 'Strong analytical skills'],
      posted: '2024-03-10'
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      salary: '$90,000 - $120,000',
      description: 'Design intuitive and beautiful user experiences for our financial platforms.',
      requirements: ['4+ years UX/UI design experience', 'Figma, Sketch proficiency', 'Portfolio required'],
      posted: '2024-03-08'
    },
    {
      id: 5,
      title: 'Data Scientist',
      department: 'Data Science',
      location: 'Boston, MA',
      type: 'Full-time',
      salary: '$110,000 - $140,000',
      description: 'Build machine learning models for market prediction and risk analysis.',
      requirements: ['PhD or Masters in relevant field', 'Python, R, SQL expertise', 'ML/AI experience'],
      posted: '2024-03-05'
    },
    {
      id: 6,
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$70,000 - $90,000',
      description: 'Help our clients succeed with our platform and drive customer satisfaction.',
      requirements: ['3+ years customer success experience', 'SaaS background preferred', 'Excellent communication skills'],
      posted: '2024-03-03'
    },
    {
      id: 7,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$100,000 - $130,000',
      description: 'Manage our cloud infrastructure and deployment pipelines.',
      requirements: ['AWS/Azure experience', 'Docker, Kubernetes', 'CI/CD pipeline experience'],
      posted: '2024-03-01'
    },
    {
      id: 8,
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      salary: '$60,000 - $80,000',
      description: 'Drive growth through digital marketing campaigns and content creation.',
      requirements: ['2+ years marketing experience', 'Digital marketing expertise', 'Content creation skills'],
      posted: '2024-02-28'
    }
  ];

  const departments = ['All', 'Engineering', 'Finance', 'Product', 'Design', 'Data Science', 'Customer Success', 'Marketing'];
  const locations = ['All', 'New York, NY', 'Chicago, IL', 'San Francisco, CA', 'Remote', 'Boston, MA', 'Austin, TX', 'Seattle, WA', 'Los Angeles, CA'];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesLocation && matchesSearch;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getDepartmentColor = (department) => {
    const colors = {
      'Engineering': '#4F46E5',
      'Finance': '#10b981',
      'Product': '#f59e0b',
      'Design': '#8b5cf6',
      'Data Science': '#ef4444',
      'Customer Success': '#06b6d4',
      'Marketing': '#ec4899'
    };
    return colors[department] || '#64748b';
  };

  return (
    <div style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>
            Join Our Team
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#64748b', marginBottom: '2rem' }}>
            Help us build the future of financial technology
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4F46E5' }}>200+</h3>
              <p style={{ color: '#64748b' }}>Team Members</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>15+</h3>
              <p style={{ color: '#64748b' }}>Countries</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b' }}>4.8★</h3>
              <p style={{ color: '#64748b' }}>Glassdoor Rating</p>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div style={{ 
          background: 'white', 
          padding: '2rem', 
          borderRadius: '12px', 
          marginBottom: '2rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <div style={{ position: 'relative', flex: '1', minWidth: '300px' }}>
              <Search size={20} style={{ 
                position: 'absolute', 
                left: '12px', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: '#64748b'
              }} />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.75rem 0.75rem 2.5rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              style={{
                padding: '0.75rem',
                border: '2px solid #e2e8f0',
                borderRadius: '8px',
                background: 'white',
                cursor: 'pointer'
              }}
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              style={{
                padding: '0.75rem',
                border: '2px solid #e2e8f0',
                borderRadius: '8px',
                background: 'white',
                cursor: 'pointer'
              }}
            >
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Job Listings */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {filteredJobs.map(job => (
            <div key={job.id} style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}>
              {/* Header */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <span style={{
                    background: getDepartmentColor(job.department),
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    {job.department}
                  </span>
                  <span style={{ color: '#64748b', fontSize: '0.875rem' }}>
                    Posted {formatDate(job.posted)}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '0.5rem' }}>
                  {job.title}
                </h3>
              </div>

              {/* Job Details */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.875rem' }}>
                  <MapPin size={14} />
                  {job.location}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.875rem' }}>
                  <Clock size={14} />
                  {job.type}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.875rem' }}>
                  <DollarSign size={14} />
                  {job.salary}
                </div>
              </div>

              {/* Description */}
              <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                {job.description}
              </p>

              {/* Requirements */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#1a202c', marginBottom: '0.5rem' }}>
                  Requirements:
                </h4>
                <ul style={{ color: '#64748b', fontSize: '0.875rem', paddingLeft: '1rem' }}>
                  {job.requirements.map((req, index) => (
                    <li key={index} style={{ marginBottom: '0.25rem' }}>{req}</li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button style={{
                  flex: 1,
                  background: '#4F46E5',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>
                  Apply Now
                </button>
                <button style={{
                  flex: 1,
                  background: 'transparent',
                  color: '#4F46E5',
                  border: '2px solid #4F46E5',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Company Benefits */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '4rem 2rem',
          borderRadius: '12px',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
            Why Work at Bluestock?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                Competitive Benefits
              </h3>
              <p style={{ opacity: '0.9' }}>
                Health, dental, vision insurance, 401k matching, and unlimited PTO
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                Remote-First Culture
              </h3>
              <p style={{ opacity: '0.9' }}>
                Work from anywhere with flexible hours and modern collaboration tools
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                Growth Opportunities
              </h3>
              <p style={{ opacity: '0.9' }}>
                Professional development budget and clear career advancement paths
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1.5rem'
        }}>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <Briefcase size={32} color="#4F46E5" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ color: '#4F46E5', fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              {filteredJobs.length}
            </h3>
            <p style={{ color: '#64748b' }}>Open Positions</p>
          </div>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <Users size={32} color="#10b981" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ color: '#10b981', fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              {departments.length - 1}
            </h3>
            <p style={{ color: '#64748b' }}>Departments</p>
          </div>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <MapPin size={32} color="#f59e0b" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ color: '#f59e0b', fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              {locations.length - 1}
            </h3>
            <p style={{ color: '#64748b' }}>Office Locations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;