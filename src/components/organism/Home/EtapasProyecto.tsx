import { ETAPAS } from '@/const/etapas'

import ImageEtapas from '@/assets/images/img-etapas.webp'
import BtnScrollDown from '@/components/molecules/BtnScrollDown'
import * as Tabs from '@radix-ui/react-tabs'

const EtapasProyecto = () => {
  return (
    <section
      id='etapas'
      className='relative bg-[url(/assets/images/backgrounds/bg-etapas.webp)] bg-cover bg-fixed bg-no-repeat px-4 pb-10 pt-20 xl:px-20'
    >
      <BtnScrollDown section='etapas' />
      <h2 className='text-center text-4xl font-bold'>Etapas del proyecto</h2>
      <div className='mt-14 flex items-center justify-center'>
        <Tabs.Root
          defaultValue='tab0'
          className='overflow-hidden lg:overflow-auto'
        >
          <div className='mb-10'>
            <Tabs.List
              className='scrollbar-hide flex w-max justify-start gap-2 overflow-y-hidden overflow-x-scroll lg:w-full lg:justify-center lg:overflow-x-hidden'
              aria-label='Manage your account'
            >
              {ETAPAS.map(({ titleTab }, index) => (
                <Tabs.Trigger
                  className='tab h-[45px] w-[190px] bg-[#E8732D] leading-[15px] text-white transition-all duration-500 ease-in-out focus:outline-[0px] focus:outline-offset-0'
                  value={`tab${index}`}
                  key={index}
                >
                  <span>{titleTab}</span>
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
                      <h3 className='mb-4 text-2xl font-bold'>
                        {titleContent}
                      </h3>
                    )}
                    <p className='text-balance text-sm leading-loose'>
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
