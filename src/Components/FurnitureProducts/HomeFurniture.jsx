import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HomeFurniture = () => {
    const [furnitures,setFurnitures]=useState([]) 
    useEffect(()=>{
        fetch('https://furniture-server-ecru.vercel.app/products')
        .then(res=>res.json())
        .then(data=>setFurnitures(data))
      },[])
      const flashsale=furnitures.filter(furniture=>furniture.flashsale==true)
    const newProduct=furnitures.filter(furniture=>furniture.newProduct==true)
    console.log(flashsale)
  return (
    <div>
        
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h1 className='text-center font-semibold text-4xl'>Our Products</h1>
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full mt-5">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src={flashsale[0]?.image}
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 bg-red-300 px-4 py-2 rounded-md text-white hover:text-deep-purple-accent-700 object-cover"
                aria-label="Category"
                title="traveling"
              >
                -30%
              </a>
              
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              {flashsale[0]?.name}
            </a>
            <p className="mb-2 text-gray-700">
              {flashsale[0]?.description.slice(0,100)}...
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              ${flashsale[0]?.price}
            </a>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src={newProduct[0]?.image}
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 ">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors bg-green-500 px-4 py-2 rounded-md text-white duration-200  hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                new
              </a>
              
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Simple is better"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              {newProduct[0]?.name}
            </a>
            <p className="mb-2 text-gray-700">
              {newProduct[0]?.description.slice(0,100)}...
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              ${newProduct[0]?.price}
            </a>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src={flashsale[4]?.image}
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 ">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 bg-red-300 px-4 py-2 rounded-md text-white hover:text-deep-purple-accent-700 object-cover"
                aria-label="Category"
                title="traveling"
              >
                -40%
              </a>
              
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              {flashsale[4]?.name}
            </a>
            <p className="mb-2 text-gray-700">
              {flashsale[4]?.description.slice(0,100)}...
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              ${flashsale[4]?.price}
            </a>
          </div>
        </div>
      </div>
    </div>


    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src={newProduct[5]?.image}
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 ">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors bg-green-500 px-4 py-2 rounded-md text-white duration-200  hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                new
              </a>
              
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Simple is better"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              {newProduct[5]?.name}
            </a>
            <p className="mb-2 text-gray-700">
              {newProduct[5]?.description.slice(0,100)}...
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              ${newProduct[5]?.price}
            </a>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src={flashsale[3]?.image}
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 bg-red-300 px-4 py-2 rounded-md text-white hover:text-deep-purple-accent-700 object-cover"
                aria-label="Category"
                title="traveling"
              >
                -50%
              </a>
              
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              {flashsale[3]?.name}
            </a>
            <p className="mb-2 text-gray-700">
              {flashsale[3]?.description.slice(0,100)}...
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              ${flashsale[3]?.price}
            </a>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src={newProduct[2]?.image}
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors bg-green-500 px-4 py-2 rounded-md text-white duration-200  hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                new
              </a>
              
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Simple is better"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              {newProduct[2]?.name}
            </a>
            <p className="mb-2 text-gray-700">
              {newProduct[2]?.description.slice(0,100)}...
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              ${newProduct[2]?.price}
            </a>
          </div>
        </div>
      </div>
    </div>
    <h1 className='text-center'><Link to="/furniture"  className=' border border-[#B88E2F] px-8 py-4 font-semibold text-[#B88E2F]'>Show More</Link></h1>
    </div>
  )
}

export default HomeFurniture