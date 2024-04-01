export interface TemplateHomeType {
  presentacion_y_ubicacion: any
  section_navega: any
}

export interface HomeData {
  dataPresentacion?: {
    first_title: string
    first_description: string
    image: string
    second_title: string
    second_description: string
    link_google_maps: string
  }
  dataDescubre?: {
    videos: VideosDescubre[]
  }
}

export interface VideosDescubre {
  videos: any
  id_video_youtube: string
  title: string
  description: string
}
