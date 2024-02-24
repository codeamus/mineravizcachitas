import ContactForm from '@/components/organism/ContactForm'

const Contacto = () => {
  return (
    <section className='relative flex flex-col-reverse items-start gap-8 bg-[url(/assets/images/backgrounds/bg-contacto.webp)] bg-cover px-10 py-20 lg:flex-row lg:bg-cover lg:bg-fixed lg:px-60'>
      <div className='w-full lg:w-1/2'>
        <ContactForm />
      </div>
      <div className='w-full lg:w-1/2 lg:max-w-sm'>
        <h3 className='mb-3 text-lg text-white'>Formulario de contacto</h3>
        <h2 className='mb-3 text-2xl font-bold uppercase text-white'>
          ¿NECESITAS <br aria-hidden className='hidden lg:block' /> CONTACTARNOS?
        </h2>
        <p className='text-sm text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est enim quo
          totam obcaecati mollitia natus! Quibusdam deserunt fugiat quia sed
          animi voluptas error libero? Repellat maxime consequuntur
          exercitationem rem eius.
        </p>
      </div>
    </section>
  )
}

export default Contacto
