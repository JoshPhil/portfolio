"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from "next-themes";
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  const prevTheme = useRef(theme);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    prevTheme.current = theme;
    setIsMenuOpen(false);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) return null;

  return (
    <>
      {/* Floating Navbar */}
      <motion.header
        className="fixed top-6 left-0 right-0 z-50 px-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center md:justify-center relative">
          <div className="md:absolute md:left-6">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="bg-background/80 backdrop-blur-md shadow-lg md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetTitle>
                  <VisuallyHidden.Root>
                    Title goes here
                  </VisuallyHidden.Root>
                </SheetTitle> 
                <SheetDescription>
                  <VisuallyHidden.Root>
                    Description goes here
                  </VisuallyHidden.Root>
                </SheetDescription>
                <nav className="flex flex-col h-full">
                  <div className="flex-grow py-6">
                    <ul className="space-y-4">
                      <li>
                        <a 
                          href="#" 
                          className="block px-4 py-2 text-lg hover:bg-accent rounded-md"
                          onClick={() => {
                            setActiveSection('Home');
                            setIsMenuOpen(false);
                          }}
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a 
                          href="#technologies" 
                          className="block px-4 py-2 text-lg hover:bg-accent rounded-md"
                          onClick={() => {
                            setActiveSection('Technologies');
                            setIsMenuOpen(false);
                          }}
                        >
                          Technologies
                        </a>
                      </li>
                      <li>
                        <a 
                          href="#education-work-experience" 
                          className="block px-4 py-2 text-lg hover:bg-accent rounded-md"
                          onClick={() => {
                            setActiveSection('timeline');
                            setIsMenuOpen(false);
                          }}
                        >
                          Education & Experience
                        </a>
                      </li>
                      <li>
                        <a 
                          href="#projects" 
                          className="block px-4 py-2 text-lg hover:bg-accent rounded-md"
                          onClick={() => {
                            setActiveSection('Projects');
                            setIsMenuOpen(false);
                          }}
                        >
                          Projects
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="py-6 flex justify-between items-center border-t">
                    <span className="text-sm text-muted-foreground">Joshua Philip</span>
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
          <motion.nav
            className="hidden md:block bg-background/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
          >
            <ul className="relative flex space-x-8">
              {['Home', 'Technologies', 'Education & Work Experience', 'Projects'].map((section) => (
                <li key={section} className="relative">
                  <Link
                    href={`#${section.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                    className="text-sm font-medium hover:text-primary transition-colors"
                    onClick={() => setActiveSection(section)}
                  >
                    {section}
                  </Link>
                  {activeSection === section && (
                    <motion.span
                    className="absolute -left-3 -right-3 top-0 bottom-0 bg-zinc-100 rounded-full -z-10 dark:bg-zinc-800" // Adjusted inset
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  ></motion.span>
                  )}
                </li>
              ))}
            </ul>
          </motion.nav>
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
      </motion.header>
    </>
  );
}
