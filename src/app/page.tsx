"use client"

import React, { useEffect, useState } from 'react'
import { Rubik_Puddles } from 'next/font/google'
import DynamicCanvasWrapper from '@/components/DynamicCanvasWrapper'
import JobsAndProjects from '@/components/JobsAndProjects'
import Footer from '@/components/Footer'
import { ArrowDownCircle } from 'lucide-react'

const waterFont = Rubik_Puddles({ weight: '400', subsets: ['latin'] })

export default function Home() {
  const [showBounce, setShowBounce] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBounce(false)
      } else {
        setShowBounce(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContent = () => {
    const contentElement = document.getElementById('content')
    contentElement?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="relative w-full min-h-screen">
      <DynamicCanvasWrapper />
      <div className="container mx-auto px-4">
        <section className="h-screen flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className={`text-6xl mb-4 ${waterFont.className} water-text-effect`}>Austin Kuo</h1>
            <p className="text-xl font-light tracking-wide text-cyan-100 mb-8">Welcome to my website/resume</p>
            <button 
              onClick={scrollToContent}
              className={`text-cyan-300 transition-opacity duration-500 ${showBounce ? 'opacity-100' : 'opacity-0'}`}
            >
              <ArrowDownCircle className="w-10 h-10 hover-bounce" />
            </button>
          </div>
        </section>
        <JobsAndProjects />
      </div>
      <Footer />
    </main>
  )
}

