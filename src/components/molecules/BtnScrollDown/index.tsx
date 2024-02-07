type Props = {
  section: string
}

import ArrowIcon from '@/assets/icons/arrow-narrow-down.svg'

const BtnScrollDown = ({ section }: Props) => {
  return (
    <a
      href={`#${section}`}
      aria-label={`Ir a la sección ${section}`}
      className='absolute -top-5 left-0 right-0 m-auto w-fit rounded-full bg-[#009145] p-2 transition-all duration-500 hover:bg-[#E8732D]'
    >
      <img
        className='size-8'
        src={ArrowIcon}
        alt={`Icono de flecha que lleva a la sección ${section}`}
      />
    </a>
  )
}

export default BtnScrollDown
