import RegionalCard from '@/components/molecules/Cards/RegionalCard'

const AporteRegional = () => {
  return (
    <section className='p-4 md:p-8'>
      <div className='flex flex-row items-center justify-center'>
        <hr className='w-full border-[#8B8B8B]' />
        <h2 className='w-fit whitespace-nowrap px-4 text-center text-4xl font-bold uppercase text-[#8B8B8B]'>
          Aporte Regional
        </h2>
        <hr className='w-full border-[#8B8B8B]' />
      </div>
      <div className='mt-10 grid grid-cols-4 gap-1'>
        <RegionalCard
          title='title'
          description='description'
          image='/assets/images/backgrounds/cover-article.webp'
        />
        <RegionalCard
          title='title'
          description='description'
          image='/assets/images/backgrounds/cover-article.webp'
        />
        <RegionalCard
          title='title'
          description='description'
          image='/assets/images/backgrounds/cover-article.webp'
        />
        <RegionalCard
          title='title'
          description='description'
          image='/assets/images/backgrounds/cover-article.webp'
        />
      </div>
    </section>
  )
}

export default AporteRegional
