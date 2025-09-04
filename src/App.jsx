import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import IPO from './pages/IPO';
import Products from './pages/Products';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Analytics from './pages/Analytics';
import Sectors from './pages/Sectors';
import MutualFunds from './pages/MutualFunds';
import StockSchool from './pages/StockSchool';
import CourseDetail from './pages/CourseDetail';
import AdminDashboard from './pages/AdminDashboard';
import Portfolio from './pages/Portfolio';
import AccountSettings from './pages/AccountSettings';
import BrokerDashboard from './pages/BrokerDashboard';
import MarketOverview from './pages/MarketOverview';
import NotificationsMessages from './pages/NotificationsMessages';
import SecurityPrivacy from './pages/SecurityPrivacy';
import Appearance from './pages/Appearance';
import MarketResearch from './pages/MarketResearch';
import Careers from './pages/Careers';
import Press from './pages/Press';
import Contact from './pages/Contact';
import HelpCenter from './pages/HelpCenter';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ipo" element={<IPO />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/mutual-funds" element={<MutualFunds />} />
            <Route path="/stock-school" element={<StockSchool />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/account-settings" element={<AccountSettings />} />
            <Route path="/broker/dashboard" element={<BrokerDashboard />} />
            <Route path="/broker/market-overview" element={<MarketOverview />} />
            <Route path="/notifications-messages" element={<NotificationsMessages />} />
            <Route path="/security-privacy" element={<SecurityPrivacy />} />
            <Route path="/appearance" element={<Appearance />} />
            <Route path="/market-research" element={<MarketResearch />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/press" element={<Press />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;