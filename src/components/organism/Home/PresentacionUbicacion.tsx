import { LazyLoadImage } from 'react-lazy-load-image-component'
import BtnScrollDown from '@/components/molecules/BtnScrollDown'
import { HomeData } from '@/types/HomeData'
import LoaderSkeleton from '@/components/molecules/LoaderSkeleton'

const PresentacionUbicacion = ({ dataPresentacion }: HomeData) => {
  return (
    <section id="presentacion" className="relative">
      <BtnScrollDown section="presentacion" />
      <div className="flex flex-col bg-white lg:flex-row">
        <div className="w-full  lg:w-1/2">
          <span className="block w-fit bg-[#009145] px-4 py-2 text-sm font-bold uppercase text-white">
            Presentación y ubicación
          </span>
          <div className="ml-0 mr-0 mt-6 flex max-w-full flex-col items-center border-none px-4 pb-4 pt-4 lg:ml-auto lg:mr-6 lg:items-end lg:border-r lg:border-solid lg:border-[#009145] lg:px-0">
            <h2 className="text-center text-3xl font-bold text-black lg:pr-4 lg:text-end lg:text-4xl w-full">
              {dataPresentacion?.first_title ? (
                dataPresentacion?.first_title
              ) : (
                <LoaderSkeleton height={40} />
              )}
            </h2>

            <hr className="my-4 w-full border-[#009145]" />
            <p className="lg:max-w-2xl text-pretty pr-0 text-center text-sm leading-relaxed text-black lg:pr-4 lg:text-end w-full">
              {dataPresentacion?.first_description ? (
                dataPresentacion?.first_description
              ) : (
                <>
                  <div className="mb-2">
                    <LoaderSkeleton height={10} />
                  </div>
                  <div className="mb-2">
                    <LoaderSkeleton height={10} />
                  </div>
                  <div className="mb-2">
                    <LoaderSkeleton height={10} />
                  </div>
                  <div className="mb-2">
                    <LoaderSkeleton height={10} />
                  </div>
                  <div className="mb-2">
                    <LoaderSkeleton height={10} />
                  </div>
                  <div className="mb-2">
                    <LoaderSkeleton height={10} />
                  </div>
                  <div className="mb-2">
                    <LoaderSkeleton height={10} />
                  </div>
                  <div className="mb-2">
                    <LoaderSkeleton height={10} />
                  </div>
                  <div className="mb-2">
                    <LoaderSkeleton height={10} />
                  </div>
                  <div className="mb-2">
                    <LoaderSkeleton height={10} />
                  </div>
                  <div className="mb-2">
                    <LoaderSkeleton height={10} />
                  </div>
                </>
              )}
            </p>
          </div>
        </div>
        <picture className="w-full lg:w-1/2">
          {dataPresentacion?.image.url ? (
            <LazyLoadImage
              className="aspect-[4/3] object-cover"
              src={dataPresentacion?.image.url}
              alt="Imagen de presentación proyecto Vizcachitas"
            />
          ) : (
            <LoaderSkeleton height={560} />
          )}
        </picture>
      </div>
      <div className="flex flex-col-reverse bg-white lg:flex-row">
        <div className="lg:w-1/2">
          {dataPresentacion?.link_google_maps ? (
            <iframe
              src={dataPresentacion?.link_google_maps}
              className="h-full w-full lg:h-full aspect-[4/3] object-cover"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Iframe de Google Maps de la ubicación de Vizcachitas"
              rel="dns-prefetch"
            ></iframe>
          ) : (
            <LoaderSkeleton height={560} />
          )}
        </div>

        <div className="flex w-full flex-col justify-center lg:w-1/2">
          <div className="ml-6 mr-0 mt-6 max-w-full border-none pb-4 pr-4 lg:max-w-xl lg:border-l lg:border-solid lg:border-[#009145]">
            <h2 className="text-center text-3xl font-bold text-black lg:pl-4 lg:text-start lg:text-4xl">
              {dataPresentacion?.second_title ? (
                dataPresentacion?.second_title
              ) : (
                <LoaderSkeleton height={40} />
              )}
            </h2>
            <hr className="my-4 w-full border-[#009145]" />
            <p className="pl-4 text-sm leading-relaxed text-black">
              {dataPresentacion?.second_description ? (
                dataPresentacion?.second_description
              ) : (
                <>
                  <div className="mb-2">
                    <LoaderSkeleton height={10} />
                  </div>
                  <div className="mb-2">
                    <LoaderSkeleton height={10} />
                  </div>
                  <div className="mb-2">
                    <LoaderSkeleton height={10} />
                  </div>
                  <div className="mb-2">
                    <LoaderSkeleton height={10} />
                  </div>
                  <div className="mb-2">
                    <LoaderSkeleton height={10} />
                  </div>
                  <div className="mb-2">
                    <LoaderSkeleton height={10} />
                  </div>
                  <div className="mb-2">
                    <LoaderSkeleton height={10} />
                  </div>
                  <div className="mb-2">
                    <LoaderSkeleton height={10} />
                  </div>
                  <div className="mb-2">
                    <LoaderSkeleton height={10} />
                  </div>
                  <div className="mb-2">
                    <LoaderSkeleton height={10} />
                  </div>
                  <div className="mb-2">
                    <LoaderSkeleton height={10} />
                  </div>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PresentacionUbicacion
