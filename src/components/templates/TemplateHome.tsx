import VideoMP4 from '@/assets/videos/home.mp4'
import VideoWebm from '@/assets/videos/home.webm'
import VideoBanner from '@/components/molecules/VideoBanner'
import Footer from '@/components/organism/Footer'
import AporteRegional from '@/components/organism/Home/AporteRegional'
import Compromisos from '@/components/organism/Home/Compromisos'
import EtapasProyecto from '@/components/organism/Home/EtapasProyecto'
import Noticias from '@/components/organism/Home/Noticias'
import PreguntasFrecuentes from '@/components/organism/Home/PreguntasFrecuentes'
import PresentacionUbicacion from '@/components/organism/Home/PresentacionUbicacion'
import Navbar from '@/components/organism/MenuNav'
import { Helmet } from 'react-helmet-async'
import ScrollToTop from '@/components/molecules/ScrollTop'

const TemplateHome = () => {
  return (
    <>
      <Helmet>
        <title>
          Minera Vizcachitas: Líder en Minería Responsable y Sostenible
        </title>
        <meta
          name='description'
          content='Descubre cómo Minera Vizcachitas lidera la innovación en la minería con prácticas responsables y sostenibles para un futuro mejor. Únete a nuestra misión.'
        />
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <main>
        <VideoBanner
          videoMP4={VideoMP4}
          videoWEBM={VideoWebm}
          poster='/assets/images/posters/poster-video-home-desktop.webp'
          bgMobile='/assets/images/posters/poster-video-home-mobile.webp'
          title={
            <h1 className='text-center text-5xl font-bold text-white lg:text-balance lg:text-6xl'>
              Proyecto
              <span className='text-[#E8732D]'> Vizcachitas</span>
            </h1>
          }
          description='Minería sostenible y responsable comprometida con el desarrollo
              social y económico de Putaendo, San Felipe y la Región de
              Valparaíso. Desarrollo con las comunidades y cuidado del medio
              ambiente para un futuro mejor.'
          list={true}
        />
        <PresentacionUbicacion />
        <Compromisos />
        <AporteRegional />
        <PreguntasFrecuentes />
        <EtapasProyecto />
        <Noticias />
      </main>
      <Footer />
    </>
  )
}

export default TemplateHome
