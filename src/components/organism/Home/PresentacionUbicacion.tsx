import { LazyLoadImage } from 'react-lazy-load-image-component'

import Image from '@/assets/images/presentacion-home-poster.webp'
import Ubicacion from '@/assets/images/ubicacion.webp'

import 'react-lazy-load-image-component/src/effects/blur.css'

const PresentacionUbicacion = () => {
  return (
    <section id='presentacion'>
      <div className='flex flex-col bg-white lg:flex-row'>
        <div className='w-full  lg:w-1/2'>
          <span className='block w-fit bg-[#005e23] px-4 py-2 text-sm font-bold uppercase text-white'>
            Presentación y ubicación
          </span>
          <div className='ml-0 mr-6 mt-6 max-w-full border-none pb-4 pt-4 lg:ml-auto lg:max-w-xl lg:border-r lg:border-solid lg:border-[#009145]'>
            <h2 className='pr-4 text-center text-4xl font-bold text-black lg:text-end'>
              ¿Qué es proyecto <br />
              Vizcachitas?
            </h2>
            <hr className='my-4 w-full border-[#009145]' />
            <p className='pr-4 text-end leading-loose text-black'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              semper ornare ante eget facilisis. Quisque lacinia gravida sapien,
              vitae blandit est. Aliquam feugiat, elit sed faucibus varius, ante
              risus commodo velit, in dapibus lacus libero eget erat. Praesent
              placerat tortor orci, a dignissim dolor lobortis sit amet. Sed
              eleifend orci vitae malesuada aliquet.
            </p>
          </div>
        </div>
        <picture className='w-full lg:w-1/2'>
          <LazyLoadImage
            src={Image}
            alt='Imagen de presentación proyecto Vizcachitas'
            effect='blur'
          />
        </picture>
      </div>
      <div className='flex flex-col-reverse bg-white lg:flex-row'>
        <picture className='w-full lg:w-1/2'>
          <LazyLoadImage
            src={Ubicacion}
            alt='Imagen de ubicación proyecto Vizcachitas'
            effect='blur'
          />
        </picture>
        <div className='flex w-full flex-col justify-center lg:w-1/2'>
          <div className='ml-6 mr-0 mt-6 max-w-full border-none pb-4 pr-4 lg:max-w-xl lg:border-l lg:border-solid lg:border-[#009145]'>
            <h2 className='pl-4 text-center text-4xl font-bold text-black lg:text-start'>
              ¿Dónde estamos?
            </h2>
            <hr className='my-4 w-full border-[#009145]' />
            <p className='pl-4 leading-loose text-black'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              semper ornare ante eget facilisis. Quisque lacinia gravida sapien,
              vitae blandit est. Aliquam feugiat, elit sed faucibus varius, ante
              risus commodo velit, in dapibus lacus libero eget erat. Praesent
              placerat tortor orci, a dignissim dolor lobortis sit amet. Sed
              eleifend orci vitae malesuada aliquet.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PresentacionUbicacion
