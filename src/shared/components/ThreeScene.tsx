import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { ReactNode } from 'react'

interface ThreeSceneProps {
  children?: ReactNode
  cameraPosition?: [number, number, number]
  enableControls?: boolean
}

/**
 * React Three Fiber 기본 씬 컴포넌트
 */
export const ThreeScene = ({
  children,
  cameraPosition = [0, 0, 5],
  enableControls = true,
}: ThreeSceneProps) => {
  return (
    <Canvas
      style={{ width: '100%', height: '100vh' }}
      gl={{ antialias: true, alpha: true }}
    >
      <PerspectiveCamera makeDefault position={cameraPosition} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      {enableControls && <OrbitControls />}
      {children}
    </Canvas>
  )
}

