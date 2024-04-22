import { getAllNews } from '@/api'
import DefaultButton from '@/components/molecules/Buttons/DefaultButton'
import { NoticiaType } from '@/types/Noticias'
import { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

const Noticias = () => {
  const [news, setNews] = useState([])
  useEffect(() => {
    const fetchNews = async () => {
      const result = await getAllNews(3)
      setNews(result)
    }
    fetchNews()
  }, [])
  return (
    <section className="relative bg-[#E8E8E8]">
      <h2 className="after:content[] w-full bg-[#009145] py-4 text-center text-4xl font-bold uppercase text-white after:cp-v after:absolute after:left-0 after:right-0 after:top-[70px] after:m-auto after:h-[80px] after:w-[80px] after:bg-[#009145]">
        Novedades
      </h2>
      <div className="mt-20 grid grid-cols-1 gap-10 px-10 py-4 lg:grid-cols-3 lg:px-20">
        {news.length > 0 &&
          news.map((noticia: NoticiaType, index) => (
            <article className="flex flex-col justify-start" key={index}>
              <picture>
                <Link
                  to={`/noticias/${noticia.slug}`}
                  unstable_viewTransition
                  aria-label={`Ir a la noticia ${noticia.title.rendered}`}
                >
                  <LazyLoadImage
                    src={`${noticia.acf.image.url}`}
                    alt={`Imagen de la noticia ${noticia.title.rendered}`}
                    className="m-auto block aspect-[4/3] w-full object-cover brightness-[0.80] transition-all duration-300 hover:brightness-100"
                  />
                </Link>
              </picture>
              <div className="mt-4">
                <h3 className="min-h-[56px] text-balance text-center text-lg font-bold text-[#E8732D] mb-4">
                  {noticia.title.rendered}
                </h3>
                <span className="block w-full text-center text-xs text-[#676767]">
                  {noticia.acf.date}
                </span>
                <hr className="my-4 border-t-2 border-black" />
                <p className="text-balance text-center text-sm text-black min-h-[60px]">
                  {`${noticia.acf.content_noticia.substring(0, 150)} ...`}
                </p>
              </div>
              <div className="mt-4 flex justify-center">
                <Link
                  to={`/noticias/${noticia.slug}`}
                  unstable_viewTransition
                  className="border border-[#009145] bg-[#00914519] px-8 py-3 text-sm font-medium uppercase text-[#009145] transition-all duration-300 hover:border-[#E8732D] hover:text-[#E8732D]"
                >
                  Leer noticia
                </Link>
              </div>
            </article>
          ))}
      </div>
      <div className="relative -bottom-6 flex justify-center">
        <DefaultButton
          url="/noticias"
          textFirst="Ver todas las noticias"
          backgroundColor="#03773A"
          hoverBackgroundColor="#E8732D"
          customStyle={{
            paddingBlock: 4,
          }}
        />
      </div>
    </section>
  )
}

export default Noticias
