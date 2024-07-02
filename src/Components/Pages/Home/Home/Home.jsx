import React from 'react'
import Banner from '../Banner/Banner'
import Carousel from '../Carousel/Carousel'
import FurnitureCarousel from '../FurnitureCarousel/FurnitureCarousel'
import Gallery from '../../FurnitureGallery/Gallery'
import HomeFurniture from '../../../FurnitureProducts/HomeFurniture'
import Service from '../../Shared/Service/Service'



const Home = () => {
  return (
   <>
    <Banner></Banner>
    <Carousel></Carousel>
    <Gallery></Gallery>
    <HomeFurniture></HomeFurniture>
    <FurnitureCarousel></FurnitureCarousel>
    <Service></Service>
    </>
  )
}

export default Home