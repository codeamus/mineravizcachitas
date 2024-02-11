import { ETAPAS } from '@/const/etapas'

import ImageEtapas from '@/assets/images/img-etapas.webp'
import BtnScrollDown from '@/components/molecules/BtnScrollDown'
import InstaIcon from '@/assets/icons/icon-instagram.svg'
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
        <Tabs.Root defaultValue='tab1'>
          <div className='mb-10'>
            <Tabs.List
              className='flex justify-center gap-2'
              aria-label='Manage your account'
            >
              {ETAPAS.map(({ titleTab }, index) => (
                <Tabs.Trigger
                  className='tab mx-2 flex h-[45px] w-fit flex-row gap-2 bg-[#E8732D] leading-[15px] text-white transition-all duration-500 ease-in-out focus:bg-[#03773A] focus:outline-[0px] focus:outline-offset-0 lg:!w-[190px]'
                  value={`tab${index}`}
                  key={index}
                >
                  <img
                    className='block size-5 sepia-0 transition-all hover:scale-125 hover:sepia lg:hidden'
                    src={InstaIcon}
                    alt='Icono de Instagram en el footer'
                  />
                  <span className='hidden lg:block'>{titleTab}</span>
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
