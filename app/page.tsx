"use client";

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BarChart2, Code, Database, Github, Linkedin, Mail, Send, Smartphone } from 'lucide-react'
import GradualSpacing from "@/components/magicui/gradual-spacing";
import { useTheme } from "next-themes"
import { Menu, Moon, Sun } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"




export default function Portfolio() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
    <div className="min-h-screen bg-background text-foreground">
      {/* Floating Navbar */}
      <header className="fixed top-6 left-0 right-0 z-50 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center md:justify-center">
          <div className="md:absolute md:left-6">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="bg-background/80 backdrop-blur-md shadow-lg md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col h-full">
                  <div className="flex-grow py-6">
                    <ul className="space-y-4">
                      <li><a href="#" className="block px-4 py-2 text-lg hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                      <li><a href="#timeline" className="block px-4 py-2 text-lg hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>Education & Experience</a></li>
                      <li><a href="#skills" className="block px-4 py-2 text-lg hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
                      <li><a href="#projects" className="block px-4 py-2 text-lg hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                      <li><a href="#contact" className="block px-4 py-2 text-lg hover:bg-accent rounded-md" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                    </ul>
                  </div>
                  <div className="py-6 flex justify-between items-center border-t">
                    <span className="text-sm text-muted-foreground">© 2023 Your Name</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={toggleTheme}
                      className="bg-background/80 backdrop-blur-md shadow-lg"
                    >
                      {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <nav className="hidden md:block bg-background/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg">
            <ul className="flex space-x-8">
              <li><a href="#" className="text-sm font-medium hover:text-primary transition-colors">Home</a></li>
              <li><a href="#timeline" className="text-sm font-medium hover:text-primary transition-colors">Education & Experience</a></li>
              <li><a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </nav>
          <div className="md:absolute md:right-6">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="bg-background/80 backdrop-blur-md shadow-lg"
            >
              {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-32 text-center h-screen flex flex-col justify-center items-center bg-cover">
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

      {/* Timeline Section */}
      <section id="timeline" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Education & Experience</h2>
          <div className="relative border-l border-gray-200 dark:border-gray-700">
            <div className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2023 - December 2023 (8 months)</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Student Research Assistant (CMI + SOTI)</h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Sheridan College · Co-op</p>
            </div>
            <div className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2022 - December 2022 (8 months)</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Machine Learning Data Analyst (CMI + Naryant)</h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Sheridan College · Co-op</p>
            </div>
            <div className="ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2019 - 2023</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Honours Bachelor of Computer Science (Mobile Computing)</h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Sheridan College</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart2 className="mr-2" />
                  Data Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>Python</li>
                  <li>SQL</li>
                  <li>Tableau</li>
                  <li>Machine Learning</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2" />
                  Software Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>TypeScript</li>
                  <li>Git</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Smartphone className="mr-2" />
                  Mobile Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>React Native</li>
                  <li>Swift</li>
                  <li>Kotlin</li>
                  <li>Flutter</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="mr-2" />
                  Databases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Data Visualization Dashboard</CardTitle>
                <CardDescription>Interactive dashboard for sales data analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Project Description</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View Project</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Machine Learning Model for Predictive Maintenance</CardTitle>
                <CardDescription>Predicting equipment failures in manufacturing</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Project Description</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View Project</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>E-commerce Analytics Platform</CardTitle>
                <CardDescription>Real-time analytics for online retailers</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Project Description</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View Project</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cross-platform Fitness Tracking App</CardTitle>
                <CardDescription>Mobile app for iOS and Android</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Project Description</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View Project</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted py-20">
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

      {/* Footer */}
      <footer className="bg-background text-center py-8">
        <p>&copy; 2023 Joshua Philip. All rights reserved.</p>
      </footer>
    </div>
  )
}