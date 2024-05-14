import IconArrow from '@/assets/icons/arrow-right-bold.svg'
import BtnScrollDown from '@/components/molecules/BtnScrollDown'
import { QuienesSomosType } from '@/types/QuienesSomos'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'

const Sobre = ({ dataInformacion }: QuienesSomosType) => {
  return (
    <section id="somos" className="relative bg-white pt-20">
      <BtnScrollDown section="somos" />
      <div className="flex flex-col px-10 lg:flex-row lg:px-0">
        <div className="w-full border-r border-none border-[#009145] lg:w-1/2 lg:border-solid lg:pr-10">
          {dataInformacion?.primer_titulo && (
            <div className="text-balance text-center text-4xl font-bold text-black lg:text-end">
              {parse(dataInformacion.primer_titulo)}
            </div>
          )}
        </div>
        <div className="mt-10 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
          {dataInformacion?.primer_contenido &&
            parse(dataInformacion.primer_contenido)}
        </div>
      </div>
      <div className="mt-20 flex flex-col-reverse lg:flex-row">
        <picture className="w-full lg:w-1/2">
          <img
            src={dataInformacion?.imagen}
            alt="Vizcachitas"
            className="h-96 w-full object-cover"
          />
        </picture>
        <div className="w-full px-10 lg:w-1/2 lg:pl-10">
          {dataInformacion?.segundo_titulo &&
            parse(dataInformacion.segundo_titulo)}
          {dataInformacion?.segundo_contenido &&
            parse(dataInformacion.segundo_contenido)}
        </div>
      </div>
      <section className="mx-10 mt-10 flex flex-col justify-center gap-10 lg:mx-60 lg:mt-20 lg:flex-row lg:gap-20">
        {dataInformacion?.iconografia.map((item: any, index: number) => (
          <div className="w-full lg:w-1/2" key={index}>
            <div className="mb-4 flex flex-row items-center gap-4 border-b border-[#009145] pt-4">
              <LazyLoadImage
                src={item.icono}
                alt="Icono de responsabilidad ambiental"
                className="hidden w-[70px] object-[1/1] lg:block"
              />
              {parse(item.titulo)}
            </div>
            {parse(item.descripcion)}
          </div>
        ))}
      </section>
      <div className="mt-10 flex w-full items-center justify-center px-10">
        <hr className="w-full border-[#E8732C]" />
        <Link
          to="/sostenibilidad"
          unstable_viewTransition
          className="z-10 flex w-fit min-w-[265px] flex-row items-center justify-between border border-white bg-[#E8732C] px-3 text-center text-sm text-white shadow-xl transition-all duration-700 hover:bg-[#009145] hover:shadow-stone-400"
        >
          <span>
            Ver todos los compromisos <br aria-hidden />
            sostenibles
          </span>
          <hr className="mx-4 h-[50px] w-[1px] bg-white" />
          <LazyLoadImage src={IconArrow} alt="" className="w-[16px]" />
        </Link>
        <hr className="w-full border-[#E8732C]" />
      </div>
    </section>
  )
}

export default Sobre
