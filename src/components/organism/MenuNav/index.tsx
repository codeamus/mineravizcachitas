import { Link } from 'react-router-dom'

import Logo from '@/assets/logo/logo-example.png'
import InstaIcon from '@/assets/icons/icon-instagram.svg'
import FBIcon from '@/assets/icons/icon-fb.svg'

import './menunav.styles.css'

const Navbar = () => {
  return (
    <header className='flex justify-center'>
      <nav className='menuNav absolute top-0 z-10 flex w-[90%] flex-row items-center justify-between border-b border-white p-6 lg:w-[95%] xl:w-[90%]'>
        <Link
          to='/'
          className='flex flex-row items-center gap-4 text-lg text-white'
          aria-label='Ir a la página principal del sitio Minera Vizcachitas'
        >
          <img
            src={Logo}
            alt='Logo del sitio web Minera Vizcachitas'
            className='w-[100px] transition-all duration-700 hover:scale-105 lg:w-[150px]'
          />
          <div className='hidden h-[60px] w-[1px] bg-white xl:block' />
          <span className='hidden text-lg xl:block'>
            Proyecto <br /> Vizcachitas
          </span>
        </Link>
        <ul className='flex flex-row items-center gap-6'>
          <li>
            <Link
              className='menuLink relative text-xs uppercase text-white transition-all duration-700 after:absolute after:bottom-[-10px] after:left-0 after:right-0 after:m-auto after:h-[1px] after:w-[7px] after:bg-white after:content-[""]'
              to='/proyecto'
              unstable_viewTransition
            >
              El Proyecto
            </Link>
          </li>
          <div className='h-[15px] w-[1px] bg-white' />
          <li>
            <Link
              className='menuLink relative text-xs uppercase text-white transition-all duration-700 after:absolute after:bottom-[-10px] after:left-0 after:right-0 after:m-auto after:h-[1px] after:w-[7px] after:bg-white after:content-[""]'
              to='/sostenibilidad'
              unstable_viewTransition
            >
              Sostenibilidad
            </Link>
          </li>
          <div className='h-[15px] w-[1px] bg-white' />
          <li>
            <Link
              className='menuLink relative text-xs uppercase text-white transition-all duration-700 after:absolute after:bottom-[-10px] after:left-0 after:right-0 after:m-auto after:h-[1px] after:w-[7px] after:bg-white after:content-[""]'
              to='/aporte-regional'
              unstable_viewTransition
            >
              Aporte Regional
            </Link>
          </li>
          <div className='h-[15px] w-[1px] bg-white' />
          <li>
            <Link
              className='menuLink relative text-xs uppercase text-white transition-all duration-700 after:absolute after:bottom-[-10px] after:left-0 after:right-0 after:m-auto after:h-[1px] after:w-[7px] after:bg-white after:content-[""]'
              to='/quienes-somos'
              unstable_viewTransition
            >
              Quiénes Somos
            </Link>
          </li>
          <div className='h-[15px] w-[1px] bg-white' />
          <li>
            <Link
              className='menuLink relative text-xs uppercase text-white transition-all duration-700 after:absolute after:bottom-[-10px] after:left-0 after:right-0 after:m-auto after:h-[1px] after:w-[7px] after:bg-white after:content-[""]'
              to='/preguntas-frecuentes'
              unstable_viewTransition
            >
              Preguntas Frecuentes
            </Link>
          </li>
        </ul>
        <div className='flex flex-row gap-2'>
          <a
            href='https://www.instagram.com/minera_vizcachitas/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Link que te dirige al perfil de Instagram de Minera Vizcachitas'
          >
            <img
              className='size-5 sepia-0 transition-all duration-700 hover:scale-125 hover:sepia'
              src={InstaIcon}
              alt='Icono de Instagram'
            />
          </a>
          <a
            href='https://web.facebook.com/MineraVizcachitas/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Link que te dirige al perfil de Facebook de Minera Vizcachitas'
          >
            <img
              className='size-5 sepia-0 transition-all duration-700 hover:scale-125 hover:sepia'
              src={FBIcon}
              alt='Icono de Facebook'
            />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
