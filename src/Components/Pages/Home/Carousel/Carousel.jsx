import React from 'react'
import img1 from '../../../../assets/furniture/carousal/image1.png'
import img2 from '../../../../assets/furniture/carousal/image2.png'
import img3 from '../../../../assets/furniture/carousal/image3.png'
const Carousel = () => {
    
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header className="text-center">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Browse The Range</h2>

      <p className="mx-auto mt-4 max-w-md text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
        dicta incidunt est ipsam, officia dolor fugit natus?
      </p>
    </header>

    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src={img1}
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

         
        </a>
        <h3 className='mt-8 font-semibold text-center'>Dining</h3>
      </li>
     

    

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src={img2}
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

      
        </a>
        <h3 className='mt-8 font-semibold text-center'>Living</h3>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src={img3}
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

      
        </a>
        <h3 className='mt-8 font-semibold text-center'>Bedroom</h3>
      </li>
    </ul>
  </div>
</section>
  )
}

export default Carousel