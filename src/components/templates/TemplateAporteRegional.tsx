import IconAporte from '@/assets/icons/icon-aporte.svg'
import VideoMP4 from '@/assets/videos/aporte.mp4'
import VideoWebm from '@/assets/videos/aporte.webm'
import BackToTop from '@/components/molecules/BackToTop'
import BtnScrollDown from '@/components/molecules/BtnScrollDown'
import ScrollToTop from '@/components/molecules/ScrollTop'
import VideoBanner from '@/components/molecules/VideoBanner'
import Beneficios from '@/components/organism/Aporte/Beneficios'
import Footer from '@/components/organism/Footer'
import Navbar from '@/components/organism/MenuNav'
import { Helmet } from 'react-helmet-async'

const TemplateAporteRegional = () => {
  return (
    <>
      <Helmet>
        <title>
          Aporte Regional de Minera Vizcachitas: Impulsando el Desarrollo Local
        </title>
        <meta
          name='description'
          content='Descubre el impacto positivo de Minera Vizcachitas en la región, fomentando el desarrollo local a través de empleo, educación y proyectos comunitarios.'
        />
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <main>
        <VideoBanner
          videoMP4={VideoMP4}
          videoWEBM={VideoWebm}
          poster='/assets/images/posters/poster-video-aporte-desktop.webp'
          bgMobile='/assets/images/posters/poster-video-aporte-mobile.webp'
          title={
            <h1 className='w-full text-center text-5xl font-bold text-white lg:w-1/2 lg:text-balance lg:text-end lg:text-6xl'>
              Proyecto Vizcachitas
              <span className='text-[#E8732D]'> Aporte regional</span>
            </h1>
          }
          description='Un potente impulso económico para la Región Valparaíso, a través de la generación de empleos, oportunidades para proveedores y encadenamientos productivos, y desarrollo de proyectos de responsabilidad social empresarial.'
          list={false}
        />
        <section
          id='aporte'
          className='relative flex flex-col items-center bg-[#F0EFEF] px-10 pb-10 pt-20 lg:px-20'
        >
          <BtnScrollDown section='aporte' />
          <h2 className='text-center text-4xl lg:text-5xl font-bold text-black'>
            ¿Por qué el proyecto es <br aria-hidden />
            <span className='text-[#E8732C]'>un aporte a la región?</span>
          </h2>
          <div className='mt-8 flex max-w-2xl items-center justify-center border-t border-[#009145]'>
            <img
              className='hidden size-36 p-6 lg:block'
              src={IconAporte}
              alt='Icono para aporte regional'
            />
            <p className='text-md text-pretty border-[#009145] p-6 text-black lg:border-l'>
              El proyecto Vizcachitas generará un aumento de más del 3% en el PIB de la Región de Valparaíso, crecimiento que, además, será sostenible y con capacidad de generar prosperidad y oportunidades en el corto, mediano y largo plazo.
            </p>
          </div>
        </section>
        <section>
          <Beneficios />
        </section>
        <BackToTop />
      </main>
      <Footer />
    </>
  )
}

export default TemplateAporteRegional
