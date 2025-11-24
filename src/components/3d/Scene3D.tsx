'use client'

import { useRef, useMemo } from 'react'
import dynamic from 'next/dynamic'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random'

// Composant dynamique pour éviter les problèmes SSR
const Scene3DContent = dynamic(() => Promise.resolve(Scene3DComponent), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-background animate-pulse" />
})

function ParticleField({ count = 5000 }) {
  const ref = useRef<any>()
  
  const sphere = useMemo(() => {
    const positions = new Float32Array(count * 3)
    random.inSphere(positions, { radius: 1.5 })
    return positions
  }, [count])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00ff88"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

function FloatingCube() {
  const ref = useRef<any>()

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
      ref.current.rotation.x += 0.01
      ref.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={ref} position={[2, 0, 0]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial 
        color="#00ff88" 
        wireframe 
        transparent 
        opacity={0.6}
      />
    </mesh>
  )
}

function FloatingTorus() {
  const ref = useRef<any>()

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = Math.cos(state.clock.elapsedTime * 0.8) * 0.2
      ref.current.rotation.x += 0.005
      ref.current.rotation.z += 0.01
    }
  })

  return (
    <mesh ref={ref} position={[-2, 0, 0]}>
      <torusGeometry args={[0.3, 0.1, 16, 32]} />
      <meshStandardMaterial 
        color="#22c55e" 
        wireframe 
        transparent 
        opacity={0.7}
      />
    </mesh>
  )
}

function Scene3DComponent() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      className="w-full h-full"
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <ParticleField count={3000} />
      <FloatingCube />
      <FloatingTorus />
    </Canvas>
  )
}

const Scene3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Scene3DContent />
    </div>
  )
}

export default Scene3D