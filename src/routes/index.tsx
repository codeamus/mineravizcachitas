import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const HomePage = lazy(() => import('@/pages/Home'))
const SostenibilidadPage = lazy(() => import('@/pages/Sostenibilidad'))
const AporteRegionalPage = lazy(() => import('@/pages/AporteRegional'))
const SomosPage = lazy(() => import('@/pages/Somos'))
const FaqPage = lazy(() => import('@/pages/PreguntasFrecuentes'))
const BlogPage = lazy(() => import('@/pages/Blog'))
const SingleBlogPage = lazy(() => import('@/pages/SingleBlog'))
const NotFoundPage = lazy(() => import('@/pages/NotFound'))

// Sistema de rutas con sus componentes
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/sostenibilidad',
    element: <SostenibilidadPage />,
  },
  {
    path: '/aporte-regional',
    element: <AporteRegionalPage />,
  },
  {
    path: '/quienes-somos',
    element: <SomosPage />,
  },
  {
    path: '/preguntas-frecuentes',
    element: <FaqPage />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: 'blog/:slug',
    element: <SingleBlogPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
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
