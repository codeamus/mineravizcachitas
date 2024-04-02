export interface TemplateHomeType {
  presentacion_y_ubicacion: any
  section_navega: any
  compromisos: any
}

export interface HomeData {
  dataPresentacion?: {
    first_title: string
    first_description: string
    image: { url: string }
    second_title: string
    second_description: string
    link_google_maps: string
  }
  dataDescubre?: {
    videos: VideosDescubre[]
  }
  dataCompromisos?: CompromisosType[]
}

export interface VideosDescubre {
  videos: any
  id_video_youtube: string
  title: string
  description: string
}

export interface CompromisosType {
  title: string
  description: string
  image: { url: string }
}
