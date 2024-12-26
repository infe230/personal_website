'use client'

import { Canvas } from '@react-three/fiber'
import WaterShader from './WaterShader'

const DynamicCanvas = () => {
  return (
    <Canvas>
      <WaterShader />
    </Canvas>
  )
}

export default DynamicCanvas

