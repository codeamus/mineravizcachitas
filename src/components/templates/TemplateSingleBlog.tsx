interface TemplateSingleBlogProps {
  slug: string | undefined
}
import { Link } from 'react-router-dom'
const TemplateSingleBlog = ({ slug }: TemplateSingleBlogProps) => {
  return (
    <div>
      <h1>{slug}</h1>
      <Link to='/blog' unstable_viewTransition>
        volver
      </Link>
    </div>
  )
}

export default TemplateSingleBlog
