import CardBlog from '../molecules/CardBlog'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
const TemplateBlog = () => {
  const [news, setNews] = useState([])
  useEffect(() => {
    fetch(
      'http://blog-amusdev.local/wp-json/wp/v2/noticia/?acf_format=standard'
    )
      .then(result => result.json())
      .then(response => setNews(response))
  }, [])
  return (
    <main>
      <h1>Blog</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
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
  )
}

export default TemplateBlog
