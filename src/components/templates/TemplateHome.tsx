import { Link } from 'react-router-dom'
import { Button } from '@nextui-org/button'
// import Button from '../molecules/Button/Button'
// import BackToTop from '@/components/molecules/BackToTop'

const TemplateHome = () => {
  return (
    <div>
      <div>
        <h1 className='text-3xl font-bold underline'>Home</h1>
        <Link to='/blog' unstable_viewTransition>
          Blog
        </Link>
      </div>
      <Button color='primary'>Press me</Button>
      {/* <BackToTop /> */}
    </div>
  )
}

export default TemplateHome
