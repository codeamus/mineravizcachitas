import TemplateSingleBlog from '@/components/templates/TemplateSingleBlog'
import { useParams } from 'react-router-dom'

const SingleBlogPage = () => {
  const { slug } = useParams()
  return <TemplateSingleBlog slug={slug} />
}

export default SingleBlogPage
