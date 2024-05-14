import { getDataPage } from '@/api/page'
import VideoMP4 from '@/assets/videos/home.mp4'
import BackToTop from '@/components/molecules/BackToTop'
import ScrollToTop from '@/components/molecules/ScrollTop'
import VideoBanner from '@/components/molecules/VideoBanner'
import Footer from '@/components/organism/Footer'
import AporteRegional from '@/components/organism/Home/AporteRegional'
import Compromisos from '@/components/organism/Home/Compromisos'
import DescubreProyecto from '@/components/organism/Home/DescubreProyecto'
import EtapasProyecto from '@/components/organism/Home/EtapasProyecto'
import Noticias from '@/components/organism/Home/Noticias'
import PreguntasFrecuentes from '@/components/organism/Home/PreguntasFrecuentes'
import PresentacionUbicacion from '@/components/organism/Home/PresentacionUbicacion'
import Navbar from '@/components/organism/MenuNav'
import { TemplateHomeType } from '@/types/HomeData'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

const TemplateHome = () => {
  const [dataHome, setDataHome] = useState(null as TemplateHomeType | null)

  useEffect(() => {
    const fetchDataHome = async () => {
      const result = await getDataPage('inicio')
      setDataHome(result[0].acf)
    }
    fetchDataHome()
  }, [])

  return (
    <>
      <Helmet>
        <title>
          Minera Vizcachitas: Líder en Minería Responsable y Sostenible
        </title>
        <meta
          name="description"
          content="Descubre cómo Minera Vizcachitas lidera la innovación en la minería con prácticas responsables y sostenibles para un futuro mejor. Únete a nuestra misión."
        />
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <main>
        {dataHome?.seccion_principal ? (
          <VideoBanner
            videoMP4={VideoMP4}
            poster={dataHome?.seccion_principal.video_cover}
            bgMobile={dataHome?.seccion_principal.video_cover}
            title={dataHome?.seccion_principal.title}
            titleDestacado={dataHome?.seccion_principal.titulo_destacado}
            description={dataHome?.seccion_principal.content}
            list={dataHome?.seccion_principal.iconos}
          />
        ) : (
          <section className="relative flex h-full w-full items-center justify-center lg:h-[100vh]">
            <img
              src={`${
                import.meta.env.VITE_BASE_URL
              }/assets/images/posters/poster-video-home-desktop.webp`}
              alt="video cover"
              className="h-[100vh] w-full object-cover brightness-50"
            />
          </section>
        )}
        <PresentacionUbicacion
          dataPresentacion={dataHome?.presentacion_y_ubicacion}
        />
        {dataHome?.section_navega && (
          <DescubreProyecto dataDescubre={dataHome?.section_navega} />
        )}

        <Compromisos dataCompromisos={dataHome?.compromisos} />
        <AporteRegional dataAporte={dataHome?.aporte_regional_info} />
        <PreguntasFrecuentes dataFaq={dataHome?.preguntas_frecuentes_home} />
        <EtapasProyecto dataEtapas={dataHome?.etapas} />
        <Noticias />
        <BackToTop />
      </main>
      <Footer />
    </>
  )
}

export default TemplateHome
