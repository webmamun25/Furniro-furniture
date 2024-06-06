import React, { useEffect, useState } from 'react'
import FurnitureCard from './FurnitureCard';

const FurnitureProducts = () => {
   const [furnitures,setFurnitures]=useState([]) 
  useEffect(()=>{
      fetch('./Products.json')
      .then(res=>res.json())
      .then(data=>setFurnitures(data))
    },[])
    return (
      <div className="App">
        <div className="grid grid-cols-3 gap-4">
        {furnitures.map((item, i) => (
          <FurnitureCard key={i} text={item} index={i} />
        ))}
      </div>
      </div>
    );
}

export default FurnitureProducts