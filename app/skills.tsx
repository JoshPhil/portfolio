"use client"

import { useEffect, useRef } from 'react'
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
  { name: 'Figma', logo: '/logos/figma.svg', category: 'Software Development' },
  { name: 'SFML', logo: '/logos/sfml.svg', category: 'Software Development' },
  { name: 'Firebase', logo: '/logos/firebase.svg', category: 'Software Development' },
  { name: 'Xcode', logo: '/logos/xcode.svg', category: 'Software Development' },
  { name: 'VSCode', logo: '/logos/vscode.svg', category: 'Software Development' },
]

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md p-4 flex flex-col items-center justify-center transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-zinc-700 w-32 h-32">
      <div className="relative w-16 h-16 mb-4">
        <Image
          src={skill.logo}
          alt={`${skill.name} logo`}
          fill={true}
          sizes="(max-width: 64px) 100vw, 64px"
        />
      </div>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">{skill.name}</span>
    </div>
  )
}

const SkillRow: React.FC<{ skills: Skill[] }> = ({ skills }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start({
        x: [0, -(skills.length * 144)],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: skills.length * 10,
            ease: "linear",
          },
        },
      })
    } else {
      controls.stop()
    }
  }, [controls, inView, skills.length])

  return (
    <div ref={ref} className="overflow-hidden pb-2">
      <motion.div className="flex space-x-6" animate={controls}>
        {[...skills, ...skills].map((skill, index) => (
          <SkillCard key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </motion.div>
    </div>
  )
}

const Skills: React.FC = () => {
  const topRowSkills = skills.slice(0, Math.ceil(skills.length / 2))
  const bottomRowSkills = skills.slice(Math.ceil(skills.length / 2))

  return (
    <section id="skills" className="py-20 bg-zinc-100 dark:bg-zinc-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Skills & Technologies</h2>
        <div className="space-y-8">
          <SkillRow skills={topRowSkills} />
          <SkillRow skills={bottomRowSkills} />
        </div>
      </div>
    </section>
  )
}

export default Skills