import React from 'react';
import { Shield, Eye, Lock, Database, Globe, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: Database,
      content: `We collect information you provide directly to us, such as when you create an account, make a transaction, or contact us for support. This includes:

• Personal identification information (name, email address, phone number)
• Financial information (bank account details, transaction history)
• Usage data (how you interact with our platform)
• Device information (IP address, browser type, operating system)
• Location data (with your consent)`
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: Eye,
      content: `We use the information we collect to:

• Provide, maintain, and improve our services
• Process transactions and send related information
• Send technical notices, updates, and security alerts
• Respond to your comments, questions, and customer service requests
• Communicate with you about products, services, and events
• Monitor and analyze trends, usage, and activities
• Detect, investigate, and prevent fraudulent transactions`
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing and Disclosure',
      icon: Globe,
      content: `We may share your information in the following circumstances:

• With your consent or at your direction
• With third-party vendors, consultants, and service providers
• To comply with laws, regulations, or legal requests
• To protect the rights, property, and safety of Bluestock and our users
• In connection with a merger, acquisition, or sale of assets
• With financial institutions for transaction processing`
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Lock,
      content: `We implement appropriate technical and organizational measures to protect your personal information:

• Encryption of data in transit and at rest
• Regular security assessments and audits
• Access controls and authentication measures
• Employee training on data protection
• Incident response procedures
• Compliance with industry security standards`
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      icon: Database,
      content: `We retain your information for as long as necessary to:

• Provide our services to you
• Comply with legal obligations
• Resolve disputes and enforce agreements
• Maintain business records

We will delete or anonymize your information when it is no longer needed for these purposes, unless we are required to retain it by law.`
    },
    {
      id: 'your-rights',
      title: 'Your Rights and Choices',
      icon: Shield,
      content: `You have certain rights regarding your personal information:

• Access: Request a copy of your personal information
• Correction: Request correction of inaccurate information
• Deletion: Request deletion of your information
• Portability: Request transfer of your information
• Objection: Object to processing of your information
• Restriction: Request restriction of processing

To exercise these rights, please contact us using the information provided below.`
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
            <Shield size={40} color="white" />
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#64748b', marginBottom: '1rem' }}>
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
            Bluestock ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you use our financial services platform. Please read this privacy 
            policy carefully. If you do not agree with the terms of this privacy policy, please do not access the platform.
          </p>
        </div>

        {/* Policy Sections */}
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
                  background: '#f0f4ff',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <section.icon size={24} color="#4F46E5" />
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

        {/* International Transfers */}
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          marginBottom: '2rem'
        }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>
            International Data Transfers
          </h3>
          <p style={{ color: '#64748b', lineHeight: '1.6' }}>
            Your information may be transferred to and processed in countries other than your own. We ensure that such transfers 
            are made in accordance with applicable data protection laws and that appropriate safeguards are in place to protect 
            your information.
          </p>
        </div>

        {/* Children's Privacy */}
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          marginBottom: '2rem'
        }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>
            Children's Privacy
          </h3>
          <p style={{ color: '#64748b', lineHeight: '1.6' }}>
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information 
            from children under 18. If we become aware that we have collected personal information from a child under 18, we will 
            take steps to delete such information.
          </p>
        </div>

        {/* Changes to Policy */}
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          marginBottom: '2rem'
        }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>
            Changes to This Privacy Policy
          </h3>
          <p style={{ color: '#64748b', lineHeight: '1.6' }}>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
            Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically 
            for any changes.
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
          <Mail size={48} style={{ margin: '0 auto 1rem' }} />
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Contact Us
          </h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: '0.9' }}>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
            <p>Email: privacy@bluestock.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Wall Street, Suite 500, New York, NY 10005</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;