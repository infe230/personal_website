'use client'

import { Canvas } from '@react-three/fiber'
import WaterShader from './WaterShader'

const DynamicCanvas = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <Canvas>
        <WaterShader />
      </Canvas>
    </div>
  )
}

export default DynamicCanvas

