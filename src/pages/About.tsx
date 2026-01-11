import { motion } from 'framer-motion';
import { Award, Users, Target, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Uncompromising commitment to quality in every project we undertake',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients to bring their vision to life',
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Meticulous attention to detail from concept through completion',
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Embracing cutting-edge technology and sustainable practices',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-graphite/70" />
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl lg:text-8xl font-display font-bold mb-6"
          >
            About Domelza
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl lg:text-2xl font-light max-w-3xl mx-auto"
          >
            Where engineering prowess meets artistic vision
          </motion.p>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-5xl font-display font-bold mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Founded in the heart of Dubai, Domelza Construction has emerged as a distinguished name in both civil construction and interior design. Our dual expertise allows us to offer comprehensive solutions that transform visions into reality.
              </p>
              <p>
                With over two decades of experience, we have built our reputation on delivering landmark projects that define Dubai's skyline while crafting interiors that reflect the sophistication and luxury the city is known for worldwide.
              </p>
              <p>
                Our civil construction division brings engineering precision and uncompromising safety standards to every project, from towering commercial complexes to critical infrastructure. Meanwhile, our interior design team transforms spaces into artistic expressions of luxury and refined living.
              </p>
              <p>
                At Domelza, we don't just build structures or design spaces – we create legacies that stand the test of time.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-display font-bold mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-500"
                >
                  <value.icon size={48} className="text-interior-gold mb-6" strokeWidth={1.5} />
                  <h3 className="text-2xl font-display font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-civil-primary to-civil-dark text-white py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8">
              Building Tomorrow, Today
            </h2>
            <p className="text-xl font-light leading-relaxed mb-12">
              Join us in creating spaces that inspire, structures that endure, and experiences that transform. Whether you need a contractor or a designer, Domelza delivers excellence across every dimension.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 bg-interior-gold text-graphite font-medium tracking-wider rounded-full hover:bg-interior-bronze hover:shadow-2xl transition-all duration-300"
            >
              GET IN TOUCH
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
