import { Helmet } from 'react-helmet-async'
import Footer from '../organism/Footer'
import Navbar from '../organism/MenuNav'
import { Link } from 'react-router-dom'

const TemplateNotFound = () => {
  return (
    <>
      <Helmet>
        <title>Página No Encontrada | Minera Vizcachitas</title>
        <meta
          name="description"
          content="Lo sentimos, pero la página que buscas no existe en Minera Vizcachitas. Puede que haya sido movida o eliminada. Explora nuestro sitio para descubrir más sobre nuestra minería responsable y sostenible."
        />
      </Helmet>
      <Navbar position="relative" bgColor="bg-[#009145]" />
      <main>
        <section className="bg-[#F0EFEF] p-10 lg:p-20">
          <h1 className="text-center text-5xl font-bold text-black">
            Ops... página no encontrada
          </h1>
          <Link
            to="/"
            className="mt-10 block text-center text-xl text-[#E8732C]"
          >
            Volver al inicio
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default TemplateNotFound
