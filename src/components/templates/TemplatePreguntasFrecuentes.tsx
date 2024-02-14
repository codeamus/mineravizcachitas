import VideoMP4 from '@/assets/videos/sostenibilidad.mp4'
import VideoWebm from '@/assets/videos/sostenibilidad.webm'
import VideoBanner from '@/components/molecules/VideoBanner'
import Footer from '@/components/organism/Footer'
import Navbar from '@/components/organism/MenuNav'
import PrincipalInfo from '@/components/organism/PreguntasFrecuentes/PrincipalInfo'
import TodasPreguntas from '@/components/organism/PreguntasFrecuentes/TodasPreguntas'
import { Helmet } from 'react-helmet-async'

const TemplatePreguntasFrecuentes = () => {
  return (
    <>
      <Helmet>
        <title>
          Preguntas Frecuentes sobre Minera Vizcachitas: Respuestas Claras
        </title>
        <meta
          name='description'
          content='Encuentra respuestas a tus preguntas sobre Minera Vizcachitas, desde nuestros procesos mineros hasta nuestras iniciativas de sostenibilidad y más.'
        />
      </Helmet>
      <Navbar />
      <main>
        <VideoBanner
          videoMP4={VideoMP4}
          videoWEBM={VideoWebm}
          bgMobile='/assets/images/posters/poster-video-home-mobile.webp'
          title={
            <h1 className='text-center text-5xl font-bold text-white lg:text-balance lg:text-6xl'>
              Preguntas
              <span className='text-[#E8732D]'> Frecuentes</span>
            </h1>
          }
          description='Respondemos algunas de las principales consultas surgidas de nuestros diálogos
permanentes con la comunidad.'
          list={false}
        />
        <section
          id='preguntas'
          className='relative bg-[url(/assets/images/backgrounds/bg-sostenibilidad.webp)] bg-cover lg:bg-contain'
        >
          <PrincipalInfo />
          <TodasPreguntas />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default TemplatePreguntasFrecuentes
