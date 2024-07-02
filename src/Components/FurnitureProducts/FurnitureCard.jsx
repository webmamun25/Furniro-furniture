/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";
import { FaShare, FaShareAlt } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";

function FurnitureCard({ text, index }) {
 
  const {_id,product_id,name,brand,description,flashsale,newProduct,image}=text
  return (
    <motion.div
      className="card"
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: index % 2 === 0 ? 50 : -50
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1 // Animation duration
        }
      }}
      viewport={{ once: false }}
    >
     <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"> 
     
  <img
    alt=""
    src={image}
    className="h-56 w-full object-cover relative"
  />
  {
    flashsale?<span className="bg-[#E97171] text-white absolute top-5 right-5 px-4 py-4 rounded-full">-60%</span>:<span className="bg-[#2EC1AC] text-white rounded-full absolute top-5 right-5 px-4 py-4 ">new</span>
  }

  <div className="bg-white p-4 sm:p-6">
    

    <a href="#">
      <h3 className="mt-0.5 text-lg text-gray-900 truncate">{name}</h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
    {description}
    </p>
  </div>
</article>
<div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-white opacity-0 transition duration-300 ease-in-out hover:opacity-80">
          <div className="flex justify-center items-center">
            <motion.div initial={{scale:0.8}} whileHover={{
    scale: 1,
    transition: { duration: 0.3 ,ease:"easeOut"},
  }} className="absolute top-36">
            <Link to={`/furniture/${_id}`} className="btn btn-neutral text-[#B88E2F] text-2xl rounded-md  font-semibold">Add to cart</Link>
            </motion.div>
            <div  className="absolute top-52">
            <FaShareAlt className="inline text-black ml-4"/> <span className="text-black">Share</span> 
            <AiFillLike className="inline text-black ml-4" /> <span className="text-black">Like</span> 
            </div>
         
          </div>
    
    </div>
    </motion.div>
  );
}

export default FurnitureCard;