import React from 'react'
import Logo from './Logo'
import Nav from './Links'

const Navbar = () => {

  return (
<header className='bg-gray-400 flex-wrap sticky top-0 z-[20] mx-auto flex w-full items-center justify-between px-2 py-5 sm:p-5 md:p-5 lg:p-5 xl:p-5 '>
  <Logo/> 
  <Nav/>
</header>
  )
}

export default Navbar
