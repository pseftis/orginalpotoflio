import React from 'react';
import { motion } from 'framer-motion';

// Skill item interface
interface SkillItem {
  name: string;
  icon: string;
  level: number;
  color: string;
}

// Skill categories interface
interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

// Define skills data
const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        level: 90,
        color: "#F7DF1E"
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        level: 80,
        color: "#3178C6"
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        level: 75,
        color: "#3776AB"
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        level: 70,
        color: "#007396"
      },
      {
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        level: 85,
        color: "#00599C"
      }
    ]
  },
  {
    title: "Frontend Technologies",
    skills: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        level: 90,
        color: "#61DAFB"
      },
      {
        name: "Angular",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        level: 75,
        color: "#DD0031"
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        level: 95,
        color: "#E34F26"
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        level: 90,
        color: "#1572B6"
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        level: 85,
        color: "#38B2AC"
      }
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        level: 85,
        color: "#339933"
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        level: 80,
        color: "#000000"
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        level: 80,
        color: "#47A248"
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        level: 75,
        color: "#4479A1"
      }
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        level: 85,
        color: "#F05032"
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        level: 90,
        color: "#181717"
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        level: 90,
        color: "#007ACC"
      },
      {
        name: "Jasmine",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jasmine/jasmine-plain.svg",
        level: 70,
        color: "#8A4182"
      },
      {
        name: "Ubuntu",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
        level: 75,
        color: "#E95420"
      }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="section-title mb-16"
        >
          My Skills
        </motion.h2>
        
        <p className="text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          I've developed a strong skill set across a range of technologies, with a focus on full-stack web development.
          Here's an overview of my technical skills and proficiency levels.
        </p>
        
        <div className="space-y-16">
          {skillsData.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-card flex flex-col items-center"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-4 w-16 h-16 flex items-center justify-center">
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="w-12 h-12 object-contain" 
                      />
                    </div>
                    
                    <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">{skill.name}</h4>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                      <motion.div 
                        className="h-2.5 rounded-full" 
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      ></motion.div>
                    </div>
                    
                    <span className="text-gray-600 dark:text-gray-400 text-sm">{skill.level}%</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Other Skills
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Problem Solving", "Data Structures", "Algorithms", "Responsive Design", 
              "RESTful APIs", "Agile Methodology", "Team Collaboration", "Project Management", 
              "UI/UX Design", "Testing & Debugging"
            ].map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;