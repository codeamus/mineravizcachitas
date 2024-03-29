

const getDataPage = async (slugPage : string) => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}/pages?slug=${slugPage}&acf_format=standard`
  )
  const news = await response.json()
  return news
}

export { getDataPage }