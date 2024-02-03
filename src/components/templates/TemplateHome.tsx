import { Helmet } from 'react-helmet-async'
import Navbar from '@/components/organism/MenuNav'
import PrincipalSection from '@/components/organism/Home/PrincipalSection'

const TemplateHome = () => {
  return (
    <>
      <Helmet>
        <title>
          Minera Vizcachitas: Líder en Minería Responsable y Sostenible
        </title>
        <meta
          name='description'
          content='Descubre cómo Minera Vizcachitas lidera la innovación en la minería con prácticas responsables y sostenibles para un futuro mejor. Únete a nuestra misión.'
        />
      </Helmet>
      <Navbar />
      <main>
        <PrincipalSection />
      </main>
      <footer>Footer ...</footer>
    </>
  )
}

export default TemplateHome
