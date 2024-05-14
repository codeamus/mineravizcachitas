type VideoProps = {
  videoMP4: string
  bgMobile: string
  title: string
  titleDestacado: string
  description: string
  list?: any[]
  poster?: string
}
import parse from 'html-react-parser'
const VideoBanner = ({
  videoMP4,
  bgMobile,
  title,
  titleDestacado,
  description,
  list,
  poster,
}: VideoProps) => {
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
          poster={poster}
        >
          <source src={videoMP4} type="video/mp4" />
        </video>
      </div>
      <div
        className={`lg:pt-130 bg-[url(${bgMobile})] z-10 bg-cover px-6 pt-24 md:bg-none lg:px-30 xl:px-40`}
        style={{
          backgroundImage: `${
            window.innerWidth < 768 ? `url(${bgMobile})` : ''
          }`,
        }}
      >
        <div className="mb-10 flex flex-col items-center gap-10 lg:mb-0 lg:flex-row lg:gap-20">
          <h1 className="w-full text-center text-5xl font-bold text-white lg:w-1/2 lg:text-balance lg:text-end lg:text-6xl">
            {title}
            <span className="text-[#E8732C]">{` ${titleDestacado}`}</span>
          </h1>
          <div className="w-full lg:w-1/2">
            <p className=" my-4 text-pretty border-b border-t border-[#E8732C] py-4 text-center text-sm leading-normal text-white lg:my-0 lg:text-start lg:text-lg lg:leading-10">
              {parse(description)}
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
