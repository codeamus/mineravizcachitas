import { Link } from 'react-router-dom'
import IconArrow from '@/assets/icons/arrow-right-bold.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { HomeData } from '@/types/HomeData'

const PreguntasFrecuentes = ({ dataFaq }: HomeData) => {
  return (
    <section
      id="preguntas"
      className="mb-12 flex flex-col items-start justify-center gap-10 p-4 md:p-8 lg:flex-row"
    >
      <div className="flex w-full flex-col items-center justify-center lg:w-1/2 lg:items-end lg:justify-end">
        <h2 className="text-balance text-center text-4xl font-bold text-black lg:text-end">
          Velamos por una{' '}
          <span className="text-[#009145]">comunidad Informada</span>
        </h2>
        <Link
          to={`${dataFaq?.link_button}`}
          unstable_viewTransition
          className="mt-10 flex w-fit flex-row items-center justify-between border border-white bg-[#E8732C] px-3 text-center text-sm text-white shadow-xl transition-all duration-700 hover:bg-[#009145] hover:shadow-stone-400"
        >
          <span>
            Ver todas las
            <br aria-hidden />
            preguntas frecuentes
          </span>
          <hr className="mx-4 h-[50px] w-[1px] bg-white" />
          <LazyLoadImage
            src={IconArrow}
            alt="Icono de flecha de preguntas frecuentes"
            className="w-[16px]"
          />
        </Link>
      </div>
      <div className="flex w-full flex-col">
        <h3 className="mb-4 text-lg font-bold uppercase text-[#009145]">
          Preguntas Frecuentes
        </h3>
        {dataFaq?.preguntas_frecuentes_info.map((faq, index) => (
          <details className="group mb-4" key={index}>
            <summary className="flex cursor-pointer list-none items-start justify-between rounded-none border border-[#E8732C] bg-white p-3 transition-all duration-300 hover:bg-[#E8732C] [&_span.title]:hover:text-white">
              <span className="text-sm font-bold text-black title duration-300">
                {faq.titulo}
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn border-b border-l border-r border-[#E8732C] p-3 text-sm text-black">
              {faq.content}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default PreguntasFrecuentes
