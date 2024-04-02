import ContactForm from '@/components/organism/ContactForm'
import { QuienesSomosType } from '@/types/QuienesSomos'

const Contacto = ({ dataFormulario }: QuienesSomosType) => {
  return (
    <section className='relative flex flex-col-reverse items-start gap-8 bg-[url(/assets/images/backgrounds/bg-contacto.webp)] bg-cover px-10 py-20 lg:flex-row lg:bg-cover lg:bg-fixed lg:px-60'>
      <div className='w-full lg:w-1/2'>
        <ContactForm />
      </div>
      <div className='w-full lg:w-1/2 lg:max-w-sm'>
        <h3 className='mb-3 text-lg text-white'>{dataFormulario?.titulo}</h3>
        <h2 className='mb-3 text-2xl font-bold uppercase text-white'>
          {dataFormulario?.subtitle}
        </h2>
        <p className='text-sm text-white'>{dataFormulario?.content}</p>
      </div>
    </section>
  )
}

export default Contacto
