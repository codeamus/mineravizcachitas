interface ETAPA {
  titleTab: string
  titleContent: string
  content: string
  icon: string
}

import IconPrefactibilidad from '@/assets/icons/icon-prefactibilidad.svg'
import IconEvaluacion from '@/assets/icons/icon-evaluacion.svg'
import IconConstruccion from '@/assets/icons/icon-construccion.svg'
import IconOperacion from '@/assets/icons/icon-operaciones.svg'

const ETAPAS: ETAPA[] = [
  {
    titleTab: 'Prefactibilidad',
    titleContent: 'Qué considera esta etapa?',
    content: `El Estudio de Prefactibilidad del Proyecto Vizcachitas (PFS), concluido en abril de 2024, abarcó todos los aspectos mineros y ambientales. Demostró la viabilidad económica y financiera del proyecto, lo que permitió su avance. Se realizaron estudios geológicos en el sector Las Tejas durante la campaña de 2021-2022, perforando 8.668 metros. El proyecto de sondajes mineros fue aprobado en abril de 2021 por la Comisión de Evaluación Ambiental de la Región de Valparaíso.
    La empresa actualmente evalúa la optimización del PFS para mejorar su valor económico, financiero y ambiental.`,
    icon: IconPrefactibilidad,
  },
  {
    titleTab: `Evaluación de${'\n'}impacto ambiental`,
    titleContent: 'Qué considera esta etapa?',
    content: `El estudio de impacto ambiental es el proceso para evaluar los efectos ambientales de un proyecto y determinar su aceptación, rechazo o modificación por parte de las autoridades competentes. Incluye la participación activa de la comunidad para aclarar dudas y expresar preocupaciones. Estamos trabajando activamente en vincularnos con la comunidad y proporcionarles información sobre el proyecto minero, así como para recoger sus inquietudes.`,
    icon: IconEvaluacion,
  },
  {
    titleTab: 'Construcción',
    titleContent: 'Qué considera esta etapa?',
    content: `Corresponde a la etapa de implementación del proyecto minero en el territorio, según las definiciones establecidas en el Estudio de Impacto Ambiental. Durante esta etapa, se trabajará con la comunidad para priorizar la contratación de talento local y provisión de bienes y servicios por empresas de la comuna de Putaendo, Provincia de San Felipe y Región de Valparaíso.`,
    icon: IconConstruccion,
  },
  {
    titleTab: 'Inicio de la operación',
    titleContent: 'Qué considera esta etapa?',
    content: `Corresponde a la puesta en marcha del proyecto construido, la cual a través de la operación del proyecto se generaría mayormente concentrado de cobre y molibdeno en una menor cantidad.`,
    icon: IconOperacion,
  },
]

export { ETAPAS }
