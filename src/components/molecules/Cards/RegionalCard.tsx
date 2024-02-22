type Props = {
  title: string
  description: string
  image: string
}
import { LazyLoadImage } from 'react-lazy-load-image-component'

const RegionalCard = ({ title, description, image }: Props) => {
  return (
    <article className='article duration-400 relative w-full max-w-[320px] transition-all hover:shadow-xl hover:shadow-zinc-700 [&_p]:hover:opacity-100 [&_picture_img]:hover:brightness-[0.30]'>
      <picture>
        <LazyLoadImage
          src={image}
          className='duration-400 aspect-[3/4] brightness-[0.30] transition-all lg:brightness-100'
          alt={`Imagen representativa de ${title}`}
        />
      </picture>
      <div className='absolute top-0 flex h-full w-full flex-col justify-between transition-opacity duration-500'>
        <h3 className='min-h-[90px] whitespace-pre border-white p-4 pb-2 text-center text-2xl font-bold uppercase text-white lg:border-b lg:bg-[#00000066]'>
          {title}
        </h3>
        <p className='text-balance p-4 text-start align-bottom text-sm text-white lg:text-center lg:opacity-0'>
          {description}
        </p>
      </div>
    </article>
  )
}

export default RegionalCard
