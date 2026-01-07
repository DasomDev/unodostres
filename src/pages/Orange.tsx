import { ThreeScene } from '@/shared/components'
export const OrangePage = () => {
  return (
    <div>
      <h1>Orange Page</h1>
      <ThreeScene>
        <mesh>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </ThreeScene>
    </div>
  )
}