import { Helmet } from 'react-helmet-async'
import Footer from '../organism/Footer'
import Navbar from '../organism/MenuNav'

const TemplateNotFound = () => {
  return (
    <>
      <Helmet>
        <title>Página No Encontrada | Minera Vizcachitas</title>
        <meta
          name='description'
          content='Lo sentimos, pero la página que buscas no existe en Minera Vizcachitas. Puede que haya sido movida o eliminada. Explora nuestro sitio para descubrir más sobre nuestra minería responsable y sostenible.'
        />
      </Helmet>
      <Navbar />
      <main>
        <h1>Not Found</h1>
      </main>
      <Footer />
    </>
  )
}

export default TemplateNotFound
