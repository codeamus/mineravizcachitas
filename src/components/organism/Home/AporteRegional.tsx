import RegionalCard from '@/components/molecules/Cards/RegionalCard'
import ImageDesarrollo from '@/assets/images/img-desarrollo.webp'
import ImageEmpleabilidad from '@/assets/images/img-empleabilidad.webp'
import ImageAmbiente from '@/assets/images/img-ambiente.webp'
import ImageCalidad from '@/assets/images/img-calida.webp'

const AporteRegional = () => {
  return (
    <section className='bg-white p-4 md:p-8'>
      <div className='flex flex-row items-center justify-center'>
        <hr className='w-full border-[#8B8B8B]' />
        <h2 className='w-fit whitespace-nowrap px-4 text-center text-4xl font-bold uppercase text-[#8B8B8B]'>
          Aporte Regional
        </h2>
        <hr className='w-full border-[#8B8B8B]' />
      </div>
      <div className='mt-10 grid grid-cols-1 justify-items-center gap-1 md:grid-cols-2 lg:grid-cols-4'>
        <RegionalCard
          title={`Desarrollo ${'\n'} Económico`}
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper ornare ante eget facilisis. Quisque lacinia gravida sapien, vitae blandit est. Aliquam feugiat, elit sed faucibus varius, ante risus commodo velit'
          image={ImageDesarrollo}
        />
        <RegionalCard
          title='Empleabilidad'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper ornare ante eget facilisis. Quisque lacinia gravida sapien, vitae blandit est. Aliquam feugiat, elit sed faucibus varius, ante risus commodo velit'
          image={ImageEmpleabilidad}
        />
        <RegionalCard
          title={`Medio ${'\n'} Ambiente`}
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper ornare ante eget facilisis. Quisque lacinia gravida sapien, vitae blandit est. Aliquam feugiat, elit sed faucibus varius, ante risus commodo velit'
          image={ImageAmbiente}
        />
        <RegionalCard
          title={`Calidad ${'\n'} de vida`}
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper ornare ante eget facilisis. Quisque lacinia gravida sapien, vitae blandit est. Aliquam feugiat, elit sed faucibus varius, ante risus commodo velit'
          image={ImageCalidad}
        />
      </div>
    </section>
  )
}

export default AporteRegional
