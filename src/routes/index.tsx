import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const HomePage = lazy(() => import('@/pages/Home'))
const ProyectoPage = lazy(() => import('@/pages/Proyecto'))
const SostenibilidadPage = lazy(() => import('@/pages/Sostenibilidad'))
const AporteRegionalPage = lazy(() => import('@/pages/AporteRegional'))
const SomosPage = lazy(() => import('@/pages/Somos'))
const FaqPage = lazy(() => import('@/pages/PreguntasFrecuentes'))
const BlogPage = lazy(() => import('@/pages/Blog'))
const SingleBlogPage = lazy(() => import('@/pages/SingleBlog'))

// Sistema de rutas con sus componentes
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/proyecto',
    element: <ProyectoPage />,
  },
  {
    path: '/sostenibilidad',
    element: <SostenibilidadPage />,
  },
  {
    path: '/sostenibilidad',
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
])
const Route = () => {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default Route
