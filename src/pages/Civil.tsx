import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Building2, HardHat, Shield, TrendingUp } from 'lucide-react';

const StatCounter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Civil = () => {
  const services = [
    {
      icon: Building2,
      title: 'High-Rise Commercial',
      description: 'Towering achievements in commercial architecture, from concept to completion',
    },
    {
      icon: HardHat,
      title: 'Infrastructure Development',
      description: 'Roads, bridges, and utilities that form the backbone of modern cities',
    },
    {
      icon: Shield,
      title: 'Industrial Plants',
      description: 'Heavy-duty construction for manufacturing and industrial facilities',
    },
  ];

  const projects = [
    {
      title: 'Emirates Financial Tower',
      category: 'Commercial High-Rise',
      image: 'https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Dubai Metro Extension',
      category: 'Infrastructure',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Al Quoz Industrial Complex',
      category: 'Industrial',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-civil opacity-80" />
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl lg:text-8xl font-display font-bold mb-6"
          >
            Civil Construction
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl lg:text-2xl font-light max-w-3xl mx-auto leading-relaxed"
          >
            Engineering precision meets architectural innovation. Building landmarks that define Dubai's skyline.
          </motion.p>
        </div>
      </motion.div>

      <div className="bg-civil-dark text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl lg:text-6xl font-display font-bold text-interior-gold mb-2">
                <StatCounter end={20} suffix="+" />
              </div>
              <p className="text-sm lg:text-base font-light opacity-80">Years of Excellence</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl lg:text-6xl font-display font-bold text-interior-gold mb-2">
                <StatCounter end={50} suffix="+" />
              </div>
              <p className="text-sm lg:text-base font-light opacity-80">Landmark Projects</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl lg:text-6xl font-display font-bold text-interior-gold mb-2">
                <StatCounter end={100} suffix="%" />
              </div>
              <p className="text-sm lg:text-base font-light opacity-80">Safety Record</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl lg:text-6xl font-display font-bold text-interior-gold mb-2">
                <StatCounter end={500} suffix="+" />
              </div>
              <p className="text-sm lg:text-base font-light opacity-80">Team Members</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-display font-bold text-center mb-16"
          >
            Our Services
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-lg p-8 hover:shadow-2xl transition-all duration-500 group"
              >
                <service.icon
                  size={48}
                  className="text-civil-primary mb-6 group-hover:scale-110 transition-transform duration-300"
                  strokeWidth={1.5}
                />
                <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-display font-bold text-center mb-16"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer overflow-hidden rounded-lg"
              >
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-civil-dark/90 via-civil-dark/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm font-medium tracking-wider text-interior-gold mb-2">
                      {project.category.toUpperCase()}
                    </p>
                    <h3 className="text-2xl font-display font-bold">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Civil;
