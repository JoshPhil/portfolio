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


export default function Portfolio() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const prevTheme = useRef(theme)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    prevTheme.current = theme
    setIsMenuOpen(false);
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

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
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
          <section id="home" className="mx-auto py-32 bg-zinc-100 dark:bg-zinc-950 text-center h-screen flex flex-col justify-center items-center">
            <GradualSpacing
              className="font-display text-center text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem]"
              text="Joshua Philip"
            />
            <p className="text-xl mb-8">Data Analytics Specialist, Software Developer & Mobile App Expert</p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
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