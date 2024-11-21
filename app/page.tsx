"use client";

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import GradualSpacing from "@/components/magicui/gradual-spacing";
import { useTheme } from "next-themes"
import Timeline from './timeline'
import Skills from './skills'
import Projects from './projects'
import Navbar from './navbar'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'


export default function Portfolio() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const prevTheme = useRef(theme)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    prevTheme.current = theme
  }, [theme])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
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
            className="relative flex items-center justify-center mx-auto py-32 min-h-screen overflow-hidden"
          >
            {/* Gradient background */}
            <div
              className="absolute inset-0 bg-gradient-to-b 
                from-pink-500/20 via-purple-500/10 to-white
                dark:from-pink-500/10 dark:via-purple-500/5 dark:to-zinc-950 mask-gradient"
            />

            <div className="container mx-auto px-4 relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left content */}
                <motion.div
                  className="flex-1 text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <GradualSpacing
                    className="text-4xl md:text-7xl font-bold mb-6"
                    text="Hi, I'm Joshua Philip"
                  />
                  <motion.p
                    className="text-xl mb-8 text-muted-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Data Analytics Specialist, Software Developer & Mobile App Expert
                  </motion.p>
                  <motion.div
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Button variant="default" size="lg">
                      Contact me
                    </Button>
                    <Button variant="outline" size="lg">
                      Download CV
                    </Button>
                  </motion.div>
                  <motion.div
                    className="flex gap-4 mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <Button variant="ghost" size="icon">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Right content */}
                <motion.div
                  className="flex-1 relative"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto">
                    {/* Image container */}
                    <div
                      className="relative w-full h-full rounded-full overflow-hidden 
                      bg-white dark:bg-zinc-900"
                    >
                      <Image
                        src="/portrait.png?height=400&width=400"
                        alt="Joshua Philip"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>


          {/* Skills Section */}
          <Skills />

          {/* Timeline Section */}
          <Timeline />

          {/* Projects Section */}
          <Projects />

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-zinc-100 dark:bg-zinc-950">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
              <Card className="max-w-md mx-auto">
                <CardHeader>
                  <CardTitle>Contact Me</CardTitle>
                  <CardDescription>Fill out the form below to send me a message</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                        <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>
    </>
  )
}