interface SostenibilidadProps {
  dataSostenibilidad?: any
}

import BtnScrollDown from '@/components/molecules/BtnScrollDown'
import IconAmbiental from '@/assets/icons/icon-ambiental-green.svg'
import IconSocial from '@/assets/icons/icon-social-green.svg'
import Compromisos from '@/components/organism/Sostenibilidad/Compromisos'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Info = ({ dataSostenibilidad }: SostenibilidadProps) => {
  return (
    <section
      className='relative bg-[url(/assets/images/backgrounds/bg-sostenibilidad.webp)] bg-contain bg-fixed lg:bg-cover'
      id='sostenibilidad-info'
    >
      <BtnScrollDown section='sostenibilidad-info' />
      <div className='flex w-full flex-col items-center justify-between pt-20 lg:flex-row'>
        <div className='flex w-full flex-col items-center justify-center lg:w-[43.6%]'>
          <span className='w-fit bg-[#03773A] px-12 py-2 text-center text-sm font-bold uppercase text-white'>
            Pilares Sostenibles
          </span>
          <h2 className='mt-4 whitespace-nowrap text-3xl font-bold uppercase text-black lg:text-4xl'>
            ¿Por qué es <br aria-hidden /> un proyecto <br aria-hidden />
            sostenible?
          </h2>
        </div>
        <div className='mt-14 flex w-full flex-col px-8 lg:mt-0 lg:w-[56.4%] lg:px-0'>
          <div className='flex items-center justify-start pb-10'>
            <LazyLoadImage
              src={IconAmbiental}
              className='mr-4 hidden w-[75px] object-[1/1] lg:block'
              alt='Icono de compromisos para Responsabilidad Ambiental'
            />
            <div className='flex max-w-lg flex-col border-l border-[#03773A]'>
              <div className=''>
                <h3 className='pl-4 text-xl font-bold uppercase text-[#E8732C]'>
                  {dataSostenibilidad?.inicio.primer_titulo}
                </h3>
              </div>
              <hr className='my-3 border-[#03773A]' />
              <p className='pl-4 text-sm text-black'>
                {dataSostenibilidad?.inicio.primera_descripcion}
              </p>
            </div>
          </div>
          <div className='flex items-center justify-start pb-10'>
            <LazyLoadImage
              src={IconSocial}
              className='mr-4 hidden size-20 lg:block'
              alt='Icono de compromisos para Responsabilidad Social'
            />
            <div className='flex max-w-lg flex-col border-l border-[#03773A]'>
              <div className=''>
                <h3 className='pl-4 text-xl font-bold uppercase text-[#E8732C]'>
                  {dataSostenibilidad?.inicio.segundo_titulo}
                </h3>
              </div>
              <hr className='my-3 border-[#03773A]' />
              <p className='pl-4 text-sm text-black'>
                {dataSostenibilidad?.inicio.segunda_descripcion}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Compromisos dataSostenibilidad={dataSostenibilidad} />
    </section>
  )
}

export default Info
