import NukaCarousel from 'nuka-carousel'

import { QuienesSomosType, TeamType } from '@/types/QuienesSomos'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Equipo = ({ dataTeam }: QuienesSomosType) => {
  const isMobile = Boolean(window.innerWidth <= 800)
  return (
    <section className="md:px-26 relative -top-[25px] flex flex-col items-center justify-center bg-[#F0EFEF] px-10 py-24 lg:px-36">
      <h2 className="mb-10 w-fit border-b-2 border-[#707070] text-center text-3xl font-bold uppercase text-[#8B8B8B] lg:text-4xl">
        Equipo corporativo
      </h2>
      <NukaCarousel
        autoplay={true}
        autoplayInterval={2000}
        slidesToShow={isMobile ? 1 : 4}
      >
        {dataTeam?.map((person: TeamType, index: number) => (
          <article key={index} className="m-4">
            <picture>
              <LazyLoadImage
                src={person.image_profile.url}
                alt={`Imagen de perfil para ${person.name}`}
              />
            </picture>
            <h3 className="mt-2 text-lg font-bold text-[#8B8B8B] min-h-[56px]">
              {person.name}
            </h3>
            <p className="mb-6 mt-2 text-sm text-[#8B8B8B] min-h-[60px]">
              {person.job}
            </p>
            <a href={person.username} target="_blank" rel="noopener noreferrer">
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                viewBox="0 0 256 256"
                className="transition-all duration-700 hover:scale-125"
              >
                <path
                  d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
                  fill="#0A66C2"
                />
              </svg>
            </a>
          </article>
        ))}
      </NukaCarousel>
    </section>
  )
}

export default Equipo
