import { ThreeScene, Box, Sphere } from '@/shared/components'

export const ThreeExamplePage = () => {
  return (
    <div className="w-full h-screen">
      <ThreeScene>
        <Box position={[-2, 0, 0]} color="orange" />
        <Sphere position={[2, 0, 0]} color="hotpink" radius={1} />
        <Box position={[0, 2, 0]} color="lightblue" rotationSpeed={0.02} />
      </ThreeScene>
    </div>
  )
}

