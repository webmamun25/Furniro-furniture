import React from 'react'
import img1 from '../../../assets/furniture/gallery/image-1.png'
import img2 from '../../../assets/furniture/gallery/image-2.png'
import img3 from '../../../assets/furniture/gallery/image-3.png'
import img4 from '../../../assets/furniture/gallery/image-4.png'
import img5 from '../../../assets/furniture/gallery/image-5.png'
import img6 from '../../../assets/furniture/gallery/image-6.png'
import img7 from '../../../assets/furniture/gallery/image-7.png'
import img8 from '../../../assets/furniture/gallery/image-8.png'
import img9 from '../../../assets/furniture/gallery/image-9.png'
const Gallery = () => {
  return (

    <div>
    <header className="text-center">
      <h2 className="text-xl font-semibold  text-gray-700">Share your setup with</h2>

      <h1 className="mx-auto mt-4 max-w-md font-extrabold text-3xl mb-2">
      #FuniroFurniture
      </h1>
    </header>
<div className='grid grid-cols-3'>
        <div className=' grid grid-rows-2  gap-3'>
            <div className="grid grid-cols-3  gap-3">
                <img src={img1} className='w-full h-full'  alt="" />
                <img src={img2} className='col-span-2 h-80' alt="" />
            </div>
            <div className="grid grid-cols-4  gap-3">
                <img src={img3} className='h-full col-span-2 '  alt="" />
                <img src={img4} className='col-span-2 h-60 w-full' alt="" />
            </div>
            
        </div>
        <div className='grid grid-cols-1  justify-items-center items-center'>
                <img src={img5} alt="" />
        </div>
        <div className=' grid grid-rows-2  gap-3'>
            <div className="grid grid-cols-3  gap-3">
                <img src={img6} className='col-span-2'  alt="" />
                <img src={img7} className=' w-full h-full' alt="" />
            </div>
            <div className="grid grid-cols-4 gap-3">
                <img src={img8} className='h-full col-span-2 '  alt="" />
                <img src={img9} className='col-span-2 h-80' alt="" />
            </div>
            
        </div>

    </div>
    </div>
 
  )
}

export default Gallery