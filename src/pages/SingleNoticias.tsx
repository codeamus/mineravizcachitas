import TemplateSingleNoticia from '@/components/templates/TemplateSingleNoticia'
import { useParams } from 'react-router-dom'

const SingleBlogPage = () => {
  const { slug } = useParams()
  return <TemplateSingleNoticia slug={slug} />
}

export default SingleBlogPage
