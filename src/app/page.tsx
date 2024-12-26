import React from 'react'
import Navigation from '@/components/Navigation'
import { Rubik_Puddles } from 'next/font/google'
import DynamicCanvasWrapper from '@/components/DynamicCanvasWrapper'

const waterFont = Rubik_Puddles({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <DynamicCanvasWrapper />
      <Navigation />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className={`text-6xl mb-4 ${waterFont.className} water-text-effect`}>Austin Kuo</h1>
          <p className="text-xl font-light tracking-wide text-cyan-100">Full Stack Developer</p>
        </div>
      </div>
    </main>
  )
}

