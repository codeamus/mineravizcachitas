import BtnScrollDown from "@/components/molecules/BtnScrollDown"


const DescubreProyecto = () => {
  return (
    <section id="descubre" className="relative px-10 bg-[#E8E8E8] py-20">
     <BtnScrollDown section='descubre' bgColor="bg-[#E8732D]" />
     <h2 className="text-3xl lg:text-5xl text-black font-bold text-center pb-10">Navega y descubre el proyecto</h2>
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10">
          <article>
               <h3 className="font-bold text-[#009145] text-center text-balance border-b border-[#009145]    mb-4 py-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
               <iframe className="w-full h-[300px]" src="https://www.youtube.com/embed/aa73LUEtyDA?si=jb_kHe9mZf0F-Kfb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
               <p className="text-black text-center mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident expedita, sunt quia laudantium repellendus ut eaque. Voluptatibus, sed nemo rerum suscipit pariatur porro, beatae perferendis, ducimus reiciendis officiis nesciunt nobis?
               </p>
          </article>
          <article>
               <h3 className="font-bold text-[#009145] text-center text-balance border-b border-[#009145]    mb-4 py-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
               <iframe className="w-full h-[300px]" src="https://www.youtube.com/embed/aa73LUEtyDA?si=jb_kHe9mZf0F-Kfb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
               <p className="text-black text-center mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident expedita, sunt quia laudantium repellendus ut eaque. Voluptatibus, sed nemo rerum suscipit pariatur porro, beatae perferendis, ducimus reiciendis officiis nesciunt nobis?
               </p>
          </article>
          <article>
               <h3 className="font-bold text-[#009145] text-center text-balance border-b border-[#009145]    mb-4 py-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
               <iframe className="w-full h-[300px]" src="https://www.youtube.com/embed/aa73LUEtyDA?si=jb_kHe9mZf0F-Kfb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
               <p className="text-black text-center mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident expedita, sunt quia laudantium repellendus ut eaque. Voluptatibus, sed nemo rerum suscipit pariatur porro, beatae perferendis, ducimus reiciendis officiis nesciunt nobis?
               </p>
          </article>
     </div>
    </section>
  )
}

export default DescubreProyecto