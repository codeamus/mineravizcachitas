import VideoMP4 from '@/assets/videos/home.mp4'
import VideoWebm from '@/assets/videos/home.webm'
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
          <source src={VideoMP4} type='video/mp4' />
          <source src={VideoWebm} type='video/webm' />
        </video>
      </div>
      <div className='lg:mt-130 mt-40 bg-[url(/assets/images/posters/poster-video-home.webp)] bg-cover px-6 md:bg-none lg:px-40'>
        <div className='flex flex-col items-center gap-10 lg:flex-row lg:gap-20'>
          <h1 className='text-center text-5xl font-bold text-white lg:text-balance'>
            Proyecto
            <span className='text-[#E8732D]'> Vizcachitas</span>
          </h1>
          <div>
            <p className='text-md text-pretty border-b border-t border-[#E8732D] py-4 leading-8 text-white'>
              Minería sostenible y responsable comprometida con el desarrollo
              social y económico de Putaendo, San Felipe y la Región de
              Valparaíso. Desarrollo con las comunidades y cuidado del medio
              ambiente para un futuro mejor.
            </p>
          </div>
        </div>
        <ul className='grid grid-cols-2 place-content-between gap-0 pt-20 md:grid-cols-4 md:gap-20'>
          <li className='mb-8 flex flex-col items-center justify-center md:mb-0'>
            <img
              className='size-16'
              src={IconEconomico}
              alt='Icono referencial a Desarrollo Económico'
            />
            <p className='text-center text-white'>
              Desarrollo <br /> económico
            </p>
          </li>
          <li className='mb-8 flex flex-col items-center justify-center md:mb-0'>
            <img
              className='size-16'
              src={IconEmpleabilidad}
              alt='Icono referencial a Desarrollo Económico'
            />
            <p className='text-center text-white'>Empleabilidad</p>
          </li>
          <li className='mb-8 flex flex-col items-center justify-center md:mb-0'>
            <img
              className='size-16'
              src={IconAmbiente}
              alt='Icono referencial a Desarrollo Económico'
            />
            <p className='text-center text-white'>
              Medio <br /> Ambiente
            </p>
          </li>
          <li className='mb-8 flex flex-col items-center justify-center md:mb-0'>
            <img
              className='size-16'
              src={IconCalidad}
              alt='Icono referencial a Desarrollo Económico'
            />
            <p className='text-center text-white'>Calidad de vida</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default PrincipalSection
