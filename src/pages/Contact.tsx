import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

import SEO from '../components/SEO';

const Contact = () => {
  const [formType, setFormType] = useState<'contractor' | 'designer'>('contractor');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, type: formType });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Domelza Constructions for your residential, commercial, or industrial project needs in Dubai."
        canonical="https://domelza.com/contact"
      />
      <div className="min-h-screen bg-white pt-24">
        <div className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl lg:text-7xl font-display font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your project? Let us know how we can help bring your vision to life
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 lg:p-12">
                <div className="flex justify-center gap-4 mb-8">
                  <button
                    onClick={() => setFormType('contractor')}
                    className={`flex-1 py-4 px-6 rounded-full font-medium tracking-wider transition-all duration-300 ${formType === 'contractor'
                      ? 'bg-civil-primary text-white shadow-lg'
                      : 'bg-gray-100 text-graphite hover:bg-gray-200'
                      }`}
                  >
                    I NEED A CONTRACTOR
                  </button>
                  <button
                    onClick={() => setFormType('designer')}
                    className={`flex-1 py-4 px-6 rounded-full font-medium tracking-wider transition-all duration-300 ${formType === 'designer'
                      ? 'bg-interior-gold text-white shadow-lg'
                      : 'bg-gray-100 text-graphite hover:bg-gray-200'
                      }`}
                  >
                    I NEED A DESIGNER
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-interior-gold focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-interior-gold focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-interior-gold focus:border-transparent transition-all"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-interior-gold focus:border-transparent transition-all"
                    >
                      <option value="">Select a project type</option>
                      {formType === 'contractor' ? (
                        <>
                          <option value="commercial">Commercial High-Rise</option>
                          <option value="infrastructure">Infrastructure</option>
                          <option value="industrial">Industrial Plant</option>
                        </>
                      ) : (
                        <>
                          <option value="residential">Residential Villa</option>
                          <option value="commercial">Commercial Office</option>
                          <option value="hospitality">Hospitality</option>
                        </>
                      )}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-interior-gold focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-4 px-6 rounded-full font-medium tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${formType === 'contractor'
                      ? 'bg-civil-primary hover:bg-civil-dark text-white'
                      : 'bg-interior-gold hover:bg-interior-bronze text-white'
                      } shadow-lg hover:shadow-xl`}
                  >
                    <span>SEND MESSAGE</span>
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-display font-bold mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-interior-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-interior-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Address</h3>
                      <p className="text-gray-600">
                        Business Bay, Dubai<br />
                        United Arab Emirates
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-interior-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-interior-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p className="text-gray-600">+971 4 XXX XXXX</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-interior-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-interior-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-gray-600">info@domelza.ae</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-2xl p-8">
                <h3 className="text-2xl font-display font-bold mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Sunday - Thursday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday - Saturday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-civil-primary to-civil-dark rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-display font-bold mb-4">Why Choose Domelza?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-interior-gold rounded-full"></span>
                    <span>20+ years of industry experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-interior-gold rounded-full"></span>
                    <span>Dual expertise in construction and design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-interior-gold rounded-full"></span>
                    <span>Commitment to excellence and quality</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-interior-gold rounded-full"></span>
                    <span>Portfolio of landmark projects</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
