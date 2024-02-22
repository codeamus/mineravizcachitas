interface CardProps {
  title: string
  image: string
  slug: string
  content: string
}
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import IconArrow from '@/assets/icons/arrow-right-bold.svg'
const CardBlog = ({ title, image, slug, content }: CardProps) => {
  return (
    <article>
      <picture>
        <LazyLoadImage
          className='aspect-[4/3] w-full object-cover'
          alt={`Imagen referencial para la noticia ${title}`}
          src={image}
        />
      </picture>
      <div className='border-b border-[#E8732C]'>
        <h2 className='mt-4 text-center text-2xl font-bold text-black'>
          {title}
        </h2>
        <span className='my-2 block w-full text-center text-xs font-bold text-[#E8732C]'>
          Mar 15, 2022
        </span>
      </div>
      <div className='flex flex-col items-center'>
        <p className='mt-4 text-center text-sm text-black'>{`${content.substring(
          0,
          150
        )} ...`}</p>
        <Link
          to={`/noticias/${slug}`}
          unstable_viewTransition
          className='mt-4 flex w-fit flex-row items-center justify-between border border-white bg-[#E8732D] px-3 text-center text-sm uppercase text-white shadow-xl transition-all duration-700 hover:bg-[#03773A] hover:shadow-stone-400'
        >
          <span>Leer noticia</span>
          <hr className='mx-4 h-[50px] w-[1px] bg-white' />
          <LazyLoadImage src={IconArrow} alt='' className='w-[16px]' />
        </Link>
      </div>
    </article>
  )
}

export default CardBlog
