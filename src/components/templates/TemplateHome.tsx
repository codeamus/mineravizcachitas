// import Button from '../molecules/Button/Button'
// import BackToTop from '@/components/molecules/BackToTop'

import Navbar from '@/components/organism/MenuNav'
import PrincipalSection from '@/components/organism/Home/PrincipalSection'

const TemplateHome = () => {
  return (
    <>
      <Navbar />
      <main>
        <PrincipalSection />
      </main>
      <footer>Footer ...</footer>
    </>
  )
}

export default TemplateHome
