interface BENEFICIO {
  titleTab: string
  titleContent: string
  titleContentStrong: string
  content: string
  icon: string
}

import IconEconomia from '@/assets/icons/icon-economia.svg'
import IconEmpleo from '@/assets/icons/icon-empleo.svg'
import IconVida from '@/assets/icons/icon-vida.svg'
import IconConectividad from '@/assets/icons/icon-conectividad.svg'
import IconAmbiente from '@/assets/icons/icon-ambiente-etapas.svg'
import IconEducacion from '@/assets/icons/icon-educacion.svg'

const BENEFICIOS_LOCALES: BENEFICIO[] = [
  {
    titleTab: 'Economía local',
    titleContent: 'UN APORTE A LA',
    titleContentStrong: 'ECONOMÍA DE PUTAENDO',
    content:
      `Por tratarse de un proyecto minero con una duración estimada en al menos 26 años, Vizcachitas
representa una oportunidad de desarrollo para la V Región, la Provincia de San Felipe y
especialmente en la comuna de Putaendo, que según la Encuesta CASEN de 2017, tiene una tasa
de pobreza multidimensional del 33,8% (muy superior al de la provincia, que es de 22,5%).
Para cumplir con esa premisa, y sean los habitantes de la región los directos beneficiados, ya
estamos trabajando en la preparación del capital humano que requiere una industria altamente
especializada como la minería.
Asimismo, junto a la comunidad organizada estamos abordando diversas iniciativas de
capacitación y emprendimiento, para que mujeres y jóvenes puedan generar sus propios ingresos
y, en el futuro, ser empleados directos de la operación o formar parte de la red de servicios que se
necesitarán con la construcción y ejecución del proyecto.`,
    icon: IconEconomia,
  },
  {
    titleTab: 'Empleos',
    titleContent: 'EMPLEOS DE',
    titleContentStrong: 'CALIDAD',
    content:
     `El proyecto Vizcachitas es uno de los más relevantes dentro de la cartera de inversiones mineras
en Chile. Se trata de una iniciativa de más de 2.800 millones de dólares de inversión, que sólo en la
fase de construcción requerirá 5.500 empleos.
Una vez en operación ofrecerá 1.200 plazas laborales directas, sin contar los puestos de trabajo
indirectos por los encadenamientos productivos asociados a la faena.
Queremos que sean los vecinos de Putaendo y la provincia los que formen parte y accedan a
empleos de calidad, que nuestra gente se integre, se prepare y participe en el diseño de su futuro.
Nuestras puertas están abiertas y con disposición de escuchar para avanzar en ese camino.
Para cumplir con esa premisa, y sean los habitantes de la región los directos beneficiados, la
empresa ya está trabajando en la preparación del capital humano que requiere una industria
altamente especializada como la minería. De esta manera, Minera Vizcachitas prepara el
ecosistema para que el futuro proyecto minero que se desarrollará en la zona pueda contar con
técnicos y profesionales locales.`,
    icon: IconEmpleo,
  },
  {
    titleTab: 'Calidad de vida',
    titleContent: 'UNA VIDA',
    titleContentStrong: 'MEJOR',
    content: `Putaendo y sus alrededores merecen la oportunidad de una vida mejor, merecen proyectos
concretos y no promesas, merecen ser tratados con respeto y valoración de sus capacidades y
ganas de aprender y surgir.
Vizcachitas no es para unos pocos, es una invitación para crecer sustentablemente, con minería
verde, de clase mundial y abierta a la comunidad, a la región y al Chile del futuro.
Es un compromiso con el cuidado del entorno, de sus recursos hídricos, la flora y fauna, las
tradiciones culturales y la tranquilidad de pensar que existe un mañana mejor para hombres,
mujeres y jóvenes de esta zona.`,
    icon: IconVida,
  },
  {
    titleTab: 'Conectividad',
    titleContent: 'MÁS CONECTIVIDAD',
    titleContentStrong: 'Y SEGURIDAD',
    content: `El concentrado de cobre que se extraiga del yacimiento será transportado en camiones, utilizando
un sistemas de rotainers o contenedores sellados de volteo, que tienen como ventaja principal
que todo el proceso (transporte, acopio y embarque) se haga sin emisiones al ambiente.
Para aumentar los estándares de seguridad y mejor conectividad, se mejorarán 35 kilómetros de
vías existentes entre Vizcachitas y Putaendo, minimizando la contaminación por material
particulado en suspensión (polvo).`,
    icon: IconConectividad,
  },
  {
    titleTab: 'Medio ambiente',
    titleContent: 'ESTÁNDARES',
    titleContentStrong: 'MUNDIALES',
    content: `Vizcachitas es un proyecto minero de clase mundial, porque se ha incorporado tecnología y
estándares ambientales de última generación.
Es una nueva forma de hacer minería, más verde, de futuro, comprometida con una producción
que reduce impactos ambientales y genera externalidades positivas sostenidas en el tiempo en su
entorno.
De esta manera, y escuchando a la comunidad, se utilizará agua desalinizada en su operación, no
habrá tranque de relave (sólo depósitos de relave) y se protegerá la flora y fauna del sector.`,
    icon: IconAmbiente,
  },
  {
    titleTab: 'Educación',
    titleContent: 'APRENDER ',
    titleContentStrong: 'PARA CRECER',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tenetur amet deserunt quia molestiae voluptates inventore tempora nulla sunt mollitia aut ad fugit vel accusantium fugiat earum ullam, iure nesciunt.`,
    icon: IconEducacion,
  },
]

export { BENEFICIOS_LOCALES }
