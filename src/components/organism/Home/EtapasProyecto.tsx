import { ETAPAS } from '@/const/etapas'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ImageEtapas from '@/assets/images/img-etapas.webp'
import BtnScrollDown from '@/components/molecules/BtnScrollDown'
import * as Tabs from '@radix-ui/react-tabs'

const EtapasProyecto = () => {
  return (
    <section
      id='etapas'
      className='relative bg-cover bg-no-repeat px-4 pb-10 pt-20 lg:bg-fixed xl:px-20'
      style={{
        backgroundImage: `${
          window.innerWidth < 768
            ? 'url(/assets/images/backgrounds/bg-etapas-mobile.jpeg)'
            : 'url(/assets/images/backgrounds/bg-etapas.webp)'
        }`,
      }}
    >
      <BtnScrollDown section='etapas' />
      <h2 className='text-center text-4xl font-bold text-white'>
        Etapas del proyecto
      </h2>
      <div className='mt-14 flex items-center justify-center'>
        <Tabs.Root
          defaultValue='tab0'
          className='overflow-hidden lg:overflow-auto'
        >
          <div className='mb-10'>
            <Tabs.List
              className='flex justify-start gap-2 overflow-x-auto overflow-y-hidden pb-2 lg:justify-center lg:overflow-x-hidden'
              aria-label='Manage your account'
            >
              {ETAPAS.map(({ titleTab }, index) => (
                <Tabs.Trigger
                  className='tab h-[45px] bg-[#E8732D] leading-[15px] text-white transition-all duration-500 ease-in-out focus:outline-[0px] focus:outline-offset-0'
                  value={`tab${index}`}
                  key={index}
                >
                  <span className='w-[180px] text-white'>{titleTab}</span>
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
                  <LazyLoadImage
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
