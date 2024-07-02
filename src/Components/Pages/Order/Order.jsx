import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Providers/AuthProviders'

const Order = () => {
    const {user}=useContext(AuthContext)
    const [bookings,setBookings]=useState([])
    const url=`https://furniture-server-ecru.vercel.app/bookings?email=${user?.email}`
 
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBookings(data))
    },[url])

    const handleDelete=(id)=>{
        const proceed=confirm("Are you want to delete")
        if(proceed){
          console.log(bookings)
          fetch(`https://furniture-server-ecru.vercel.app/bookings/${id}`,{
            method:"DELETE"
          }
          )
          .then(res=>res.json())
          .then(data=>{
            if(data.deletedCount>0){
              alert("DELETED SUCCESSFULLY")
              const remaining=bookings.filter(booking=>booking._id!=id)
              setBookings(remaining)
            }
            console.log(data)
          }
          
          
          )
        }
      }
  return (
    <div>
         <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center">
               Your Order
            </h2>
            <p className="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">Thanks for making a purchase
                you can
                check our order summary from below</p>
       {
        bookings?.map((product,i)=> <section key={i} className="py-24 relative"
        
        >
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
           
            <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
                <div
                    className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
                    <div className="data">
                        <p className="font-semibold text-base leading-7 text-black">Order Id: <span className="text-indigo-600 font-medium">{product._id}</span></p>
                        
                    </div>
                 
                </div>
                <div className="w-full px-3 min-[400px]:px-6">
                    <div className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
                        <div className="img-box max-lg:w-full">
                            <img src={product.details.image} alt="Premium Watch image" 
                                className="aspect-square w-full lg:max-w-[140px]"/>
                        </div>
                        <div className="flex flex-row items-center w-full ">
                            <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                                <div className="flex items-center">
                                    <div className="">
                                        <h2 className="font-semibold text-xl leading-8 text-black mb-3">
                                            {product.details.name}</h2>
                                        <p className="font-normal text-lg leading-8 text-gray-500 mb-3 ">
                                            Brand: {product.details.brand}</p>
                                        <div className="flex items-center ">
                                            <p
                                                className="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                                                Size: <span className="text-gray-500">{product.size}</span></p>
                                            <p className="font-medium text-base leading-7 text-black ">Qty: <span
                                                    className="text-gray-500">{product.count}</span></p>
                                        </div>
                                    </div>

                                </div>
                                <div className="grid grid-cols-5">
                                    <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                                        <div className="flex gap-3 lg:block">
                                            <p className="font-medium text-sm leading-7 text-black">price</p>
                                            <p className="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">{((product.details.price)*(product.count)).toFixed(2)}</p>
                                        </div>
                                    </div>
                                    
                               
                                </div>
                            </div>


                        </div>
                    </div>

                   

                </div>
                <div className="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between ">
                    <div className="flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200">
                        <button
                        onClick={()=>handleDelete(product._id)}
                            className="flex outline-0 py-6 sm:pr-6  sm:border-r border-gray-200 whitespace-nowrap gap-2 items-center justify-center font-semibold group text-lg text-black bg-white transition-all duration-500 hover:text-indigo-600">
                            <svg className="stroke-black transition-all duration-500 group-hover:stroke-indigo-600" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                fill="none">
                                <path d="M5.5 5.5L16.5 16.5M16.5 5.5L5.5 16.5" stroke="" strokeWidth="1.6"
                                    strokeLinecap="round" />
                            </svg>
                            
                            Cancel Order
                        </button>
                    </div>

                </div>

            </div>
        </div>
    </section>)
       }
    </div>
  )
}

export default Order