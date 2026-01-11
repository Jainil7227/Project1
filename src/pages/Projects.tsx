import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'civil' | 'interior'>('all');

  const projects = [
    {
      title: 'Emirates Financial Tower',
      category: 'civil',
      type: 'Commercial High-Rise',
      image: 'https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '52-story financial district landmark',
    },
    {
      title: 'Palm Jumeirah Villa',
      category: 'interior',
      type: 'Luxury Residential',
      image: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Mediterranean-inspired luxury living',
    },
    {
      title: 'Dubai Metro Extension',
      category: 'civil',
      type: 'Infrastructure',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '15km metro expansion project',
    },
    {
      title: 'DIFC Executive Suite',
      category: 'interior',
      type: 'Commercial Office',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern executive workspace design',
    },
    {
      title: 'Al Quoz Industrial Complex',
      category: 'civil',
      type: 'Industrial',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'State-of-the-art manufacturing facility',
    },
    {
      title: 'Atlantis Penthouse',
      category: 'interior',
      type: 'Hospitality',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Ultra-luxury resort accommodation',
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl lg:text-7xl font-display font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            A testament to our commitment to excellence across civil construction and interior design
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => setFilter('all')}
              className={`px-8 py-3 rounded-full font-medium tracking-wider transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-graphite text-white'
                  : 'bg-gray-100 text-graphite hover:bg-gray-200'
              }`}
            >
              ALL PROJECTS
            </button>
            <button
              onClick={() => setFilter('civil')}
              className={`px-8 py-3 rounded-full font-medium tracking-wider transition-all duration-300 ${
                filter === 'civil'
                  ? 'bg-civil-primary text-white'
                  : 'bg-gray-100 text-graphite hover:bg-gray-200'
              }`}
            >
              CIVIL
            </button>
            <button
              onClick={() => setFilter('interior')}
              className={`px-8 py-3 rounded-full font-medium tracking-wider transition-all duration-300 ${
                filter === 'interior'
                  ? 'bg-interior-gold text-white'
                  : 'bg-gray-100 text-graphite hover:bg-gray-200'
              }`}
            >
              INTERIORS
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              layout
              className="group cursor-pointer"
            >
              <div className="relative h-96 overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  project.category === 'civil'
                    ? 'from-civil-dark/90 via-civil-dark/40'
                    : 'from-interior-bronze/90 via-interior-bronze/40'
                } to-transparent`} />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className={`text-sm font-medium tracking-wider mb-2 ${
                    project.category === 'civil' ? 'text-interior-gold' : 'text-interior-champagne'
                  }`}>
                    {project.type.toUpperCase()}
                  </p>
                  <h3 className="text-2xl font-display font-bold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
