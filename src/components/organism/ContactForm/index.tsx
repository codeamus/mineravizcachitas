import { sendFormContact } from '@/api'
import { ContactFormType } from '@/types/Form'
import { useState } from 'react'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onClickSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e)
    if (name && email && message) {
      const data: ContactFormType = {
        name,
        email,
        message,
      }
      sendFormContact(data)
    }
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
          required
          onChange={e => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className='mb-4 flex flex-col'>
        <label className='mb-2 text-sm text-white' htmlFor='email'>
          Email
        </label>
        <input
          className='h-[30px] bg-[#ffffffcc] p-1 text-sm text-black'
          type='email'
          name='email'
          id='email'
          required
          onChange={e => setEmail(e.target.value)}
          value={email}
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
          required
          onChange={e => setMessage(e.target.value)}
          value={message}
        />
      </div>
      <input
        type='submit'
        value='Enviar'
        className='bg-[#E8732D] p-3 cursor-pointer text-center text-sm text-white transition-all duration-700 hover:bg-[#03773A] hover:shadow-stone-400'
      />
    </form>
  )
}

export default ContactForm
