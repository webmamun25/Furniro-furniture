import React from 'react'

const Service = () => {
  return (
    <div className="mt-8 sm:mt-12 bg-[#FAF3EA]">
    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="flex rounded-lg  px-4 py-8 space-x-4 text-center">
        <div>
        <img src="https://i.postimg.cc/bNyw7kzR/Group.png" alt="" />
        </div>
        <div>
        <dd className="text-2xl font-extrabold text-blue-600 md:text-2xl">High Quality</dd>
        <dt className="order-last text-lg font-medium text-gray-500">crafted from top materials</dt>


        </div>
      
      </div>

      <div className="flex rounded-lg  px-4 py-8 space-x-4 text-center">
        <div>
        <img src="https://i.postimg.cc/mgh2D41z/shipping.png" alt="" />
        </div>
        <div>
        <dd className="text-2xl font-extrabold text-blue-600 md:text-2xl">Free Shipping</dd>
        <dt className="order-last text-lg font-medium text-gray-500">Order over 150 $</dt>


        </div>
      
      </div>

      <div className="flex rounded-lg  px-4 py-8 space-x-4 text-center">
        <div>
        <img src="https://i.postimg.cc/mZNrp8GD/customer-support.png" alt="" />
        </div>
        <div>
        <dd className="text-2xl font-extrabold text-blue-600 md:text-2xl">24 / 7 Support</dd>
        <dt className="order-last text-lg font-medium text-gray-500">Dedicated support</dt>


        </div>
      
      </div>
    </dl>
  </div>
  )
}

export default Service