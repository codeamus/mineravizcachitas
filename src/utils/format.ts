const formatDate = (dateCurrent: string) => {
  const formateDate = new Date(dateCurrent).toLocaleDateString('es-CL', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return formateDate
}

export { formatDate }
