import BtnScrollDown from '@/components/molecules/BtnScrollDown'

import IconAmbiental from '@/assets/icons/icon-ambiental-white.svg'
import IconSocial from '@/assets/icons/icon-social-white.svg'
import ImageAmbiental from '@/assets/images/compromiso-ambiental.webp'
import ImageResponsabilidad from '@/assets/images/compromiso-responsabilidad.webp'
import DefaultButton from '@/components/molecules/Buttons/DefaultButton'

const Compromisos = () => {
  return (
    <section
      id='compromisos'
      className='relative bg-[url(/assets/images/backgrounds/compromisos-background.webp)] bg-contain lg:bg-cover'
    >
      <BtnScrollDown section='compromisos' />
      <span className='block w-fit bg-[#03773A] px-4 py-2 text-sm font-bold uppercase text-white'>
        Compromisos Sostenibles
      </span>
      <div className='flex flex-col justify-center gap-10 p-10 lg:flex-row lg:gap-40'>
        <article className='max-w-xl'>
          <picture>
            <img
              className='aspect-[1/1]'
              src={ImageAmbiental}
              alt='Imagen representativa de Responsabilidad Ambiental'
            />
          </picture>
          <div>
            <div className='mb-4 flex flex-row items-center gap-4 border-b border-white pt-4'>
              <img
                src={IconAmbiental}
                alt='Icono de responsabilidad ambiental'
                className='size-16'
              />
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
            <img
              className='aspect-[1/1]'
              src={ImageResponsabilidad}
              alt='Imagen que representa la Responsabilidad Social'
            />
          </picture>
          <div>
            <div className='mb-4 flex flex-row items-center gap-4 border-b border-white pt-4'>
              <img
                src={IconSocial}
                alt='Icono de responsabilidad social'
                className='size-16'
              />
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
        <DefaultButton
          url='/sostenibilidad'
          textFirst='Ver todos los compromisos'
          textSecond='sostenibles'
          backgroundColor='#E8732D'
          hoverBackgroundColor='#03773A'
          customStyle={{
            minWidth: 215,
          }}
        />
      </div>
    </section>
  )
}

export default Compromisos
