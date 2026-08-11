import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, Search } from 'lucide-react';

type CredentialType = 'Specialization' | 'Course' | 'External';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link?: string;
  type: CredentialType;
}

const coursera = (id: string) => `https://www.coursera.org/account/accomplishments/verify/${id}`;
const specialization = (id: string) => `https://www.coursera.org/account/accomplishments/specialization/${id}`;

const certificatesData: Certificate[] = [
  { id: 43, title: 'SAP Certified - Data Analyst - SAP Analytics Cloud', issuer: 'SAP', date: 'February 2026', link: 'https://www.credly.com/badges/08206e62-5cc9-4538-ae1c-18dbde80cef7', type: 'External' },
  { id: 1, title: 'GPU Programming Specialization', issuer: 'Johns Hopkins University', date: 'November 2025', link: specialization('73LM1ZFHQAFJ'), type: 'Specialization' },
  { id: 44, title: 'Salesforce Training - 24 Days (Grade A)', issuer: 'SkillStone - A Grazitti Interactive Initiative', date: 'January-February 2025', type: 'External' },
  { id: 45, title: 'Diploma in Plastics Technology - First Class', issuer: 'Central Institute of Petrochemicals Engineering & Technology (CIPET)', date: 'June 2023', type: 'External' },
  { id: 2, title: 'Programming in C++: A Hands-on Introduction Specialization', issuer: 'Codio', date: 'February 2024', link: '/certificates/coursera-cpp-specialization.pdf', type: 'Specialization' },
  { id: 3, title: 'Agile Project Management', issuer: 'University of Colorado Boulder', date: 'February 2026', link: coursera('47N427AL4UHS'), type: 'Course' },
  { id: 4, title: 'Project Management: Foundations and Initiation', issuer: 'University of Colorado Boulder', date: 'February 2026', link: coursera('3G0D7TYH7327'), type: 'Course' },
  { id: 5, title: 'Project Planning and Execution', issuer: 'University of Colorado Boulder', date: 'February 2026', link: coursera('9VPR1FHEP1SS'), type: 'Course' },
  { id: 6, title: 'Computer Vision in Microsoft Azure', issuer: 'Microsoft', date: 'November 2025', link: coursera('25G9FJ1PN48M'), type: 'Course' },
  { id: 7, title: 'CUDA Advanced Libraries', issuer: 'Johns Hopkins University', date: 'November 2025', link: coursera('OIR7D6TLSG6X'), type: 'Course' },
  { id: 8, title: 'CUDA at Scale for the Enterprise', issuer: 'Johns Hopkins University', date: 'November 2025', link: coursera('OTWD7W5C65S3'), type: 'Course' },
  { id: 9, title: 'Introduction to Parallel Programming with CUDA', issuer: 'Johns Hopkins University', date: 'November 2025', link: coursera('ITWV3OG487N4'), type: 'Course' },
  { id: 10, title: 'Introduction to Concurrent Programming with GPUs', issuer: 'Johns Hopkins University', date: 'November 2025', link: coursera('8MH939N4FT7L'), type: 'Course' },
  { id: 11, title: 'Building Web Applications in Django', issuer: 'University of Michigan', date: 'October 2025', link: coursera('6RQ5DJ95Q3SC'), type: 'Course' },
  { id: 12, title: 'Building Web Applications in PHP', issuer: 'University of Michigan', date: 'October 2024', link: '/certificates/coursera-building-web-applications-php.pdf', type: 'Course' },
  { id: 13, title: 'ChatGPT Advanced Data Analysis', issuer: 'Vanderbilt University', date: 'May 2024', link: coursera('4XPWR47AA48X'), type: 'Course' },
  { id: 14, title: 'Dynamic Programming, Greedy Algorithms', issuer: 'University of Colorado Boulder', date: 'May 2024', link: coursera('FUW76FZ9NLXS'), type: 'Course' },
  { id: 15, title: 'Approximation Algorithms and Linear Programming', issuer: 'University of Colorado Boulder', date: 'May 2024', link: coursera('9KPXYQVVJYCR'), type: 'Course' },
  { id: 16, title: 'Server-side JavaScript with Node.js', issuer: 'NIIT', date: 'May 2024', link: coursera('LU7L28ATRZRG'), type: 'Course' },
  { id: 17, title: 'HTML, CSS, and Javascript for Web Developers', issuer: 'Johns Hopkins University', date: 'April 2024', link: coursera('4NTYJ5LJFCST'), type: 'Course' },
  { id: 18, title: 'Generative AI with Large Language Models', issuer: 'DeepLearning.AI & Amazon Web Services', date: 'April 2024', link: coursera('5J3W53XFM4KQ'), type: 'Course' },
  { id: 19, title: 'Algorithms on Strings', issuer: 'University of California San Diego', date: 'March 2024', link: coursera('4XPPZ92C3JBK'), type: 'Course' },
  { id: 20, title: 'Build AI Apps with ChatGPT, Dall-E, and GPT-4', issuer: 'Scrimba', date: 'February 2024', link: coursera('7EH7EMPVWKDM'), type: 'Course' },
  { id: 21, title: 'ChatGPT for Beginners: Save Time with Microsoft Excel', issuer: 'Coursera', date: 'February 2024', link: coursera('KSVHZ4NWAGPX'), type: 'Course' },
  { id: 22, title: 'ChatGPT Playground for Beginners: Intro to NLP AI', issuer: 'Coursera', date: 'February 2024', link: coursera('BVYYNFLCTP2X'), type: 'Course' },
  { id: 23, title: 'Introduction to Generative AI', issuer: 'Google Cloud', date: 'February 2024', link: coursera('LM8Z3A7TXUVM'), type: 'Course' },
  { id: 24, title: 'The Bits and Bytes of Computer Networking', issuer: 'Google', date: 'February 2024', link: coursera('YCAUAA4Y56YK'), type: 'Course' },
  { id: 25, title: 'Introduction to Large Language Models', issuer: 'Google Cloud', date: 'February 2024', link: coursera('KF5W48L6QAH3'), type: 'Course' },
  { id: 26, title: 'Learn to Code with AI', issuer: 'Scrimba', date: 'February 2024', link: coursera('35MG8GRQ5HGR'), type: 'Course' },
  { id: 27, title: 'GenAI for Everyone', issuer: 'Fractal Analytics', date: 'February 2024', link: coursera('DSFN5MF8ZP4Y'), type: 'Course' },
  { id: 28, title: 'Generative AI for Everyone', issuer: 'DeepLearning.AI', date: 'February 2024', link: coursera('J4J7PNGCFBQT'), type: 'Course' },
  { id: 29, title: 'Generative AI Primer', issuer: 'Vanderbilt University', date: 'February 2024', link: coursera('TXX632HXBYCA'), type: 'Course' },
  { id: 30, title: 'Prompt Engineering for ChatGPT', issuer: 'Vanderbilt University', date: 'February 2024', link: coursera('RXUNQVP2ANVU'), type: 'Course' },
  { id: 31, title: 'Static Routing Configuration Using Packet Tracer', issuer: 'Coursera Guided Project', date: 'February 2024', link: coursera('8TQLY94EPSHC'), type: 'Course' },
  { id: 32, title: 'Introduction to Networking', issuer: 'NVIDIA', date: 'February 2024', link: coursera('CULZUWSQV33Z'), type: 'Course' },
  { id: 33, title: 'Object-Oriented C++: Inheritance and Encapsulation', issuer: 'Codio', date: 'February 2024', link: coursera('L5HY4AYWCN84'), type: 'Course' },
  { id: 34, title: 'C++ Object Basics: Functions, Recursion, and Objects', issuer: 'Codio', date: 'February 2024', link: coursera('4ZV23RWMEZYG'), type: 'Course' },
  { id: 35, title: 'C++ Basic Structures: Vectors, Pointers, Strings, and Files', issuer: 'Codio', date: 'February 2024', link: coursera('LT4T4KYZ54QF'), type: 'Course' },
  { id: 36, title: 'C++ Basics: Selection and Iteration', issuer: 'Codio', date: 'February 2024', link: coursera('K9XB6DXGH8C7'), type: 'Course' },
  { id: 37, title: 'Mastering Data Structures and Algorithms', issuer: 'Udemy', date: 'August 2024', link: 'https://www.udemy.com/certificate/UC-4cac8994-bd20-45c6-9e1f-e9587c9c2908/', type: 'External' },
  { id: 38, title: 'Introduction to Internet of Things', issuer: 'NPTEL - IIT Kharagpur', date: 'July-October 2024', link: '/certificates/nptel-introduction-to-iot.pdf', type: 'External' },
  { id: 39, title: 'Data Structures and Algorithms - Self Paced', issuer: 'GeeksforGeeks', date: 'July 2024', link: '/certificates/geeksforgeeks-dsa.pdf', type: 'External' },
  { id: 40, title: 'DBMS Course - Fundamentals and Advanced Concepts', issuer: 'Scaler Topics', date: 'April 2025', link: '/certificates/scaler-dbms.png', type: 'External' },
  { id: 41, title: 'Data Structures Algorithm DSA - Python, JavaScript & LeetCode', issuer: 'Udemy', date: 'April 2025', link: '/certificates/udemy-dsa-python-javascript.pdf', type: 'External' },
  { id: 42, title: 'CSS, Bootstrap, JavaScript, PHP Full Stack Crash Course', issuer: 'Udemy', date: 'February 2025', link: '/certificates/udemy-full-stack.pdf', type: 'External' },
];

const filters: Array<'All' | CredentialType> = ['All', 'Specialization', 'Course', 'External'];

const Certificates: React.FC = () => {
  const [filter, setFilter] = useState<'All' | CredentialType>('All');
  const [query, setQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => certificatesData.filter((certificate) => {
    const matchesFilter = filter === 'All' || certificate.type === filter;
    const searchText = `${certificate.title} ${certificate.issuer}`.toLowerCase();
    return matchesFilter && searchText.includes(query.toLowerCase());
  }), [filter, query]);

  const visible = showAll || query || filter !== 'All' ? filtered : filtered.slice(0, 9);

  return (
    <section id="certificates" className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="section-container">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title mb-6">
          Certifications
        </motion.h2>
        <p className="text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-4">
          Verified credentials across SAP Analytics Cloud, Salesforce, plastics technology, GPU programming, AI, project management, web development, algorithms, C++, and networking.
        </p>
        <p className="text-center text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-10">
          {certificatesData.length} total credentials · 2 specializations · SAP Certified Data Analyst
        </p>

        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={19} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search certificates or issuers" className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 text-gray-900 outline-none focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white" />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((item) => (
              <button key={item} onClick={() => { setFilter(item); setShowAll(true); }} className={`rounded-full px-4 py-2 text-sm font-medium transition ${filter === item ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-indigo-100 dark:bg-gray-800 dark:text-gray-200'}`}>
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((certificate, index) => (
            <motion.article key={certificate.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.35, delay: Math.min(index, 8) * 0.04 }} className="flex h-full flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"><Award size={23} /></div>
                <div>
                  <span className="mb-2 inline-block rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">{certificate.type}</span>
                  <h3 className="font-bold leading-snug text-gray-900 dark:text-white">{certificate.title}</h3>
                </div>
              </div>
              <p className="mb-3 text-sm font-medium text-gray-600 dark:text-gray-300">{certificate.issuer}</p>
              <div className="mb-5 flex items-center text-sm text-gray-500 dark:text-gray-400"><Calendar size={15} className="mr-2" />{certificate.date}</div>
              <div className="mt-auto">
                {certificate.link ? (
                  <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400">
                    Verify credential <ExternalLink size={15} className="ml-1.5" />
                  </a>
                ) : <span className="text-sm text-gray-500 dark:text-gray-400">Certificate available on request</span>}
              </div>
            </motion.article>
          ))}
        </div>

        {!showAll && !query && filter === 'All' && (
          <div className="mt-10 text-center"><button onClick={() => setShowAll(true)} className="btn btn-primary">View all {certificatesData.length} credentials</button></div>
        )}
        {visible.length === 0 && <p className="py-12 text-center text-gray-500">No certificates match your search.</p>}
      </div>
    </section>
  );
};

export default Certificates;