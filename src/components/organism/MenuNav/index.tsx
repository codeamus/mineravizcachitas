import { Link } from 'react-router-dom'

import Logo from '@/assets/logo/logo.svg'
import InstaIcon from '@/assets/icons/icon-instagram.svg'
import FBIcon from '@/assets/icons/icon-fb.svg'

import './menunav.styles.css'

const Menu = () => {
  return (
    <>
      <li>
        <Link
          className='menuLink after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:m-auto after:hidden after:h-[1px] after:w-[10px] after:bg-white after:content-[""] lg:after:block'
          to='/proyecto'
          unstable_viewTransition
        >
          El proyecto
        </Link>
      </li>

      <li>
        <Link
          className='menuLink after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:m-auto after:hidden after:h-[1px] after:w-[10px] after:bg-white after:content-[""] lg:after:block'
          to='/sostenibilidad'
          unstable_viewTransition
        >
          Sostenibilidad
        </Link>
      </li>
      <li>
        <Link
          className='menuLink after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:m-auto after:hidden after:h-[1px] after:w-[10px] after:bg-white after:content-[""] '
          to='/aporte-regional'
          unstable_viewTransition
        >
          Aporte Regional
        </Link>
      </li>
      <li>
        <Link
          className='menuLink after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:m-auto after:hidden after:h-[1px] after:w-[10px] after:bg-white after:content-[""] lg:after:block'
          to='/quienes-somos'
          unstable_viewTransition
        >
          Quiénes somos
        </Link>
      </li>
      <li>
        <Link
          className='menuLink after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:m-auto after:hidden after:h-[1px] after:w-[10px] after:bg-white after:content-[""] lg:after:block'
          to='/preguntas-frecuentes'
          unstable_viewTransition
        >
          Preguntas frecuentes
        </Link>
      </li>
    </>
  )
}

const Navbar = () => {
  return (
    <header className='absolute top-0 z-40  w-full p-4'>
      <nav className='navbar border-none border-white bg-transparent lg:border-b lg:border-solid'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='lg:hidden'>
              <Link to='/#' unstable_viewTransition>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />
                </svg>
              </Link>
            </div>
            <ul
              tabIndex={0}
              className='menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow'
            >
              <Menu />
            </ul>
          </div>
          <Link
            to='/'
            unstable_viewTransition
            className='flex w-full flex-row items-center justify-end lg:justify-start'
          >
            <img
              src={Logo}
              className='size-24 transition-all hover:scale-110'
            />
            <div className='mx-4 hidden h-[60px] w-[1px] bg-white text-lg xl:block' />
            <span className='hidden text-lg xl:block'>
              Proyecto <br />
              Vizcachitas
            </span>
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <Menu />
          </ul>
        </div>
        <div className='navbar-end gap-4'>
          <a
            href='https://www.instagram.com/minera_vizcachitas/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Link que te dirige al perfil de Instagram de Minera Vizcachitas'
          >
            <img
              className='size-5 sepia-0 transition-all hover:scale-125 hover:sepia'
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
              className='size-5 sepia-0 transition-all hover:scale-125 hover:sepia'
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
