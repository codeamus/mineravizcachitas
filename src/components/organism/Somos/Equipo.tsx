import ImgCoverProfile from '@/assets/images/img-profile-cover.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Equipo = () => {
  return (
    <section className='md:px-26 relative -top-[25px] flex flex-col items-center justify-center bg-[#F0EFEF] px-10 py-20 lg:px-36'>
      <h2 className='mb-10 w-fit border-b-2 border-[#707070] text-center text-3xl font-bold uppercase text-[#8B8B8B] lg:text-4xl'>
        Equipo corporativo
      </h2>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
        <article>
          <picture>
            <LazyLoadImage src={ImgCoverProfile} alt='Ruby Jennings' />
          </picture>
          <h3 className='mt-2 text-lg font-bold text-[#8B8B8B]'>
            Ruby Jennings
          </h3>
          <p className='mb-6 mt-2 text-sm text-[#8B8B8B]'>
            Product Manager at Moqups. Runner, parent and coffe lover.
          </p>
          <span className='text-sm font-bold text-[#8B8B8B]'>@username</span>
        </article>
        <article>
          <picture>
            <LazyLoadImage src={ImgCoverProfile} alt='Ruby Jennings' />
          </picture>
          <h3 className='mt-2 text-lg font-bold text-[#8B8B8B]'>
            Ruby Jennings
          </h3>
          <p className='mb-6 mt-2 text-sm text-[#8B8B8B]'>
            Product Manager at Moqups. Runner, parent and coffe lover.
          </p>
          <span className='text-sm font-bold text-[#8B8B8B]'>@username</span>
        </article>
        <article>
          <picture>
            <LazyLoadImage src={ImgCoverProfile} alt='Ruby Jennings' />
          </picture>
          <h3 className='mt-2 text-lg font-bold text-[#8B8B8B]'>
            Ruby Jennings
          </h3>
          <p className='mb-6 mt-2 text-sm text-[#8B8B8B]'>
            Product Manager at Moqups. Runner, parent and coffe lover.
          </p>
          <span className='text-sm font-bold text-[#8B8B8B]'>@username</span>
        </article>
        <article>
          <picture>
            <LazyLoadImage src={ImgCoverProfile} alt='Ruby Jennings' />
          </picture>
          <h3 className='mt-2 text-lg font-bold text-[#8B8B8B]'>
            Ruby Jennings
          </h3>
          <p className='mb-6 mt-2 text-sm text-[#8B8B8B]'>
            Product Manager at Moqups. Runner, parent and coffe lover.
          </p>
          <span className='text-sm font-bold text-[#8B8B8B]'>@username</span>
        </article>
      </div>
    </section>
  )
}

export default Equipo
