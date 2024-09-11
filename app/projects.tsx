"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-zinc-100 dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Website</CardTitle>
              <CardDescription>Interactive dashboard for sales data analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <p>A dashboard that allows users to visualize and analyze sales data interactively. Built using D3.js and React.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">View Project</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Real Estate App</CardTitle>
              <CardDescription>Predicting equipment failures in manufacturing</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This project involves using machine learning algorithms to predict equipment failures in a manufacturing environment.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">View Project</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recipe App</CardTitle>
              <CardDescription>Real-time analytics for online retailers</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Real-time analytics platform for e-commerce businesses to track and optimize sales, traffic, and conversion rates.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">View Project</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pacman Clone</CardTitle>
              <CardDescription>Mobile app for iOS and Android</CardDescription>
            </CardHeader>
            <CardContent>
              <p>A fitness tracking mobile app developed for both iOS and Android platforms using React Native.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">View Project</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Projects
