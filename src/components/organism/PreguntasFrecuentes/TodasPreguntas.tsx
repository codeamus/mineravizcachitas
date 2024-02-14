import { FAQS_PAGE } from '@/const/faqs'

const TodasPreguntas = () => {
  return (
    <div className='relative'>
      <h2 className='after:content[] w-full bg-[#009145] py-4 text-center text-2xl font-bold uppercase text-white after:cp-v after:absolute after:left-0 after:right-0 after:top-[60px] after:m-auto after:h-[80px] after:w-[80px] after:bg-[#009145] lg:text-4xl lg:after:top-[70px]'>
        Preguntas Frecuentes
      </h2>
      <div className='my-10 flex flex-col items-center justify-center px-4'>
        {FAQS_PAGE.map(({ title, content }, index) => (
          <div
            className='collapse collapse-plus mt-4 max-w-3xl rounded-none border border-[#E8732D] bg-white'
            key={index}
          >
            <input
              type='radio'
              name='accordion'
              aria-label={`Input de accordio para la pregunta ${title}`}
            />
            <div className='collapse-title text-sm font-bold text-black after:text-3xl after:font-normal after:text-[#E8732D]'>
              {title}
            </div>
            <div className='collapse-content border-t border-[#E8732D] !p-0'>
              <p className='p-3 text-sm text-black'>{content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodasPreguntas
