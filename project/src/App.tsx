import React, { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen">
      <button
        onClick={toggleDarkMode}
        className="fixed z-50 bottom-8 right-8 p-3 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {darkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
      </button>

      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800 transition-colors duration-300">
        <Navbar />
      </header>

      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default App;