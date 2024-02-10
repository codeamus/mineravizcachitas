import Footer from '@/components/organism/Footer'
import AporteRegional from '@/components/organism/Home/AporteRegional'
import Compromisos from '@/components/organism/Home/Compromisos'
import PreguntasFrecuentes from '@/components/organism/Home/PreguntasFrecuentes'
import PresentacionUbicacion from '@/components/organism/Home/PresentacionUbicacion'
import PrincipalSection from '@/components/organism/Home/PrincipalSection'
import Navbar from '@/components/organism/MenuNav'
import { Helmet } from 'react-helmet-async'

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
        <PreguntasFrecuentes />
      </main>
      <Footer />
    </>
  )
}

export default TemplateHome
