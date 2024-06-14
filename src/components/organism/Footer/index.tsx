import { Link } from 'react-router-dom'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import InstaIcon from '@/assets/icons/icon-instagram.svg'
import FBIcon from '@/assets/icons/icon-fb.svg'
import { FooterType } from '@/types/MenuNav'
import { useEffect, useState } from 'react'
import { getDataMenuNav } from '@/api/page'
import parse from 'html-react-parser'

const Footer = () => {
  const [dataFooter, setDataFooter] = useState(null as FooterType | null)

  useEffect(() => {
    const fetchDataMenu = async () => {
      const result = await getDataMenuNav()
      setDataFooter(result)
    }
    fetchDataMenu()
  }, [])
  return (
    dataFooter && (
      <footer className="grid grid-cols-1 gap-10 bg-[#626262] px-16 pb-10 pt-14 md:grid-cols-2 lg:grid-cols-4 lg:justify-items-center lg:pt-28">
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold text-white">
            {parse(dataFooter?.footer.info.titulo)}
          </h2>
          <a
            href={dataFooter?.footer.info.link}
            className="w-fit border border-white px-10 py-2 uppercase text-white transition-all duration-300 hover:bg-[#E8732C]"
          >
            {dataFooter?.footer.info.texto_boton}
          </a>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            {dataFooter?.footer.primera_columna.links.map(
              (item, index): any => (
                <li key={index}>
                  <Link
                    className="text-xs uppercase text-white transition-colors duration-300 hover:text-[#E8732C]"
                    to={item.link}
                    target={item.nueva_pagina ? '_blank' : '_self'}
                    unstable_viewTransition
                  >
                    {item.titulo}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xs font-bold uppercase text-white">
            {dataFooter?.footer.segunda_columna.titulo}
          </h3>
          <p className="text-xs text-white">
            {dataFooter?.footer.segunda_columna.primer_texto}
          </p>
          <p className="text-xs text-white">
            {dataFooter?.footer.segunda_columna.segundo_texto}
          </p>
          <div className="flex flex-row gap-1">
            <span className="text-xs font-bold text-white">Tel:</span>
            <a
              className="text-xs text-white transition-colors duration-300 hover:text-[#E8732C]"
              href={`tel:+56${dataFooter?.footer.segunda_columna.telefono}`}
            >
              +56 {dataFooter?.footer.segunda_columna.telefono}
            </a>
          </div>
          <p className="text-xs text-white">
            {dataFooter?.footer.segunda_columna.direccion}
          </p>
          <div className="flex flex-row gap-2">
            <a
              href="https://www.instagram.com/minera_vizcachitas/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link que te dirige al perfil de Facebook de Minera Vizcachitas"
            >
              <LazyLoadImage
                className="size-5 sepia-0 transition-all hover:scale-125 hover:sepia"
                src={InstaIcon}
                alt="Icono de Instagram en el footer"
              />
            </a>
            <a
              href="https://web.facebook.com/MineraVizcachitas/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link que te dirige al perfil de Facebook de Minera Vizcachitas"
            >
              <LazyLoadImage
                className="size-5 sepia-0 transition-all hover:scale-125 hover:sepia"
                src={FBIcon}
                alt="Icono de Facebook en el footer"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xs font-bold uppercase text-white">
            {dataFooter?.footer.tercera_columna.titulo}
          </h3>
          <p className="text-xs text-white">
            {dataFooter?.footer.tercera_columna.direccion}
          </p>
          <p className="text-xs text-white">
            {dataFooter?.footer.tercera_columna.comuna}
          </p>
          <div className="flex flex-row gap-1">
            <span className="text-xs font-bold text-white">Tel:</span>
            <a
              className="text-xs text-white transition-colors duration-300 hover:text-[#E8732C]"
              href={`tel:+56${dataFooter?.footer.tercera_columna.telefono}`}
            >
              +56 {dataFooter?.footer.tercera_columna.telefono}
            </a>
          </div>
          <p className="text-xs text-white">
            {dataFooter?.footer.tercera_columna.ciudad}
          </p>
        </div>
      </footer>
    )
  )
}

export default Footer
