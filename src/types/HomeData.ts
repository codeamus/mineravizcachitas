export interface TemplateHomeType {
  presentacion_y_ubicacion: any
  section_navega: any
  compromisos: any
  aporte_regional: any
  preguntas_frecuentes_home: any
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
  dataAporte?: AporteRegionalFields[]
  dataFaq?: Faq[]
}

export interface VideosDescubre {
  videos: any
  id_video_youtube: string
  title: string
  description: string
}

interface CompromisosType {
  title: string
  description: string
  icon: { url: string }
  image: { url: string }
}

interface AporteRegionalFields {
  title: string
  description: string
  icon: { url: string }
  image: { url: string }
}

interface Faq {
  title: string
  content: string
}
