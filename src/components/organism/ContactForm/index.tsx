interface ContactForm {
  name: string
  email: string
  message: string
}

const ContactForm = () => {
  const onClickSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <form
      onSubmit={e => onClickSubmit(e)}
      className='flex flex-col bg-[#eaeaea4d] p-4'
    >
      <div className='mb-4 flex flex-col'>
        <label className='mb-2 text-sm text-white' htmlFor='nombre'>
          Nombre
        </label>
        <input
          className='h-[30px] bg-[#ffffffcc] p-1 text-sm text-black'
          type='text'
          name='nombre'
          id='nombre'
        />
      </div>
      <div className='mb-4 flex flex-col'>
        <label className='mb-2 text-sm text-white' htmlFor='email'>
          Email
        </label>
        <input
          className='h-[30px] bg-[#ffffffcc] p-1 text-sm text-black'
          type='text'
          name='email'
          id='email'
        />
      </div>
      <div className='mb-4 flex flex-col'>
        <label className='mb-2 text-sm text-white' htmlFor='mensaje'>
          Mensaje
        </label>
        <textarea
          className='h-[150px] bg-[#ffffffcc] p-1 text-sm text-black'
          name='mensaje'
          id='mensaje'
        />
      </div>
      <input type='submit' value='Enviar' />
    </form>
  )
}

export default ContactForm
