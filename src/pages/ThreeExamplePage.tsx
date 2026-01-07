import { ThreeScene, Sphere } from '@/shared/components'

export const ThreeExamplePage = () => {
  return (
    <div className="w-full h-screen">
      <ThreeScene>
        <Sphere position={[-2, 0, 0]} color="orange" radius={1} />
        <Sphere position={[2, 0, 0]} color="hotpink" radius={1} />
        <Sphere position={[0, 2, 0]} color="lightblue" radius={1} />
      </ThreeScene>
    </div>
  )
}

