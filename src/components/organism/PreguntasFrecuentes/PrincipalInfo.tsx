import BtnScrollDown from '@/components/molecules/BtnScrollDown'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ImagePreguntas from '@/assets/images/img-preguntas-frecuentes.webp'

const PrincipalInfo = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <BtnScrollDown section='preguntas' />
      <div className='flex w-full flex-col items-center px-4 py-8 lg:w-1/2 lg:items-end'>
        <span className='mt-10 block w-fit bg-[#03773A] px-4 py-2 text-sm font-bold uppercase text-white'>
          Preguntas Frecuentes
        </span>
        <h2 className='my-6 text-center text-4xl font-bold text-black lg:text-balance lg:text-end lg:text-5xl'>
          Queremos que los vecinos de Putaendo <br />
          <span className='text-[#E8732D]'>
            {' '}
            se mantengan <br className='hidden lg:block' />
            Informados
          </span>
        </h2>
        <p className='max-w-lg text-center text-lg text-black lg:text-end'>
          Una relación basada en la confianza y transparencia es la base de un
          compromiso de largo plazo hacia un futuro con mejor calidad de vida.
        </p>
        <p className='max-w-lg text-center text-lg text-black lg:text-end'>
          Queremos que los vecinos de Putaendo formen parte de este camino,
          aclarando sus dudas e inquietudes, como también escuchando sus sueños
          y anhelos.
        </p>
      </div>
      <div className='w-full lg:w-1/2'>
        <LazyLoadImage
          src={ImagePreguntas}
          alt='Imagen referencial a la sección de Preguntas Frecuentes'
        />
      </div>
    </div>
  )
}

export default PrincipalInfo
