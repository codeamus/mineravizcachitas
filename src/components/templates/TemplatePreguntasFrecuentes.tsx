import { getDataPage } from '@/api/page'
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
            videoMP4={dataFaq?.seccion_principal.video_banner}
            title={dataFaq?.seccion_principal.titulo}
            description={dataFaq?.seccion_principal.contenido}
            list={dataFaq?.seccion_principal.iconos}
            poster={`${
              import.meta.env.VITE_BASE_URL
            }/assets/images/posters/poster-video-preguntas-desktop.webp`}
          />
        ) : (
          <section className="relative flex h-full w-full items-center justify-center lg:h-[100vh]">
            <img
              src={`${
                import.meta.env.VITE_BASE_URL
              }/assets/images/posters/poster-video-preguntas-desktop.webp`}
              alt="video cover"
              className="h-[100vh] w-full object-cover brightness-50"
            />
          </section>
        )}
        <section
          id="preguntas"
          className="relative bg-[url(/assets/images/backgrounds/bg-sostenibilidad.webp)] bg-contain bg-fixed lg:bg-cover"
        >
          <PrincipalInfo dataFaq={dataFaq} />
          <TodasPreguntas dataFaq={dataFaq} />
        </section>
        <BackToTop />
      </main>
      <Footer />
    </>
  )
}

export default TemplatePreguntasFrecuentes
