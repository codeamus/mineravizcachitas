

interface PresentacionUbicacionProps {
  dataPresentacion?: any
}

import { LazyLoadImage } from 'react-lazy-load-image-component'
import BtnScrollDown from '@/components/molecules/BtnScrollDown'

const PresentacionUbicacion = ({dataPresentacion} : PresentacionUbicacionProps) => {
  return (
    <section id='presentacion' className='relative'>
      <BtnScrollDown section='presentacion' />
      <div className='flex flex-col bg-white lg:flex-row'>
        <div className='w-full  lg:w-1/2'>
          <span className='block w-fit bg-[#03773A] px-4 py-2 text-sm font-bold uppercase text-white'>
            Presentación y ubicación
          </span>
          <div className='ml-0 mr-0 mt-6 flex max-w-full flex-col items-center border-none px-4 pb-4 pt-4 lg:ml-auto lg:mr-6 lg:items-end lg:border-r lg:border-solid lg:border-[#009145] lg:px-0'>
            <h2 className='text-center text-3xl font-bold text-black lg:pr-4 lg:text-end lg:text-4xl'>
              {dataPresentacion?.presentation.first_title}
            </h2>
            <hr className='my-4 w-full border-[#009145]' />
            <p className='lg:max-w-2xl text-pretty pr-0 text-center text-sm leading-relaxed text-black lg:pr-4 lg:text-end'>
              {dataPresentacion?.presentation.first_description}
            </p>
          </div>
        </div>
        <picture className='w-full lg:w-1/2'>
          <LazyLoadImage
          className='aspect-[4/3] object-cover'
            src={dataPresentacion?.presentation.first_image}
            alt='Imagen de presentación proyecto Vizcachitas'
          />
        </picture>
      </div>
      <div className='flex flex-col-reverse bg-white lg:flex-row'>
        <iframe
          src={dataPresentacion?.presentation.mapa}
          className='h-[300px] w-full lg:h-full lg:w-1/2 aspect-[4/3] object-cover'
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title='Iframe de Google Maps de la ubicación de Vizcachitas'
          rel="dns-prefetch"
        ></iframe>
        <div className='flex w-full flex-col justify-center lg:w-1/2'>
          <div className='ml-6 mr-0 mt-6 max-w-full border-none pb-4 pr-4 lg:max-w-xl lg:border-l lg:border-solid lg:border-[#009145]'>
            <h2 className='text-center text-3xl font-bold text-black lg:pl-4 lg:text-start lg:text-4xl'>
              {dataPresentacion?.presentation.second_title}
            </h2>
            <hr className='my-4 w-full border-[#009145]' />
            <p className='pl-4 text-sm leading-relaxed text-black'>
             {dataPresentacion?.presentation.second_description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PresentacionUbicacion
