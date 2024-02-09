import { LazyLoadImage } from 'react-lazy-load-image-component'

import BtnScrollDown from '@/components/molecules/BtnScrollDown'
import Image from '@/assets/images/presentacion-home-poster.webp'
import Ubicacion from '@/assets/images/ubicacion.webp'

const PresentacionUbicacion = () => {
  return (
    <section id='presentacion' className='relative'>
      <BtnScrollDown section='presentacion' />
      <div className='flex flex-col bg-white lg:flex-row'>
        <div className='w-full  lg:w-1/2'>
          <span className='block w-fit bg-[#03773A] px-4 py-2 text-sm font-bold uppercase text-white'>
            Presentación y ubicación
          </span>
          <div className='ml-0 mr-6 mt-6 max-w-full border-none pb-4 pt-4 lg:ml-auto lg:max-w-4xl lg:border-r lg:border-solid lg:border-[#009145]'>
            <h2 className='pr-4 text-center text-4xl font-bold text-black lg:text-end'>
              ¿Qué es proyecto <br />
              Vizcachitas?
            </h2>
            <hr className='my-4 w-full border-[#009145]' />
            <p className='pr-4 text-end text-sm leading-relaxed text-black'>
              Nuestro proyecto minero explotará un gran cuerpo mineralizado
              ubicado en el valle del río Rocín, con recursos medidos e
              indicados ya demostrados por 13.021 millones de libras de cobre,
              526 millones de libras de molibdeno y 54 millones de onzas de
              plata.
            </p>
            <p className='pr-4 text-end text-sm leading-relaxed text-black'>
              De acuerdo con nuestro estudio de prefactibilidad, el proyecto
              considera una inversión de US$ 2.800 millones y una vida útil
              inicial de 26 años. Más sondajes y estudios adicionales nos
              permitirán ampliar las reservas mineras y extender la vida útil en
              varios años. Una vez en operación, se estima que producirá cerca
              de 180.000 toneladas de cobre fino al año durante los primeros 8
              años, y 150.000 toneladas/año durante la vida útil.
            </p>
            <p className='pr-4 text-end text-sm leading-relaxed text-black'>
              Se trata de una iniciativa de clase mundial, en la cual se
              incorporan estándares tecnológicos y ambientales de última
              generación, que dan cuenta de una nueva forma de hacer minería,
              más verde, comprometida con una producción que reduce impactos
              ambientales y genera externalidades positivas sostenidas en el
              tiempo en materia de empleo local, desarrollo de proveedores y
              servicios locales.
            </p>
          </div>
        </div>
        <picture className='w-full lg:w-1/2'>
          <LazyLoadImage
            src={Image}
            alt='Imagen de presentación proyecto Vizcachitas'
          />
        </picture>
      </div>
      <div className='flex flex-col-reverse bg-white lg:flex-row'>
        <picture className='w-full lg:w-1/2'>
          <LazyLoadImage
            src={Ubicacion}
            alt='Imagen de ubicación proyecto Vizcachitas'
          />
        </picture>
        <div className='flex w-full flex-col justify-center lg:w-1/2'>
          <div className='ml-6 mr-0 mt-6 max-w-full border-none pb-4 pr-4 lg:max-w-xl lg:border-l lg:border-solid lg:border-[#009145]'>
            <h2 className='pl-4 text-center text-4xl font-bold text-black lg:text-start'>
              ¿Dónde estamos?
            </h2>
            <hr className='my-4 w-full border-[#009145]' />
            <p className='pl-4 text-sm leading-relaxed text-black'>
              El proyecto Vizcachitas está ubicado a 46 kilómetros del centro de
              Putaendo, provincia de San Felipe, en la Región de Valparaíso.
            </p>
            <p className='pl-4 text-sm leading-relaxed text-black'>
              Distante a 150 kilómetros al norte de Santiago, se encuentra en
              una zona dotada con buena conectividad a carreteras, puertos y
              líneas eléctricas. Dada su baja altitud -1.950 metros sobre el
              nivel del mar- permitirá operar durante todo el año.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PresentacionUbicacion
