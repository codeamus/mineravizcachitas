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
          <div
            className='collapse collapse-plus mb-4 rounded-none border border-[#E8732D] bg-white'
            key={index}
          >
            <input
              type='radio'
              name='accordion'
              aria-label={`Input de accordion para ${title}`}
            />
            <div className='collapse-title text-sm font-bold text-black after:text-3xl after:font-normal after:text-[#E8732D]'>
              {title}
            </div>
            <div className='collapse-content border-t border-[#E8732D] !p-0'>
              <p className='p-3 text-xs text-black'>{content}</p>
            </div>
          </div>
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
          <h3 className='mb-4 max-w-sm text-center text-5xl font-bold lg:text-end'>
            Nuestros{' '}
            <span className='text-[#E8732C]'>compromisos ambientales</span>
          </h3>
        }
      />
      <ComponentCompromisos
        reverse={true}
        ambiental={false}
        title={
          <h3 className='mb-4 max-w-sm text-start text-5xl font-bold'>
            Nuestros{' '}
            <span className='text-[#E8732C]'>compromisos sociales</span>
          </h3>
        }
      />
    </>
  )
}

export default Compromisos
