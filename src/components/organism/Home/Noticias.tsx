import ImageBlog from '@/assets/images/noticia-01.webp'
import DefaultButton from '@/components/molecules/Buttons/DefaultButton'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Noticias = () => {
  return (
    <section className='relative bg-[#E8E8E8]'>
      <h2 className='after:content[] w-full bg-[#009145] py-4 text-center text-4xl font-bold uppercase text-white after:cp-v after:absolute after:left-0 after:right-0 after:top-[70px] after:m-auto after:h-[80px] after:w-[80px] after:bg-[#009145]'>
        Noticias
      </h2>
      <div className='mt-20 grid grid-cols-1 gap-10 px-10 py-4 lg:grid-cols-3 lg:px-20'>
        <article className='flex flex-col justify-center'>
          <picture>
            <Link to='/noticias' unstable_viewTransition>
              <LazyLoadImage
                src={ImageBlog}
                alt='Imagen de la noticia'
                className='m-auto block brightness-50 transition-all duration-300 hover:brightness-100'
              />
            </Link>
          </picture>
          <div className='mt-4'>
            <h3 className='text-balance text-center text-lg font-bold text-[#E8732D]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            <span className='block w-full text-center text-xs text-[#676767]'>
              Lorem ipsum dolor sit - 10 diciembre 2023
            </span>
            <hr className='my-4 border-t-2 border-black' />
            <p className='text-balance text-center text-sm text-black'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eros magna, ultricies vitae varius quis, vestibulum tempor elit.
            </p>
          </div>
          <div className='mt-4 flex justify-center'>
            <Link
              to='/noticias'
              unstable_viewTransition
              className='border border-[#009145] bg-[#00914519] px-8 py-3 text-sm font-medium uppercase text-[#009145] transition-all duration-300 hover:border-[#E8732D] hover:text-[#E8732D]'
            >
              Leer noticia
            </Link>
          </div>
        </article>
        <article className='flex flex-col justify-center'>
          <picture>
            <Link to='/noticias' unstable_viewTransition>
              <LazyLoadImage
                src={ImageBlog}
                alt='Imagen de la noticia'
                className='m-auto block brightness-50 transition-all duration-300 hover:brightness-100'
              />
            </Link>
          </picture>
          <div className='mt-4'>
            <h3 className='text-balance text-center text-lg font-bold text-[#E8732D]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            <span className='block w-full text-center text-xs text-[#676767]'>
              Lorem ipsum dolor sit - 10 diciembre 2023
            </span>
            <hr className='my-4 border-t-2 border-black' />
            <p className='text-balance text-center text-sm text-black'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eros magna, ultricies vitae varius quis, vestibulum tempor elit.
            </p>
          </div>
          <div className='mt-4 flex justify-center'>
            <Link
              to='/noticias'
              unstable_viewTransition
              className='border border-[#009145] bg-[#00914519] px-8 py-3 text-sm font-medium uppercase text-[#009145] transition-all duration-300 hover:border-[#E8732D] hover:text-[#E8732D]'
            >
              Leer noticia
            </Link>
          </div>
        </article>
        <article className='flex flex-col justify-center'>
          <picture>
            <Link to='/noticias' unstable_viewTransition>
              <LazyLoadImage
                src={ImageBlog}
                alt='Imagen de la noticia'
                className='m-auto block brightness-50 transition-all duration-300 hover:brightness-100'
              />
            </Link>
          </picture>
          <div className='mt-4'>
            <h3 className='text-balance text-center text-lg font-bold text-[#E8732D]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            <span className='block w-full text-center text-xs text-[#676767]'>
              Lorem ipsum dolor sit - 10 diciembre 2023
            </span>
            <hr className='my-4 border-t-2 border-black' />
            <p className='text-balance text-center text-sm text-black'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eros magna, ultricies vitae varius quis, vestibulum tempor elit.
            </p>
          </div>
          <div className='mt-4 flex justify-center'>
            <Link
              to='/noticias'
              unstable_viewTransition
              className='border border-[#009145] bg-[#00914519] px-8 py-3 text-sm font-medium uppercase text-[#009145] transition-all duration-300 hover:border-[#E8732D] hover:text-[#E8732D]'
            >
              Leer noticia
            </Link>
          </div>
        </article>
      </div>
      <div className='relative -bottom-6 flex justify-center'>
        <DefaultButton
          url='/sostenibilidad'
          textFirst='Ver todas las noticias'
          backgroundColor='#03773A'
          hoverBackgroundColor='#E8732D'
          customStyle={{
            paddingBlock: 4,
          }}
        />
      </div>
    </section>
  )
}

export default Noticias
