import { LazyLoadImage } from 'react-lazy-load-image-component'
import IconArrowUp from '@/assets/icons/arrow-up.svg'
const BackToTop = () => {
  return (
    <a
      href='#top'
      className='sticky w-fit bottom-10 z-50 flex items-center justify-center ml-auto transition-all duration-500 h-0'
    >
      <LazyLoadImage
        className='hover:shadow-4xl relative right-5 cursor-pointer rounded-full bg-[#009145] p-2 shadow-slate-800 transition-all duration-500 hover:bg-[#E8732D]'
        src={IconArrowUp}
        alt='Ir arriba de la página'
      />
    </a>
  )
}

export default BackToTop
