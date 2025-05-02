import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

// Certificate interface
interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link: string;
  description: string;
  skills: string[];
}

// Certificates data
const certificatesData: Certificate[] = [
  {
    id: 1,
    title: "Mastering Data Structures and Algorithms",
    issuer: "Udemy",
    date: "August 2024",
    link: "https://www.udemy.com/certificate/UC-4cac8994-bd20-45c6-9e1f-e9587c9c2908/",
    description: "Comprehensive course covering advanced data structures and algorithm techniques for efficient problem-solving.",
    skills: ["Data Structures", "Algorithms", "Problem Solving", "Time Complexity", "Space Complexity"]
  },
  {
    id: 2,
    title: "Programming in C++: A Hands-On Approach",
    issuer: "Coursera",
    date: "March 2023",
    link: "https://coursera.org/share/bcb509c0128f62fcfa5f565f3c89e4cc",
    description: "Practical course teaching C++ programming fundamentals and object-oriented programming concepts.",
    skills: ["C++", "OOP", "Memory Management", "STL", "Exception Handling"]
  },
  {
    id: 3,
    title: "Server-side JavaScript with Node.js",
    issuer: "Coursera",
    date: "December 2024",
    link: "https://coursera.org/share/76142e56287860299da0e644138a0f32",
    description: "In-depth coverage of server-side JavaScript development using Node.js, Express, and related technologies.",
    skills: ["Node.js", "Express", "RESTful APIs", "MongoDB", "Authentication"]
  },
  {
    id: 4,
    title: "Internet of things ",
    issuer: "NPTEL",
    date: "November 2024",
    link: "https://nptel.ac.in/",
    description: "Comprehensive course on cloud computing principles, architectures, and implementation strategies.",
    skills: ["IoT System Design and Integration", "Cloud Connectivity and Data Management", "Cloud Connectivity and Data Management", "Industrial IoT and Smart Applications", "Edge and Fog Computing"]
  },
  {
    id: 5,
    title: "Dynamic Programming, Greedy Algorithms",
    issuer: "Coursera",
    date: "May 2024",
    link: "https://coursera.org/share/61b9d8bbeca712ef4371adb9c2d6f6d1",
    description: "Fundamentals of artificial intelligence and machine learning techniques and applications.",
    skills: ["Divide and Conquer Algorithms", "Dynamic Programming Techniques", "Greedy Algorithm Strategies", "Intractability and NP-Completeness", "nteger Programming Solvers"]
  },
  {
    id: 6,
    title: "Data Structures and Algorithms - Self Paced [Online Course]",
    issuer: "Geeks for Geeks",
    date: "July 2024 ",
    link: "https://www.geeksforgeeks.org/certificate/5d7cba995bd30570b800eab1e2382007?utm_source=socials&utm_medium=cc_link/",
    description: "Comprehensive Digital Marketing training program covering social media marketing, SEO, email marketing, and brand promotion.",
    skills: ["Core Data Structures", "Algorithmic Techniques", "Time and Space Complexity", "Recursion and Backtracking", "Graph Algorithms and Tree Traversals"]
  }
];

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="section-title mb-16"
        >
          Certificates
        </motion.h2>
        
        <p className="text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          I've completed several certifications to enhance my skills and stay updated with the latest technologies.
          Click on any certificate to view its details.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-4">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {certificate.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {certificate.issuer}
                    </p>
                  </div>
                </div>
                
                <div className="mb-4 flex items-center text-gray-600 dark:text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  <span>{certificate.date}</span>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {certificate.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {certificate.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={certificate.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-300"
                >
                  View Certificate <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 max-w-2xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Continuous Learning
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              I'm committed to continuous learning and regularly participate in online courses, workshops, and tutorials to expand my knowledge and keep up with the latest technologies in web development and software engineering.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;