import BtnScrollDown from '@/components/molecules/BtnScrollDown'
import Icon from '@/assets/icons/icon-ambiental-black.svg'
import Compromisos from './Compromisos'

const Info = () => {
  return (
    <section
      className='relative bg-[url(/assets/images/backgrounds/bg-sostenibilidad.webp)] bg-contain bg-fixed lg:bg-cover'
      id='sostenibilidad-info'
    >
      <BtnScrollDown section='sostenibilidad-info' />
      <div className='flex w-full flex-col items-center justify-between pt-20 lg:flex-row'>
        <div className='flex w-full flex-col items-center justify-center lg:w-[43.6%]'>
          <span className='w-fit bg-[#03773A] px-12 py-2 text-center text-sm font-bold uppercase text-white'>
            Pilares Sostenibles
          </span>
          <h2 className='mt-4 whitespace-nowrap text-4xl font-bold uppercase text-black'>
            ¿Por qué es <br /> un proyecto <br /> sostenible?
          </h2>
        </div>
        <div className='mt-14 flex w-full flex-col px-8 lg:mt-0 lg:w-[56.4%] lg:px-0'>
          <div className='flex items-center justify-start pb-10'>
            <img src={Icon} className='mr-4 size-20' />
            <div className='flex max-w-lg flex-col border-l border-[#03773A]'>
              <div className=''>
                <h3 className='pl-4 text-xl font-bold uppercase text-[#E8732C]'>
                  Responsabilidad <br />
                  Ambiental
                </h3>
              </div>
              <hr className='my-3 border-[#03773A]' />
              <p className='pl-4 text-sm text-black'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
                vulputate commodo lectus, ac blandit elit tincidunt id.
              </p>
            </div>
          </div>
          <div className='flex items-center justify-start pb-10'>
            <img src={Icon} className='mr-4 size-20' />
            <div className='flex max-w-lg flex-col border-l border-[#03773A]'>
              <div className=''>
                <h3 className='pl-4 text-xl font-bold uppercase text-[#E8732C]'>
                  Responsabilidad <br />
                  Social
                </h3>
              </div>
              <hr className='my-3 border-[#03773A]' />
              <p className='pl-4 text-sm text-black'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
                vulputate commodo lectus, ac blandit elit tincidunt id.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Compromisos />
    </section>
  )
}

export default Info
