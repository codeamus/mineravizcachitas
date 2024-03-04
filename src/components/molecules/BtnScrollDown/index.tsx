type Props = {
  section: string
  bgColor?: string
}

import ArrowIcon from '@/assets/icons/arrow-narrow-down.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const BtnScrollDown = ({ section, bgColor = "bg-[#009145]" }: Props) => {
  return (
    <a
      href={`#${section}`}
      aria-label={`Ir a la sección ${section}`}
      className={`absolute -top-8 left-0 right-0 m-auto hidden w-fit rounded-full ${bgColor} p-2 transition-all duration-500 hover:bg-[#E8732D] md:block`}
    >
      <LazyLoadImage
        className='size-10'
        src={ArrowIcon}
        alt={`Icono de flecha que lleva a la sección ${section}`}
      />
    </a>
  )
}

export default BtnScrollDown
