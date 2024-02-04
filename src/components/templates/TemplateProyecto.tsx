import { Helmet } from 'react-helmet-async'
import Navbar from '@/components/organism/MenuNav'

const TemplateProyecto = () => {
  return (
    <>
      <Helmet>
        <title>
          El Proyecto de Minera Vizcachitas: Compromiso con la Excelencia
        </title>
        <meta
          name='description'
          content='Conoce el proyecto de Minera Vizcachitas, donde combinamos tecnología avanzada y sostenibilidad para desarrollar la minería del futuro de manera responsable.'
        />
      </Helmet>
      <Navbar />
      <h1>El Proyecto</h1>
    </>
  )
}

export default TemplateProyecto
