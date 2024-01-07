const getAllNews = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}/noticia/?acf_format=standard`
  )
  const news = await response.json()
  return news
}

const getNewBySlug = async (slug: string | undefined) => {
  const response = await fetch(
    `${
      import.meta.env.VITE_BASE_API_URL
    }/noticia/?slug=${slug}&acf_format=standard`
  )
  const newBySlug = await response.json()
  return newBySlug
}

export { getAllNews, getNewBySlug }
