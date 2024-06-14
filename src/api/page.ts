const getDataPage = async (slugPage: string) => {
  const response = await fetch(
    `${
      import.meta.env.VITE_BASE_API_URL
    }pages?_fields=acf&slug=${slugPage}&acf_format=standard`
  )
  const news = await response.json()
  return news
}

const getDataMenuNav = async () => {
  const response = await fetch(import.meta.env.VITE_BASE_API_MENU)
  const data = await response.json()
  return data
}

export { getDataPage, getDataMenuNav }
