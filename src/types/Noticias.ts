export interface NoticiaType {
  id: number
  title: { rendered: string }
  slug: string
  acf: {
    image: { url: string }
    content_noticia: string
    id_video: string
    destacado: boolean
    date: string
  }
}
