import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-xl md:text-2xl font-medium text-indigo-600 dark:text-indigo-400 mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              Ch Yatesh chandra sai  
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
              BTech Computer Science Student & Full Stack Developer
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              Passionate about creating innovative web solutions and exploring new technologies. 
              Currently focused on MERN stack development and building projects that solve real-world problems.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/pseftis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Github className="mr-2" size={20} />
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/yate" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <Linkedin className="mr-2" size={20} />
                LinkedIn
              </a>
              <a 
                href="/special cv.pdf" 
                download
                className="btn btn-primary"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </a>
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
    
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-indigo-100 dark:bg-indigo-900/30 overflow-hidden animate-float">
                <img
                  src="/1746085578076.jpg"
                  alt="Ch Yatesh chandra sai"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -z-10 top-0 left-0 w-64 h-64 md:w-80 md:h-80 rounded-full bg-indigo-500/20 dark:bg-indigo-500/10 transform translate-x-4 translate-y-4"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Down */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="animate-bounce" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;