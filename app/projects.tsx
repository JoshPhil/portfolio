"use client"

import React, { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  content: {
    title: string
    description: string
    content: React.ReactNode
  }[]
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my skills, projects, and experience. Built using Next.js, Tailwind CSS, Framer Motion, and TypeScript.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["react", "nextjs", "tailwindcss", "framermotion", "typescript", "vscode"],
    content: [
      {
        title: "Overview",
        description: "This portfolio website serves as a comprehensive showcase of my skills, projects, and professional experience. Leveraging the power of Next.js, I've created a fast, server-side rendered application that provides an optimal user experience.",
        content: <Image src="/placeholder.svg?height=400&width=600" alt="Portfolio Overview" width={0} height={0} sizes="100vw" className="w-full h-auto" />
      },
      {
        title: "Design",
        description: "The site's responsive design, implemented with Tailwind CSS, ensures a seamless viewing experience across all devices. The clean and modern interface highlights my work and skills effectively.",
        content: <Image src="/placeholder.svg?height=400&width=600" alt="Portfolio Design" width={0} height={0} sizes="100vw" className="w-full h-auto" />
      },
      {
        title: "Development",
        description: "TypeScript adds an extra layer of type safety, making the codebase more robust and maintainable. The integration of Framer Motion brings life to the UI with smooth, engaging animations that enhance the overall user interaction.",
        content: <Image src="/placeholder.svg?height=400&width=600" alt="Portfolio Development" width={0} height={0} sizes="100vw" className="w-full h-auto" />
      }
    ]
  },
  {
    title: "Real Estate App",
    description: "An app for browsing and listing properties, featuring real-time chat and AI-powered image moderation to ensure appropriate property images.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["swift", "firebase", "xcode"],
    content: [
      {
        title: "Overview",
        description: "This innovative real estate application revolutionizes the way users browse and list properties. Built with Swift for iOS, it offers a native, high-performance experience.",
        content: <Image src="" alt="Real Estate App Overview" width={0} height={0} sizes="100vw" className="w-full h-auto" />
      },
      {
        title: "Real-time Chat",
        description: "The app integrates Firebase for real-time data synchronization and user authentication, enabling features like instant messaging between buyers and sellers.",
        content: <Image src="" alt="Real Estate App Chat" width={0} height={0} sizes="100vw" className="w-full h-auto" />
      },
      {
        title: "AI-powered Image Moderation",
        description: "The app uses AI-powered image moderation system, which automatically screens property images to ensure they meet platform guidelines, enhancing user trust and platform integrity.",
        content: <Image src="" alt="AI Image Moderation" width={0} height={0} sizes="100vw" className="w-full h-auto" />
      }
    ]
  },
  {
    title: "Recipe App",
    description: "A mobile app that helps users find and save recipes, with swift for iOS development and Firebase for data storage.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["swift", "firebase", "xcode"],
    content: [
      {
        title: "Overview",
        description: "This recipe application is designed to be the ultimate culinary companion for iOS users. Developed in Swift, it offers a smooth, native iOS experience.",
        content: <Image src="" alt="Recipe App Overview" width={0} height={0} sizes="100vw" className="w-full h-auto" />
      },
      {
        title: "Smart Search",
        description: "Key features include a smart search function that can filter recipes based on dietary restrictions, available ingredients, or cooking time.",
        content: <Image src="" alt="Smart Search Feature" width={0} height={0} sizes="100vw" className="w-full h-auto" />
      },
      {
        title: "Meal Planning",
        description: "A meal planning feature helps users organize their weekly meals and automatically generates shopping lists.",
        content: <Image src="" alt="Meal Planning Feature" width={0} height={0} sizes="100vw" className="w-full h-auto" />
      }
    ]
  },
  {
    title: "Pacman Clone",
    description: "A recreation of the classic Pacman game built using C++ and the SFML library. It uses the BFS pathfinding algorithm for ghost movement.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["c++", "sfml", "xcode"],
    content: [
      {
        title: "Overview",
        description: "This Pacman clone is recreation of the classic arcade game, built from the ground up using C++ and the SFML library.",
        content: <Image src="" alt="Pacman Clone Overview" width={0} height={0} sizes="100vw" className="w-full h-auto" />
      },
      {
        title: "Game Logic",
        description: "The core game logic has been meticulously implemented to match the original gameplay experience, including power pellets, fruit bonuses, and the iconic ghost behaviors.",
        content: <Image src="" alt="Game Logic" width={0} height={0} sizes="100vw" className="w-full h-auto" />
      },
      {
        title: "Ghost Pathfinding",
        description: "A standout feature is the use of a Breadth-First Search (BFS) algorithm for ghost pathfinding, creating more intelligent and challenging ghost movements.",
        content: <Image src="" alt="Ghost Pathfinding" width={0} height={0} sizes="100vw" className="w-full h-auto" />
      }
    ]
  }
]

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
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
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Image 
        className="w-full" 
        src={project.image} 
        alt={project.title}
        width={600}
        height={400}
      />
      <div className="px-5 py-4">
        <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{project.title}</div>
        <p className="text-gray-700 dark:text-gray-300 text-base">
          {project.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
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
      <div className="px-6 pb-4">
        <Button variant="outline" onClick={onClick}>More details</Button>
      </div>
    </motion.div>
  )
}

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [activeCard, setActiveCard] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (expandedProject !== null && scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
  
      const handleScroll = () => {
        if (scrollContainer) {
          const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
          const scrollProgress = scrollTop / (scrollHeight - clientHeight);
          const content = projects[expandedProject].content;
          const cardLength = content.length;
          const newActiveCard = Math.min(
            Math.floor(scrollProgress * cardLength),
            cardLength - 1
          );
          setActiveCard(newActiveCard);
        }
      };
  
      scrollContainer.addEventListener('scroll', handleScroll);
  
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, [expandedProject]);
  

  const backgroundColors = [
    "#0f172a",
    "#000000",
    "#171717",
  ]

  useEffect(() => {
    if (expandedProject !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [expandedProject]); // Remove `linearGradients` if unnecessary
  

  const handleExpandProject = (projectIndex: number) => {
    setExpandedProject(projectIndex)
    setActiveCard(0)
  }

  const handleShrinkProject = () => {
    setExpandedProject(null)
  }

  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const cardWidth = 340 + 16; // Card width (340px) + space between cards (16px)
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };
  

  const overlayVariants = {
    hidden: { 
      opacity: 0,
      backgroundColor: "rgba(0, 0, 0, 0)"
    },
    visible: { 
      opacity: 1,
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
      }
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-zinc-950 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Projects</h2>
        <div className="relative">
          <div className="overflow-hidden" ref={carouselRef}>
            <div className="flex space-x-4 pb-4 pt-4">
              {[...projects].map((project, projectIndex) => (
                <div
                  key={projectIndex}
                  className="flex-shrink-0"
                  style={{ width: "330px"}} 
                >
                  <ProjectCard
                    project={project}
                    onClick={() => handleExpandProject(projectIndex % projects.length)}
                  />
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-4 transform -translate-y-1/2"
            onClick={() => handleScroll('left')}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-4 transform -translate-y-1/2"
            onClick={() => handleScroll('right')}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
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
                ref={scrollContainerRef}
                animate={{
                  backgroundColor: backgroundColors[activeCard % backgroundColors.length],
                }}
                className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
              >
                <div className="w-1/2 pr-5">
                  <div className="sticky top-0 pt-20 pb-12">
                    {projects[expandedProject].content.map((item, index) => (
                      <motion.div 
                        key={item.title + index} 
                        className="mb-20"
                        initial={{ opacity: 0}}
                        animate={{ 
                          opacity: activeCard === index ? 1 : 0.3,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <h2 className="text-2xl font-bold text-slate-100">
                          {item.title}
                        </h2>
                        <p className="text-kg text-slate-300 max-w-sm mt-4">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="w-1/2 sticky top-0 flex items-center justify-center">
                  <motion.div
                    className="w-full h-60 rounded-md overflow-hidden flex items-center justify-center"
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {projects[expandedProject].content[activeCard].content}
                  </motion.div>
                </div>
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