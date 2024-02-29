import { BENEFICIOS_LOCALES } from '@/const/beneficios'
import * as Tabs from '@radix-ui/react-tabs'

const Beneficios = () => {
  return (
    <div className='relative min-h-[990px] bg-[url(/assets/images/backgrounds/bg-beneficios-locales.webp)] bg-cover bg-no-repeat px-4 py-10 lg:min-h-0 lg:bg-fixed lg:py-20 xl:px-20'>
      <h2 className='text-center text-4xl uppercase text-white'>
        Beneficios Locales
      </h2>
      <div className='mt-14 flex items-center justify-center'>
        <Tabs.Root defaultValue='tab0'>
          <div className='lg:mb-10'>
            <Tabs.List
              className='flex justify-between pb-2 lg:gap-2'
              aria-label='Etapas del proyecto'
            >
              {BENEFICIOS_LOCALES.map(({ titleTab, icon }, index) => (
                <Tabs.Trigger
                  className='tab w-full max-w-2xl flex h-full items-center justify-between flex-col leading-[15px] text-white focus:outline-[0px] focus:outline-offset-0'
                  value={`tab${index}`}
                  key={index}
                >
                  <img
                    src={icon}
                    className='size-8 transition-all duration-500 lg:size-16'
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
            {BENEFICIOS_LOCALES.map(
              ({ titleContent, titleContentStrong, content }, index) => (
                <Tabs.Content
                  className='grow rounded-b-md p-5 outline-none'
                  value={`tab${index}`}
                  key={index}
                >
                  <div className='flex w-fit flex-col items-center gap-8 lg:flex-row'>
                    <div className='flex w-full justify-center text-center lg:w-1/2 lg:justify-end'>
                      {titleContent && (
                        <h3 className='mb-4 max-w-sm text-center text-4xl font-bold text-white lg:text-end'>
                          {titleContent} <br aria-hidden className='hidden md:block' />
                          <span className='text-[#E8732C]'>
                            {titleContentStrong}
                          </span>
                        </h3>
                      )}
                    </div>
                    <div className='w-full border-white lg:w-1/2 lg:border-l lg:pl-10'>
                      <p className='text-pretty text-sm leading-loose text-white lg:min-h-[400px]'>
                        {content}
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
