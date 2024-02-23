type CompromisosProps = {
  reverse: boolean
  ambiental: boolean
  title: React.ReactNode
}

import { LazyLoadImage } from 'react-lazy-load-image-component'
import ImageAmbiental from '@/assets/images/compromiso-ambiental.webp'
import ImageSocial from '@/assets/images/compromiso-responsabilidad.webp'
import {
  COMPROMISOS_AMBIENTALES,
  COMPROMISOS_SOCIALES,
} from '@/const/sostenibilidad'

const ComponentCompromisos = ({
  reverse,
  ambiental,
  title,
}: CompromisosProps) => {
  const currentCompromiso = ambiental
    ? COMPROMISOS_AMBIENTALES
    : COMPROMISOS_SOCIALES
  return (
    <div
      className={`flex ${
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } flex-col items-center lg:items-start`}
    >
      <picture
        className={`relative flex w-full items-center justify-center lg:w-1/2 ${
          reverse ? 'lg:justify-start' : 'lg:justify-end'
        }`}
      >
        <LazyLoadImage
          className='brightness-[0.3]'
          src={ambiental ? ImageAmbiental : ImageSocial}
          alt={`Imagen respcto al compromiso ${
            ambiental ? 'Ambiental' : 'Social'
          }`}
        />
        <div className={`absolute ${reverse ? 'lg:ml-20 ' : 'lg:mr-20 '}`}>
          {title}
          <hr className='w-full max-w-sm border-white' />
        </div>
      </picture>
      <div
        className={`flex w-full flex-col px-4 lg:w-1/2 ${
          reverse && 'mt-6'
        } mt-10 ${reverse ? 'lg:mt-10' : 'lg:mt-0'}`}
      >
        {currentCompromiso.map(({ title, content }, index) => (
          <details className='group mb-4' key={index}>
            <summary className='flex cursor-pointer list-none items-start justify-between rounded-none border border-[#E8732D] bg-white p-3'>
              <span className='text-sm font-bold text-black'>{title}</span>
              <span className='transition group-open:rotate-180'>
                <svg
                  fill='none'
                  height='24'
                  shape-rendering='geometricPrecision'
                  stroke='#000'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='1.5'
                  viewBox='0 0 24 24'
                  width='24'
                >
                  <path d='M6 9l6 6 6-6'></path>
                </svg>
              </span>
            </summary>
            <p className='group-open:animate-fadeIn border-b border-l border-r border-[#E8732D] p-3 text-sm text-black'>
              {content}
            </p>
          </details>
        ))}
      </div>
    </div>
  )
}

const Compromisos = () => {
  return (
    <>
      <ComponentCompromisos
        reverse={false}
        ambiental={true}
        title={
          <h3 className='mb-4 max-w-sm text-center text-4xl font-bold lg:text-end lg:text-5xl'>
            Nuestros{' '}
            <span className='text-[#E8732C]'>compromisos ambientales</span>
          </h3>
        }
      />
      <ComponentCompromisos
        reverse={true}
        ambiental={false}
        title={
          <h3 className='mb-4 max-w-sm text-center text-4xl font-bold lg:text-start lg:text-5xl'>
            Nuestros{' '}
            <span className='text-[#E8732C]'>compromisos sociales</span>
          </h3>
        }
      />
    </>
  )
}

export default Compromisos
