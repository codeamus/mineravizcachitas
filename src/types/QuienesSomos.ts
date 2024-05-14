export interface TemplateQuienesSomosType {
  informacion_quienes_somos: any
  team: any
  documentation: any
  form: any
  seccion_principal: any
}

export interface QuienesSomosType {
  dataDocumentos?: any
  dataTeam?: any
  dataFormulario?: any
  dataInformacion?: any
}

export interface TeamType {
  image_profile: { url: string }
  name: string
  job: string
  username: string
}

export interface DocumentosType {
  title: string
  description: string
}

export interface ArchivoType {
  name: string
  content: string
  file_pdf: { url: string }
}
