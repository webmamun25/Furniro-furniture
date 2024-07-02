import React, { useEffect, useState } from 'react'
import FurnitureCard from './FurnitureCard';
import Service from '../Pages/Shared/Service/Service';

const FurnitureProducts = () => {
   const [furnitures,setFurnitures]=useState([]) 
  useEffect(()=>{
      fetch('https://furniture-server-ecru.vercel.app/products')
      .then(res=>res.json())
      .then(data=>setFurnitures(data))
    },[])

    const flashasale=furnitures.filter(furniture=>furniture.flashsale==true)
    const newProduct=furnitures.filter(furniture=>furniture.newProduct==true)
    console.log(flashasale)
    return (
      <div className="App">
        <div className="grid lg:grid-cols-2 gap-4">
        <div className="grid lg:grid-cols-2 gap-4">

        {flashasale.map((item, i) => (
          <FurnitureCard key={i} text={item} index={i} />
        ))}

        </div>
        <div className="grid lg:grid-cols-3 gap-4">

        {newProduct.map((item, i) => (
          <FurnitureCard key={i} text={item} index={i} />
        ))}

        </div>
      </div>
      <section className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-4">
   

   <Service></Service>
  </div>
</section>
      </div>
    );
}

export default FurnitureProducts