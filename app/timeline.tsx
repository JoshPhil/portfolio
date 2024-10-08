"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface TimelineItem {
  type: 'education' | 'experience'
  title: string
  organization: string
  date: string
  description?: string[]
  tasks?: string[]
}

const timelineData: TimelineItem[] = [
  {
    type: 'education',
    title: 'Honours Bachelor of Computer Science (Mobile Computing)',
    organization: 'Sheridan Institute of Technology & Advanced Learning - Oakville, ON',
    date: '2019 - 2023',
    description: [
        'Cumulative GPA: 3.51 / 4.00.' ,
        'Coursework: Programming Languages, Advanced Mobile Application Development, Data Structures and Algorithms Web Application Design and Implementation, Statistics for Data Science, Software Engineering, Artificial Intelligence, Quality Assurance and Software Testing, Simulation and Visualization, Business Intelligence and Data Mining'
    ]
  },
  {
    type: 'experience',
    title: 'Software Developer',
    organization: 'Sheridan College, Centre for Applied AI',
    date: 'May 2023 - December 2023 (8 months)',
    tasks: [
      'Improved privacy of Android app by researching, and implementing a centralized federated learning system using Java, Kotlin (edge devices), and Python (server-side)',
      'Rewrote Python preprocessing code in Kotlin and Java for on-device execution',
      'Trained a TensorFlow Lite model on the CIC dataset to detect malicious connections, utilizing VirusTotal API for connection classification to enhance network security',
      'Incorporated on-device training with TensorFlow Lite, enhancing privacy and allowing for model customization'
    ]
  },
  {
    type: 'experience',
    title: 'Data Analyst',
    organization: 'Sheridan College, Centre for Applied AI',
    date: 'May 2022 - December 2022 (8 months)',
    tasks: [
      'Led the design of a 400-person survey that utilized Python tools for data cleaning and analysis',
      'Worked with Naryant & The Town Of Oakville on data-driven projects',
      'Utilized Pandas, NumPy, and GeoPandas to analyze large datasets, geocode bus stop names, map data points, and visualize origin-destination locations with geospatial coordinates',
      'Ensured code quality through QA testing, evaluating Python code against specified requirements'
    ]
  },
  {
    type: 'education',
    title: 'Harvard edX Verified Certificate for CS50\'s Introduction to AI with Python',
    organization: 'HarvardX',
    date: 'Aug 2021',
    description: [
        'Gained exposure to graph search algorithms, classification, optimization, reinforcement learning, and other AI/ML topics through hands-on projects.'
    ]
  },
  {
    type: 'education',
    title: 'Microsoft Technology Associate: Software Development Fundamentals Certification',
    organization: 'Microsoft',
    date: 'Aug 2021',
    description: [
        'Proficient in computer storage, decision structures, error handling, and object-oriented principles like inheritance and polymorphism, along with ASP.NET, web services integration, and C#.'
    ]
  }
]

const TimelineCard: React.FC<{ item: TimelineItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      layout
      className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6 w-full"
    >
      <motion.div layout className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">{item.organization}</p>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.date}</time>
        </div>
      </motion.div>
      <motion.div
        layout
        className="mt-4 cursor-pointer flex items-center text-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-2">{isOpen ? 'Less' : 'More'} details</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            {item.description && Array.isArray(item.description) ? (
              item.description.map((desc, index) => (
                <p key={index} className="text-gray-600 dark:text-gray-300">{desc}</p>
              ))
            ) : (
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            )}
            {item.tasks && (
              <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
                {item.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const Timeline: React.FC = () => {
    return (
      <section id="education-work-experience" className="py-20 bg-zinc-100 dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Education & Work Experience</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-zinc-700 transform md:-translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div key={index} className="relative flex items-center">
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 top-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2"></div>
                  
                  {/* Card wrapper */}
                  <div className={`pl-14 md:pl-0 md:w-5/12 ${item.type === 'education' ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <TimelineCard item={item} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
}
  

export default Timeline