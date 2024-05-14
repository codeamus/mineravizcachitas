type VideoProps = {
  videoMP4: string
  title: string
  description: string
  list?: any[]
}
import parse from 'html-react-parser'
const VideoBanner = ({ videoMP4, title, description, list }: VideoProps) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center lg:h-[100vh]">
      <div className="absolute top-0 hidden w-full md:block">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="h-[100vh] w-full object-cover brightness-50"
        >
          <source src={videoMP4} type="video/mp4" />
        </video>
      </div>
      <div className="lg:pt-130 z-10 bg-cover px-6 pt-24 md:bg-none lg:px-30 xl:px-40">
        <div className="mb-10 flex flex-col items-center gap-10 lg:mb-0 lg:flex-row lg:gap-20">
          <div className="flex w-full text-5xl font-bold text-white lg:w-1/2 lg:text-balance lg:justify-center lg:text-6xl">
            {title && parse(title)}
          </div>

          <div className="w-full lg:w-1/2">
            <p className=" my-4 text-pretty border-b border-t border-[#E8732C] py-4 text-center text-sm leading-normal text-white lg:my-0 lg:text-start lg:text-lg lg:leading-10">
              {description && parse(description)}
            </p>
          </div>
        </div>
        {list && (
          <ul className="grid grid-cols-2 place-content-between gap-0 pt-6 md:grid-cols-4 md:gap-20 lg:pt-20">
            {list.map((item, index) => (
              <li
                className="mb-8 flex flex-col items-center justify-center md:mb-0"
                key={index}
              >
                <img
                  className="size-16"
                  src={item.icono}
                  alt="Icono referencial a Desarrollo Económico"
                />
                <p className="pt-4 text-center text-lg text-white">
                  {parse(item.texto)}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default VideoBanner
