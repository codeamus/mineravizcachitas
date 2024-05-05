import BtnScrollDown from '@/components/molecules/BtnScrollDown'
import IconDownload from '@/assets/icons/icon-download.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { ArchivoType, QuienesSomosType } from '@/types/QuienesSomos'

const Documentos = ({ dataDocumentos }: QuienesSomosType) => {
  return (
    <section
      id="documentos"
      className="relative -top-[25px] mx-10 h-full border-t border-[#009145] pt-20 lg:mx-20"
    >
      <BtnScrollDown section="documentos" />
      <div className="flex flex-col lg:flex-row">
        <div className="flex w-full flex-col items-center border-r border-none border-[#009145] lg:w-1/2 lg:items-end lg:border-solid lg:pr-10">
          <span className="block w-fit bg-[#009145] px-4 py-2 text-sm font-bold uppercase text-white">
            Transparencia
          </span>
          <h2 className="my-6 text-3xl font-bold uppercase text-black lg:text-end">
            {dataDocumentos?.title}
          </h2>
          <p className="text-black lg:text-end">
            {dataDocumentos?.description}
          </p>
        </div>
        <div className="mt-10 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
          {dataDocumentos?.files.map((file: ArchivoType, index: number) => (
            <div
              className="mb-4 flex flex-row items-start justify-start gap-6"
              key={index}
            >
              <a
                href={file.file_pdf.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 size-40 lg:size-36"
              >
                <LazyLoadImage
                  src={IconDownload}
                  alt={`Icono de descarga para el archivo ${file.name}`}
                  className="transition-all duration-300 hover:scale-110"
                />
              </a>
              <div className="w-full">
                <h3 className="mb-2 text-lg uppercase text-black">
                  {file.name}
                </h3>
                <p className="text-sm text-black">{file.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Documentos
