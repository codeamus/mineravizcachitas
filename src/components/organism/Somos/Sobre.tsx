import IconArrow from '@/assets/icons/arrow-right-bold.svg'
import IconAmbiental from '@/assets/icons/icon-ambiental-black.svg'
import IconSocial from '@/assets/icons/icon-social-black.svg'
import ImgSomosPicture from '@/assets/images/img-somos-picture.webp'
import BtnScrollDown from '@/components/molecules/BtnScrollDown'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

const Sobre = () => {
  return (
    <section id='somos' className='relative bg-white pt-20'>
      <BtnScrollDown section='somos' />
      <div className='flex flex-col px-10 lg:flex-row lg:px-0'>
        <div className='w-full border-r border-none border-[#009145] lg:w-1/2 lg:border-solid lg:pr-10'>
          <h2 className='text-balance text-center text-4xl font-bold text-black lg:text-end'>
            Sobre el <br aria-hidden className='hidden lg:block' />
            <span className='text-[#E8732C]'>
              proyecto <br aria-hidden className='hidden lg:block' /> Vizcachitas
            </span>
          </h2>
        </div>
        <div className='mt-10 w-full lg:mt-0 lg:w-1/2 lg:pl-10'>
          <p className='max-w-full text-sm leading-relaxed text-black lg:max-w-lg'>
            Se trata de una iniciativa de clase mundial, tanto por tamaño como por el diseño del proyecto, en el cual se han incorporado estándares tecnológicos y ambientales de última generación, que dan cuenta de una nueva forma de hacer minería, comprometida con una producción que reduzca impactos ambientales y genere externalidades positivas sostenidas en el tiempo en materia de empleo, desarrollo de proveedores y servicios. 
            El proyecto pertenece a Los Andes Copper, una empresa canadiense, listada en la Bolsa de Valores de Toronto (TSX-V) que se rige por los más altos estándares de gestión y compromiso con la sustentabilidad social y ambiental.

          </p>
        </div>
      </div>
      <div className='mt-20 flex flex-col-reverse lg:flex-row'>
        <picture className='w-full lg:w-1/2'>
          <img
            src={ImgSomosPicture}
            alt='Vizcachitas'
            className='h-96 w-full object-cover'
          />
        </picture>
        <div className='w-full px-10 lg:w-1/2 lg:pl-10'>
          <h2 className='mb-8 text-balance text-center text-4xl font-bold text-black lg:text-start'>
            Una visión <br aria-hidden className='hidden lg:block' />
            <span className='text-[#E8732C]'>sostenible</span>
          </h2>
          <p className='mb-10 max-w-full text-sm leading-relaxed text-black lg:mb-0 lg:max-w-lg'>
           Buscamos hacer la diferencia, una minería moderna para el futuro de Putaendo, San Felipe y la Región de Valparaíso. Una minería más verde, responsable y comprometida con la comunidad, sus necesidades y anhelos. 
          Por eso incorporamos las innovaciones tecnológicas de la industria para desarrollar un proyecto que reduzca al máximo sus impactos, pero que además esté presente en el territorio, disponible para avanzar con todos aquellos que desean una mejor calidad de vida para la comuna, la provincia y la región.
          </p>
        </div>
      </div>
      <section className='mx-10 mt-10 flex flex-col justify-center gap-10 lg:mx-60 lg:mt-20 lg:flex-row lg:gap-20'>
        <div className='w-full lg:w-1/2'>
          <div className='mb-4 flex flex-row items-center gap-4 border-b border-[#009145] pt-4'>
            <LazyLoadImage
              src={IconAmbiental}
              alt='Icono de responsabilidad ambiental'
              className='hidden w-[70px] object-[1/1] lg:block'
            />
            <h2 className='border-[#009145] text-2xl font-bold uppercase  leading-10 text-black lg:border-l lg:pl-4'>
              Responsabilidad <br aria-hidden /> Ambiental
            </h2>
          </div>
          <p className='text-balance text-black'>
            El diseño de Vizcachitas integra tecnología innovadora para
            garantizar un desarrollo sostenible en armonía con el medio
            ambiente. Nos seguiremos perfeccionando para convertirnos en un
            modelo a nivel nacional e internacional.
          </p>
        </div>
        <div className='w-full lg:w-1/2'>
          <div className='mb-4 flex flex-row items-center gap-4 border-b border-[#009145] pt-4'>
            <LazyLoadImage
              src={IconSocial}
              alt='Icono de responsabilidad social'
              className='hidden size-16 lg:block'
            />
            <h2 className='border-[#009145] text-2xl font-bold uppercase  leading-10 text-black lg:border-l lg:pl-4'>
              Responsabilidad <br aria-hidden /> Social
            </h2>
          </div>
          <p className='text-balance text-black'>
            Trabajamos con los mejores estándares ambientales del mundo para que
            el desarrollo minero se haga con respeto al entorno. Una nueva
            mirada, una nueva minería, comprometida con el ser humano y su
            hábitat.
          </p>
        </div>
      </section>
      <div className='mt-10 flex w-full items-center justify-center px-10'>
        <hr className='w-full border-[#E8732C]' />
        <Link
          to='/sostenibilidad'
          unstable_viewTransition
          className='z-10 flex w-fit min-w-[265px] flex-row items-center justify-between border border-white bg-[#E8732D] px-3 text-center text-sm text-white shadow-xl transition-all duration-700 hover:bg-[#03773A] hover:shadow-stone-400'
        >
          <span>
            Ver todos los compromisos <br aria-hidden />
            sostenibles
          </span>
          <hr className='mx-4 h-[50px] w-[1px] bg-white' />
          <LazyLoadImage src={IconArrow} alt='' className='w-[16px]' />
        </Link>
        <hr className='w-full border-[#E8732C]' />
      </div>
    </section>
  )
}

export default Sobre
