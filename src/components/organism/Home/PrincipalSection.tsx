const PrincipalSection = () => {
  return (
    <section className='relative w-full'>
      <div className='hidden w-full lg:block'>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload='metadata'
          className='h-[100vh] w-full object-cover'
        >
          <source src='/assets/videos/video.webm' type='video/webm' />
          <source src='/assets/videos/video.mp4' type='video/mp4' />
        </video>
      </div>
      <div className='relative top-0 flex h-full flex-col items-center justify-center bg-[url(/assets/images/backgrounds/bg-cover.webp)] px-6  pt-20 md:px-20 lg:absolute lg:bg-none lg:px-40 lg:pt-0 xl:px-60'>
        <div className='flex flex-col gap-10 lg:flex-row lg:gap-20'>
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
            <ul className='my-6 grid grid-cols-2 gap-2 md:grid-cols-4 lg:my-20'>
              <li className='mb-8 flex flex-col items-center justify-center md:mb-0'>
                <p>ICON</p>
                <p className='text-center'>
                  Desarrollo <br /> económico
                </p>
              </li>
              <li className='mb-8 flex flex-col items-center justify-center md:mb-0'>
                <p>ICON</p>
                <p className='text-center'>Empleabilidad</p>
              </li>
              <li className='mb-8 flex flex-col items-center justify-center md:mb-0'>
                <p>ICON</p>
                <p className='text-center'>
                  Medio <br /> Ambiente
                </p>
              </li>
              <li className='mb-8 flex flex-col items-center justify-center md:mb-0'>
                <p>ICON</p>
                <p className='text-center'>Calidad de vida</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrincipalSection
