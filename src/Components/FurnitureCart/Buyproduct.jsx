import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Providers/AuthProviders'


const Buyproduct = () => {
    const {buy}=useContext(AuthContext)
    console.log(buy)
    const[showProduct,setshowProduct]=useState([])
    useEffect(()=>{
       
            fetch(`https://furniture-server-ecru.vercel.app/products/${buy.details._id}`)
            .then(res=>res.json())
            .then(data=>setshowProduct(data))
       

    },[])
  
    return (
    <div>
        <a href="#" className="group block overflow-hidden">
  <div className="relative h-[350px] sm:h-[450px]">
    <img
      src={showProduct.image}
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src={showProduct.image}
      alt=""
      className="absolute inset-0 h-full w-full object-contain opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="relative bg-white pt-3">
    <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
     {showProduct.name}
    </h3>

    <div className="mt-1.5 flex items-center justify-between text-gray-900">
      <p className="tracking-wide">{showProduct.price}</p>

      <p className="text-xs uppercase tracking-wide">{buy.size}</p>
    </div>
  </div>
</a>

<hr />

        <p>subtotal:${buy?.details?.price}</p>
        <p>tax:15%</p>
        <p>total:${((buy?.details?.price)+0.15*(buy?.details?.price)).toFixed(2)}</p>

    </div>
  )
}

export default Buyproduct