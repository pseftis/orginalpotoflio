import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ExternalLink, Github, ShieldCheck } from 'lucide-react';

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
  category: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'ScropSec / ScropIDS',
    description: 'A production-oriented intrusion detection platform with endpoint agents, multi-tenant APIs, alerting, and LLM-assisted threat analysis.',
    detailedDescription: 'Built ScropIDS as a full-stack cybersecurity platform for collecting endpoint telemetry, aggregating events, and surfacing actionable alerts. The system combines a Django REST Framework backend, PostgreSQL JSONB data model, Celery and Redis scheduling, Docker deployment, a React dashboard, and Go-based cross-platform agent starters. It supports organization-based tenant flows, agent enrollment, alert channels, and dual LLM analysis through OpenAI-compatible APIs or local Ollama.',
    image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg',
    technologies: ['Django', 'DRF', 'React', 'PostgreSQL', 'Celery', 'Redis', 'Docker', 'Go Agents', 'LLM'],
    github: 'https://github.com/pseftis/ScropIDS',
    period: '2026',
    type: 'featured',
    category: 'Cybersecurity',
  },
  {
    id: 2,
    title: 'Sales Tracker',
    description: 'A verified Vite React app for managing products, recording grouped sales, and reviewing revenue analytics.',
    detailedDescription: 'Tested from the GitHub repo and confirmed with a production build. Sales Tracker includes product management, sales entry flows, dashboard summaries, and analytics views powered by Redux Toolkit, Recharts, Chart.js, and Tailwind CSS. It is useful for tracking product-level revenue, quantity distribution, and day-to-day sales activity.',
    image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg',
    technologies: ['React', 'Vite', 'Redux Toolkit', 'Recharts', 'Chart.js', 'Tailwind CSS'],
    github: 'https://github.com/pseftis/scales-tracker',
    period: 'Verified build - 2026',
    type: 'featured',
    category: 'Analytics',
  },
  {
    id: 3,
    title: 'SmartReach',
    description: 'A verified campaign automation dashboard with workflows, analytics, demo data, and optional Supabase support.',
    detailedDescription: 'Tested from the GitHub repo and confirmed with a production build. SmartReach provides personalized campaign management, workflow automation, performance analytics, and a demo mode when Supabase credentials are not configured. It is built as a polished Vite + TypeScript app with reusable dashboard views.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    technologies: ['TypeScript', 'React', 'Vite', 'Supabase', 'React Router', 'Recharts'],
    github: 'https://github.com/pseftis/smartreach',
    period: 'Verified build - 2026',
    type: 'featured',
    category: 'SaaS',
  },
  {
    id: 4,
    title: 'DataGuard - Personal Data & Consent Dashboard',
    description: 'A verified privacy dashboard for modeling partner apps, consent rules, and live data-sharing risk scores.',
    detailedDescription: 'Tested from the GitHub repo and confirmed with a Next.js production build. DataGuard lets users model partner applications and configure per-category consent rules for sensitive data such as email, phone, location, browsing history, payments, and contacts. A deterministic rule-based engine calculates a privacy risk score from 0 to 100 and explains the trade-offs between personalization and privacy.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    technologies: ['TypeScript', 'Next.js', 'React', 'Risk Engine', 'LocalStorage', 'System Design'],
    github: 'https://github.com/pseftis/DataGuard',
    period: 'Verified build - 2026',
    type: 'featured',
    category: 'Privacy',
  },
  {
    id: 5,
    title: 'E-Commerce Storefront',
    description: 'A verified React shopping interface with product categories, cart flows, and product detail pages.',
    detailedDescription: 'Tested from the GitHub repo and confirmed with a production build. This e-commerce storefront includes product browsing, category pages for men, women, and kids, product details, cart state, login/signup screens, and responsive product sections. It is the strongest non-duplicate e-commerce frontend from the repo set.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    technologies: ['React', 'React Router', 'Context API', 'CSS', 'Create React App'],
    github: 'https://github.com/pseftis/e-commeres',
    period: 'Verified build - 2026',
    type: 'featured',
    category: 'E-Commerce',
  },
  {
    id: 6,
    title: 'Student Result Management System',
    description: 'A verified student records platform with subject management, result entry, and automatic GPA calculation.',
    detailedDescription: 'Tested from the GitHub repo and confirmed with a production frontend build. The app manages students, subjects, academic results, grades, and GPA summaries through a Vite React interface backed by an Express and SQLite API.',
    image: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg',
    technologies: ['React', 'Vite', 'Express', 'SQLite', 'Axios', 'Tailwind CSS'],
    github: 'https://github.com/pseftis/Student-result-',
    period: 'Verified build - 2026',
    type: 'other',
    category: 'Education',
  },
  {
    id: 7,
    title: 'E-Learning Website',
    description: 'A static learning website with course-focused content and a responsive frontend layout.',
    detailedDescription: 'Checked from the GitHub repo as a static HTML/SCSS website. The project presents an e-learning experience with course sections, modern page structure, and frontend styling that can be deployed without a backend service.',
    image: 'https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg',
    technologies: ['HTML', 'SCSS', 'CSS', 'Responsive Design'],
    github: 'https://github.com/pseftis/e-learning-website',
    period: 'Static site checked - 2026',
    type: 'other',
    category: 'Education',
  },
];

const Projects: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured' | 'other'>('all');

  const toggleProject = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((project) => project.type === activeFilter);

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

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto -mt-8 mb-12"
        >
          A selection of full-stack, cybersecurity, and system design work focused on practical workflows,
          clean interfaces, and scalable backend foundations.
        </motion.p>

        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center rounded-md shadow-sm bg-white dark:bg-gray-700 p-1 gap-1">
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
              Other
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
              className="project-card flex flex-col h-full group"
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-indigo-700 shadow-sm dark:bg-gray-900/90 dark:text-indigo-300">
                  <ShieldCheck size={14} className="mr-1" />
                  {project.category}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white leading-snug">
                  {project.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
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
                      <p className="mb-4 leading-relaxed">{project.detailedDescription}</p>
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
            href="https://github.com/pseftis"
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
