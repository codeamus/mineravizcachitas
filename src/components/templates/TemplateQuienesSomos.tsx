import VideoMP4 from '@/assets/videos/quienes-somos.mp4'
import VideoBanner from '@/components/molecules/VideoBanner'
import Footer from '@/components/organism/Footer'
import Navbar from '@/components/organism/MenuNav'
import Contacto from '@/components/organism/Somos/Contacto'
import Documentos from '@/components/organism/Somos/Documentos'
import Equipo from '@/components/organism/Somos/Equipo'
import Sobre from '@/components/organism/Somos/Sobre'
import { Helmet } from 'react-helmet-async'
import ScrollToTop from '@/components/molecules/ScrollTop'
import BackToTop from '@/components/molecules/BackToTop'
import { useEffect, useState } from 'react'
import { getDataPage } from '@/api/page'
import { TemplateQuienesSomosType } from '@/types/QuienesSomos'

const TemplateQuienesSomos = () => {
  const [dataQuienesSomos, setDataQuienesSomos] = useState(
    null as TemplateQuienesSomosType | null
  )

  useEffect(() => {
    const fetchQuienesSomos = async () => {
      const result = await getDataPage('quienes-somos')
      setDataQuienesSomos(result[0].acf)
    }
    fetchQuienesSomos()
  }, [])

  return (
    <>
      <Helmet>
        <title>Conoce a Minera Vizcachitas: Innovación y Responsabilidad</title>
        <meta
          name="description"
          content="Aprende más sobre Minera Vizcachitas, una compañía que lidera con el ejemplo en la minería sostenible, comprometida con la innovación y la responsabilidad social."
        />
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <main>
        {dataQuienesSomos?.seccion_principal ? (
          <VideoBanner
            videoMP4={VideoMP4}
            poster={dataQuienesSomos?.seccion_principal.video_cover}
            bgMobile={dataQuienesSomos?.seccion_principal.video_cover}
            title={dataQuienesSomos?.seccion_principal.title}
            titleDestacado={
              dataQuienesSomos?.seccion_principal.titulo_destacado
            }
            description={dataQuienesSomos?.seccion_principal.content}
            list={dataQuienesSomos?.seccion_principal.iconos}
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

        <Sobre />
        <Equipo dataTeam={dataQuienesSomos?.team} />
        <Documentos dataDocumentos={dataQuienesSomos?.documentation} />
        <Contacto dataFormulario={dataQuienesSomos?.form} />
        <BackToTop />
      </main>
      <Footer />
    </>
  )
}

export default TemplateQuienesSomos
