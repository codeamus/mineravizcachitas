const PrincipalSection = () => {
  return (
    <div className='w-full bg-[url(/assets/images/backgrounds/bg-cover.webp)] px-10 pb-24 pt-20 md:px-40 lg:pt-40 xl:px-60 xl:pt-60'>
      <div className='flex flex-col items-center gap-20 lg:flex-row'>
        <h1 className='text-balance  text-5xl font-bold text-white'>
          Lorem ipsum{' '}
          <span className='text-[#E8732D]'>dolor sit amet, consectetur</span>{' '}
          adipiscing elit.
        </h1>
        <p className='text-md text-pretty border-b border-t border-[#E8732D] py-4 leading-8 text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper
          ornare ante eget facilisis. Quisque lacinia gravida sapien, vitae
          blandit est. Aliquam feugiat, elit sed faucibus varius, ante risus
          commodo velit, in dapibus lacus libero eget erat. Praesent placerat
          tortor orci, a dignissim dolor lobortis sit amet. Sed eleifend orci
          vitae malesuada aliquet.
        </p>
      </div>
      <ul className='mt-20 grid grid-cols-2 gap-2 md:grid-cols-4'>
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
  )
}

export default PrincipalSection
