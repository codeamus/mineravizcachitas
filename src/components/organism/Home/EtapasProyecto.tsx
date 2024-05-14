import ImageEtapas from '@/assets/images/img-etapas.webp'
import BtnScrollDown from '@/components/molecules/BtnScrollDown'
import { HomeData } from '@/types/HomeData'
import * as Tabs from '@radix-ui/react-tabs'

const EtapasProyecto = ({ dataEtapas }: HomeData) => {
  return (
    <section
      id="etapas"
      className="relative min-h-[820px] bg-cover bg-no-repeat px-4 py-10 lg:min-h-0 lg:bg-fixed lg:py-20 xl:px-20"
      style={{
        backgroundImage: `${
          window.innerWidth < 768
            ? `url(${
                import.meta.env.VITE_BASE_URL
              }/assets/images/backgrounds/bg-etapas-mobile.webp)`
            : `url(${
                import.meta.env.VITE_BASE_URL
              }/assets/images/backgrounds/bg-etapas.webp)`
        }`,
      }}
    >
      <BtnScrollDown section="etapas" />
      <h2 className="text-center text-4xl font-bold text-white">
        Etapas del proyecto
      </h2>
      <div className="mt-8 flex items-center justify-center lg:mt-14">
        <Tabs.Root defaultValue="tab0">
          <div className="lg:mb-10">
            <Tabs.List
              className="flex justify-center gap-2 pb-2 "
              aria-label="Etapas del proyecto"
            >
              {dataEtapas?.map((etapa, index) => (
                <Tabs.Trigger
                  className="tab w-fit max-w-2xl flex h-full items-center mx-3 lg:mx-10 flex-col leading-[15px] text-white focus:outline-[0px] focus:outline-offset-0 transition-all duration-300 [&_img]:hover:scale-110 [&_span]:hover:bg-[#E8732C] [&_span]:hover:border-[#E8732C]"
                  value={`tab${index}`}
                  key={index}
                >
                  <img
                    src={etapa.icon.url}
                    className="size-12 transition-all duration-500 lg:size-16"
                    alt={`Icono relacionado a la etapa ${etapa.title_nav}`}
                  />
                  <span className="mt-3 hidden border-b border-t border-white p-2 text-white transition-all duration-500 ease-in-out lg:block lg:max-w-[180px]">
                    {etapa.title_nav}
                  </span>
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          </div>
          <div className="w-full flex gap-10 items-center">
            {dataEtapas?.map((etapa, index) => (
              <Tabs.Content
                className="grow rounded-b-md p-5 outline-none"
                value={`tab${index}`}
                key={index}
              >
                <div className="flex w-fit flex-col items-center gap-8 xl:flex-row">
                  <div className="text-center xl:text-start">
                    {etapa.title_content && (
                      <h3 className="mb-4 text-2xl lg:text-3xl font-bold text-white lg:text-end">
                        {etapa.title_content}
                      </h3>
                    )}
                    <p
                      className="text-pretty text-sm lg:text-end leading-loose text-white"
                      dangerouslySetInnerHTML={{
                        __html: etapa.content,
                      }}
                    />
                  </div>
                </div>
              </Tabs.Content>
            ))}
            <img
              className="hidden  xl:block aspect-[661/606] object-cover"
              src={ImageEtapas}
              alt="Imagen de la sección etapas"
            />
          </div>
        </Tabs.Root>
      </div>
    </section>
  )
}

export default EtapasProyecto
