interface AporteRegionalProps {
  dataPresentacion?: any
}
import DefaultButton from '@/components/molecules/Buttons/DefaultButton'
import RegionalCard from '@/components/molecules/Cards/RegionalCard'

const AporteRegional = ({ dataPresentacion }: AporteRegionalProps) => {
  return (
    <section className='mt-20 bg-white p-4 md:p-8'>
      <div className='flex flex-row items-center justify-center'>
        <hr className='w-full border-[#8B8B8B]' />
        <h2 className='w-fit whitespace-nowrap px-4 text-center text-3xl font-bold uppercase text-[#8B8B8B] lg:text-4xl'>
          Aporte Regional
        </h2>
        <hr className='w-full border-[#8B8B8B]' />
      </div>
      <div className='mt-10 grid grid-cols-1 justify-items-center gap-1 md:grid-cols-2 lg:grid-cols-4'>
        <RegionalCard
          title={dataPresentacion?.aporte_regional.primer_titulo}
          description={dataPresentacion?.aporte_regional.primera_descripcion}
          image={dataPresentacion?.aporte_regional.primera_imagen}
        />
        <RegionalCard
          title={dataPresentacion?.aporte_regional.segundo_titulo}
          description={dataPresentacion?.aporte_regional.segunda_descripcion}
          image={dataPresentacion?.aporte_regional.segunda_imagen}
        />
        <RegionalCard
          title={dataPresentacion?.aporte_regional.tercer_titulo}
          description={dataPresentacion?.aporte_regional.tercera_descripcion}
          image={dataPresentacion?.aporte_regional.tercera_imagen}
        />
        <RegionalCard
          title={dataPresentacion?.aporte_regional.cuarto_titulo}
          description={dataPresentacion?.aporte_regional.cuarta_descripcion}
          image={dataPresentacion?.aporte_regional.cuarta_imagen}
        />
      </div>
      <div className='mt-10 flex w-full items-center justify-center'>
        <hr className='w-full border-[#03773A]' />
        <DefaultButton
          url='/aporte-regional'
          textFirst='Ver todos los'
          textSecond='Aportes regionales'
          backgroundColor='#03773A'
          hoverBackgroundColor='#E8732D'
          customStyle={{
            minWidth: 215,
          }}
        />
        <hr className='w-full border-[#03773A]' />
      </div>
    </section>
  )
}

export default AporteRegional
