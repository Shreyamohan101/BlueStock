import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Headphones, Building } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      category: 'general',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email',
      contact: 'support@bluestock.com',
      response: 'Response within 24 hours',
      color: '#4F46E5'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak with our team',
      contact: '+1 (555) 123-4567',
      response: 'Mon-Fri, 9AM-6PM EST',
      color: '#10b981'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with us instantly',
      contact: 'Available 24/7',
      response: 'Average response: 2 minutes',
      color: '#f59e0b'
    },
    {
      icon: Headphones,
      title: 'Premium Support',
      description: 'Priority assistance',
      contact: 'For premium users',
      response: 'Response within 1 hour',
      color: '#8b5cf6'
    }
  ];

  const offices = [
    {
      city: 'New York',
      address: '123 Wall Street, Suite 500',
      zipCode: 'New York, NY 10005',
      phone: '+1 (555) 123-4567',
      email: 'ny@bluestock.com'
    },
    {
      city: 'San Francisco',
      address: '456 Market Street, Floor 20',
      zipCode: 'San Francisco, CA 94102',
      phone: '+1 (555) 987-6543',
      email: 'sf@bluestock.com'
    },
    {
      city: 'London',
      address: '789 Canary Wharf, Level 15',
      zipCode: 'London E14 5AB, UK',
      phone: '+44 20 7123 4567',
      email: 'london@bluestock.com'
    },
    {
      city: 'Singapore',
      address: '321 Marina Bay, Tower 3',
      zipCode: 'Singapore 018956',
      phone: '+65 6123 4567',
      email: 'singapore@bluestock.com'
    }
  ];

  return (
    <div style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>
            Contact Us
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#64748b' }}>
            We're here to help. Get in touch with our team for support, questions, or feedback.
          </p>
        </div>

        {/* Contact Methods */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {contactMethods.map((method, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              textAlign: 'center',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: `${method.color}20`,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem'
              }}>
                <method.icon size={24} color={method.color} />
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '0.5rem' }}>
                {method.title}
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                {method.description}
              </p>
              <p style={{ color: method.color, fontWeight: '600', marginBottom: '0.25rem' }}>
                {method.contact}
              </p>
              <p style={{ color: '#64748b', fontSize: '0.75rem' }}>
                {method.response}
              </p>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
          {/* Contact Form */}
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1.5rem' }}>
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    background: 'white'
                  }}
                >
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing & Payments</option>
                  <option value="partnership">Partnership</option>
                  <option value="press">Press & Media</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                  placeholder="Brief description of your inquiry"
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              <button
                type="submit"
                style={{
                  background: '#4F46E5',
                  color: 'white',
                  border: 'none',
                  padding: '1rem',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  marginTop: '0.5rem'
                }}
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>

          {/* Office Locations */}
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1.5rem' }}>
              Our Offices
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {offices.map((office, index) => (
                <div key={index} style={{
                  padding: '1.5rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  transition: 'border-color 0.3s'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <Building size={20} color="#4F46E5" />
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1a202c' }}>
                      {office.city}
                    </h3>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MapPin size={14} color="#64748b" />
                      <span style={{ color: '#64748b', fontSize: '0.875rem' }}>
                        {office.address}
                      </span>
                    </div>
                    <div style={{ color: '#64748b', fontSize: '0.875rem', marginLeft: '1.25rem' }}>
                      {office.zipCode}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Phone size={14} color="#64748b" />
                      <span style={{ color: '#64748b', fontSize: '0.875rem' }}>
                        {office.phone}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Mail size={14} color="#64748b" />
                      <span style={{ color: '#4F46E5', fontSize: '0.875rem' }}>
                        {office.email}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{
          background: 'white',
          padding: '3rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: '#64748b', marginBottom: '2rem' }}>
            Can't find what you're looking for? Check out our comprehensive FAQ section.
          </p>
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
            View FAQ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;