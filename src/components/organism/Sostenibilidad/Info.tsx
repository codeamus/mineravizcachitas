interface SostenibilidadProps {
  dataSostenibilidad?: any
}

import BtnScrollDown from '@/components/molecules/BtnScrollDown'
import Compromisos from '@/components/organism/Sostenibilidad/Compromisos'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Info = ({ dataSostenibilidad }: SostenibilidadProps) => {
  return (
    <section
      className="relative bg-[url(/assets/images/backgrounds/bg-sostenibilidad.webp)] bg-contain bg-fixed lg:bg-cover"
      id="sostenibilidad-info"
    >
      <BtnScrollDown section="sostenibilidad-info" />
      <div className="flex w-full flex-col items-center justify-between pt-20 lg:flex-row">
        <div className="flex w-full flex-col items-center justify-center lg:w-[43.6%]">
          <span className="w-fit bg-[#009145] px-12 py-2 text-center text-sm font-bold uppercase text-white">
            Pilares Sostenibles
          </span>
          <h2 className="mt-4 whitespace-nowrap text-3xl font-bold uppercase text-black lg:text-4xl">
            ¿Por qué es <br aria-hidden /> un proyecto <br aria-hidden />
            sostenible?
          </h2>
        </div>
        <div className="mt-14 flex w-full flex-col px-8 lg:mt-0 lg:w-[56.4%] lg:px-0">
          {dataSostenibilidad?.sostenibilidad.informacion.map(
            (item: any, index: number) => (
              <div
                className="flex items-center justify-start pb-10"
                key={index}
              >
                <LazyLoadImage
                  src={item.icon.url}
                  className="mr-4 hidden w-[75px] object-[1/1] lg:block"
                  alt={`Icono de compromisos para ${item.title}`}
                />
                <div className="flex max-w-lg flex-col border-l border-[#009145]">
                  <div className="">
                    <h3 className="pl-4 text-xl font-bold uppercase text-[#E8732C]">
                      {item.title}
                    </h3>
                  </div>
                  <hr className="my-3 border-[#009145]" />
                  <p
                    className="pl-4 text-sm text-black"
                    dangerouslySetInnerHTML={{
                      __html: item.content,
                    }}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <Compromisos dataSostenibilidad={dataSostenibilidad} />
    </section>
  )
}

export default Info
