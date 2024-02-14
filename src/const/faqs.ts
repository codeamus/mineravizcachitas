interface FAQ {
  title: string
  content: string
}

const FAQS_HOME: FAQ[] = [
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

const FAQS_PAGE: FAQ[] = [
  {
    title:
      'El proyecto contempla un rajo abierto de un kilómetro de profundidad, justo al centro del río Rocín. ¿Esto afectará el abastecimiento de agua para la comuna de Putaendo?',
    content: `Este es un tema relevante que ha sido levantado por miembros de la comunidad
              en muchas de las múltiples reuniones que hemos sostenido. Somos enfáticos en
              señalar que no se afectará de modo alguno el suministro para consumo humano ni
              el regadío, ya que emplearemos agua desalinizada.
              Por el contrario, es una oportunidad para que los APRs de la zona de Putaendo y
              Cabildo, que se han visto afectados por la grave sequía que afecta a la zona
              central del país, puedan tener acceso a la infraestructura que construirá
              Vizcachitas, para acceder al suministro a tarifas preferenciales.`,
  },
  {
    title:
      '¿Los glaciares que hay en la zona se verán afectados con el proyecto?',
    content: `Vizcachitas será una faena minera ubicada a baja altura (1.950 msnm) y su área
de influencia no afectará a los glaciares.`,
  },
  {
    title: `¿Se dañarán las aguas superficiales y subterráneas del río Rocín, afectando
            a los regantes? ¿El proyecto reviste algún peligro para el embalse
            Chacrillas?`,
    content: `No, ninguno. El proyecto Vizcachitas no utilizará agua continental, ni superficial ni
              subterránea. El proyecto no alterará el balance de aguas natural del valle, al
              alimentarse únicamente de agua de mar desalada. La existencia de un túnel de
              desvío del Río Rocín tampoco supone ningún impacto ni en la calidad ni en la
              cantidad de las aguas.`,
  },
  {
    title: `¿Se contempla un relave minero y cuál sería el impacto para las personas y
              el medio ambiente?`,
    content: `Vizcachitas no requerirá un tranque de relave, con lo cual no existirá riesgo alguno
              de infiltraciones o derrumbes aguas arriba.

              En cambio, vamos a emplear un depósito de relave filtrado, que se mezclará con
              el material sin mineral que se extraiga del rajo.
              ¿Cuál es la ventaja de los depósitos de relave? La baja presencia de arcillas
              permite filtrar los relaves y reducir el consumo de agua del proyecto en hasta un
              50%, contribuyendo a la sustentabilidad ambiental del proyecto en aspectos muy
              relevantes: Mejora la estabilidad física del depósito de relaves, evitando la

              acumulación e infiltración del agua contenida en los relaves; y minimiza el espacio
              utilizado, al reducir el volumen de agua que contienen los relaves tradicionales.
              De este modo, se convertirá en el segundo proyecto de cobre a gran escala a nivel
              mundial en adoptar esta innovación tecnológica, tras uno desarrollado en Arizona,
              Estados Unidos.`,
  },

  {
    title: `¿La presencia del gato andino, una especie en peligro, cómo se evitará que
              sea afectado?`,
    content: `El proyecto considerará los más altos estándares en cuanto a protección de la
              biodiversidad en general y del gato andino en particular. El gato andino habita en
              Chile en la cordillera de Los Andes desde Arica hasta la RM, habiendo incluso
              avistamientos recientes en la VII región. Se continuará estudiando el territorio para
              determinar su presencia en la comuna. En cualquier caso, el desarrollo de un
              proyecto minero como Vizcachitas es plenamente compatible con la protección del
              gato andino.`,
  },
  {
    title: `¿Este proyecto hará desaparecer el patrimonio histórico y la actividad
            tradicional de los arrieros de la zona?`,
    content: `Este proyecto minero forma parte de la historia y tradición de Putaendo, que desde
              su origen ha sido una comuna donde ha existido actividad minera, en armonía con
              la agricultura. Y creemos que así puede y debe continuar. Queremos trabajar para
              mantener las tradiciones rurales y de campo, y por eso queremos sentarnos a
              dialogar con todos los sectores productivos de la zona (agricultura, turismo,
              minería y servicios). En nuestro país, la minería en la zona central ha demostrado
              ser un socio estratégico del desarrollo y la identidad regional. Es cosa de mirar a
              Los Andes y Rancagua.`,
  },
  {
    title: `¿Cuál es el impacto económico que tendrá Vizcachitas. Realmente
              beneficiará a la población de Putaendo o sólo será para personas que vienen
              de otras regiones?`,
    content: `Sólo en la fase de construcción, se estima que requerirá 5.500 empleos. Una vez
              en operación ofrecerá 1.200 plazas laborales directas, sin contar los puestos de
              trabajo indirectos por los encadenamientos productivos asociados a la faena.
              Con el objeto de que la mayor cantidad de puestos de trabajo sean ocupados por
              los habitantes de la comuna de Putaendo y Provincia de San Felipe, la empresa
              ya está trabajando en la preparación del capital humano que se requiere para una
              industria altamente especializada como la minería. Minera Vizcachitas está desde
              ya preparando el ecosistema para que el futuro proyecto que se desarrollará
              pueda contar con técnicos y profesionales locales. A nivel comunitario, en tanto, la
              empresa ha realizado un trabajo intenso con los vecinos y organizaciones, para
              detectar oportunidades de crecimiento y desarrollo que permitan desarrollar una
              minería verde, responsable y cercana a la comunidad.`,
  },
]

export { FAQS_HOME, FAQS_PAGE }
