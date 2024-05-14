interface MenuNavProps {
  position?: string
  bgColor?: string
}

import { getDataMenuNav } from '@/api/page'
import FBIcon from '@/assets/icons/icon-fb.svg'
import InstaIcon from '@/assets/icons/icon-instagram.svg'
import { MENU } from '@/const/menu'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import parse from 'html-react-parser'

const Navbar = ({ position = 'absolute', bgColor }: MenuNavProps) => {
  const [dataMenuNav, setDataMenuNav] = useState(null)

  useEffect(() => {
    const fetchDataHome = async () => {
      const result = await getDataMenuNav()
      setDataMenuNav(result)
    }
    fetchDataHome()
  }, [])

  useEffect(() => {
    console.log(dataMenuNav)
  }, [dataMenuNav])

  return (
    dataMenuNav && (
      <header
        id="header-nav"
        className={`${position} top-0 z-20 w-full ${bgColor && bgColor} px-10`}
      >
        <div
          id="headerBox"
          className="mx-auto flex items-center justify-between gap-16 border-b border-none border-white lg:border-solid"
        >
          <a
            href="#header-menu"
            className="md:hidden"
            aria-label="Icono para abrir menu"
            aria-labelledby="Icono de menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </a>
          <Link
            to="/"
            className="relative z-10 flex flex-row items-center"
            unstable_viewTransition
            aria-label="Logo de Minera Vizcachitas que lleva a la home"
          >
            {dataMenuNav?.logo && (
              <img
                className="size-24 transition-all hover:scale-110"
                src={dataMenuNav?.logo?.url}
                alt="Logo de Minera Vizcachitas"
              />
            )}
            <hr className="mx-4 hidden h-[60px] w-[1px] bg-white text-lg xl:block" />
            {dataMenuNav?.texto && (
              <span className="hidden text-lg font-medium text-white xl:block">
                {parse(dataMenuNav?.texto)}
              </span>
            )}
          </Link>
          <nav
            id="header-menu"
            className="fixed inset-0 z-20 flex h-dvh w-full -translate-y-full flex-col items-center justify-center gap-8 bg-[#000]/90 text-2xl transition-transform duration-300 target:translate-y-0 md:static md:h-[initial] md:translate-y-[initial] md:flex-row md:bg-[initial] md:text-xl"
          >
            <a
              href="#header-nav"
              className="absolute left-10 top-10 text-white md:hidden"
            >
              X
            </a>
            {dataMenuNav && (
              <ul className="flex w-full flex-col items-center justify-center gap-10 md:hidden md:flex-row lg:flex">
                {dataMenuNav?.links.map(({ texto_link, url }, index) => (
                  <li className="relative" key={index}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "menuLink active text-xs uppercase text-white after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:m-auto after:hidden after:h-[1px] after:w-[10px] after:bg-white after:content-[''] lg:after:block"
                          : "menuLink text-xs uppercase text-white after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:m-auto after:hidden after:h-[1px] after:w-[10px] after:bg-white after:content-[''] lg:after:block"
                      }
                      to={url}
                      unstable_viewTransition
                    >
                      {texto_link}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </nav>
          <div className="flex flex-row gap-4">
            {dataMenuNav?.icon_instagram && (
              <a
                href={dataMenuNav?.url_instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link que te dirige al perfil de Instagram de Minera Vizcachitas"
              >
                <img
                  className="w-8 sepia-0 transition-all hover:scale-125 hover:sepia"
                  src={dataMenuNav?.icon_instagram}
                  alt="Icono de Instagram"
                />
              </a>
            )}

            {dataMenuNav?.icono_facebook && (
              <a
                href={dataMenuNav?.url_facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link que te dirige al perfil de Facebook de Minera Vizcachitas"
              >
                <img
                  className="w-8 sepia-0 transition-all hover:scale-125 hover:sepia"
                  src={dataMenuNav?.icono_facebook}
                  alt="Icono de Facebook"
                />
              </a>
            )}
          </div>
        </div>
      </header>
    )
  )
}

export default Navbar
