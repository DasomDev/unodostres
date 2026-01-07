import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Box } from '@/shared/components'

export const CameraComparisonPage = () => {
  return (
    <div className="p-4 space-y-4 w-full h-screen">
      <h1 className="mb-4 text-2xl font-bold">카메라 vs 컨트롤 비교</h1>
      
      <div className="grid grid-cols-2 gap-4 h-[calc(100vh-100px)]">
        {/* 케이스 1: 둘 다 없음 - 기본 카메라만 (움직일 수 없음) */}
        <div className="rounded border-2 border-red-500">
          <div className="p-2 text-sm font-bold bg-red-100">
            1. 둘 다 없음 (기본 카메라만) - 마우스로 움직일 수 없음
          </div>
          <div className="h-[calc(100%-40px)]">
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Box position={[0, 0, 0]} color="red" />
            </Canvas>
          </div>
        </div>

        {/* 케이스 2: OrbitControls만 있음 - 움직일 수 있음 */}
        <div className="rounded border-2 border-green-500">
          <div className="p-2 text-sm font-bold bg-green-100">
            2. OrbitControls만 있음 - 마우스로 움직일 수 있음!
          </div>
          <div className="h-[calc(100%-40px)]">
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <OrbitControls />
              <Box position={[0, 0, 0]} color="green" />
            </Canvas>
          </div>
        </div>

        {/* 케이스 3: PerspectiveCamera만 있음 - 움직일 수 없음 */}
        <div className="rounded border-2 border-blue-500">
          <div className="p-2 text-sm font-bold bg-blue-100">
            3. PerspectiveCamera만 있음 - 마우스로 움직일 수 없음
          </div>
          <div className="h-[calc(100%-40px)]">
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Box position={[0, 0, 0]} color="blue" />
            </Canvas>
          </div>
        </div>

        {/* 케이스 4: 둘 다 있음 - 움직일 수 있음 */}
        <div className="rounded border-2 border-purple-500">
          <div className="p-2 text-sm font-bold bg-purple-100">
            4. 둘 다 있음 - 마우스로 움직일 수 있음!
          </div>
          <div className="h-[calc(100%-40px)]">
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <OrbitControls />
              <Box position={[0, 0, 0]} color="purple" />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  )
}

