import { Link } from 'react-router-dom'
const TemplateSingleBlog = ({ slug }) => {
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
