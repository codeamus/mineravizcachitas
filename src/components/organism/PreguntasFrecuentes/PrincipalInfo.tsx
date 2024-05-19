import BtnScrollDown from '@/components/molecules/BtnScrollDown'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { PreguntasFrecuentesType } from '@/types/Faq'
import parse from 'html-react-parser'

const PrincipalInfo = ({ dataFaq }: PreguntasFrecuentesType) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <BtnScrollDown section="preguntas" />
      <div className="flex w-full flex-col items-center px-10 py-8 lg:w-1/2 lg:items-end lg:px-14">
        <span className="mt-10 block w-fit bg-[#009145] px-4 py-2 text-sm font-bold uppercase text-white">
          {dataFaq?.informacion_preguntas.subtitutlo}
        </span>
        {dataFaq?.informacion_preguntas.titulo && (
          <h2 className="my-6 text-center text-4xl font-bold text-black lg:text-balance lg:text-end lg:text-5xl">
            {parse(dataFaq?.informacion_preguntas.titulo)}
          </h2>
        )}
        {dataFaq?.informacion_preguntas.contenido && (
          <p className="max-w-lg text-center text-lg text-black lg:text-end">
            {parse(dataFaq?.informacion_preguntas.contenido)}
          </p>
        )}
      </div>
      <div className="w-full lg:w-1/2">
        <LazyLoadImage
          src={dataFaq?.informacion_preguntas.imagen}
          alt="Imagen referencial a la sección de Preguntas Frecuentes"
        />
      </div>
    </div>
  )
}

export default PrincipalInfo
