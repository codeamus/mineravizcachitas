interface TemplateSingleBlogProps {
  slug: string | undefined
}

import { getAllNews, getNewBySlug } from '@/api'
import BackToTop from '@/components/molecules/BackToTop'
import ScrollToTop from '@/components/molecules/ScrollTop'
import Footer from '@/components/organism/Footer'
import Navbar from '@/components/organism/MenuNav'
import CardBlog from '@/components/organism/Noticias/CardNoticias'
import { NoticiaType } from '@/types/Noticias'
import { formatDate } from '@/utils/format'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const TemplateSingleNoticia = ({ slug }: TemplateSingleBlogProps) => {
  const [newBySlug, setNewBySlug] = useState<NoticiaType>()
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      const result = await getAllNews(100)
      setNews(result)
    }
    fetchNews()
  }, [])

  useEffect(() => {
    const fetchNewBySlug = async () => {
      const result = await getNewBySlug(slug)
      setNewBySlug(result.at())
    }
    fetchNewBySlug()
  }, [slug])

  return (
    newBySlug && (
      <>
        <Helmet>
          <title>
            {newBySlug?.title.rendered} | Blog de Minera Vizcachitas
          </title>
          <meta
            name="description"
            content={`Descubre en nuestra última publicación: ${newBySlug?.title.rendered}. Profundizamos en cómo Minera Vizcachitas promueve la sostenibilidad y la innovación en la minería.`}
          />
        </Helmet>
        <ScrollToTop />
        <Navbar position="relative" bgColor="bg-[#03773A]" />
        <main>
          <section className="bg-[#F0EFEF] px-10 pt-20 lg:px-20">
            <div className="block w-full mb-6">
              <Link
                to="/noticias"
                className="text-[#E8732C] text-sm font-bold transition-all duration-500 hover:text-[#03773A]"
              >
                {`< Volver a todas las noticias`}
              </Link>
            </div>
            <div className="flex flex-col-reverse gap-10 border-b border-[#03773A] pb-20 lg:flex-row">
              {newBySlug?.acf.id_video ? (
                <iframe
                  className="h-[300px] w-full lg:h-[560px] lg:w-1/2"
                  src={`https://www.youtube.com/embed/${newBySlug?.acf.id_video}`}
                  title="YouTube video noticia"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                <picture className=" w-full lg:w-1/2">
                  <img
                    className="aspect-square w-full object-cover object-center"
                    src={newBySlug?.acf.image.url}
                    alt={`Imagen referencial para la noticia ${newBySlug?.title.rendered}`}
                  />
                </picture>
              )}
              <div className="h-fit w-full lg:w-1/2">
                {newBySlug?.acf.destacado === true && (
                  <span className="mb-6 block w-fit bg-[#E8732C] px-4 py-2 text-sm font-bold uppercase text-white">
                    Destacada
                  </span>
                )}

                <h1 className="text-4xl font-bold text-black">
                  {newBySlug?.title.rendered}
                </h1>
                <span className="my-4 mb-10 block text-xs font-bold text-black">
                  {newBySlug?.acf.date}
                </span>
                <div className="border-t border-[#E8732C] pt-6">
                  <p className="text-balance text-sm leading-relaxed text-black">
                    {newBySlug?.acf.content_noticia}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="relative top-[-20px] px-10 lg:px-20">
            <span className="mb-6 block w-fit bg-[#03773A] px-4 py-2 text-sm font-bold uppercase text-white">
              Otras noticias
            </span>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {news.length > 0 &&
                news.map((noticia: NoticiaType) => (
                  <CardBlog
                    key={noticia.id}
                    title={noticia.title.rendered}
                    slug={noticia.slug}
                    image={noticia.acf.image.url}
                    content={noticia.acf.content_noticia}
                    date={noticia.acf.date}
                  />
                ))}
            </div>
          </section>
          <BackToTop />
        </main>
        <Footer />
      </>
    )
  )
}

export default TemplateSingleNoticia
