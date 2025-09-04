import React from 'react';
import { TrendingUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <TrendingUp size={24} color="#4F46E5" />
            <h3>BLUESTOCK</h3>
          </div>
          <p style={{ color: '#94a3b8' }}>
            Your trusted partner for stock market investing and financial analytics.
          </p>
        </div>

        <div className="footer-section">
          <h3>Platform</h3>
          <ul>
            <li><a href="/analytics">Stock Analytics</a></li>
            <li><a href="/ipo">IPO Tracker</a></li>
            <li><a href="/portfolio">Portfolio Management</a></li>
            <li><a href="/market-research">Market Research</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/press">Press</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="/help-center">Help Center</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/cookie-policy">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Bluestock. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;