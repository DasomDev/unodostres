import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

interface SphereProps {
  position?: [number, number, number]
  color?: string
  radius?: number
}

/**
 * 구체 예제 컴포넌트
 */
export const Sphere = ({
  position = [0, 0, 0],
  color = 'hotpink',
  radius = 1,
}: SphereProps) => {
  const meshRef = useRef<Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

