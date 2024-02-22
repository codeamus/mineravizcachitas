import ImageEtapas from '@/assets/images/img-etapas.webp'
import BtnScrollDown from '@/components/molecules/BtnScrollDown'
import { ETAPAS } from '@/const/etapas'
import * as Tabs from '@radix-ui/react-tabs'

const EtapasProyecto = () => {
  return (
    <section
      id='etapas'
      className='relative min-h-[770px] bg-cover bg-no-repeat px-4 pb-10 pt-20 lg:min-h-0 lg:bg-fixed xl:px-20'
      style={{
        backgroundImage: `${
          window.innerWidth < 768
            ? 'url(/assets/images/backgrounds/bg-etapas-mobile.webp)'
            : 'url(/assets/images/backgrounds/bg-etapas.webp)'
        }`,
      }}
    >
      <BtnScrollDown section='etapas' />
      <h2 className='text-center text-4xl font-bold text-white'>
        Etapas del proyecto
      </h2>
      <div className='mt-14 flex items-center justify-center'>
        <Tabs.Root defaultValue='tab0'>
          <div className='mb-10'>
            <Tabs.List
              className='flex justify-center gap-2 pb-2 '
              aria-label='Etapas del proyecto'
            >
              {ETAPAS.map(({ titleTab, icon }, index) => (
                <Tabs.Trigger
                  className='tab flex h-full flex-col leading-[15px] text-white focus:outline-[0px] focus:outline-offset-0'
                  value={`tab${index}`}
                  key={index}
                >
                  <img
                    src={icon}
                    className='size-12 transition-all duration-500 lg:size-16'
                    alt={`Icono relacionado a la etapa ${titleTab}`}
                  />
                  <span className='mt-3 hidden border-b border-t border-white p-2 text-white transition-all duration-500 ease-in-out lg:block'>
                    {titleTab}
                  </span>
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          </div>
          <div className='w-fit'>
            {ETAPAS.map(({ titleContent, content }, index) => (
              <Tabs.Content
                className='grow rounded-b-md p-5 outline-none'
                value={`tab${index}`}
                key={index}
              >
                <div className='flex w-fit flex-col items-center gap-8 xl:flex-row'>
                  <div className='text-center xl:text-start'>
                    {titleContent && (
                      <h3 className='mb-4 text-2xl font-bold text-white'>
                        {titleContent}
                      </h3>
                    )}
                    <p className='text-balance text-sm leading-loose text-white'>
                      {content}
                    </p>
                  </div>
                  <img
                    className='hidden size-[550px] xl:block'
                    src={ImageEtapas}
                    alt='Imagen de la sección etapas'
                  />
                </div>
              </Tabs.Content>
            ))}
          </div>
        </Tabs.Root>
      </div>
    </section>
  )
}

export default EtapasProyecto
