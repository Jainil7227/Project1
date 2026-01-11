import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Paintbrush } from 'lucide-react';

import SEO from '../components/SEO';

const Home = () => {
  const [hoveredSide, setHoveredSide] = useState<'civil' | 'interior' | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <SEO
        title="Home"
        description="Domelza Constructions - Building dreams into reality with excellence in Civil, Interiors, and Infrastructure projects."
        canonical="https://domelza.com/"
      />
      <div className="min-h-screen">
        <div className="h-screen flex flex-col lg:flex-row relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: hoveredSide === 'interior' ? 0.4 : 1,
              width: isLargeScreen ? (hoveredSide === 'civil' ? '70%' : hoveredSide === 'interior' ? '30%' : '50%') : '100%',
              height: isLargeScreen ? '100%' : '50%',
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            onMouseEnter={() => isLargeScreen && setHoveredSide('civil')}
            onMouseLeave={() => setHoveredSide(null)}
            className="relative group cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-civil-dark/80 to-civil-primary/60" />
            </div>

            <div className="relative h-full flex flex-col items-center justify-center text-white px-8 z-10">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-center"
              >
                <Building2 size={48} className="mx-auto mb-4 opacity-90 lg:w-16 lg:h-16" strokeWidth={1.5} />
                <h2 className="text-4xl lg:text-7xl font-display font-bold mb-3 lg:mb-4 tracking-tight">
                  Building the Future
                </h2>
                <p className="text-base lg:text-xl font-light mb-6 lg:mb-8 max-w-md mx-auto leading-relaxed opacity-90">
                  Engineering precision meets architectural innovation in every structure we create
                </p>
                <Link
                  to="/civil"
                  className="inline-flex items-center gap-2 px-6 py-3 lg:px-8 lg:py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white/20 transition-all duration-300 group/btn"
                >
                  <span className="font-medium tracking-wider text-sm lg:text-base">EXPLORE CIVIL</span>
                  <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: hoveredSide === 'civil' ? 0.4 : 1,
              width: isLargeScreen ? (hoveredSide === 'interior' ? '70%' : hoveredSide === 'civil' ? '30%' : '50%') : '100%',
              height: isLargeScreen ? '100%' : '50%',
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            onMouseEnter={() => isLargeScreen && setHoveredSide('interior')}
            onMouseLeave={() => setHoveredSide(null)}
            className="relative group cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1920)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-interior-bronze/70 to-interior-gold/50" />
            </div>

            <div className="relative h-full flex flex-col items-center justify-center text-white px-8 z-10">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-center"
              >
                <Paintbrush size={48} className="mx-auto mb-4 opacity-90 lg:w-16 lg:h-16" strokeWidth={1.5} />
                <h2 className="text-4xl lg:text-7xl font-display font-bold mb-3 lg:mb-4 tracking-tight">
                  Crafting the Soul
                </h2>
                <p className="text-base lg:text-xl font-light mb-6 lg:mb-8 max-w-md mx-auto leading-relaxed opacity-90">
                  Transforming spaces into timeless expressions of luxury and refined living
                </p>
                <Link
                  to="/interiors"
                  className="inline-flex items-center gap-2 px-6 py-3 lg:px-8 lg:py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white/20 transition-all duration-300 group/btn"
                >
                  <span className="font-medium tracking-wider text-sm lg:text-base">EXPLORE INTERIORS</span>
                  <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
