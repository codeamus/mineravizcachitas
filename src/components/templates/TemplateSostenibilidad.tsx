import { getDataPage } from '@/api/page'
import VideoMP4 from '@/assets/videos/sostenibilidad.mp4'
import VideoWebm from '@/assets/videos/sostenibilidad.webm'
import BackToTop from '@/components/molecules/BackToTop'
import ScrollToTop from '@/components/molecules/ScrollTop'
import VideoBanner from '@/components/molecules/VideoBanner'
import Footer from '@/components/organism/Footer'
import Navbar from '@/components/organism/MenuNav'
import Info from '@/components/organism/Sostenibilidad/Info'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

const TemplateSostenibilidad = () => {
  const [dataSostenibilidad, setDataSostenibilidad] = useState(null)

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
        <VideoBanner
          videoMP4={VideoMP4}
          videoWEBM={VideoWebm}
          poster={`${
            import.meta.env.BASE_URL
          }/assets/images/posters/poster-video-sostenibilidad-desktop.webp`}
          bgMobile={`${
            import.meta.env.BASE_URL
          }/assets/images/posters/poster-video-sostenibilidad-mobile.webp`}
          title={
            <h1 className="w-full text-center text-4xl font-bold text-white lg:w-1/2 lg:text-balance lg:text-end lg:text-6xl">
              Proyecto Vizcachitas
              <span className="text-[#E8732D]"> Sostenibilidad</span>
            </h1>
          }
          description="Una nueva forma de hacer minería, comprometida con una producción que reduce impactos ambientales y genera efectos positivos sostenidos en el tiempo, tanto desde un punto de vista ambiental como comunitario."
        />
        <Info dataSostenibilidad={dataSostenibilidad} />
        <BackToTop />
      </main>
      <Footer />
    </>
  )
}

export default TemplateSostenibilidad
