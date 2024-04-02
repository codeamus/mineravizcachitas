import { ContactFormType } from '@/types/Form'

const getAllNews = async (limit: number) => {
  const response = await fetch(
    `${
      import.meta.env.VITE_BASE_API_URL
    }noticia?acf_format=standard&per_page=${limit}`
  )
  const news = await response.json()
  return news
}

const getNewBySlug = async (slug: string | undefined) => {
  const response = await fetch(
    `${
      import.meta.env.VITE_BASE_API_URL
    }noticia/?slug=${slug}&acf_format=standard`
  )
  const newBySlug = await response.json()
  return newBySlug
}

const sendFormContact = async (data: ContactFormType) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_CONTACT_URL}`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
  console.log(response)
}

export { getAllNews, getNewBySlug, sendFormContact }
