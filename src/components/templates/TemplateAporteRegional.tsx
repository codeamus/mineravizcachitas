import { Helmet } from 'react-helmet-async'
import Navbar from '@/components/organism/MenuNav'
import PresentacionUbicacion from '@/components/organism/Home/PresentacionUbicacion'

const TemplateAporteRegional = () => {
  return (
    <>
      <Helmet>
        <title>
          Aporte Regional de Minera Vizcachitas: Impulsando el Desarrollo Local
        </title>
        <meta
          name='description'
          content='Descubre el impacto positivo de Minera Vizcachitas en la región, fomentando el desarrollo local a través de empleo, educación y proyectos comunitarios.'
        />
      </Helmet>
      <Navbar />
      <PresentacionUbicacion />
      <footer>Footer ...</footer>
    </>
  )
}

export default TemplateAporteRegional
