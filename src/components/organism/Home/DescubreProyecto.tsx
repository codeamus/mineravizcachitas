import BtnScrollDown from '@/components/molecules/BtnScrollDown'
import { HomeData } from '@/types/HomeData'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const DescubreProyecto = ({ dataDescubre }: HomeData) => {
  return (
    <section id="descubre" className="relative px-10 bg-[#E8E8E8] py-20">
      <BtnScrollDown section="descubre" bgColor="bg-[#E8732D]" />
      <div className="flex flex-col items-center">
        <h2 className="text-3xl lg:text-5xl text-black font-bold text-center pb-10">
          {dataDescubre?.title}
        </h2>
        <p className="font-bold text-[#009145]">{dataDescubre?.description}</p>
        <hr className="bg-[#009145] h-[2px] block w-full max-w-xs my-2" />
      </div>
      <div className="flex justify-center items-center mt-4">
        <iframe
          className="h-[300px] w-full lg:h-[560px] max-w-[1000px]"
          src={`https://www.youtube.com/embed/${dataDescubre?.id_video}`}
          title={dataDescubre?.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
  )
}

export default DescubreProyecto
