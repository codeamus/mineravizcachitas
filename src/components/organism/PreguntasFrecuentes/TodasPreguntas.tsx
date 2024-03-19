import { FAQS_PAGE } from '@/const/faqs'

const TodasPreguntas = () => {
  return (
    <div className='relative'>
      <h2 className='after:content[] w-full bg-[#009145] py-4 text-center text-2xl font-bold uppercase text-white after:cp-v after:absolute after:left-0 after:right-0 after:top-[60px] after:m-auto after:h-[80px] after:w-[80px] after:bg-[#009145] lg:text-4xl lg:after:top-[70px]'>
        Preguntas Frecuentes
      </h2>
      <div className='my-10 flex flex-col items-center justify-center px-4'>
        {FAQS_PAGE.map(({ title, content }, index) => (
          <details className='group mb-4 w-full max-w-3xl' key={index}>
            <summary className='flex cursor-pointer list-none items-start justify-between rounded-none border border-[#E8732D] bg-white p-3 transition-all duration-300 hover:bg-[#E8732D] [&_span.title]:hover:text-white'>
              <span className='text-sm font-bold text-black title duration-300'>{title}</span>
              <span className='transition group-open:rotate-180'>
                <svg
                  fill='none'
                  height='24'
                  shape-rendering='geometricPrecision'
                  stroke='#000'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='1.5'
                  viewBox='0 0 24 24'
                  width='24'
                >
                  <path d='M6 9l6 6 6-6'></path>
                </svg>
              </span>
            </summary>
            <p className='group-open:animate-fadeIn border-b border-l border-r border-[#E8732D] p-3 text-sm text-black'>
              {content}
            </p>
          </details>
        ))}
      </div>
    </div>
  )
}

export default TodasPreguntas
