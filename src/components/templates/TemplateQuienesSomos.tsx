import VideoMP4 from '@/assets/videos/quienes-somos.mp4'
import VideoWebm from '@/assets/videos/quienes-somos.webm'
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
        <VideoBanner
          videoMP4={VideoMP4}
          videoWEBM={VideoWebm}
          poster={`${
            import.meta.env.VITE_BASE_URL
          }/assets/images/posters/poster-video-somos-desktop.webp`}
          bgMobile={`${
            import.meta.env.VITE_BASE_URL
          }/assets/images/posters/poster-video-somos-mobile.webp`}
          title={
            <h1 className="w-full text-center text-5xl font-bold text-white lg:w-1/2 lg:text-balance lg:text-end lg:text-6xl">
              Proyecto Vizcachitas
              <span className="text-[#E8732C]"> Quiénes somos</span>
            </h1>
          }
          description="Somos un proyecto que mira al futuro, desarrollando una minería sostenible y responsable con el entorno y de la mano con el progreso de los vecinos de Putaendo, San Felipe y la región de Valparaíso."
          list={false}
        />

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
