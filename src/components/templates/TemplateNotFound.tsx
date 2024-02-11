import { Helmet } from 'react-helmet-async'
import Footer from '../organism/Footer'
import Navbar from '../organism/MenuNav'

const TemplateNotFound = () => {
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
        <h1>Not Found</h1>
      </main>
      <Footer />
    </>
  )
}

export default TemplateNotFound
