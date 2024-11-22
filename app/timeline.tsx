"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'

interface TimelineItem {
  type: 'education' | 'experience'
  title: string
  organization: string
  date: string
  description?: string[]
  tasks?: string[]
  technologies: string[]
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
    ],
    technologies: []
  },
  {
    type: 'experience',
    title: 'Software Developer',
    organization: 'SOTI Inc.',
    date: 'May 2023 - December 2023 (8 months)',
    tasks: [
      'Improved privacy of Android app by researching, and implementing a centralized federated learning system using Java, Kotlin (edge devices), and Python (server-side)',
      'Rewrote Python preprocessing code in Kotlin and Java for on-device execution',
      'Trained a TensorFlow Lite model on the CIC dataset to detect malicious connections, utilizing VirusTotal API for connection classification to enhance network security',
      'Incorporated on-device training with TensorFlow Lite, enhancing privacy and allowing for model customization'
    ],
    technologies: ['java', 'kotlin', 'python', 'tensorflow', 'androidstudio']
  },
  {
    type: 'experience',
    title: 'Data Analyst',
    organization: 'Naryant',
    date: 'May 2022 - December 2022 (8 months)',
    tasks: [
      'Led the design of a 400-person survey that utilized Python tools for data cleaning and analysis',
      'Worked with Naryant & The Town Of Oakville on data-driven projects',
      'Utilized Pandas, NumPy, and GeoPandas to analyze large datasets, geocode bus stop names, map data points, and visualize origin-destination locations with geospatial coordinates',
      'Ensured code quality through QA testing, evaluating Python code against specified requirements'
    ],
    technologies: ['python']
  },
  {
    type: 'education',
    title: 'Harvard edX Verified Certificate for CS50\'s Introduction to AI with Python',
    organization: 'HarvardX',
    date: 'Aug 2021',
    description: [
        'Gained exposure to graph search algorithms, classification, optimization, reinforcement learning, and other AI/ML topics through hands-on projects.'
    ],
    technologies: ['python', 'tensorflow']
  },
  {
    type: 'education',
    title: 'Microsoft Technology Associate: Software Development Fundamentals Certification',
    organization: 'Microsoft',
    date: 'Aug 2021',
    description: [
        'Proficient in computer storage, decision structures, error handling, and object-oriented principles like inheritance and polymorphism, along with ASP.NET, web services integration, and C#.'
    ],
    technologies: ['cSharp']
  }
]

const TimelineCard: React.FC<{ item: TimelineItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeImage, setActiveImage] = useState<string | null>(null)

  const imageVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 0.3,
        rotate: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.5
        }
      }
    }
  }

  const handleImageClick = (tech: string) => {
    setActiveImage(tech)
    setTimeout(() => setActiveImage(null), 1500)
  }

  return (
    <motion.div
      layout
      className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6 w-full mb-4"
    >
      <motion.div layout className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">{item.organization}</p>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.date}</time>
        </div>
      </motion.div>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.technologies.map((tech, index) => (
          <motion.div 
            key={index} 
            className="relative w-8 h-8 cursor-pointer"
            whileHover="hover"
            animate={activeImage === tech ? "hover" : ""}
            variants={imageVariants}
            onClick={() => handleImageClick(tech)}
          >
            <Image
              src={`/logos/${tech}.svg`}
              alt={`${tech} logo`}
              width={32}
              height={32}
              className="object-contain w-auto h-auto"
            />
          </motion.div>
        ))}
      </div>
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
  const educationItems = timelineData.filter(item => item.type === 'education')
  const experienceItems = timelineData.filter(item => item.type === 'experience')

  return (
    <section id="education-work-experience" className="py-20 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Education & Work Experience</h2>
        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
          </TabsList>
          <TabsContent value="education">
            <div className="space-y-4">
              {educationItems.map((item, index) => (
                <TimelineCard key={index} item={item} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="experience">
            <div className="space-y-4">
              {experienceItems.map((item, index) => (
                <TimelineCard key={index} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default Timeline