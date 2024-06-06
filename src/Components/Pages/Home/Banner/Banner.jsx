import React from 'react'

const Banner = () => {
  return (
 
  
  <section
    className="relative bg-[url(https://i.ibb.co/58SWdFG/scandinavian-interior-mockup-wall-decal-background-1.png)] bg-cover bg-center bg-no-repeat"
  >
    <div
      className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
    ></div>
  
    <div
      className="relative  max-w-screen-xl px-8 py-8 sm:px-6 lg:flex lg:justify-end lg:h-screen lg:items-center  lg:py-8 lg:px-8"
    >
      <div className='bg-[#FFF3E3] flex flex-col text-justify p-14'>
        <span className='mb-2  text-black tracking-wider '>New Arrival</span>
        <h3 className='font-extrabold text-[#B88E2F] text-4xl mb-2 leading-10'>Discover Our <br /> New Collection</h3>
        <p className='mb-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit tellus, luctus nec ullamcorper mattis.</p>
        <button className=' bg-[#B88E2F] px-4 py-4 mt-4 w-28 rounded-md text-white'>BUY NOW</button>
      </div>
      
    </div>
  </section>
  )
}

export default Banner