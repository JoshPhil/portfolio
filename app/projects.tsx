"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const Projects: React.FC = () => {
  const [activeImages, setActiveImages] = useState<{ [key: number]: string | null }>({});
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my skills, projects, and experience. Built using Next.js, Tailwind CSS, and TypeScript.",
      technologies: ["react", "nextjs", "tailwindcss", "framermotion", "typescript", "vscode"],
      longDescription: ""
    },
    {
      title: "Real Estate App",
      description: "An app for browsing and listing properties, featuring real-time chat functionality and AI-powered image moderation to ensure appropriate property images.",
      technologies: ["swift", "firebase", "xcode"],
      longDescription: ""
    },
    {
      title: "Recipe App",
      description: "A mobile app that helps users find and save recipes, with swift for iOS development and Firebase for data storage.",
      technologies: ["swift", "firebase", "xcode"],
      longDescription: ""
    },
    {
      title: "Pacman Clone",
      description: "A recreation of the classic Pacman game built using C++ and the SFML library, featuring custom game logic, graphics, and BFS-based pathfinding for ghost movement.",
      technologies: ["c++", "sfml", "xcode"],
      longDescription: ""
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

  const handleImageClick = (projectIndex: number, tech: string) => {
    setActiveImages((prev) => ({
      ...prev,
      [projectIndex]: tech
    }));
    setTimeout(() => setActiveImages((prev) => ({
      ...prev,
      [projectIndex]: null
    })), 1500);
  }

  const handleExpandProject = (projectIndex: number) => {
    setExpandedProject(projectIndex);
  }

  const handleShrinkProject = () => {
    setExpandedProject(null);
  }

  return (
    <section id="projects" className="py-20 bg-zinc-100 dark:bg-zinc-950 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, projectIndex) => (
            <Card key={projectIndex} className="h-full">
              <CardHeader>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                  <CardTitle className="mb-4 sm:mb-0">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div 
                        key={techIndex} 
                        className="relative w-8 h-8 cursor-pointer"
                        whileHover="hover"
                        animate={activeImages[projectIndex] === tech ? "hover" : ""}
                        variants={imageVariants}
                        onClick={() => handleImageClick(projectIndex, tech)}
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
                </div>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" onClick={() => handleExpandProject(projectIndex)}>More details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {expandedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={handleShrinkProject}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg w-full max-w-2xl max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{projects[expandedProject].title}</CardTitle>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleShrinkProject}
                      aria-label="Close details"
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{projects[expandedProject].longDescription}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {projects[expandedProject].technologies.map((tech, techIndex) => (
                      <motion.div 
                        key={techIndex} 
                        className="relative w-8 h-8 cursor-pointer"
                        whileHover="hover"
                        variants={imageVariants}
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
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects