import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Home, Mail, Phone } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="section-title mb-16"
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Personal Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Education</h4>
                  <p className="text-gray-600 dark:text-gray-400">BTech in Computer Science and Engineering</p>
                  <p className="text-gray-600 dark:text-gray-400">Lovely Professional University, Punjab</p>
                  <p className="text-gray-600 dark:text-gray-400">2022 - 2026 | CGPA: 6</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
                  <Home size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Gudivada, Andhra Pradesh 281001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">yateshch89@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">9346745352</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Summary and Education details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Who I Am</h3>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I'm a passionate Computer Science student with a strong interest in web development and software engineering. 
                Currently in my 3rd year of BTech, I'm focused on building meaningful projects that solve real-world problems.
              </p>
              
              <p>
                My journey in programming started in high school, and since then, I've developed a deep interest in creating 
                user-friendly applications. I have experience with various technologies including MERN stack, and I'm constantly 
                learning new skills to stay updated with the latest trends in technology.
              </p>
              
              <p>
                Besides my academic pursuits, I've completed several projects like a Hospital Management System and 
                Sales Tracker Website that have helped me refine my skills in full-stack development. I'm also dedicated 
                to continuous learning through online courses and certifications.
              </p>

              <p>
                When I'm not coding, I enjoy exploring new technologies, participating in coding competitions, and 
                collaborating with others on interesting projects. I'm looking forward to applying my skills in a 
                professional environment and contributing to innovative solutions.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Education Timeline</h3>
              
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-indigo-500">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
                  <div className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Lovely Professional University
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">BTech Computer Science and Engineering</div>
                  <div className="text-gray-600 dark:text-gray-400">2022 - 2026 | CGPA: 6.98</div>
                </div>
                
                <div className="relative pl-8 border-l-2 border-indigo-500">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
                  <div className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Cipet
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Diploma in plastic engineering</div>
                  <div className="text-gray-600 dark:text-gray-400">2020 - 2023 | Percentage: 75%</div>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
                  <div className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Triveni public school
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">10th with Science</div>
                  <div className="text-gray-600 dark:text-gray-400">2019 - 2020 | CGPA: 10</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;