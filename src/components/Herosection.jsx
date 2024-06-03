import React from 'react'
import { Link } from 'react-router-dom'

const Herosection = () => {
  return (
    <section className="text-gray-600 body-font bg-gradient-to-b  from-[olive] to-[#f1f180]">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[olive]">Our products have amazing 
          <br className="hidden lg:inline-block"/> recognition in the world
        </h1>
        <p className="mb-8 leading-relaxed">An ecommerce store requires secure payment gateways, intuitive navigation, responsive design, detailed product listings, robust inventory management, and efficient customer support.</p>
        <div className="flex justify-center">
         <Link to='/contact'><button className="inline-flex text-white bg-[olive] border-0 py-2 px-6 focus:outline-none hover:bg-[#818116] rounded text-lg">Stay With Us</button></Link> 
         
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="hero" src="https://5.imimg.com/data5/SELLER/Default/2023/8/336492134/UQ/LX/CW/31783004/genuine-leather-women-hand-bag-500x500.jpg"/>
      </div>
    </div>
  </section>
  )
}

export default Herosection