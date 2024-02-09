import { Helmet } from 'react-helmet-async'
import Navbar from '@/components/organism/MenuNav'
import PrincipalSection from '@/components/organism/Home/PrincipalSection'

const TemplateSostenibilidad = () => {
  return (
    <>
      <Helmet>
        <title>
          Sostenibilidad en Minera Vizcachitas: Nuestro Compromiso Eterno
        </title>
        <meta
          name='description'
          content='Explora cómo Minera Vizcachitas se compromete con la sostenibilidad ambiental, social y económica en cada etapa de nuestra operación minera.'
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

export default TemplateSostenibilidad
