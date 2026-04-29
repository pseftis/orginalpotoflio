import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github as GitHub, Linkedin, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="section-title mb-16"
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Feel free to reach out to me for collaboration, job opportunities, or just to say hello!
              I'm currently looking for new opportunities and am open to work on interesting projects.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Email</h4>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    <a href="mailto:yateshch89@gmail.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                      yateshch89@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Phone</h4>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    <a href="tel:9346745352" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                      9346745352
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Location</h4>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    Gudivada, Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Connect With Me
              </h4>
              
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/pseftis" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-gray-900 dark:bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <GitHub size={24} />
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/yate" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                
                <a 
                  href="mailto:yateshch89@gmail.com" 
                  className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h3>
              
              <form>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="input"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="input"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="input"
                      placeholder="Job Opportunity"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="input resize-none"
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="btn btn-primary w-full"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;