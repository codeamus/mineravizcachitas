import { Faq } from './Faq'

export interface TemplateHomeType {
  presentacion_y_ubicacion: any
  section_navega: any
  compromisos: any
  aporte_regional_info: any
  preguntas_frecuentes_home: any
  etapas: any
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
    title: string
    description: string
    id_video: string
  }
  dataCompromisos?: {
    compromisos_info: CompromisosType[]
    link_button: string
  }
  dataAporte?: {
    aporte_regional: AporteRegionalFields[]
    link_button: string
  }
  dataFaq?: {
    preguntas_frecuentes_info: Faq[]
    link_button: string
  }
  dataEtapas?: EtapasProyecto[]
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

interface EtapasProyecto {
  icon: { url: string }
  title_nav: string
  title_content: string
  content: string
}
