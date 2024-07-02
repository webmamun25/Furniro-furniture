import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Cart = () => {
  const {user}=useContext(AuthContext)
  console.log(user)
  const [cart, setCart] = useState([]);
  const [checkout,setCheckout]=useState([])
  const [checked,setChecked]=useState(false)
  
  useEffect(() => {
    setTimeout(()=>{
      fetch(`https://furniture-server-ecru.vercel.app/cart?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setCart(data));
    },5000)
  }, []);

   const handleChange=(product_id)=>{
   setChecked(event.target.checked)
   
   fetch(`https://furniture-server-ecru.vercel.app/cart/${product_id}`)
   .then(res => res.json())
   .then(data => setCheckout(data));
   }

  return (
    <div>
      <section>
        <div className='grid grid-cols-3 gap-4'>
          <div className='col-span-2'>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                  <tr>
                  <th className="sticky inset-y-0 start-0 bg-white px-2 py-2">
          <label htmlFor="SelectAll" className="sr-only">Select All</label>

          <input type="checkbox" id="SelectAll" className="size-5 rounded border-gray-300" />
        </th>
                    <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">Product</th>
                    <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">Price</th>
                    <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">Quantity</th>
                    <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">Size</th>
                    <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">Subtotal</th>
                    <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900"></th>
                  
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {cart.map((product, i) => (
                    <tr key={i}>
                      <td className="sticky inset-y-0 start-2 bg-white px-6 py-2">
          <label className="sr-only" htmlFor="Row1">Row 1</label>

          <input className={checked?"hidden":"size-5 rounded border-gray-300"} onChange={()=>{handleChange(product._id)}} type="checkbox"  id="Row1" />
        </td>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{product.details.name}</td>
                
                      
                      <td className="whitespace-nowrap px-6 py-2 text-gray-700">${parseFloat(product.details.price).toFixed(2)}</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.count}</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{product.size}</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">${parseFloat((product.count)* (product.details.price)).toFixed(2)}</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">Delete</td>
                    
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
        
        <div className='w-full space-x-8'>
        {
          checked && 
<>
          <h1 className='text-center'>Cart Totals</h1>
            <div
  className="relative w-screen max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
  aria-modal="true"
  role="dialog"
  tabIndex="-1"
>


  <div className="mt-4 space-y-6">
    <ul className="space-y-4">
      <li className="flex items-center gap-4">
        <img
          src={checkout?.details?.image}
          alt=""
          className="size-16 rounded object-cover"
        />

        <div>
          <h3 className="text-sm text-gray-900">{checkout?.details?.name}</h3>

          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt className="inline">Size:</dt>
              <dd className="inline">{checkout?.size}</dd>
            </div>

            <div>
              <dt className="inline">Quantity:</dt>
              <dd className="inline">{checkout?.count}</dd>
            </div>
          </dl>

          <p>Subtotal:{checkout?.details?.price*checkout?.count}</p>
          <p>Tax:15%</p>
          <p>Total:{checkout?.details?.price*checkout?.count+0.15*checkout?.details?.price*checkout?.count}</p>
        </div>
      </li>

  
    
    </ul>

    <div className="space-y-4 text-center">
     

      <a
        href="#"
        className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
      >
        Checkout
      </a>

      <Link
        to="/furniture"
        className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
      >
        Continue shopping
      </Link>
    </div>
  </div>
</div>
</>
        }
          </div>
          </div>
      </section>
    </div>
  );
};

export default Cart;