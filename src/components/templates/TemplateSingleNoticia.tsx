interface TemplateSingleBlogProps {
  slug: string | undefined
}

type New = {
  title: { rendered: string }
  content: { rendered: string }
  acf: { image: string }
}

import { getAllNews, getNewBySlug } from '@/api'
import Footer from '@/components/organism/Footer'
import Navbar from '@/components/organism/MenuNav'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import CardBlog from '@/components/organism/Noticias/CardNoticias'
import ScrollToTop from '@/components/molecules/ScrollTop'
import BackToTop from '@/components/molecules/BackToTop'

const TemplateSingleNoticia = ({ slug }: TemplateSingleBlogProps) => {
  const [newBySlug, setNewBySlug] = useState<New>()

  const [news, setNews] = useState([])
  useEffect(() => {
    const fetchNews = async () => {
      const result = await getAllNews()
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

  useEffect(() => {
    console.log(newBySlug)
  }, [newBySlug])

  return (
    newBySlug && (
      <>
        <Helmet>
          <title>
            {newBySlug?.title.rendered} | Blog de Minera Vizcachitas
          </title>
          <meta
            name='description'
            content={`Descubre en nuestra última publicación: ${newBySlug?.title.rendered}. Profundizamos en cómo Minera Vizcachitas promueve la sostenibilidad y la innovación en la minería.`}
          />
        </Helmet>
        <ScrollToTop />
        <Navbar position='relative' bgColor='bg-[#03773A]' />
        <main>
          <section className='bg-[#F0EFEF] px-10 pt-20 lg:px-20'>
            <div className='flex flex-col-reverse gap-10 border-b border-[#03773A] pb-20 lg:flex-row'>
              <picture className=' w-full lg:w-1/2'>
                <img
                  className='aspect-square w-full object-cover object-center'
                  src={newBySlug?.acf.image}
                  alt={`Imagen referencial para la noticia ${newBySlug?.title.rendered}`}
                />
              </picture>
              <div className='h-fit w-full lg:w-1/2'>
                <span className='mb-6 block w-fit bg-[#E8732C] px-4 py-2 text-sm font-bold uppercase text-white'>
                  Destacada
                </span>
                <h1 className='text-4xl font-bold text-black'>
                  {newBySlug?.title.rendered}
                </h1>
                <span className='my-4 mb-10 block text-xs font-bold text-black'>
                  Joan Doe-Smith • Mar 15, 2022 • 10 min read
                </span>
                <div className='border-t border-[#E8732C] pt-6'>
                  <p className='text-balance text-sm leading-relaxed text-black'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat cum soluta dolorum aliquam beatae? Sunt est vero ex
                    amet ab ipsam! Est sint qui vel quas cum placeat fugiat
                    tempore?Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Repellat cum soluta dolorum aliquam beatae? Sunt est
                    vero ex amet ab ipsam! Est sint qui vel quas cum placeat
                    fugiat tempore?Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Repellat cum soluta dolorum aliquam
                    beatae? Sunt est vero ex amet ab ipsam! Est sint qui vel
                    quas cum placeat fugiat tempore?Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Repellat cum soluta dolorum
                    aliquam beatae? Sunt est vero ex amet ab ipsam! Est sint qui
                    vel quas cum placeat fugiat tempore?Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Repellat cum soluta
                    dolorum aliquam beatae? Sunt est vero ex amet ab ipsam! Est
                    sint qui vel quas cum placeat fugiat tempore?
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className='relative top-[-20px] px-10 lg:px-20'>
            <span className='mb-6 block w-fit bg-[#03773A] px-4 py-2 text-sm font-bold uppercase text-white'>
              Otras noticias
            </span>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {news.length > 0 &&
                news.map(
                  (noticia: {
                    id: number
                    title: { rendered: string }
                    slug: string
                    acf: { image: string; content: string }
                  }) => (
                    <CardBlog
                      key={noticia.id}
                      title={noticia.title.rendered}
                      slug={noticia.slug}
                      image={noticia.acf.image}
                      content={noticia.acf.content}
                    />
                  )
                )}
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
