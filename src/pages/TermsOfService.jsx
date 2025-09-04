import React from 'react';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const TermsOfService = () => {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: `By accessing and using the Bluestock platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.

These Terms of Service constitute a legally binding agreement between you and Bluestock. Your use of our services is also governed by our Privacy Policy, which is incorporated by reference into these Terms.`
    },
    {
      id: 'description',
      title: 'Description of Service',
      icon: FileText,
      content: `Bluestock provides a financial technology platform that offers:

• Stock trading and investment services
• Portfolio management tools
• Market analysis and research
• Educational resources
• Real-time market data
• Mobile and web applications

We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with or without notice.`
    },
    {
      id: 'eligibility',
      title: 'User Eligibility',
      icon: Shield,
      content: `To use our services, you must:

• Be at least 18 years of age
• Have the legal capacity to enter into binding contracts
• Provide accurate and complete information during registration
• Comply with all applicable laws and regulations
• Not be prohibited from using our services under applicable law

We reserve the right to refuse service to anyone for any reason at any time.`
    },
    {
      id: 'account',
      title: 'Account Registration and Security',
      icon: Shield,
      content: `When creating an account, you agree to:

• Provide accurate, current, and complete information
• Maintain and update your information as necessary
• Keep your login credentials secure and confidential
• Notify us immediately of any unauthorized use
• Be responsible for all activities under your account

You may not share your account with others or create multiple accounts without our permission.`
    },
    {
      id: 'trading',
      title: 'Trading and Investment Services',
      icon: Scale,
      content: `Our trading services are subject to the following terms:

• All trades are executed subject to market conditions
• We do not guarantee execution of orders
• Market data may be delayed or inaccurate
• Past performance does not guarantee future results
• All investments carry risk of loss
• You are responsible for your investment decisions

We are not a registered investment advisor and do not provide investment advice.`
    },
    {
      id: 'fees',
      title: 'Fees and Charges',
      icon: FileText,
      content: `You agree to pay all applicable fees and charges:

• Trading commissions and fees
• Account maintenance fees
• Data subscription fees
• Wire transfer and other transaction fees
• Currency conversion fees

All fees are subject to change with notice. Unpaid fees may result in account suspension or termination.`
    },
    {
      id: 'prohibited',
      title: 'Prohibited Activities',
      icon: XCircle,
      content: `You may not use our services to:

• Engage in illegal activities or money laundering
• Manipulate markets or engage in fraudulent trading
• Violate securities laws or regulations
• Interfere with our systems or security measures
• Use automated trading systems without permission
• Share or resell our services without authorization

Violation of these terms may result in immediate account termination.`
    },
    {
      id: 'risks',
      title: 'Risk Disclosure',
      icon: AlertTriangle,
      content: `Trading and investing involve significant risks:

• You may lose some or all of your invested capital
• Market volatility can result in rapid losses
• Leverage amplifies both gains and losses
• Technical failures may impact trading
• Regulatory changes may affect your investments
• Past performance does not predict future results

You should only invest money you can afford to lose and consider seeking professional advice.`
    }
  ];

  return (
    <div style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: '#4F46E5',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 2rem'
          }}>
            <Scale size={40} color="white" />
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>
            Terms of Service
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#64748b', marginBottom: '1rem' }}>
            Please read these terms carefully before using our services.
          </p>
          <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
            Last updated: March 15, 2024
          </p>
        </div>

        {/* Introduction */}
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          marginBottom: '2rem'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>
            Introduction
          </h2>
          <p style={{ color: '#64748b', lineHeight: '1.6' }}>
            Welcome to Bluestock. These Terms of Service ("Terms") govern your use of our financial services platform, 
            including our website, mobile applications, and related services (collectively, the "Service"). By using our 
            Service, you agree to these Terms.
          </p>
        </div>

        {/* Terms Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
          {sections.map((section, index) => (
            <div key={section.id} style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: section.id === 'prohibited' || section.id === 'risks' ? '#fef2f2' : '#f0f4ff',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <section.icon size={24} color={
                    section.id === 'prohibited' ? '#ef4444' :
                    section.id === 'risks' ? '#f59e0b' : '#4F46E5'
                  } />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a202c' }}>
                  {index + 1}. {section.title}
                </h3>
              </div>
              <div style={{ color: '#64748b', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Terms */}
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          marginBottom: '2rem'
        }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>
            Limitation of Liability
          </h3>
          <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '1rem' }}>
            To the maximum extent permitted by law, Bluestock shall not be liable for any indirect, incidental, special, 
            consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses.
          </p>
          
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>
            Indemnification
          </h3>
          <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '1rem' }}>
            You agree to indemnify and hold harmless Bluestock from any claims, damages, or expenses arising from your use 
            of our services or violation of these Terms.
          </p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>
            Governing Law
          </h3>
          <p style={{ color: '#64748b', lineHeight: '1.6' }}>
            These Terms are governed by the laws of the State of New York, without regard to conflict of law principles. 
            Any disputes shall be resolved in the courts of New York.
          </p>
        </div>

        {/* Changes and Termination */}
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          marginBottom: '2rem'
        }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>
            Changes to Terms
          </h3>
          <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '1rem' }}>
            We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new 
            Terms on our platform. Your continued use of our services after such changes constitutes acceptance of the new Terms.
          </p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>
            Termination
          </h3>
          <p style={{ color: '#64748b', lineHeight: '1.6' }}>
            We may terminate or suspend your account at any time for any reason, including violation of these Terms. 
            You may also terminate your account by contacting us. Upon termination, your right to use our services will cease immediately.
          </p>
        </div>

        {/* Contact Information */}
        <div style={{
          background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
          color: 'white',
          padding: '3rem',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <FileText size={48} style={{ margin: '0 auto 1rem' }} />
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Questions About These Terms?
          </h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: '0.9' }}>
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
            <p>Email: legal@bluestock.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Wall Street, Suite 500, New York, NY 10005</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;