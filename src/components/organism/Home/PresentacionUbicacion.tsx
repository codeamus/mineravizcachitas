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
            <h2 className='pr-4 text-center text-4xl font-bold text-black lg:text-end'>
              ¿Qué es proyecto <br />
              Vizcachitas?
            </h2>
            <hr className='my-4 w-full border-[#009145]' />
            <p className='max-w-lg text-pretty pr-0 text-center text-sm leading-relaxed text-black lg:pr-4 lg:text-end'>
              Esta iniciativa de vanguardia y alcance global representa una
              nueva era en la minería, enfocada en prácticas más sostenibles y
              comprometida con la reducción de impactos ambientales. Situado en
              el valle del río Rocín, nuestro proyecto minero aprovechará
              importantes reservas de cobre, molibdeno y plata, con una vida
              útil inicial de 26 años. Además, contribuirá al crecimiento local
              mediante la creación de empleo y el desarrollo de proveedores y
              servicios en la región.
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
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6737.0249707555295!2d-70.4233315!3d-32.4054278!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDI0JzE4LjkiUyA3MMKwMjUnMTguNyJX!5e0!3m2!1ses!2scl!4v1708611227774!5m2!1ses!2scl'
          className='h-[560px] w-1/2'
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
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
