import { createBrowserRouter } from 'react-router-dom'
import { ThreeExamplePage } from '@/pages/ThreeExamplePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className="flex justify-center items-center min-h-screen">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h1 className="mb-4 text-3xl font-bold text-gray-800">
            React + Vite + TypeScript + Tailwind + Three.js
          </h1>
          <p className="mb-4 text-gray-600">
            프로젝트가 성공적으로 설정되었습니다! 🎉
          </p>
          <a
            href="/three"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Three.js 예제 보기
          </a>
        </div>
      </div>
    ),
  },
  {
    path: '/three',
    element: <ThreeExamplePage />,
  },
])
