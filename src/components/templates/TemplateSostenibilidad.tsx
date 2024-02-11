import VideoMP4 from '@/assets/videos/sostenibilidad.mp4'
import VideoWebm from '@/assets/videos/sostenibilidad.webm'
import VideoBanner from '@/components/molecules/VideoBanner'
import Navbar from '@/components/organism/MenuNav'
import { Helmet } from 'react-helmet-async'
import Sostenibilidad from '../../pages/Sostenibilidad'

const TemplateSostenibilidad = () => {
  return (
    <>
      <Helmet>
        <title>
          Sostenibilidad en Minera Vizcachitas: Nuestro Compromiso Eterno
        </title>
        <meta
          name='description'
          content='Explora cómo Minera Vizcachitas se compromete con la sostenibilidad ambiental, social y económica en cada etapa de nuestra operación minera.'
        />
      </Helmet>
      <Navbar />
      <main>
        <VideoBanner
          videoMP4={VideoMP4}
          videoWEBM={VideoWebm}
          bgMobile='/assets/images/posters/poster-video-sostenibilidad-mobile.webp'
          title={
            <h1 className='text-center text-5xl font-bold text-white lg:text-balance lg:text-6xl'>
              Proyecto
              <span className='text-[#E8732D]'>
                {' '}
                Vizcachitas Sostenibilidad
              </span>
            </h1>
          }
          description='Una nueva forma de hacer minería, comprometida con una producción que reduce impactos ambientales y genera externalidades positivas sostenidas en el tiempo, tanto en lo ambiental como lo comunitario.'
        />
      </main>
      <footer>Footer ...</footer>
    </>
  )
}

export default TemplateSostenibilidad
