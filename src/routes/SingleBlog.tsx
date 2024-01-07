import TemplateSingleBlog from '@/components/templates/TemplateSingleBlog'
import { useParams } from 'react-router-dom'

const SingleBlog = () => {
  const { slug } = useParams()
  return <TemplateSingleBlog slug={slug} />
}

export default SingleBlog
