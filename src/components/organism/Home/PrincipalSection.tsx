import VideoMP4 from '@/assets/videos/home.mp4'
import VideoWebm from '@/assets/videos/home.webm'

import VideoBanner from '@/components/molecules/VideoBanner'

const PrincipalSection = () => {
  return (
    <VideoBanner
      videoMP4={VideoMP4}
      videoWEBM={VideoWebm}
      title={
        <h1 className='text-center text-5xl font-bold text-white lg:text-balance lg:text-6xl'>
          Proyecto
          <span className='text-[#E8732D]'> Vizcachitas</span>
        </h1>
      }
      description='Minería sostenible y responsable comprometida con el desarrollo
              social y económico de Putaendo, San Felipe y la Región de
              Valparaíso. Desarrollo con las comunidades y cuidado del medio
              ambiente para un futuro mejor.'
      list={true}
    />
  )
}

export default PrincipalSection
