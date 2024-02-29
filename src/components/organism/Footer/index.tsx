import { Link } from 'react-router-dom'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import InstaIcon from '@/assets/icons/icon-instagram.svg'
import FBIcon from '@/assets/icons/icon-fb.svg'

const Footer = () => {
  return (
    <footer className='grid grid-cols-1 gap-10 bg-[#626262] px-16 pb-10 pt-14 md:grid-cols-2 lg:grid-cols-4 lg:justify-items-center lg:pt-28'>
      <div className='flex flex-col gap-6'>
        <h2 className='text-xl font-bold text-white'>
          ¿Necesitas <br aria-hidden /> contactarnos?
        </h2>
        <a
          href='/'
          className='w-fit border border-white px-10 py-2 uppercase text-white transition-all duration-300 hover:bg-[#E8732C]'
        >
          Hablemos
        </a>
      </div>
      <div>
        <ul className='flex flex-col gap-2'>
          <li>
            <Link
              className='text-xs uppercase text-white transition-colors duration-300 hover:text-[#E8732C]'
              to='/'
              unstable_viewTransition
            >
              El proyecto
            </Link>
          </li>
          <li>
            <Link
              className='text-xs uppercase text-white transition-colors duration-300 hover:text-[#E8732C]'
              to='/sostenibilidad'
              unstable_viewTransition
            >
              Sostenibilidad
            </Link>
          </li>
          <li>
            <Link
              className='text-xs uppercase text-white transition-colors duration-300 hover:text-[#E8732C]'
              to='/aporte-regional'
              unstable_viewTransition
            >
              Aporte Regional
            </Link>
          </li>
          <li>
            <Link
              className='text-xs uppercase text-white transition-colors duration-300 hover:text-[#E8732C]'
              to='/quienes-somos'
              unstable_viewTransition
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              className='text-xs uppercase text-white transition-colors duration-300 hover:text-[#E8732C]'
              to='/preguntas-frecuentes'
              unstable_viewTransition
            >
              Preguntas Frecuentes
            </Link>
          </li>
          <li>
            <Link
              className='text-xs uppercase text-white transition-colors duration-300 hover:text-[#E8732C]'
              to='/noticias'
              unstable_viewTransition
            >
              Novedades
            </Link>
          </li>
          <li>
            <a className='text-xs uppercase text-white transition-colors duration-300 hover:text-[#E8732C]' href="https://losandescopper.com/" target="_blank" rel="noopener noreferrer">
              Andes Cooper
            </a>
            
          </li>
        </ul>
      </div><div className='flex flex-col gap-2'>
        <h3 className='text-xs font-bold uppercase text-white'>
          Oficina putaendo
        </h3>
        <p className='text-xs text-white'>Camus 290</p>
        <p className='text-xs text-white'>Putaendo</p>
        <div className='flex flex-row gap-1'>
          <span className='text-xs font-bold text-white'>Tel:</span>
          <a
            className='text-xs text-white transition-colors duration-300 hover:text-[#E8732C]'
            href='tel:+56950570978'
          >
            +56 9 5057-0978
          </a>
        </div>
        <p className='text-xs text-white'>Región de Valparaíso, Chile</p>
        <div className='flex flex-row gap-2'>
          <a
            href='https://www.instagram.com/minera_vizcachitas/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Link que te dirige al perfil de Facebook de Minera Vizcachitas'
          >
            <LazyLoadImage
              className='size-5 sepia-0 transition-all hover:scale-125 hover:sepia'
              src={InstaIcon}
              alt='Icono de Instagram en el footer'
            />
          </a>
          <a
            href='https://web.facebook.com/MineraVizcachitas/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Link que te dirige al perfil de Facebook de Minera Vizcachitas'
          >
            <LazyLoadImage
              className='size-5 sepia-0 transition-all hover:scale-125 hover:sepia'
              src={FBIcon}
              alt='Icono de Facebook en el footer'
            />
          </a>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-xs font-bold uppercase text-white'>
          Oficina central
        </h3>
        <p className='text-xs text-white'>Augusto Leguia Norte 100, Oficina 812</p>
        <p className='text-xs text-white'>Las Condes</p>
        <div className='flex flex-row gap-1'>
          <span className='text-xs font-bold text-white'>Tel:</span>
          <a
            className='text-xs text-white transition-colors duration-300 hover:text-[#E8732C]'
            href='tel:+56229540450'
          >
            +56 2 2954-0450
          </a>
        </div>
        <p className='text-xs text-white'>Santiago, Chile</p>
      </div>
      
    </footer>
  )
}

export default Footer
