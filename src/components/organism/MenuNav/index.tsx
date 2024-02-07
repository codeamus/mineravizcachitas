import { Link } from 'react-router-dom'
import { MENU } from '@/const/menu'
import Logo from '@/assets/logo/logo.svg'
import InstaIcon from '@/assets/icons/icon-instagram.svg'
import FBIcon from '@/assets/icons/icon-fb.svg'

import './menunav.styles.css'

const Navbar = () => {
  return (
    <header
      id='header-nav'
      className='fixed top-0 z-10 w-full px-6 py-0 md:py-4'
    >
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-16'>
        <a
          href='#header-menu'
          className='md:hidden'
          aria-label='Icono para abrir menu'
          aria-labelledby='Icono de menu'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8'
            fill='none'
            viewBox='0 0 24 24'
            stroke='#fff'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h8m-8 6h16'
            />
          </svg>
        </a>
        <Link
          to='/'
          className='relative z-10 flex flex-row items-center'
          unstable_viewTransition
          aria-label='Logo de Minera Vizcachitas que lleva a la home'
        >
          <img className='size-28 transition-all hover:scale-110' src={Logo} />
          <div className='mx-4 hidden h-[60px] w-[1px] bg-white text-lg xl:block' />
          <span className='hidden text-lg text-white xl:block'>
            Proyecto <br />
            Vizcachitas
          </span>
        </Link>
        <nav
          id='header-menu'
          className='fixed inset-0 z-20 flex h-dvh w-full -translate-y-full flex-col items-center justify-center gap-8 bg-[#000]/90 text-2xl transition-transform duration-300 target:translate-y-0 md:static md:h-[initial] md:translate-y-[initial] md:flex-row md:bg-[initial] md:text-xl'
        >
          <a
            href='#header-nav'
            className='absolute left-10 top-10 text-white md:hidden'
          >
            X
          </a>
          <ul className='flex w-full flex-col items-center justify-center gap-4 md:flex-row'>
            {MENU.map(({ title, path }) => (
              <li className='relative'>
                <Link
                  className='menuLink text-sm text-white after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:m-auto after:hidden after:h-[1px] after:w-[10px] after:bg-white after:content-[""] lg:after:block'
                  to={path}
                  unstable_viewTransition
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex flex-row gap-4'>
          <a
            href='https://www.instagram.com/minera_vizcachitas/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Link que te dirige al perfil de Instagram de Minera Vizcachitas'
          >
            <img
              className='size-8 sepia-0 transition-all hover:scale-125 hover:sepia'
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
              className='size-8 sepia-0 transition-all hover:scale-125 hover:sepia'
              src={FBIcon}
              alt='Icono de Facebook'
            />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
