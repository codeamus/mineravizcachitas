import { getDataPage } from '@/api/page'
import VideoMP4 from '@/assets/videos/sostenibilidad.mp4'
import BackToTop from '@/components/molecules/BackToTop'
import ScrollToTop from '@/components/molecules/ScrollTop'
import VideoBanner from '@/components/molecules/VideoBanner'
import Footer from '@/components/organism/Footer'
import Navbar from '@/components/organism/MenuNav'
import Info from '@/components/organism/Sostenibilidad/Info'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

const TemplateSostenibilidad = () => {
  const [dataSostenibilidad, setDataSostenibilidad] = useState(
    null as any | null
  )

  useEffect(() => {
    const fetchDataHome = async () => {
      const result = await getDataPage('sostenibilidad')
      setDataSostenibilidad(result[0].acf)
    }
    fetchDataHome()
  }, [])
  return (
    <>
      <Helmet>
        <title>
          Sostenibilidad en Minera Vizcachitas: Nuestro Compromiso Eterno
        </title>
        <meta
          name="description"
          content="Explora cómo Minera Vizcachitas se compromete con la sostenibilidad ambiental, social y económica en cada etapa de nuestra operación minera."
        />
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <main>
        {dataSostenibilidad?.sostenibilidad?.seccion_principal ? (
          <VideoBanner
            videoMP4={VideoMP4}
            title={dataSostenibilidad?.sostenibilidad?.seccion_principal.titulo}
            description={
              dataSostenibilidad?.sostenibilidad?.seccion_principal.contenido
            }
            list={dataSostenibilidad?.sostenibilidad?.seccion_principal.iconos}
          />
        ) : (
          <section className="relative flex h-full w-full items-center justify-center lg:h-[100vh]">
            <img
              src={`${
                import.meta.env.VITE_BASE_URL
              }/assets/images/posters/poster-video-sostenibilidad-desktop.webp`}
              alt="video cover"
              className="h-[100vh] w-full object-cover brightness-50"
            />
          </section>
        )}
        <Info dataSostenibilidad={dataSostenibilidad} />
        <BackToTop />
      </main>
      <Footer />
    </>
  )
}

export default TemplateSostenibilidad
