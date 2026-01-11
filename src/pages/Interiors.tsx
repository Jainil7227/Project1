import { motion } from 'framer-motion';
import { Sparkles, Sofa, Lightbulb, Gem } from 'lucide-react';

const Interiors = () => {
  const materials = [
    {
      name: 'Italian Marble',
      image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Gold Leaf',
      image: 'https://images.pexels.com/photos/6466296/pexels-photo-6466296.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Premium Velvet',
      image: 'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Exotic Wood',
      image: 'https://images.pexels.com/photos/172289/pexels-photo-172289.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const services = [
    {
      icon: Sofa,
      title: 'Residential Villas',
      description: 'Bespoke living spaces that reflect your personality and lifestyle aspirations',
    },
    {
      icon: Lightbulb,
      title: 'Commercial Luxury',
      description: 'Executive offices and retail spaces designed to inspire and impress',
    },
    {
      icon: Gem,
      title: 'Hospitality Design',
      description: 'Five-star hotels and restaurants that create unforgettable experiences',
    },
  ];

  const projects = [
    {
      title: 'Palm Jumeirah Villa',
      type: 'Residential',
      image: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'DIFC Executive Suite',
      type: 'Commercial',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Atlantis Penthouse',
      type: 'Hospitality',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
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
            backgroundImage: 'url(https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-interior opacity-70" />
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl lg:text-8xl font-display font-bold mb-6"
          >
            Interior Design
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl lg:text-2xl font-light max-w-3xl mx-auto leading-relaxed"
          >
            Where artistry meets sophistication. Crafting interiors that transcend the ordinary.
          </motion.p>
        </div>
      </motion.div>

      <div className="py-24 bg-interior-champagne">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Sparkles size={48} className="mx-auto text-interior-gold mb-6" strokeWidth={1.5} />
            <h2 className="text-5xl lg:text-6xl font-display font-bold mb-6">The Material Library</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Curated selection of the world's finest materials for discerning clients
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative h-80 overflow-hidden rounded-lg">
                  <img
                    src={material.image}
                    alt={material.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-display font-bold">{material.name}</h3>
                  </div>
                </div>
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
                className="bg-gradient-to-br from-interior-champagne to-white border border-interior-gold/20 rounded-lg p-8 hover:shadow-2xl hover:border-interior-gold/40 transition-all duration-500 group"
              >
                <service.icon
                  size={48}
                  className="text-interior-gold mb-6 group-hover:scale-110 transition-transform duration-300"
                  strokeWidth={1.5}
                />
                <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
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
            Signature Projects
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
                  <div className="absolute inset-0 bg-gradient-to-t from-interior-bronze/90 via-interior-bronze/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm font-medium tracking-wider text-interior-champagne mb-2">
                      {project.type.toUpperCase()}
                    </p>
                    <h3 className="text-2xl font-display font-bold">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24 bg-gradient-to-br from-interior-gold to-interior-bronze text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl font-light mb-8 max-w-2xl mx-auto">
              Let us create an interior that reflects your vision and exceeds your expectations
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-interior-bronze font-medium tracking-wider rounded-full hover:shadow-2xl transition-all duration-300"
            >
              START YOUR PROJECT
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Interiors;
