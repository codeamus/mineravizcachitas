import { Link } from 'react-router-dom'
const TemplateBlog = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <Link to='/' unstable_viewTransition>
        Blog
      </Link>
    </div>
  )
}

export default TemplateBlog
