interface MenuNavProps {
  position?: string
  bgColor?: string
}

import FBIcon from '@/assets/icons/icon-fb.svg'
import InstaIcon from '@/assets/icons/icon-instagram.svg'
import { MENU } from '@/const/menu'
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({ position = 'absolute', bgColor }: MenuNavProps) => {
  return (
    <header
      id='header-nav'
      className={`${position} top-0 z-20 w-full ${bgColor && bgColor} px-10`}
    >
      <div
        id='headerBox'
        className='mx-auto flex items-center justify-between gap-16 border-b border-none border-white lg:border-solid'
      >
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
          <img
            className='size-24 transition-all hover:scale-110'
            src='/assets/logos/logo.svg'
            alt='Logo de Minera Vizcachitas'
          />
          <hr className='mx-4 hidden h-[60px] w-[1px] bg-white text-lg xl:block' />
          <span className='hidden text-lg font-medium text-white xl:block'>
            Proyecto <br aria-hidden />
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
          <ul className='flex w-full flex-col items-center justify-center gap-10 md:hidden md:flex-row lg:flex'>
            {MENU.map(({ title, path }, index) => (
              <li className='relative' key={index}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "menuLink active text-xs uppercase text-white after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:m-auto after:hidden after:h-[1px] after:w-[10px] after:bg-white after:content-[''] lg:after:block"
                      : "menuLink text-xs uppercase text-white after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:m-auto after:hidden after:h-[1px] after:w-[10px] after:bg-white after:content-[''] lg:after:block"
                  }
                  to={path}
                  unstable_viewTransition
                >
                  {title}
                </NavLink>
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
              className='w-8 sepia-0 transition-all hover:scale-125 hover:sepia'
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
              className='w-8 sepia-0 transition-all hover:scale-125 hover:sepia'
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
