interface SostenibilidadProps {
  dataSostenibilidad?: any
}
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ImageAmbiental from '@/assets/images/compromiso-ambiental.webp'
import ImageSocial from '@/assets/images/compromiso-responsabilidad.webp'

const Compromisos = ({ dataSostenibilidad }: SostenibilidadProps) => {
  const handleOpenAccordionAmbiental = (index: number) => {
    const clickAmbiental = document.getElementById(`ambiental-${index}`)
    if (clickAmbiental?.hasAttribute('open')) {
      clickAmbiental?.children[0].classList.remove('bg-[#E8732D]')
      clickAmbiental?.children[0].children[0].classList.remove('text-white')
    } else {
      clickAmbiental?.children[0].classList.add('bg-[#E8732D]')
      clickAmbiental?.children[0].children[0].classList.add('text-white')
    }

    const details = document.querySelectorAll('.ambiental')
    details.forEach(detail => {
      if (detail.id !== `ambiental-${index}`) {
        detail.removeAttribute('open')
        detail.children[0].classList.remove('bg-[#E8732D]')
        detail.children[0].children[0].classList.remove('text-white')
      }
    })
  }

  const handleOpenAccordionSocial = (index: number) => {
    const clickSocial = document.getElementById(`social-${index}`)
    if (clickSocial?.hasAttribute('open')) {
      clickSocial?.children[0].classList.remove('bg-[#E8732D]')
      clickSocial?.children[0].children[0].classList.remove('text-white')
    } else {
      clickSocial?.children[0].classList.add('bg-[#E8732D]')
      clickSocial?.children[0].children[0].classList.add('text-white')
    }

    const details = document.querySelectorAll('.social')
    details.forEach(detail => {
      if (detail.id !== `social-${index}`) {
        detail.removeAttribute('open')
        detail.children[0].classList.remove('bg-[#E8732D]')
        detail.children[0].children[0].classList.remove('text-white')
      }
    })
  }

  return (
    <>
      <div className="flex lg:flex-row flex-col items-center lg:items-start">
        <picture className="relative flex w-full items-center justify-center lg:w-1/2 lg:justify-start">
          <LazyLoadImage
            className="brightness-[0.5]"
            src={ImageAmbiental}
            alt="Imagen respcto al compromiso Ambiental"
          />
          <div className="absolute lg:ml-20">
            <h3 className="mb-4 max-w-sm text-center text-4xl font-bold lg:text-start lg:text-5xl text-white">
              Nuestros{' '}
              <span className="text-[#E8732C]">compromisos ambientales</span>
            </h3>
            <hr className="w-full max-w-sm border-white" />
          </div>
        </picture>
        <div className="flex w-full flex-col px-4 lg:w-1/2 mt-10 lg:mt-0">
          {dataSostenibilidad?.sostenibilidad.compromisos_ambientales?.map(
            (item: any, index: number) => (
              <details
                id={`ambiental-${index}`}
                className="ambiental group mb-4"
                key={index}
                onClick={() => handleOpenAccordionAmbiental(index)}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between rounded-none border border-[#E8732C] p-3 transition-all duration-300 hover:bg-[#E8732C] [&_span.title]:hover:text-white">
                  <span className="text-sm font-bold text-black title duration-300">
                    {item.titulo}
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
                <p
                  className="group-open:animate-fadeIn border-b border-l border-r bg-[#E8E8E8] border-[#E8732C] p-3 text-sm text-black"
                  dangerouslySetInnerHTML={{
                    __html: item.content,
                  }}
                />
              </details>
            )
          )}
        </div>
      </div>
      <div className="flex lg:flex-row-reverse flex-col items-center lg:items-start">
        <picture className="relative flex w-full items-center justify-center lg:w-1/2 lg:justify-start">
          <LazyLoadImage
            className="brightness-[0.5]"
            src={ImageSocial}
            alt="Imagen respcto al compromiso Social"
          />
          <div className="absolute lg:ml-20">
            <h3 className="mb-4 max-w-sm text-center text-4xl font-bold lg:text-start lg:text-5xl text-white">
              Nuestros{' '}
              <span className="text-[#E8732C]">compromisos sociales</span>
            </h3>
            <hr className="w-full max-w-sm border-white" />
          </div>
        </picture>
        <div className="flex w-full flex-col px-4 lg:w-1/2 mt-10">
          {dataSostenibilidad?.sostenibilidad.compromisos_sociales?.map(
            (item: any, index: number) => (
              <details
                id={`social-${index}`}
                className="social group mb-4"
                key={index}
                onClick={() => handleOpenAccordionSocial(index)}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between rounded-none border border-[#E8732C] p-3 transition-all duration-300 hover:bg-[#E8732C] [&_span.title]:hover:text-white">
                  <span className="text-sm font-bold text-black title duration-300">
                    {item.titulo}
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
                <p
                  className="group-open:animate-fadeIn border-b border-l border-r bg-[#E8E8E8] border-[#E8732C] p-3 text-sm text-black"
                  dangerouslySetInnerHTML={{
                    __html: item.content,
                  }}
                />
              </details>
            )
          )}
        </div>
      </div>
    </>
  )
}

export default Compromisos
