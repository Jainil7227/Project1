
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#3b444b] text-gray-300 pt-16 pb-8 text-sm">
      <div className="container mx-auto px-6">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          
          {/* BUSINESSES */}
          <div>
            <h3 className="text-white font-bold tracking-wider mb-6">BUSINESSES</h3>
            <ul className="space-y-3">
              <li><Link to="/engineering" className="hover:text-white transition-colors">Engineering & Construction</Link></li>
              <li><Link to="/energy" className="hover:text-white transition-colors">Energy</Link></li>
              <li><Link to="/water" className="hover:text-white transition-colors">Water</Link></li>
              <li><Link to="/infrastructure" className="hover:text-white transition-colors">Infrastructure</Link></li>
              <li><Link to="/real-estate" className="hover:text-white transition-colors">Real Estate</Link></li>
              <li><Link to="/financial-services" className="hover:text-white transition-colors">Financial Services</Link></li>
            </ul>
          </div>

          {/* COMPANIES */}
          <div>
            <h3 className="text-white font-bold tracking-wider mb-6">COMPANIES</h3>
            <ul className="space-y-3">
              <li><Link to="/sp-international" className="hover:text-white transition-colors">SP International</Link></li>
              <li><Link to="/afcons" className="hover:text-white transition-colors">Afcons Infrastructure</Link></li>
              <li><Link to="/forbes" className="hover:text-white transition-colors">Forbes & Co.</Link></li>
              <li><Link to="/sterling-wilson" className="hover:text-white transition-colors">Sterling and Wilson</Link></li>
              <li><Link to="/sp-finance" className="hover:text-white transition-colors">SP Finance</Link></li>
            </ul>
          </div>

          {/* MEDIA */}
          <div>
            <h3 className="text-white font-bold tracking-wider mb-6">MEDIA</h3>
            <ul className="space-y-3">
              <li><Link to="/press-release" className="hover:text-white transition-colors">Press Release</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">In the News</Link></li>
              <li><Link to="/awards" className="hover:text-white transition-colors">Awards</Link></li>
              <li><Link to="/corporate" className="hover:text-white transition-colors">Corporate</Link></li>
            </ul>
          </div>

          {/* IMPACT */}
          <div>
            <h3 className="text-white font-bold tracking-wider mb-6">IMPACT</h3>
            <ul className="space-y-3">
              <li><Link to="/csr" className="hover:text-white transition-colors">CSR</Link></li>
              <li><Link to="/disaster-relief" className="hover:text-white transition-colors">Disaster Relief</Link></li>
              <li><Link to="/employee-engagement" className="hover:text-white transition-colors">Employee Engagement</Link></li>
              <li><Link to="/hse" className="hover:text-white transition-colors">HSE</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-bold tracking-wider mb-6">CONTACT</h3>
            <ul className="space-y-3">
              <li><Link to="/head-office" className="hover:text-white transition-colors">Head Office</Link></li>
              <li><Link to="/global-offices" className="hover:text-white transition-colors">Global Offices</Link></li>
              <li><Link to="/enquiry" className="hover:text-white transition-colors">Enquiry</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          
          {/* Left Side: Copyright & Links */}
          <div className="mb-6 lg:mb-0">
            <div className="flex flex-wrap gap-4 text-xs font-semibold tracking-wider text-gray-400 mb-4">
              <span>© {new Date().getFullYear()} DOMELZA CONSTRUCTIONS</span>
              <span className="hidden sm:inline">|</span>
              <Link to="/disclaimer" className="hover:text-white transition-colors">DISCLAIMER</Link>
              <span className="hidden sm:inline">|</span>
              <Link to="/terms" className="hover:text-white transition-colors">TERMS & CONDITIONS</Link>
            </div>
            <p className="text-xs text-gray-500 max-w-2xl leading-relaxed">
              Constructing dreams into reality since its inception. We are committed to delivering excellence in every project we undertake, checking all safety standards and ensuring sustainable development for a better tomorrow.
            </p>
          </div>

          {/* Right Side: Tagline/Logo */}
          <div className="text-right">
            <h2 className="text-xl font-bold text-white mb-1">DOMELZA</h2>
            <p className="text-xs text-gray-400 italic">Built to last...</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
