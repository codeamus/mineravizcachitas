import Video from '@/assets/videos/home.mp4'
import IconEconomico from '@/assets/icons/icon-economico.svg'
import IconEmpleabilidad from '@/assets/icons/icon-empleabilidad.svg'
import IconAmbiente from '@/assets/icons/icon-ambiente.svg'
import IconCalidad from '@/assets/icons/icon-calidad.svg'

const PrincipalSection = () => {
  return (
    <section className='relative flex h-full w-full items-center justify-center lg:h-[100vh]'>
      <div className='absolute top-0 -z-20 hidden w-full md:block'>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload='metadata'
          className='h-[100vh] w-full object-cover brightness-50'
          poster='/assets/images/posters/poster-video-home.webp'
        >
          <source src={Video} type='video/mp4' />
        </video>
      </div>
      <div className='bg-[url(/assets/images/posters/poster-video-home.webp)] px-6 pt-40 md:bg-none lg:px-40 lg:pt-0'>
        <div className='flex flex-col items-center gap-10 lg:flex-row lg:gap-20'>
          <h1 className='text-center text-5xl font-bold text-white lg:text-balance'>
            Lorem ipsum{' '}
            <span className='text-[#E8732D]'>dolor sit amet, consectetur</span>{' '}
            adipiscing elit.
          </h1>
          <div>
            <p className='text-md text-pretty border-b border-t border-[#E8732D] py-4 leading-8 text-white'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              semper ornare ante eget facilisis. Quisque lacinia gravida sapien,
              vitae blandit est. Aliquam feugiat, elit sed faucibus varius, ante
              risus commodo velit, in dapibus lacus libero eget erat. Praesent
              placerat tortor orci, a dignissim dolor lobortis sit amet. Sed
              eleifend orci vitae malesuada aliquet.
            </p>
          </div>
        </div>
        <ul className='grid grid-cols-2 place-content-between gap-20 pt-20 md:grid-cols-4'>
          <li className='mb-8 flex flex-col items-center justify-center md:mb-0'>
            <img
              className='size-16'
              src={IconEconomico}
              alt='Icono referencial a Desarrollo Económico'
            />
            <p className='text-center'>
              Desarrollo <br /> económico
            </p>
          </li>
          <li className='mb-8 flex flex-col items-center justify-center md:mb-0'>
            <img
              className='size-16'
              src={IconEmpleabilidad}
              alt='Icono referencial a Desarrollo Económico'
            />
            <p className='text-center'>Empleabilidad</p>
          </li>
          <li className='mb-8 flex flex-col items-center justify-center md:mb-0'>
            <img
              className='size-16'
              src={IconAmbiente}
              alt='Icono referencial a Desarrollo Económico'
            />
            <p className='text-center'>
              Medio <br /> Ambiente
            </p>
          </li>
          <li className='mb-8 flex flex-col items-center justify-center md:mb-0'>
            <img
              className='size-16'
              src={IconCalidad}
              alt='Icono referencial a Desarrollo Económico'
            />
            <p className='text-center'>Calidad de vida</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default PrincipalSection
