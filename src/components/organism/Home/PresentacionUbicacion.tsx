import { LazyLoadImage } from 'react-lazy-load-image-component'

import BtnScrollDown from '@/components/molecules/BtnScrollDown'
import Image from '@/assets/images/presentacion-home-poster.webp'

const PresentacionUbicacion = () => {
  return (
    <section id='presentacion' className='relative'>
      <BtnScrollDown section='presentacion' />
      <div className='flex flex-col bg-white lg:flex-row'>
        <div className='w-full  lg:w-1/2'>
          <span className='block w-fit bg-[#03773A] px-4 py-2 text-sm font-bold uppercase text-white'>
            Presentación y ubicación
          </span>
          <div className='ml-0 mr-0 mt-6 flex max-w-full flex-col items-center border-none px-4 pb-4 pt-4 lg:ml-auto lg:mr-6 lg:items-end lg:border-r lg:border-solid lg:border-[#009145] lg:px-0'>
            <h2 className='text-center text-3xl font-bold text-black lg:pr-4 lg:text-end lg:text-4xl'>
              ¿Qué es proyecto <br aria-hidden />
              Vizcachitas?
            </h2>
            <hr className='my-4 w-full border-[#009145]' />
            <p className='lg:max-w-xl text-pretty pr-0 text-center text-sm leading-relaxed text-black lg:pr-4 lg:text-end'>
              Nuestro proyecto minero tiene por objeto explotar un gran cuerpo mineralizado ubicado en el
              valle del Río Rocín, con recursos medidos e indicados ya demostrados por 13.021 millones de
              libras de cobre, 526 millones de libras de molibdeno y 54 millones de onzas de plata.
              De acuerdo a nuestro estudio de prefactibilidad, el proyecto considera una inversión de US$ 2.800
              millones y una vida útil inicial de 26 años. Más sondajes y estudios adicionales nos permitirán
              ampliar las reservas mineras y extender la vida útil en muchos años más. . Una vez en operación,
              se estima que producirá cerca de 180.000 toneladas de cobre fino al año durante los primeros 8
              años, y 150.000 al año durante la vida útil. y .
              Se trata de una iniciativa de clase mundial, en la cual se incorporan estándares tecnológicos y
              ambientales de última generación, que dan cuenta de una nueva forma de hacer minería, más
              verde, comprometida con una producción que reduce impactos ambientales y genera
              externalidades positivas sostenidas en el tiempo en materia de empleo local, desarrollo de
              proveedores y servicios locales.
            </p>
          </div>
        </div>
        <picture className='w-full lg:w-1/2'>
          <LazyLoadImage
          className='aspect-[4/3] object-cover'
            src={Image}
            alt='Imagen de presentación proyecto Vizcachitas'
          />
        </picture>
      </div>
      <div className='flex flex-col-reverse bg-white lg:flex-row'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d8526.547228612466!2d-70.4233315!3d-32.4054278!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDI0JzE4LjkiUyA3MMKwMjUnMTguNyJX!5e1!3m2!1ses!2scl!4v1708614173019!5m2!1ses!2scl'
          className='h-[300px] w-full lg:h-[560px] lg:w-1/2 aspect-[4/3] object-cover'
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title='Iframe de Google Maps de la ubicación de Vizcachitas'
          rel="dns-prefetch"
        ></iframe>
        <div className='flex w-full flex-col justify-center lg:w-1/2'>
          <div className='ml-6 mr-0 mt-6 max-w-full border-none pb-4 pr-4 lg:max-w-xl lg:border-l lg:border-solid lg:border-[#009145]'>
            <h2 className='text-center text-3xl font-bold text-black lg:pl-4 lg:text-start lg:text-4xl'>
              ¿Dónde estamos?
            </h2>
            <hr className='my-4 w-full border-[#009145]' />
            <p className='pl-4 text-sm leading-relaxed text-black'>
              El proyecto Vizcachitas está ubicado a 46 kilómetros del centro de Putaendo, provincia de San
              Felipe, en la Región de Valparaíso.
              Distante a 150 kilómetros al norte de Santiago, se encuentra en una zona dotada con buena
              conectividad a carreteras, puertos y líneas eléctricas. Dada su baja altitud –solo 1.950 metros
              sobre el nivel del mar– permitirá operar durante todo el año.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PresentacionUbicacion
