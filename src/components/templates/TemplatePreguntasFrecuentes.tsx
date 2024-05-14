import { getDataPage } from '@/api/page'
import VideoMP4 from '@/assets/videos/preguntas.mp4'
import BackToTop from '@/components/molecules/BackToTop'
import ScrollToTop from '@/components/molecules/ScrollTop'
import VideoBanner from '@/components/molecules/VideoBanner'
import Footer from '@/components/organism/Footer'
import Navbar from '@/components/organism/MenuNav'
import PrincipalInfo from '@/components/organism/PreguntasFrecuentes/PrincipalInfo'
import TodasPreguntas from '@/components/organism/PreguntasFrecuentes/TodasPreguntas'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

const TemplatePreguntasFrecuentes = () => {
  const [dataFaq, setDataFaq] = useState(null as any | null)

  useEffect(() => {
    const fetchPreguntasFrecuentes = async () => {
      const result = await getDataPage('preguntas-frecuentes')
      setDataFaq(result[0].acf)
    }
    fetchPreguntasFrecuentes()
  }, [])

  return (
    <>
      <Helmet>
        <title>
          Preguntas Frecuentes sobre Minera Vizcachitas: Respuestas Claras
        </title>
        <meta
          name="description"
          content="Encuentra respuestas a tus preguntas sobre Minera Vizcachitas, desde nuestros procesos mineros hasta nuestras iniciativas de sostenibilidad y más."
        />
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <main>
        {dataFaq?.seccion_principal ? (
          <VideoBanner
            videoMP4={VideoMP4}
            poster={dataFaq?.seccion_principal.video_cover}
            bgMobile={dataFaq?.seccion_principal.video_cover}
            title={dataFaq?.seccion_principal.title}
            titleDestacado={dataFaq?.seccion_principal.titulo_destacado}
            description={dataFaq?.seccion_principal.content}
            list={dataFaq?.seccion_principal.iconos}
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
        <section
          id="preguntas"
          className="relative bg-[url(/assets/images/backgrounds/bg-sostenibilidad.webp)] bg-contain bg-fixed lg:bg-cover"
        >
          <PrincipalInfo />
          <TodasPreguntas dataFaq={dataFaq} />
        </section>
        <BackToTop />
      </main>
      <Footer />
    </>
  )
}

export default TemplatePreguntasFrecuentes
