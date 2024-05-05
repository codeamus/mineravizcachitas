import { BeneficiosApi, BeneficiosTypes } from '@/types/AporteRegional'
import * as Tabs from '@radix-ui/react-tabs'

const Beneficios = ({ dataAporte }: BeneficiosTypes) => {
  return (
    <div className="relative min-h-[990px] bg-[url(/assets/images/backgrounds/bg-beneficios-locales.webp)] bg-cover bg-no-repeat px-4 py-10 lg:min-h-0 lg:bg-fixed lg:py-20 xl:px-20">
      <h2 className="text-center text-4xl uppercase text-white">
        Beneficios Locales
      </h2>
      <div className="mt-14 flex items-center justify-center">
        <Tabs.Root defaultValue="tab0">
          <div className="lg:mb-10">
            <Tabs.List
              className="flex justify-between pb-2 lg:gap-2"
              aria-label="Etapas del proyecto"
            >
              {dataAporte?.beneficios_locales.map(
                (beneficio: BeneficiosApi, index: number) => (
                  <Tabs.Trigger
                    className="tab w-full max-w-2xl flex h-full items-center justify-between flex-col leading-[15px] text-white focus:outline-[0px] focus:outline-offset-0 duration-300 [&_img]:hover:scale-110 [&_span]:hover:bg-[#E8732C] [&_span]:hover:border-[#E8732C]"
                    value={`tab${index}`}
                    key={index}
                  >
                    <img
                      src={beneficio.icon.url}
                      className="size-8 transition-all duration-500 lg:size-16"
                      alt={`Icono relacionado a la etapa ${beneficio.title_nav}`}
                    />
                    <span className="mt-3 hidden border-b border-t border-white p-2 text-white transition-all duration-500 ease-in-out lg:block">
                      {beneficio.title_nav}
                    </span>
                  </Tabs.Trigger>
                )
              )}
            </Tabs.List>
          </div>
          <div className="w-fit">
            {dataAporte?.beneficios_locales.map(
              (beneficio: BeneficiosApi, index: number) => (
                <Tabs.Content
                  className="grow rounded-b-md p-5 outline-none"
                  value={`tab${index}`}
                  key={index}
                >
                  <div className="flex w-fit flex-col items-center gap-8 lg:flex-row">
                    <div className="flex w-full justify-center text-center lg:w-1/2 lg:justify-end">
                      {beneficio.title_content && (
                        <h3 className="mb-4 max-w-sm text-center text-4xl font-bold text-white lg:text-end">
                          {beneficio.title_content}{' '}
                          <br aria-hidden className="hidden md:block" />
                          <span className="text-[#E8732C]">
                            {beneficio.title_destacado_contenido}
                          </span>
                        </h3>
                      )}
                    </div>
                    <div className="w-full border-white lg:w-1/2 lg:border-l lg:pl-10">
                      <p className="text-pretty text-sm leading-loose text-white lg:min-h-[400px]">
                        {beneficio.content}
                      </p>
                    </div>
                  </div>
                </Tabs.Content>
              )
            )}
          </div>
        </Tabs.Root>
      </div>
    </div>
  )
}

export default Beneficios
