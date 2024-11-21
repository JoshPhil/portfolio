"use client";

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import GradualSpacing from "@/components/magicui/gradual-spacing";
import { useTheme } from "next-themes"
import Timeline from './timeline'
import Skills from './skills'
import Projects from './projects'
import Navbar from './navbar'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'


export default function Portfolio() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const prevTheme = useRef(theme)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    prevTheme.current = theme
  }, [theme])

  function CopyEmailButton() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
      navigator.clipboard.writeText('joshphilip2001@gmail.com').then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset the "copied" state after 2 seconds
      });
    };

    return (
      <Button variant="ghost" size="icon" onClick={handleCopyEmail}>
        <Mail className="h-5 w-5" />
        <span className="sr-only">Email</span>
        {copied && <span className="ml-2 text-green-500">Copied!</span>}
      </Button>
    );
  }

  if (!mounted) return null

  return (
    <>
      {/* Floating Navbar */}
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={prevTheme.current !== theme ? { x: 100, opacity: 0 } : false}
          animate={prevTheme.current !== theme ? { x: 0, opacity: 1 } : {}}
          exit={prevTheme.current !== theme ? { x: -100, opacity: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="min-h-screen bg-background text-foreground"
        >
      
          {/* Hero Section */}
          <section
            id="home"
            className="relative flex items-center justify-center mx-auto py-16 md:py-32 min-h-screen overflow-hidden"
          >
            {/* Gradient background */}
            <div
              className="absolute inset-0 bg-gradient-to-b 
                from-pink-500/20 via-purple-500/10 to-white
                dark:from-pink-500/10 dark:via-purple-500/5 dark:to-zinc-950 mask-gradient"
            />

            <div className="container mx-auto px-4 relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                {/* Left content */}
                <motion.div
                  className="flex-1 text-center lg:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <GradualSpacing
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 lg:mb-6"
                    text="Hi, I'm Joshua Philip"
                  />
                  <motion.p
                    className="text-lg sm:text-xl mb-6 lg:mb-8 text-muted-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Data Analytics Specialist, Software Developer & Mobile App Expert
                  </motion.p>
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <a href="mailto:joshphilip2001@gmail.com?subject=Contact%20Request&body=Hello%20Joshua,%20I%20would%20like%20to%20get%20in%20touch." className="w-full sm:w-auto">
                      <Button variant="default" size="lg" className="w-full sm:w-auto">
                        Contact me
                      </Button>
                    </a>

                    <a href="/Joshua_Resume.pdf" download="Joshua_Philip_CV.pdf" className="w-full sm:w-auto">
                      <Button variant="outline" size="lg" className="w-full sm:w-auto">
                        <Download className="h-4 w-4 mr-2" />
                        <span>Download CV</span>
                      </Button>
                    </a>
                  </motion.div>
                  <motion.div
                    className="flex gap-4 mt-6 lg:mt-8 justify-center lg:justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <a href="https://github.com/JoshPhil" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </a>

                    <a href="https://www.linkedin.com/in/joshua-philip/" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </a>

                    <CopyEmailButton />
                  </motion.div>
                </motion.div>

                {/* Right content */}
                <motion.div
                  className="flex-1 relative mt-8 lg:mt-0"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] mx-auto">
                    {/* Image container */}
                    <div
                      className="relative w-full h-full rounded-full overflow-hidden 
                      bg-white dark:bg-zinc-900"
                    >
                      <Image
                        src="/portrait.png"
                        alt="Joshua Philip"
                        fill={true}
                        sizes="(max-width: 768px) 250px, (max-width: 1024px) 350px, 400px"
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <Timeline />
          
          {/* Skills Section */}
          <Skills />

          {/* Projects Section */}
          <Projects />

        </motion.div>
      </AnimatePresence>
    </>
  )
}