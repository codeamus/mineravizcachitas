import DefaultButton from '@/components/molecules/Buttons/DefaultButton'
import RegionalCard from '@/components/molecules/Cards/RegionalCard'
import { HomeData } from '@/types/HomeData'

const AporteRegional = ({ dataAporte }: HomeData) => {
  return (
    <section className="mt-20 bg-white p-4 md:p-8">
      <div className="flex flex-row items-center justify-center">
        <hr className="w-full border-[#8B8B8B]" />
        <h2 className="w-fit whitespace-nowrap px-4 text-center text-3xl font-bold uppercase text-[#8B8B8B] lg:text-4xl">
          Aporte Regional
        </h2>
        <hr className="w-full border-[#8B8B8B]" />
      </div>
      <div className="mt-10 grid grid-cols-1 justify-items-center gap-1 md:grid-cols-2 lg:grid-cols-4">
        {dataAporte?.aporte_regional.map((aporte, index) => (
          <RegionalCard
            key={index}
            title={aporte.title}
            description={aporte.description}
            image={aporte.image.url}
          />
        ))}
      </div>
      <div className="mt-10 flex w-full items-center justify-center">
        <hr className="w-full border-[#009145]" />
        <DefaultButton
          url={`${dataAporte?.link_button}`}
          textFirst="Ver todos los"
          textSecond="Aportes regionales"
          backgroundColor="#009145"
          hoverBackgroundColor="#E8732C"
          customStyle={{
            minWidth: 215,
          }}
        />
        <hr className="w-full border-[#009145]" />
      </div>
    </section>
  )
}

export default AporteRegional
