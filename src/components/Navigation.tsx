import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Civil', path: '/civil' },
    { name: 'Interiors', path: '/interiors' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wider transition-colors duration-300 hover:text-interior-gold ${
                  location.pathname === link.path
                    ? 'text-interior-gold'
                    : isScrolled
                    ? 'text-graphite'
                    : 'text-white'
                }`}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
          </div>

          <Link
            to="/"
            className={`text-3xl font-display font-bold tracking-widest transition-colors duration-300 ${
              isScrolled ? 'text-graphite' : 'text-white'
            }`}
          >
            DOMELZA
          </Link>

          <div className="flex-1 hidden lg:flex items-center justify-end gap-8">
            {navLinks.slice(3).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wider transition-colors duration-300 hover:text-interior-gold ${
                  location.pathname === link.path
                    ? 'text-interior-gold'
                    : isScrolled
                    ? 'text-graphite'
                    : 'text-white'
                }`}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden transition-colors duration-300 ${
              isScrolled ? 'text-graphite' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/98 backdrop-blur-md border-t"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium tracking-wider transition-colors duration-300 hover:text-interior-gold ${
                    location.pathname === link.path
                      ? 'text-interior-gold'
                      : 'text-graphite'
                  }`}
                >
                  {link.name.toUpperCase()}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
