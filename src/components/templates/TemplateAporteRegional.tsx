import { getDataPage } from '@/api/page'
import IconReporte from '@/assets/icons/icon-report.svg'
import VideoMP4 from '@/assets/videos/aporte.mp4'
import BackToTop from '@/components/molecules/BackToTop'
import BtnScrollDown from '@/components/molecules/BtnScrollDown'
import ScrollToTop from '@/components/molecules/ScrollTop'
import VideoBanner from '@/components/molecules/VideoBanner'
import Beneficios from '@/components/organism/Aporte/Beneficios'
import Footer from '@/components/organism/Footer'
import Navbar from '@/components/organism/MenuNav'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import parse from 'html-react-parser'

const TemplateAporteRegional = () => {
  const [dataAporte, setDataAporte] = useState(null as any | null)

  useEffect(() => {
    const fetchAporteRegional = async () => {
      const result = await getDataPage('aporte-regional')
      setDataAporte(result[0].acf)
    }
    fetchAporteRegional()
  }, [])

  return (
    <>
      <Helmet>
        <title>
          Aporte Regional de Minera Vizcachitas: Impulsando el Desarrollo Local
        </title>
        <meta
          name="description"
          content="Descubre el impacto positivo de Minera Vizcachitas en la región, fomentando el desarrollo local a través de empleo, educación y proyectos comunitarios."
        />
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <main>
        {dataAporte?.seccion_principal ? (
          <VideoBanner
            videoMP4={VideoMP4}
            poster={dataAporte?.seccion_principal.video_cover}
            bgMobile={dataAporte?.seccion_principal.video_cover}
            title={dataAporte?.seccion_principal.title}
            titleDestacado={dataAporte?.seccion_principal.titulo_destacado}
            description={dataAporte?.seccion_principal.content}
            list={dataAporte?.seccion_principal.iconos}
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
          id="aporte"
          className="relative flex flex-col items-center bg-[#F0EFEF] px-10 pb-10 pt-20 lg:px-20"
        >
          <BtnScrollDown section="aporte" />
          <h2 className="text-center text-4xl lg:text-5xl font-bold text-black">
            {dataAporte?.primera_seccion?.titulo} <br aria-hidden />
            <span className="text-[#E8732C]">
              {dataAporte?.primera_seccion?.titulo_destacado}
            </span>
          </h2>
          <div className="my-8 flex flex-col lg:flex-row max-w-2xl items-start lg:items-center justify-center lg:border-t border-[#009145]">
            <img
              className="size-20 lg:size-36 lg:p-6 lg:block"
              src={IconReporte}
              alt="Icono para aporte regional"
            />
            {dataAporte?.primera_seccion?.contenido_encabezado && (
              <div className="relative text-md text-pretty border-[#009145] p-1 lg:p-6 text-black lg:border-l lg:after:content-[''] after:absolute lg:after:h-[10px] lg:after:w-[10px] after:bottom-0 after:bg-[#009145] after:rounded-full after:-left-[5px]">
                {parse(dataAporte?.primera_seccion?.contenido_encabezado)}
              </div>
            )}
          </div>
          <div className="block relative lg:mr-28">
            {dataAporte?.primera_seccion?.infografia.map(
              (item: any, index: number) =>
                index % 2 === 0 ? (
                  <div className="flex flex-col lg:flex-row items-start justify-center gap-1 lg:gap-8 mb-5">
                    <img
                      className="size-20 lg:block"
                      src={item.primer_icono}
                      alt="Icono para aporte regional"
                    />
                    <div>
                      <div className="text-md text-pretty border-[#009145] p-1 lg:p-3 text-black border-b max-w-lg">
                        {parse(item.contenido)}
                      </div>
                      <div className="relative after:content-[''] after:absolute after:h-[10px] after:w-[10px] after:ml-[55.5px] after:bottom-0 after:bg-[#009145] after:rounded-full">
                        <hr className="w-[1px] h-[60px] border-l border-[#009145] ml-[60px] -top-[0px] " />
                      </div>
                    </div>
                  </div>
                ) : index + 1 ===
                  dataAporte?.primera_seccion?.infografia.length ? (
                  <div className="flex flex-col lg:flex-row items-start justify-center gap-1 lg:gap-8 mb-5 lg:ml-[250px]">
                    <img
                      className="size-20 lg:block"
                      src={item.primer_icono}
                      alt="Icono para aporte regional"
                    />
                    <div>
                      <div className="text-md text-pretty border-[#009145] p-1 lg:p-3 text-black border-b max-w-lg">
                        {parse(item.contenido)}
                      </div>
                      <div className="">
                        <hr className="hidden lg:block w-[1px] h-[60px] border-b border-[#009145] ml-[60px] -top-[0px] " />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col lg:flex-row items-start justify-center gap-1 lg:gap-8 mb-5 lg:ml-[250px]">
                    <img
                      className="size-20 lg:block"
                      src={item.primer_icono}
                      alt="Icono para aporte regional"
                    />
                    <div>
                      <div className="text-md text-pretty border-[#009145] p-1 lg:p-3 text-black border-b max-w-lg">
                        {parse(item.contenido)}
                      </div>
                      <div className="relative after:content-[''] after:absolute after:h-[10px] after:w-[10px] after:ml-[55.5px] after:bottom-0 after:bg-[#009145] after:rounded-full">
                        <hr className="w-[1px] h-[60px] border-l border-[#009145] ml-[60px] -top-[0px] " />
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </section>
        <section className="relative px-10 lg:px-40 bg-[url(/assets/images/backgrounds/bg_video_aporte.webp)] bg-cover bg-no-repeat py-20">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl lg:text-5xl text-white font-bold text-center pb-10">
              Descubre los detalle del proyecto
            </h2>
            <p className="font-bold text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <hr className="bg-white h-[2px] block w-full max-w-xs my-2" />
          </div>
          <div className="flex justify-center items-center mt-4">
            <iframe
              className="h-[300px] w-full lg:h-[560px] max-w-[1000px]"
              src="https://www.youtube.com/embed/1l1J1k1J1l1"
              title="Test"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>
        <section>
          <Beneficios dataAporte={dataAporte} />
        </section>
        <BackToTop />
      </main>
      <Footer />
    </>
  )
}

export default TemplateAporteRegional
