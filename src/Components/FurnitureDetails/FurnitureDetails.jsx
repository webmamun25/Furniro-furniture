import { useAnimationControls } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom'
import {motion} from 'framer-motion'
import Cart from '../FurnitureCart/Cart'
import { AuthContext } from '../Providers/AuthProviders'

const FurnitureDetails = () => {
  const {user,cartuser,setBuy,buy}=useContext(AuthContext)
  const navigate=useNavigate()
    const furnitureDetails=useLoaderData()
    const [size,setSize]=useState('L')
   
    const [count,setCount]=useState(1)
  
    console.log(furnitureDetails)
    const start=Math.floor(Math.random() * (5-0+1)+0)
 
    const end= Math.floor(Math.random() * (15 - 10 + 1)) + 10;
  
   
    const [furnitures,setFurnitures]=useState([]) 

    const handleSize=(e)=>{
      e.preventDefault()
      setSize(e.target.innerText)
    }
    


     const handleCart=(details,count,size,user) =>{
      event.preventDefault()
    
      const cart={details,count,size,user}
      fetch("https://furniture-server-ecru.vercel.app/cart",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(cart)
      })
     
      navigate('/furniture/cart')

   
      
   

     }
     const handleBuy=(details,count,size,user)=>{
      const totalProduct={details,count,size,user}
      setBuy(totalProduct)
      navigate('/furniture/buynow')
     }
     console.log(buy)
   

    useEffect(()=>{
        fetch('https://furniture-server-ecru.vercel.app/products')
        .then(res=>res.json())
        .then(data=>setFurnitures(data))
      },[])
  
      const flashasale=furnitures.filter(furniture=>furniture.flashsale==true)
      const newProduct=furnitures.filter(furniture=>furniture.newProduct==true)

    const controls=useAnimationControls()
    const background=useAnimationControls()
    
    const handleBlue=()=>{
      background.start(
        {
          backgroundColor:"#816DFA",
          clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
        }
      )
      controls.start({
        x: [500,0,-500,0],
        
        clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
        transition: { duration: 1 }
      })

        
    }
    const handleBlack=()=>{
      background.start(
        { clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          backgroundColor:"black"
        }
      )
      controls.start({
        x: [500,0,-500,0],
        clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
       
        transition: { duration: 1 }
      })

        
    }
    const handleGolden=()=>{
      background.start(
        {clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
          backgroundColor:"#B88E2F"
        }
      )
      controls.start({
        x: [500,0,-500,0],
        clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
        
        transition: { duration: 1 }
      })

        
    }
    
  return (
    <div>
        <section className='p-8 bg-[#F9F1E7]'>
        

<nav aria-label="Breadcrumb">
  <ol className="flex items-center gap-1 text-sm text-gray-600">
    <li>
      <a href="#" className="block transition hover:text-gray-700">
        <span className="sr-only"> Home </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </a>
    </li>

    <li className="rtl:rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </li>

    <li>
      <a href="#" className="block transition hover:text-gray-700"> Products </a>
    </li>

    <li className="rtl:rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </li>

    <li>
      <a href="#" className="block transition hover:text-gray-700"> {furnitureDetails.name} </a>
    </li>
  </ol>
</nav>
        </section>

        <section className="product_card">

          <div className='flex py-8 px-8'>
            <motion.div animate={background} className='h-[500px] rounded-md bg-red-500'>
              <motion.img animate={controls} className='w-full h-full rounded-md' src={furnitureDetails.image} alt="" />
            </motion.div>
            <div className='h-[700px] ms-8 space-y-6'>
              <p className='text-3xl font-bold'>{furnitureDetails.name}</p>
              <p className='text-[#9F9F9F]'>${furnitureDetails.price}</p>
              <p className='text-sm'>{furnitureDetails.description}</p>
              <div>
                <p className='text-[#9F9F9F] mb-3'>Size</p>
                <div className='flex space-x-3'>
                  <button onClick={handleSize} className='px-3 py-3 hover:text-white bg-[#F9F1E7] hover:bg-[#B88E2F] rounded-md'>L</button><button onClick={handleSize} className='px-3 py-3 bg-[#F9F1E7] hover:text-white hover:bg-[#B88E2F] rounded-md'>XL</button><button onClick={handleSize} className='rounded-md px-3 py-3 bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white'>XS</button>
                </div>
              </div>
              <div>
                <p className='text-[#9F9F9F] mb-3'>Color</p>
                <div className='flex space-x-3'>
                  <button onClick={()=>{
                    handleBlue
             
                    }} className='size-8 px-3 py-3  bg-[#816DFA]  rounded-full'></button><button onClick={handleBlack}  className='size-8 px-3 py-3 bg-black  rounded-full'></button><button onClick={handleGolden}  className='size-8 rounded-full px-3 py-3 bg-[#B88E2F]  '></button>
                </div>
              </div>
              <div className='flex space-x-8 '>
                <div>
                 <div className="flex rounded-md text-3xl space-x-6 px-8 py-4  border border-[#9F9F9F]">
                 <button onClick={()=>setCount(count-1)} >-</button><span>{count}</span><button onClick={()=>setCount(count+1)}>+</button>
                 </div>
                </div>
                <div className='px-8 py-4 flex flex-col text-3xl justify-center items-center rounded-md border border-black'>
                  <button onClick={()=>{
                    
                    handleCart(furnitureDetails,count,size,user)
                    
                    }}> Add To Cart</button>
                    
                   
                </div>
                <div className='px-8 py-4 flex flex-col text-3xl justify-center items-center rounded-md border border-black'>
                  <button onClick={()=>{
                    
                    handleBuy(furnitureDetails,count,size,user)
                    
                    }}> Buy Now</button>
                    
                   
                </div>
              </div>
              <div className=''>
              <hr className=' border border-[#D9D9D9]' />
              </div>

              <div className='text-3xl'>
                Category: <span className='text-[#816DFA]'>{furnitureDetails.category}</span> 
              </div>
          
            </div>
          
          </div>
        
          
        </section>

        <hr />

        <section className="related-product">
        <h1 className='mt-4 text-4xl font-semibold text-center'>Related Products</h1>
        <div className="grid grid-cols-3 gap-4 mt-8">
        {
          furnitureDetails.flashasale==true?<>
      
             
          {
            flashasale.slice(start,end).map((flashproduct,i)=><div key={i} className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
      <a href="/" aria-label="Article"><img src={flashproduct.image} className="object-cover w-full h-64 rounded" alt="" /></a>
      <div className="py-5">
        <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
          {flashproduct.name}
        </p>
        <a href="/" aria-label="Article" className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"><p className="text-2xl font-bold leading-5">{flashproduct.price}</p></a>
        <p className="mb-4 text-gray-700">
          {flashproduct.category}
        </p>
       
      </div>

      
    </div>
    
   
  </div>

            )
          }
          
          
          </>:<>
          
          {
            newProduct.slice(start,end).map((flashproduct,i)=><div key={i} className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
      <a href="/" aria-label="Article"><img src={flashproduct.image} className="object-cover w-full h-64 rounded" alt="" /></a>
      <div className="py-5">
        <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
          {flashproduct.name}
        </p>
        <a href="/" aria-label="Article" className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"><p className="text-2xl font-bold leading-5">{flashproduct.price}</p></a>
        <p className="mb-4 text-gray-700">
          {flashproduct.category}
        </p>
       
      </div>

      
    </div>
    
   
  </div>

            )
          }


          </>
        }
        </div>
        <Link to='/furniture' className='flex justify-center items-center'>  <button className='border border-yellow-800 px-8 py-4  mx-auto'>Load More</button></Link>
        </section>

      
      
    </div>
  )
}

export default FurnitureDetails