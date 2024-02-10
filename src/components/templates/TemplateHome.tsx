import { Helmet } from 'react-helmet-async'
import Navbar from '@/components/organism/MenuNav'
import PrincipalSection from '@/components/organism/Home/PrincipalSection'
import PresentacionUbicacion from '@/components/organism/Home/PresentacionUbicacion'
import AporteRegional from '@/components/organism/Home/AporteRegional'
import Compromisos from '@/components/organism/Home/Compromisos'
import Footer from '@/components/organism/Footer'

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
        <PresentacionUbicacion />
        <Compromisos />
        <AporteRegional />
      </main>
      <Footer />
    </>
  )
}

export default TemplateHome
