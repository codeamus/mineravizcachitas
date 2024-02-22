import { BENEFICIOS_LOCALES } from '@/const/beneficios'
import * as Tabs from '@radix-ui/react-tabs'

const Beneficios = () => {
  return (
    <div className='relative min-h-[770px] bg-[url(/assets/images/backgrounds/bg-beneficios-locales.webp)] bg-cover bg-no-repeat px-4 pb-10 pt-20 lg:min-h-0 lg:bg-fixed xl:px-20'>
      <h2 className='text-center text-4xl uppercase text-white'>
        Beneficios Locales
      </h2>
      <div className='mt-14 flex items-center justify-center'>
        <Tabs.Root defaultValue='tab0'>
          <div className='mb-10'>
            <Tabs.List
              className='flex justify-center gap-2 pb-2 '
              aria-label='Etapas del proyecto'
            >
              {BENEFICIOS_LOCALES.map(({ titleTab }, index) => (
                <Tabs.Trigger
                  className='tab flex h-full flex-col leading-[15px] text-white focus:outline-[0px] focus:outline-offset-0'
                  value={`tab${index}`}
                  key={index}
                >
                  <span className='mt-3 hidden border border-[#E8732C] p-2 text-sm font-bold uppercase text-white transition-all duration-500 ease-in-out lg:block'>
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
                          {titleContent} <br />
                          <span className='text-[#E8732C]'>
                            {titleContentStrong}
                          </span>
                        </h3>
                      )}
                    </div>
                    <div className='w-full border-white pl-10 lg:w-1/2 lg:border-l'>
                      <p className='text-balance text-sm leading-loose text-white'>
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
