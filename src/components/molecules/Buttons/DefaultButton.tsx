type Props = {
  textFirst: string
  textSecond: string
  backgroundColor: string
  hoverBackgroundColor: string
  url: string
}

import ArrowIcon from '@/assets/icons/arrow-right-bold.svg'
import { Link } from 'react-router-dom'

const DefaultButton = ({
  textFirst = 'Click',
  textSecond = '',
  backgroundColor = '#E8732C',
  hoverBackgroundColor = '#009145',
  url = '',
}: Props) => {
  return (
    <Link
      className={`flex w-fit cursor-pointer flex-row items-center rounded-none border border-white bg-[${backgroundColor}] p-0 text-center font-bold text-white hover:bg-[${hoverBackgroundColor}] transition-all duration-700`}
      to={url}
      unstable_viewTransition
    >
      <span className='border-r border-white px-4 py-2 text-sm font-normal'>
        {textFirst}
        {textSecond && <br />}
        {textSecond}
      </span>
      <img
        src={ArrowIcon}
        alt={`Icono de flecha que lleva a ${textFirst} ${textFirst} ${textSecond}`}
        className='size-8 '
      />
    </Link>
  )
}

export default DefaultButton
