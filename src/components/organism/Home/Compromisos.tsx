import IconArrow from '@/assets/icons/arrow-right-bold.svg'
import BtnScrollDown from '@/components/molecules/BtnScrollDown'
import { HomeData } from '@/types/HomeData'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

const Compromisos = ({ dataCompromisos }: HomeData) => {
  return (
    <section
      id="compromisos"
      className="relative bg-[url(/assets/images/backgrounds/compromisos-background.webp)] bg-contain bg-fixed lg:bg-cover"
    >
      <BtnScrollDown section="compromisos" />
      <span className="block w-fit bg-[#009145] px-4 py-2 text-sm font-bold uppercase text-white">
        Compromisos Sostenibles
      </span>
      <div className="flex flex-col justify-center gap-10 p-10 lg:flex-row lg:gap-40">
        {dataCompromisos?.compromisos_info.map((compromiso, index) => (
          <article key={index} className="max-w-xl">
            <picture>
              <LazyLoadImage
                src={compromiso.image.url}
                alt={`Imagen que representa el ${compromiso.title}`}
                className="aspect-[4/3] object-cover"
              />
            </picture>
            <div>
              <div className="mb-4 flex flex-row items-center gap-4 border-b border-white pt-4">
                <LazyLoadImage
                  src={compromiso.icon.url}
                  alt={`Icono de compromiso ${compromiso.title}`}
                  className="w-auto h-16 pb-2"
                />
                <h2 className="border-l border-white pl-4 text-xl font-bold  uppercase text-white lg:text-2xl lg:leading-10">
                  {compromiso.title}
                </h2>
              </div>
              <p
                className="text-balance text-white"
                dangerouslySetInnerHTML={{
                  __html: compromiso.description,
                }}
              />
            </div>
          </article>
        ))}
      </div>
      <div className="relative -bottom-5 flex justify-center">
        <Link
          to={`${dataCompromisos?.link_button}`}
          unstable_viewTransition
          className="flex w-fit flex-row items-center justify-between border border-white bg-[#E8732C] px-3 text-center text-sm text-white shadow-xl transition-all duration-700 hover:bg-[#009145] hover:shadow-stone-400"
        >
          <span>
            Ver todos los compromisos <br aria-hidden />
            sostenibles
          </span>
          <hr className="mx-4 h-[50px] w-[1px] bg-white" />
          <LazyLoadImage src={IconArrow} alt="" className="w-[16px]" />
        </Link>
      </div>
    </section>
  )
}

export default Compromisos
