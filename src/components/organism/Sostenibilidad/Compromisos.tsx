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
          <details className='group mb-4'>
            <summary className='flex cursor-pointer list-none items-start justify-between rounded-none border border-[#E8732D] bg-white p-3 transition-all duration-300 hover:bg-[#E8732D] [&_span.title]:hover:text-white'>
              <span className='text-sm font-bold text-black title duration-300'>
                {
                  dataSostenibilidad?.nuestros_compromisos_ambientales
                    .primer_titulo
                }
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
              {
                dataSostenibilidad?.nuestros_compromisos_ambientales
                  .primer_contenido
              }
            </p>
          </details>
          <details className='group mb-4'>
            <summary className='flex cursor-pointer list-none items-start justify-between rounded-none border border-[#E8732D] bg-white p-3 transition-all duration-300 hover:bg-[#E8732D] [&_span.title]:hover:text-white'>
              <span className='text-sm font-bold text-black title duration-300'>
                {
                  dataSostenibilidad?.nuestros_compromisos_ambientales
                    .segundo_titulo
                }
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
              {
                dataSostenibilidad?.nuestros_compromisos_ambientales
                  .segundo_contenido
              }
            </p>
          </details>
          <details className='group mb-4'>
            <summary className='flex cursor-pointer list-none items-start justify-between rounded-none border border-[#E8732D] bg-white p-3 transition-all duration-300 hover:bg-[#E8732D] [&_span.title]:hover:text-white'>
              <span className='text-sm font-bold text-black title duration-300'>
                {
                  dataSostenibilidad?.nuestros_compromisos_ambientales
                    .tercer_titulo
                }
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
              {
                dataSostenibilidad?.nuestros_compromisos_ambientales
                  .tercer_contenido
              }
            </p>
          </details>
          <details className='group mb-4'>
            <summary className='flex cursor-pointer list-none items-start justify-between rounded-none border border-[#E8732D] bg-white p-3 transition-all duration-300 hover:bg-[#E8732D] [&_span.title]:hover:text-white'>
              <span className='text-sm font-bold text-black title duration-300'>
                {
                  dataSostenibilidad?.nuestros_compromisos_ambientales
                    .cuarto_titulo
                }
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
              {
                dataSostenibilidad?.nuestros_compromisos_ambientales
                  .cuarto_contenido
              }
            </p>
          </details>
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
          <details className='group mb-4'>
            <summary className='flex cursor-pointer list-none items-start justify-between rounded-none border border-[#E8732D] bg-white p-3 transition-all duration-300 hover:bg-[#E8732D] [&_span.title]:hover:text-white'>
              <span className='text-sm font-bold text-black title duration-300'>
                {
                  dataSostenibilidad?.nuestros_compromisos_sociales
                    .primer_titulo
                }
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
              {
                dataSostenibilidad?.nuestros_compromisos_sociales
                  .primer_contenido
              }
            </p>
          </details>
          <details className='group mb-4'>
            <summary className='flex cursor-pointer list-none items-start justify-between rounded-none border border-[#E8732D] bg-white p-3 transition-all duration-300 hover:bg-[#E8732D] [&_span.title]:hover:text-white'>
              <span className='text-sm font-bold text-black title duration-300'>
                {
                  dataSostenibilidad?.nuestros_compromisos_sociales
                    .segundo_titulo
                }
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
              {
                dataSostenibilidad?.nuestros_compromisos_sociales
                  .segundo_contenido
              }
            </p>
          </details>
          <details className='group mb-4'>
            <summary className='flex cursor-pointer list-none items-start justify-between rounded-none border border-[#E8732D] bg-white p-3 transition-all duration-300 hover:bg-[#E8732D] [&_span.title]:hover:text-white'>
              <span className='text-sm font-bold text-black title duration-300'>
                {
                  dataSostenibilidad?.nuestros_compromisos_sociales
                    .tercer_titulo
                }
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
              {
                dataSostenibilidad?.nuestros_compromisos_sociales
                  .tercer_contenido
              }
            </p>
          </details>
          <details className='group mb-4'>
            <summary className='flex cursor-pointer list-none items-start justify-between rounded-none border border-[#E8732D] bg-white p-3 transition-all duration-300 hover:bg-[#E8732D] [&_span.title]:hover:text-white'>
              <span className='text-sm font-bold text-black title duration-300'>
                {
                  dataSostenibilidad?.nuestros_compromisos_sociales
                    .cuarto_titulo
                }
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
              {
                dataSostenibilidad?.nuestros_compromisos_sociales
                  .cuarto_contenido
              }
            </p>
          </details>
          <details className='group mb-4'>
            <summary className='flex cursor-pointer list-none items-start justify-between rounded-none border border-[#E8732D] bg-white p-3 transition-all duration-300 hover:bg-[#E8732D] [&_span.title]:hover:text-white'>
              <span className='text-sm font-bold text-black title duration-300'>
                {
                  dataSostenibilidad?.nuestros_compromisos_sociales
                    .quinto_titulo
                }
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
              {
                dataSostenibilidad?.nuestros_compromisos_sociales
                  .quinto_contenido
              }
            </p>
          </details>
        </div>
      </div>
    </>
  )
}

export default Compromisos
