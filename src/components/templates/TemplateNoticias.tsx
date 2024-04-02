import { getAllNews } from '@/api'
import Footer from '@/components/organism/Footer'
import Navbar from '@/components/organism/MenuNav'
import CardBlog from '@/components/organism/Noticias/CardNoticias'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import ScrollToTop from '@/components/molecules/ScrollTop'
import BackToTop from '@/components/molecules/BackToTop'
import { NoticiaType } from '@/types/Noticias'
const TemplateNoticias = () => {
  const [news, setNews] = useState([])
  useEffect(() => {
    const fetchNews = async () => {
      const result = await getAllNews(100)
      setNews(result)
    }
    fetchNews()
  }, [])
  return (
    <>
      <Helmet>
        <title>
          Blog Noticias de Minera Vizcachitas: Perspectivas sobre Minería
          Sostenible
        </title>
        <meta
          name='description'
          content='Sumérgete en nuestro blog para explorar artículos y noticias sobre la minería sostenible, innovaciones en el sector y el impacto positivo de Minera Vizcachitas.'
        />
      </Helmet>
      <ScrollToTop />
      <Navbar position='relative' bgColor='bg-[#03773A]' />
      <main>
        <section className='bg-[#F0EFEF] p-10 lg:p-20'>
          <h1 className='text-center text-5xl font-bold text-black lg:text-balance lg:text-6xl mb-10'>
            Proyecto Vizcachitas{' '}
            <span className='text-[#E8732C]'>Noticias</span>
          </h1>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {news.length > 0 &&
              news.map((noticia: NoticiaType) => (
                <CardBlog
                  key={noticia.id}
                  title={noticia.title.rendered}
                  slug={noticia.slug}
                  image={noticia.acf.image}
                  content={noticia.acf.content}
                />
              ))}
          </div>
        </section>
        <BackToTop />
      </main>
      <Footer />
    </>
  )
}

export default TemplateNoticias
