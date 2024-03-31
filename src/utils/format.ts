const formatDate = (dateCurrent: string) => {
  const opciones = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const formateDate = new Date(dateCurrent).toLocaleDateString(
    'es-CL',
    opciones
  )

  return formateDate
}

export { formatDate }
