"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useAnimation, useInView } from 'framer-motion'

interface Skill {
  name: string
  logo: string
  category: 'Data Analytics' | 'Software Development' | 'Mobile Development' | 'Databases'
}

const skills: Skill[] = [
  { name: 'Python', logo: './logos/python.svg', category: 'Data Analytics' },
  { name: 'C++', logo: '/logos/c++.svg', category: 'Data Analytics' },
  { name: 'Java', logo: '/logos/java.svg', category: 'Data Analytics' },
  { name: 'c#', logo: '/logos/cSharp.svg', category: 'Data Analytics' },
  { name: 'JavaScript', logo: '/logos/javascript.svg', category: 'Software Development' },
  { name: 'Node.js', logo: '/logos/node-js.svg', category: 'Software Development' },
  { name: 'TypeScript', logo: '/logos/typescript.svg', category: 'Software Development' },
  { name: 'Git', logo: '/logos/git.svg', category: 'Software Development' },
  { name: 'React Native', logo: '/logos/react.svg', category: 'Mobile Development' },
  { name: 'Swift', logo: '/logos/swift.svg', category: 'Mobile Development' },
  { name: 'Kotlin', logo: '/logos/kotlin.svg', category: 'Mobile Development' },
  { name: 'Flutter', logo: '/logos/flutter.svg', category: 'Mobile Development' },
  { name: 'PostgreSQL', logo: '/logos/postgresql.svg', category: 'Databases' },
  { name: 'MongoDB', logo: '/logos/mongodb.svg', category: 'Databases' },
  { name: 'MySQL', logo: '/logos/mysql.svg', category: 'Databases' },
  { name: 'NextJS', logo: '/logos/nextjs.svg', category: 'Software Development' },
  { name: 'Tailwind CSS', logo: '/logos/tailwindcss.svg', category: 'Software Development' },
  { name: 'Framer Motion', logo: '/logos/framermotion.svg', category: 'Software Development' },
  { name: 'Figma', logo: '/logos/figma.svg', category: 'Software Development' },
  { name: 'SFML', logo: '/logos/sfml.svg', category: 'Software Development' },
  { name: 'Firebase', logo: '/logos/firebase.svg', category: 'Software Development' },
  { name: 'Xcode', logo: '/logos/xcode.svg', category: 'Software Development' },
  { name: 'VSCode', logo: '/logos/vscode.svg', category: 'Software Development' },
  { name: 'Jira', logo: '/logos/jira.svg', category: 'Software Development' },
]

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-zinc-800 rounded-xl shadow-md p-4 flex flex-col items-center justify-center transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-zinc-700"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative w-12 h-12 mb-3">
        <Image
          src={skill.logo}
          alt={`${skill.name} logo`}
          fill={true}
          sizes="(max-width: 48px) 100vw, 48px"
          className="object-contain"
        />
      </div>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">{skill.name}</span>
    </motion.div>
  )
}

const Skills: React.FC = () => {
  const [visibleSkills, setVisibleSkills] = useState(8)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobileView, setIsMobileView] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMobileView(true)
      } else {
        setIsMobileView(false)
        setVisibleSkills(skills.length)
        setIsExpanded(true) 
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const handleShowMore = () => {
    const newVisible = visibleSkills + 8
    if (newVisible >= skills.length) {
      setIsExpanded(true)
    }
    setVisibleSkills(newVisible)
  }

  const handleCollapse = () => {
    setVisibleSkills(8)
    setIsExpanded(false)
  }

  return (
    <section id="skills" className="py-20 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Skills & Technologies</h2>
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4"
        >
          {skills.slice(0, visibleSkills).map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </motion.div>

        {/* Show the buttons only if in mobile view */}
        {isMobileView && (
  <div className="relative mt-8">
    <div className="relative flex justify-center">
      {isExpanded ? (
        <motion.button
          onClick={handleCollapse}
          className="px-4 py-2 border border-gray-500 dark:border-gray-300 text-gray-500 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Collapse
        </motion.button>
      ) : (
        <motion.button
          onClick={handleShowMore}
          className="px-4 py-2 border border-gray-500 dark:border-gray-300 text-gray-500 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Show More
        </motion.button>
      )}
    </div>
  </div>
)}

      </div>
    </section>
  )
}



export default Skills