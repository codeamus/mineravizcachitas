interface TemplateSingleBlogProps {
  slug: string | undefined
}

type New = {
  title: { rendered: string }
  content: { rendered: string }
  image: { image: string }
}

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getNewBySlug } from '@/api'
const TemplateSingleBlog = ({ slug }: TemplateSingleBlogProps) => {
  const [newBySlug, setNewBySlug] = useState<New>()

  useEffect(() => {
    const fetchNewBySlug = async () => {
      const result = await getNewBySlug(slug)
      setNewBySlug(result.at())
    }
    fetchNewBySlug()
  }, [slug])

  return (
    <>
      <Helmet>
        <title>{newBySlug?.title.rendered} | Blog de Minera Vizcachitas</title>
        <meta
          name='description'
          content={`Descubre en nuestra última publicación: ${newBySlug?.title.rendered}. Profundizamos en cómo Minera Vizcachitas promueve la sostenibilidad y la innovación en la minería.`}
        />
      </Helmet>
      <main>
        <h1>{slug}</h1>
        <p>{newBySlug?.title.rendered}</p>

        <Link to='/blog' unstable_viewTransition>
          volver
        </Link>
      </main>
    </>
  )
}

export default TemplateSingleBlog
