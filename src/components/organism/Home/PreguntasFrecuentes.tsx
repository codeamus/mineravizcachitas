import { Link } from 'react-router-dom'
import IconArrow from '@/assets/icons/arrow-right-bold.svg'
import { FAQS } from '@/const/faqs'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const PreguntasFrecuentes = () => {
  return (
    <section
      id='preguntas'
      className='mb-12 flex flex-col items-center justify-center gap-10 p-4 md:p-8 lg:flex-row'
    >
      <div className='flex w-full flex-col items-center justify-center lg:w-1/2 lg:items-end lg:justify-end'>
        <h2 className='text-balance text-center text-4xl font-bold text-black lg:text-end'>
          Velamos por una{' '}
          <span className='text-[#03773A]'>comunidad Informada</span>
        </h2>
        <Link
          to='sostenibilidad'
          unstable_viewTransition
          className='mt-10 flex w-fit flex-row items-center justify-between border border-white bg-[#E8732D] px-3 text-center text-sm text-white shadow-xl transition-all duration-700 hover:bg-[#03773A] hover:shadow-stone-400'
        >
          <span>
            Ver todas las
            <br />
            preguntas frecuentes
          </span>
          <hr className='mx-4 h-[50px] w-[1px] bg-white' />
          <LazyLoadImage
            src={IconArrow}
            alt='Icono de flecha de preguntas frecuentes'
            className='w-[16px]'
          />
        </Link>
      </div>
      <div className='flex w-full flex-col'>
        <h3 className='text-lg font-bold uppercase text-[#03773A]'>
          Preguntas Frecuentes
        </h3>
        <div>
          {FAQS.map(({ title, content }, index) => (
            <div
              className='collapse collapse-plus mt-4 rounded-none border border-[#E8732D] bg-white'
              key={index}
            >
              <input
                type='radio'
                name='accordion'
                aria-label={`Input de accordio para la pregunta ${title}`}
              />
              <div className='collapse-title text-sm font-bold text-black after:text-3xl after:font-normal after:text-[#E8732D]'>
                {title}
              </div>
              <div className='collapse-content border-t border-[#E8732D] !p-0'>
                <p className='p-3 text-sm text-black'>{content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PreguntasFrecuentes
