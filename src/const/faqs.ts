interface FAQ {
  title: string
  content: string
}

const FAQS: FAQ[] = [
  {
    title:
      'El proyecto contempla un rajo abierto de un kilómetro de profundidad, justo al centro del río Rocín. ¿Esto afectará el abastecimiento de agua para la comuna de Putaendo?',
    content: `Reconocemos la importancia de este tema, lo que comprobamos en nuestro relacionamiento constante con la comunidad de Putaendo.${'\n'}Somos enfáticos en señalar que no se afectará de modo alguno el suministro para consumo humano ni el regadío, ya que emplearemos agua de mar desalinizada. Se mantendrá el caudal ecológico del río Rocín, ya que no se afectará la cantidad y calidad de sus aguas. El túnel de desvío del cauce, de aproximadamente 15 kms de largo, tampoco afectará la cantidad ni la calidad de sus aguas.${'\n'}Además, el suministro de agua de mar desalinizada para la futura operación, es una oportunidad para que los APRs de la zona de Putaendo y Cabildo, que se han visto afectados por la grave sequía que afecta a la zona central del país, tengan acceso a la infraestructura que se construirá para Vizcachitas, y así optar al suministro a tarifas preferenciales.`,
  },
  {
    title:
      '¿Los glaciares que hay en la zona se verán afectados con el proyecto?',
    content: `Vizcachitas será una faena minera ubicada a baja altura (1.950 msnm) y su área de influencia no afectará a ningún glaciar.`,
  },
  {
    title:
      '¿Se contempla un relave minero y cuál sería el impacto para las personas y el medio ambiente?',
    content: `Vizcachitas tendrá un depósito de relaves, pero no tendrá un tranque de relave. La baja presencia de arcillas permite filtrar los relaves y reducir el consumo de agua del proyecto en hasta un 50%, contribuyendo a la sustentabilidad ambiental del proyecto en múltiples dimensiones: mejora la estabilidad física del depósito de relaves, evitando la acumulación e infiltración del agua contenida en los relaves; y minimiza el espacio utilizado por los relaves, al reducir el volumen de agua contenido en los relaves.${'\n'}De este modo, se convertirá en el segundo proyecto de cobre a gran escala a nivel mundial en adoptar esta innovación tecnológica, tras uno desarrollado en Arizona, Estados Unidos.`,
  },
  {
    title:
      '¿Se dañarán las aguas superficiales y subterráneas del río Rocín, afectando a los regantes?',
    content: `El proyecto sólo utilizará agua de mar desalada. Es decir, no utilizará agua continental, ni superficial ni subterránea. Además, se considera una reducción del consumo de hasta 50% gracias al filtrado y recuperación del agua de los relaves.${'\n'}El proyecto también contempla canales de contorno, que recuperan todas las aguas lluvia y escurrimientos naturales, para devolverlas sin impacto alguno al río Rocín. Todas las aguas que sí tomen contacto con la mina o las distintas instalaciones mineras -las denominadas aguas de contacto- serán objeto de un completo proceso de tratamiento que asegurará que sean devueltas al río limpias y en pleno cumplimiento de la normativa nacional.`,
  },
]

export { FAQS }
