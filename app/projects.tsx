"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { motion } from 'framer-motion'

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my skills, projects, and experience. Built using Next.js, Tailwind CSS, and TypeScript.",
      technologies: ["nextjs", "tailwindcss", "typescript", "vscode"]
    },
    {
      title: "Real Estate App",
      description: "An app for browsing and listing properties, featuring real-time chat functionality and AI-powered image moderation to ensure appropriate property images.",
      technologies: ["swift", "firebase", "xcode"]
    },
    {
      title: "Recipe App",
      description: "A mobile app that helps users find and save recipes, with swift for iOS development and Firebase for data storage.",
      technologies: ["swift", "firebase", "xcode"]
    },
    {
      title: "Pacman Clone",
      description: "A recreation of the classic Pacman game built using C++ and the SFML library, featuring custom game logic, graphics, and BFS-based pathfinding for ghost movement.",
      technologies: ["c++", "sfml", "xcode"]
    }
  ]  

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

  return (
    <section id="projects" className="py-20 bg-zinc-100 dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex space-x-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div 
                        key={techIndex} 
                        className="relative w-8 h-8"
                        whileHover="hover"
                        variants={imageVariants}
                      >
                        <Image
                          src={`/logos/${tech}.svg`}
                          alt={`${tech} logo`}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View Project</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects