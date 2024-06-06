import React from 'react'
import Banner from '../Banner/Banner'
import Carousel from '../Carousel/Carousel'
import FurnitureCarousel from '../FurnitureCarousel/FurnitureCarousel'
import Gallery from '../../FurnitureGallery/Gallery'



const Home = () => {
  return (
   <>
    <Banner></Banner>
    <Carousel></Carousel>
    <Gallery></Gallery>
    <FurnitureCarousel></FurnitureCarousel>
    </>
  )
}

export default Home