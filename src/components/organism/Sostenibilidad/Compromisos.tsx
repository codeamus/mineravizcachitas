interface SostenibilidadProps {
  dataSostenibilidad?: any
}
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ImageAmbiental from '@/assets/images/compromiso-ambiental.webp'
import ImageSocial from '@/assets/images/compromiso-responsabilidad.webp'

const Compromisos = ({ dataSostenibilidad }: SostenibilidadProps) => {
  return (
    <>
      <div className='flex lg:flex-row flex-col items-center lg:items-start'>
        <picture className='relative flex w-full items-center justify-center lg:w-1/2 lg:justify-start'>
          <LazyLoadImage
            className='brightness-[0.5]'
            src={ImageAmbiental}
            alt='Imagen respcto al compromiso Ambiental'
          />
          <div className='absolute lg:ml-20'>
            <h3 className='mb-4 max-w-sm text-center text-4xl font-bold lg:text-start lg:text-5xl text-white'>
              Nuestros{' '}
              <span className='text-[#E8732C]'>compromisos ambientales</span>
            </h3>
            <hr className='w-full max-w-sm border-white' />
          </div>
        </picture>
        <div className='flex w-full flex-col px-4 lg:w-1/2 mt-10 lg:mt-0'>
          {dataSostenibilidad?.sostenibilidad.compromisos_ambientales?.map(
            (item: any, index: number) => (
              <details className='group mb-4' key={index}>
                <summary className='flex cursor-pointer list-none items-start justify-between rounded-none border border-[#E8732D] bg-white p-3 transition-all duration-300 hover:bg-[#E8732D] [&_span.title]:hover:text-white'>
                  <span className='text-sm font-bold text-black title duration-300'>
                    {item.titulo}
                  </span>
                  <span className='transition group-open:rotate-180'>
                    <svg
                      fill='none'
                      height='24'
                      shapeRendering='geometricPrecision'
                      stroke='#000'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.5'
                      viewBox='0 0 24 24'
                      width='24'
                    >
                      <path d='M6 9l6 6 6-6'></path>
                    </svg>
                  </span>
                </summary>
                <p className='group-open:animate-fadeIn border-b border-l border-r border-[#E8732D] p-3 text-sm text-black'>
                  {item.content}
                </p>
              </details>
            )
          )}
        </div>
      </div>
      <div className='flex lg:flex-row-reverse flex-col items-center lg:items-start'>
        <picture className='relative flex w-full items-center justify-center lg:w-1/2 lg:justify-start'>
          <LazyLoadImage
            className='brightness-[0.5]'
            src={ImageSocial}
            alt='Imagen respcto al compromiso Social'
          />
          <div className='absolute lg:ml-20'>
            <h3 className='mb-4 max-w-sm text-center text-4xl font-bold lg:text-start lg:text-5xl text-white'>
              Nuestros{' '}
              <span className='text-[#E8732C]'>compromisos sociales</span>
            </h3>
            <hr className='w-full max-w-sm border-white' />
          </div>
        </picture>
        <div className='flex w-full flex-col px-4 lg:w-1/2 mt-10'>
          {dataSostenibilidad?.sostenibilidad.compromisos_sociales?.map(
            (item: any, index: number) => (
              <details className='group mb-4' key={index}>
                <summary className='flex cursor-pointer list-none items-start justify-between rounded-none border border-[#E8732D] bg-white p-3 transition-all duration-300 hover:bg-[#E8732D] [&_span.title]:hover:text-white'>
                  <span className='text-sm font-bold text-black title duration-300'>
                    {item.titulo}
                  </span>
                  <span className='transition group-open:rotate-180'>
                    <svg
                      fill='none'
                      height='24'
                      shapeRendering='geometricPrecision'
                      stroke='#000'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.5'
                      viewBox='0 0 24 24'
                      width='24'
                    >
                      <path d='M6 9l6 6 6-6'></path>
                    </svg>
                  </span>
                </summary>
                <p className='group-open:animate-fadeIn border-b border-l border-r border-[#E8732D] p-3 text-sm text-black'>
                  {item.content}
                </p>
              </details>
            )
          )}
        </div>
      </div>
    </>
  )
}

export default Compromisos
