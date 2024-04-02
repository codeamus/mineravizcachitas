import { QuienesSomosType, TeamType } from '@/types/QuienesSomos'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Equipo = ({ dataTeam }: QuienesSomosType) => {
  return (
    <section className='md:px-26 relative -top-[25px] flex flex-col items-center justify-center bg-[#F0EFEF] px-10 py-20 lg:px-36'>
      <h2 className='mb-10 w-fit border-b-2 border-[#707070] text-center text-3xl font-bold uppercase text-[#8B8B8B] lg:text-4xl'>
        Equipo corporativo
      </h2>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
        {dataTeam?.map((person: TeamType, index: number) => (
          <article key={index}>
            <picture>
              <LazyLoadImage
                src={person.image_profile.url}
                alt={`Imagen de perfil para ${person.name}`}
              />
            </picture>
            <h3 className='mt-2 text-lg font-bold text-[#8B8B8B]'>
              {person.name}
            </h3>
            <p className='mb-6 mt-2 text-sm text-[#8B8B8B]'>{person.job}</p>
            <span className='text-sm font-bold text-[#8B8B8B]'>
              {person.username}
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Equipo
