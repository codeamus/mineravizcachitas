import { getAllNews } from '@/api'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import CardBlog from '@/components/molecules/CardBlog'
const TemplateBlog = () => {
  const [news, setNews] = useState([])
  useEffect(() => {
    const fetchNews = async () => {
      const result = await getAllNews()
      setNews(result)
    }
    fetchNews()
  }, [])
  return (
    <>
      <Helmet>
        <title>
          Blog de Minera Vizcachitas: Perspectivas sobre Minería Sostenible
        </title>
        <meta
          name='description'
          content='Sumérgete en nuestro blog para explorar artículos y noticias sobre la minería sostenible, innovaciones en el sector y el impacto positivo de Minera Vizcachitas.'
        />
      </Helmet>
      <main>
        <h1>Blog</h1>
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
          {news.length > 0 &&
            news.map(
              (noticia: {
                id: number
                title: { rendered: string }
                slug: string
                acf: { image: string }
              }) => (
                <CardBlog
                  key={noticia.id}
                  title={noticia.title.rendered}
                  slug={noticia.slug}
                  image={noticia.acf.image}
                />
              )
            )}
        </div>
        <Link to='/' unstable_viewTransition>
          Volver home
        </Link>
      </main>
    </>
  )
}

export default TemplateBlog
