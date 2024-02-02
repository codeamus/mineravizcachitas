type Props = {
  title: string
  description: string
  image: string
}
const RegionalCard = ({ title, description, image }: Props) => {
  return (
    <article className='article relative w-full max-w-[320px]  transition-all duration-700 hover:shadow-xl hover:shadow-zinc-700'>
      <picture>
        <img
          src={image}
          className='article-hover:brightness-100  aspect-[3/4] brightness-[0.25] transition-all duration-700'
        />
      </picture>
      <div className='absolute top-0 h-full w-full p-4'>
        <h3 className='border-b border-white pb-4 text-center text-3xl font-bold uppercase text-white'>
          {title}
        </h3>
        <p className=' absolute bottom-4 text-center text-sm text-white'>
          {description}
        </p>
      </div>
    </article>
  )
}

export default RegionalCard
