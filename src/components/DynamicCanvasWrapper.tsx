'use client'

import dynamic from 'next/dynamic'

const DynamicCanvas = dynamic(() => import('./DynamicCanvas'), {
  ssr: false,
})

export default function DynamicCanvasWrapper() {
  return <DynamicCanvas />
}

