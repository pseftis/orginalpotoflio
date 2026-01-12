import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronDown } from 'lucide-react';

// Project interface
interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  technologies: string[];
  github: string;
  period: string;
  type: 'featured' | 'other';
}

// Projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: "Hospital Management System",
    description: "A comprehensive MERN stack application for managing hospitals, doctors, and patients with role-based access control.",
    detailedDescription: "Developed a hospital management system to manage hospitals, doctors, and patients with role-based access (Admin, Doctor, Patient). Implemented RESTful APIs in Node.js and Express.js, integrating MongoDB for secure data storage and retrieval. Applied MERN stack knowledge successfully to create a fully functional MERN stack website. Enabled hospital creation, updating, deletion, and searching by city, along with hospital detail management.",
    image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Authentication"],
    github: "https://github.com/pseftis/",
    period: "January 2024 - February 2024",
    type: 'featured'
  },
  {
    id: 2,
    title: "Sales Tracker Website",
    description: "A React.js application for monitoring and managing sales records with data visualization features.",
    detailedDescription: "Developed a Sales Tracker website to monitor and manage sales records efficiently. Built a dynamic and responsive frontend using React.js for seamless user interaction. Integrated features like data visualization, filtering, and sorting for better sales insights. Used extensively by students for preparation of university exams in COVID times.",
    image: "https://images.pexels.com/photos/7947451/pexels-photo-7947451.jpeg",
    technologies: ["React.js", "Chart.js", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/pseftis",
    period: "September 2024 - December 2024",
    type: 'featured'
  },
  {
    id: 3,
    title: "Real Estate Listings Platform",
    description: "A web application for browsing and listing real estate properties with filtering and search capabilities.",
    detailedDescription: "Created a real estate platform enabling users to list, browse, and search for properties. Implemented advanced filtering options based on location, price, amenities, and property type. Used React for frontend with Node.js backend and MongoDB for data storage. Integrated Google Maps API for property location visualization. Features include user authentication, property bookmarking, and contact forms.",
    image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg",
    technologies: ["React", "MongoDB", "Node.js", "Express", "Google Maps API"],
    github: "https://github.com/pseftis",
    period: "March 2024 - May 2024",
    type: 'featured'
  },
  {
    id: 4,
    title: "Personal Finance Tracker",
    description: "A budgeting and expense tracking application to help users manage their personal finances.",
    detailedDescription: "Built a personal finance application allowing users to track income, expenses, and set budget goals. Implemented data visualization for spending patterns and category-wise analysis. Features include receipt scanning, monthly reports, and financial goal setting. Used React with Firebase for authentication and real-time database updates.",
    image: "https://images.pexels.com/photos/5849577/pexels-photo-5849577.jpeg",
    technologies: ["React", "Firebase", "Chart.js", "Material UI"],
    github: "https://github.com/udayponnaganti/",
    period: "July 2023 - August 2023",
    type: 'other'
  },
  {
    id: 5,
    title: "E-Learning Platform",
    description: "An online learning platform with course management, video lectures, and assessment features.",
    detailedDescription: "Developed an e-learning platform that allows instructors to create courses and students to enroll in them. Implemented video streaming functionality for lectures, quiz systems for assessments, and progress tracking for students. Features include discussion forums, file sharing, and certificate generation upon course completion. Built with MERN stack with AWS S3 for file storage.",
    image: "https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg",
    technologies: ["MERN Stack", "AWS S3", "Video.js", "Redux"],
    github: "https://github.com/udayponnaganti/",
    period: "October 2023 - December 2023",
    type: 'other'
  }
];

const Projects: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured' | 'other'>('all');
  
  const toggleProject = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.type === activeFilter);

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="section-title mb-16"
        >
          My Projects
        </motion.h2>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm bg-white dark:bg-gray-700 p-1">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter('featured')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                activeFilter === 'featured'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setActiveFilter('other')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                activeFilter === 'other'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              Other Projects
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mx-2 p-2 bg-white rounded-full text-gray-900 hover:bg-indigo-100 transition-colors duration-300"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="mb-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {project.period}
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <button
                    onClick={() => toggleProject(project.id)}
                    className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-300"
                  >
                    {expandedId === project.id ? 'Show Less' : 'Read More'}
                    <ChevronDown 
                      size={18} 
                      className={`ml-1 transition-transform duration-300 ${expandedId === project.id ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  {expandedId === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-gray-700 dark:text-gray-300"
                    >
                      <p className="mb-4">{project.detailedDescription}</p>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-300"
                      >
                        View Repository <ExternalLink size={16} className="ml-1" />
                      </a>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a 
            href="https://github.com/udayponnaganti" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary inline-flex items-center"
          >
            <Github className="mr-2" size={20} />
            See more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
