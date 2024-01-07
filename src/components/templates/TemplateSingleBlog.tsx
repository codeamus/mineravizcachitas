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
    <div>
      <h1>{slug}</h1>
      <p>{newBySlug?.title.rendered}</p>

      <Link to='/blog' unstable_viewTransition>
        volver
      </Link>
    </div>
  )
}

export default TemplateSingleBlog
