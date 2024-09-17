"use client"

import React, { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion"
import { X } from "lucide-react"

const Projects: React.FC = () => {
  const [activeImages, setActiveImages] = useState<{ [key: number]: string | null }>({})
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [activeCard, setActiveCard] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    container: ref,
    layoutEffect: false,
    offset: ["start start", "end start"]
  });
  

  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my skills, projects, and experience. Built using Next.js, Tailwind CSS, and TypeScript.",
      technologies: ["react", "nextjs", "tailwindcss", "framermotion", "typescript", "vscode"],
      content: [
        {
          title: "Overview",
          description: "This portfolio website serves as a comprehensive showcase of my skills, projects, and professional experience. Leveraging the power of Next.js, I've created a fast, server-side rendered application that provides an optimal user experience.",
          content: <Image src="/portfolioImage.png" alt="Portfolio Overview" width={0} height={0} className="object-cover w-80 h-60" />
        },
        {
          title: "Design",
          description: "The site's responsive design, implemented with Tailwind CSS, ensures a seamless viewing experience across all devices. The clean and modern interface highlights my work and skills effectively.",
          content: <Image src="/skillsImage.png" alt="Portfolio Design" width={0} height={0} className="object-cover w-80 h-60" />
        },
        {
          title: "Development",
          description: "TypeScript adds an extra layer of type safety, making the codebase more robust and maintainable. The integration of Framer Motion brings life to the UI with smooth, engaging animations that enhance the overall user interaction.",
          content: <Image src="/projectsImage.png" alt="Portfolio Development" width={0} height={0} className="object-cover w-80 h-60" />
        }
      ]
    },
    {
      title: "Real Estate App",
      description: "An app for browsing and listing properties, featuring real-time chat functionality and AI-powered image moderation to ensure appropriate property images.",
      technologies: ["swift", "firebase", "xcode"],
      content: [
        {
          title: "Overview",
          description: "This innovative real estate application revolutionizes the way users browse and list properties. Built with Swift for iOS, it offers a native, high-performance experience.",
          content: <Image src="/placeholder.svg?height=240&width=320" alt="Real Estate App Overview" width={320} height={240} className="object-cover" />
        },
        {
          title: "Features",
          description: "The app integrates Firebase for real-time data synchronization and user authentication, enabling features like instant messaging between buyers and sellers. A standout feature is the AI-powered image moderation system, which automatically screens property images to ensure they meet platform guidelines, enhancing user trust and platform integrity.",
          content: <Image src="/placeholder.svg?height=240&width=320" alt="Real Estate App Features" width={320} height={240} className="object-cover" />
        },
        {
          title: "User Experience",
          description: "The app includes advanced search filters, virtual tour capabilities, and integration with map services for location-based browsing, providing a comprehensive and user-friendly experience for property seekers and listers alike.",
          content: <Image src="/placeholder.svg?height=240&width=320" alt="Real Estate App User Experience" width={320} height={240} className="object-cover" />
        }
      ]
    },
    // ... (other projects remain unchanged)
  ]
  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (expandedProject === null) return
  
    const content = projects[expandedProject].content
    const cardLength = content.length
  
    // Create a more accurate scroll breakpoint calculation
    const breakpoints = Array(cardLength)
      .fill(0)
      .map((_, index) => index / (cardLength - 1)) // Divide the scroll into equal parts for each card
  
    // Determine the closest breakpoint
    const closestCardIndex = breakpoints.reduce((closestIndex, breakpoint, index) => {
      return Math.abs(latest - breakpoint) < Math.abs(latest - breakpoints[closestIndex])
        ? index
        : closestIndex
    }, 0)
  
    // Update the active card
    setActiveCard(closestCardIndex)
  })
  
  

  const backgroundColors = [
    "#0f172a", // resolved value of slate-900
    "#000000", // black
    "#171717", // neutral-900
  ]
  
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #f59e0b)", // orange-500 to yellow-500
  ]
  

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0])

  useEffect(() => {
    if (expandedProject !== null) {
      setBackgroundGradient(linearGradients[activeCard % linearGradients.length])
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [activeCard, expandedProject, linearGradients])

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
    }))
    setTimeout(() => setActiveImages((prev) => ({
      ...prev,
      [projectIndex]: null
    })), 1500)
  }

  const handleExpandProject = (projectIndex: number) => {
    setExpandedProject(projectIndex)
    setActiveCard(0)
  }

  const handleShrinkProject = () => {
    setExpandedProject(null)
  }

  const overlayVariants = {
    hidden: { 
      opacity: 0,
      backdropFilter: "blur(0px)",
      backgroundColor: "rgba(0, 0, 0, 0)"
    },
    visible: { 
      opacity: 1,
      backdropFilter: "blur(5px)",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const cardVariants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
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
                          width={0}
                          height={0}
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
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            className="fixed inset-0 flex items-center justify-center z-50"
            onClick={handleShrinkProject}
          >
            <motion.div
              variants={cardVariants}
              className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg w-full max-w-4xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                animate={{
                  backgroundColor: backgroundColors[activeCard % backgroundColors.length],
                }}
                ref={ref}
                className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
              >
                <div className="div relative flex items-start px-4">
                  <div className="max-w-2xl">
                    {projects[expandedProject].content.map((item, index) => (
                      <motion.div 
                        key={item.title + index} 
                        className="my-20"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ 
                          opacity: activeCard === index ? 1 : 0.3,
                          y: activeCard === index ? 0 : 50
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <h2 className="text-2xl font-bold text-slate-100">
                          {item.title}
                        </h2>
                        <p className="text-kg text-slate-300 max-w-sm mt-10">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                    <div className="h-40" />
                  </div>
                </div>
                <motion.div
                  className="flex items-center justify-center"
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {projects[expandedProject].content[activeCard].content}
                </motion.div>
              </motion.div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4"
                onClick={handleShrinkProject}
                aria-label="Close details"
              >
                <X className="h-6 w-6" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects