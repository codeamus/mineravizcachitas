import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const HomePage = lazy(() => import('@/pages/Home'))
const BlogPage = lazy(() => import('@/pages/Blog'))
const SingleBlogPage = lazy(() => import('@/pages/SingleBlog'))

// Sistema de rutas con sus componentes
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: 'blog/:slug',
    element: <SingleBlogPage />,
  },
])
const Route = () => {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default Route
