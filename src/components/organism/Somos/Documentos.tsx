import BtnScrollDown from '@/components/molecules/BtnScrollDown'
import IconDownload from '@/assets/icons/icon-download.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Documentos = () => {
  return (
    <section
      id='documentos'
      className='relative -top-[25px] mx-10 h-full border-t border-[#03773A] pt-20 lg:mx-20'
    >
      <BtnScrollDown section='documentos' />
      <div className='flex flex-col lg:flex-row'>
        <div className='flex w-full flex-col items-center border-r border-none border-[#009145] lg:w-1/2 lg:items-end lg:border-solid lg:pr-10'>
          <span className='block w-fit bg-[#03773A] px-4 py-2 text-sm font-bold uppercase text-white'>
            Transparencia
          </span>
          <h2 className='my-6 text-3xl font-bold uppercase text-black lg:text-end'>
            Documentación legal
          </h2>
          <p className='text-black lg:text-end'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
            magni harum perferendis sunt facilis architecto, laboriosam veniam
            voluptatem! Quod exercitationem voluptas itaque tenetur maiores
            iusto officia quaerat reiciendis beatae hic.
          </p>
        </div>
        <div className='mt-10 w-full lg:mt-0 lg:w-1/2 lg:pl-10'>
          <div className='mb-4 flex flex-row items-start justify-start gap-6'>
            <a
              href='#'
              target='_blank'
              rel='noopener noreferrer'
              className='mt-2 size-40 lg:size-36'
            >
              <LazyLoadImage
                src={IconDownload}
                alt='Icono de descarga'
                className='transition-all duration-300 hover:scale-110'
              />
            </a>
            <div>
              <h3 className='mb-2 text-lg uppercase text-black'>
                Rca las tejas
              </h3>
              <p className='text-sm text-black'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus recusandae ab, maiores esse rem laboriosam! Cumque
                excepturi in exercitationem, reprehenderit maiores velit ullam
                dolores, necessitatibus deleniti provident est unde explicabo.
              </p>
            </div>
          </div>
          <div className='mb-4 flex flex-row items-start justify-start gap-6'>
            <a
              href='#'
              target='_blank'
              rel='noopener noreferrer'
              className='mt-2 size-40 lg:size-36'
            >
              <LazyLoadImage
                src={IconDownload}
                alt='Icono de descarga'
                className='transition-all duration-300 hover:scale-110'
              />
            </a>
            <div>
              <h3 className='mb-2 text-lg uppercase text-black'>
                Comunicado Alcaldía <br /> de putaendo
              </h3>
              <p className='text-sm text-black'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus recusandae ab, maiores esse rem laboriosam! Cumque
                excepturi in exercitationem, reprehenderit maiores velit ullam
                dolores, necessitatibus deleniti provident est unde explicabo.
              </p>
            </div>
          </div>
          <div className='mb-4 flex flex-row items-start justify-start gap-6'>
            <a
              href='#'
              target='_blank'
              rel='noopener noreferrer'
              className='mt-2 size-40 lg:size-36'
            >
              <LazyLoadImage
                src={IconDownload}
                alt='Icono de descarga'
                className='transition-all duration-300 hover:scale-110'
              />
            </a>
            <div>
              <h3 className='mb-2 text-lg uppercase text-black'>
                COMUNICADO ETAPA <br /> DE SONDAJE
              </h3>
              <p className='text-sm text-black'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus recusandae ab, maiores esse rem laboriosam! Cumque
                excepturi in exercitationem, reprehenderit maiores velit ullam
                dolores, necessitatibus deleniti provident est unde explicabo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Documentos
