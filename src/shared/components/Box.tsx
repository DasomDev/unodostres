import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

interface BoxProps {
  position?: [number, number, number]
  color?: string
  rotationSpeed?: number
}

/**
 * 회전하는 박스 예제 컴포넌트
 */
export const Box = ({
  position = [0, 0, 0],
  color = 'orange',
  rotationSpeed = 0.01,
}: BoxProps) => {
  const meshRef = useRef<Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed
      meshRef.current.rotation.y += rotationSpeed
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

