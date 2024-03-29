interface DescubreProyectoProps {
  dataPresentacion?: any
}

import BtnScrollDown from '@/components/molecules/BtnScrollDown'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const DescubreProyecto = ({ dataPresentacion }: DescubreProyectoProps) => {
  return (
    <section id='descubre' className='relative px-10 bg-[#E8E8E8] py-20'>
      <BtnScrollDown section='descubre' bgColor='bg-[#E8732D]' />
      <h2 className='text-3xl lg:text-5xl text-black font-bold text-center pb-10'>
        Navega y descubre el proyecto
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10'>
        <article>
          <h3 className='font-bold text-[#009145] text-center text-balance border-b border-[#009145]    mb-4 py-4'>
            {dataPresentacion?.discover_project.titulo_primer_video}
          </h3>
          <LiteYouTubeEmbed
            id={dataPresentacion?.discover_project.link_primer_video}
            title={dataPresentacion?.discover_project.titulo_primer_video}
          />

          <p className='text-black text-center mt-4 text-sm'>
            {dataPresentacion?.discover_project.descripcion_primer_video}
          </p>
        </article>
        <article>
          <h3 className='font-bold text-[#009145] text-center text-balance border-b border-[#009145]    mb-4 py-4'>
            {dataPresentacion?.discover_project.titulo_segundo_video}
          </h3>
          <LiteYouTubeEmbed
            id={dataPresentacion?.discover_project.link_segundo_video}
            title={dataPresentacion?.discover_project.titulo_segundo_video}
          />
          <p className='text-black text-center mt-4 text-sm'>
            {dataPresentacion?.discover_project.descripcion_segundo_video}
          </p>
        </article>
        <article>
          <h3 className='font-bold text-[#009145] text-center text-balance border-b border-[#009145]    mb-4 py-4'>
            {dataPresentacion?.discover_project.titulo_tercer_video}
          </h3>
          <LiteYouTubeEmbed
            id={dataPresentacion?.discover_project.link_tercer_video}
            title={dataPresentacion?.discover_project.titulo_tercer_video}
          />
          <p className='text-black text-center mt-4 text-sm'>
            {dataPresentacion?.discover_project.descripcion_tercer_video}
          </p>
        </article>
      </div>
    </section>
  )
}

export default DescubreProyecto
