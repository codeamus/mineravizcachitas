import BtnScrollDown from '@/components/molecules/BtnScrollDown'
import { HomeData, VideosDescubre } from '@/types/HomeData'
import { Key } from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const DescubreProyecto = ({ dataDescubre }: HomeData) => {
  return (
    <section id='descubre' className='relative px-10 bg-[#E8E8E8] py-20'>
      <BtnScrollDown section='descubre' bgColor='bg-[#E8732D]' />
      <h2 className='text-3xl lg:text-5xl text-black font-bold text-center pb-10'>
        Navega y descubre el proyecto
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10'>
        {dataDescubre?.videos.map(
          (
            { id_video_youtube, title, description }: VideosDescubre,
            index: Key | null | undefined
          ) => (
            <article key={index}>
              <h3 className='font-bold text-[#009145] text-center text-balance border-b border-[#009145]    mb-4 py-4'>
                {title}
              </h3>
              <LiteYouTubeEmbed id={id_video_youtube} title={title} />

              <p className='text-black text-center mt-4 text-sm'>
                {description}
              </p>
            </article>
          )
        )}
      </div>
    </section>
  )
}

export default DescubreProyecto
