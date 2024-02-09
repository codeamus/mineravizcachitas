import BtnScrollDown from '@/components/molecules/BtnScrollDown'
import { Link } from 'react-router-dom'

import IconArrow from '@/assets/icons/arrow-right-bold.svg'
import IconAmbiental from '@/assets/icons/icon-ambiental-white.svg'
import IconSocial from '@/assets/icons/icon-social-white.svg'
import ImageAmbiental from '@/assets/images/compromiso-ambiental.webp'
import ImageResponsabilidad from '@/assets/images/compromiso-responsabilidad.webp'

const Compromisos = () => {
  return (
    <section
      id='compromisos'
      className='relative bg-[url(/assets/images/backgrounds/compromisos-background.webp)] bg-cover'
    >
      <BtnScrollDown section='compromisos' />
      <span className='block w-fit bg-[#03773A] px-4 py-2 text-sm font-bold uppercase text-white'>
        Compromisos Sostenibles
      </span>
      <div className='flex flex-row justify-center gap-40 p-10'>
        <article className='max-w-xl'>
          <picture>
            <img className='aspect-[1/1]' src={ImageAmbiental} alt='' />
          </picture>
          <div>
            <div className='mb-4 flex flex-row items-center gap-4 border-b border-white pt-4'>
              <img src={IconAmbiental} alt='' className='size-16' />
              <h2 className='border-l border-white pl-4 text-2xl  font-bold uppercase leading-10 text-white'>
                Responsabilidad <br /> Ambiental
              </h2>
            </div>
            <p className='text-balance'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              illum vel quos quidem tempora tenetur asperiores id nemo omnis
              neque. Laudantium cumque dolorum, libero maxime officia commodi
              dicta quam molestias.
            </p>
          </div>
        </article>
        <article className='max-w-xl'>
          <picture>
            <img className='aspect-[1/1]' src={ImageResponsabilidad} alt='' />
          </picture>
          <div>
            <div className='mb-4 flex flex-row items-center gap-4 border-b border-white pt-4'>
              <img src={IconSocial} alt='' className='size-16' />
              <h2 className='border-l border-white pl-4 text-2xl  font-bold uppercase leading-10 text-white'>
                Responsabilidad <br /> Social
              </h2>
            </div>
            <p className='text-balance'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              illum vel quos quidem tempora tenetur asperiores id nemo omnis
              neque. Laudantium cumque dolorum, libero maxime officia commodi
              dicta quam molestias.
            </p>
          </div>
        </article>
      </div>
      <div className='relative -bottom-5 flex justify-center'>
        <Link
          to='sostenibilidad'
          unstable_viewTransition
          className='flex w-fit flex-row items-center justify-between bg-[#E8732D] px-3 text-center text-sm transition-all duration-300 hover:bg-[#03773A]'
        >
          <span>
            Ver todos los compromisos <br />
            sostenibles
          </span>
          <hr className='mx-4 h-[50px] w-[1px] bg-white' />
          <img src={IconArrow} alt='' className='w-[16px]' />
        </Link>
      </div>
    </section>
  )
}

export default Compromisos
