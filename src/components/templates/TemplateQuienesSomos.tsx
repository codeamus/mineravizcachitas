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

const TemplateQuienesSomos = () => {
  return (
    <>
      <Helmet>
        <title>Conoce a Minera Vizcachitas: Innovación y Responsabilidad</title>
        <meta
          name='description'
          content='Aprende más sobre Minera Vizcachitas, una compañía que lidera con el ejemplo en la minería sostenible, comprometida con la innovación y la responsabilidad social.'
        />
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <main>
        <VideoBanner
          videoMP4={VideoMP4}
          videoWEBM={VideoWebm}
          bgMobile='/assets/images/posters/poster-video-somos-mobile.webp'
          poster='/assets/images/posters/poster-video-somos-desktop.webp'
          title={
            <h1 className='w-full text-center text-5xl font-bold text-white lg:w-1/2 lg:text-balance lg:text-end lg:text-6xl'>
              Proyecto Vizcachitas
              <span className='text-[#E8732D]'> Quiénes somos</span>
            </h1>
          }
          description='Somos un proyecto que mira al futuro, desarrollando una minería sostenible y responsable con el entorno y de la mano con el progreso de los vecinos de Putaendo, San Felipe y la región de Valparaíso.'
          list={false}
        />

        <Sobre />
        <Equipo />
        <Documentos />
        <Contacto />
        <BackToTop />
      </main>
      <Footer />
    </>
  )
}

export default TemplateQuienesSomos
