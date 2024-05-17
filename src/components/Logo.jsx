import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='flex justify-center items-center'>
<Link to='/'><img className='h-12 w-12 sm:h-14 sm:w-14 md:h-14 md:w-14 lg:h-14 lg:w-14 xl:h-14 xl:w-14 rounded-full object-cover object-center' src="https://images-platform.99static.com//jbOR84e4u_jb3JnRX4OzOZZBeLw=/642x655:1142x1155/fit-in/500x500/99designs-contests-attachments/114/114625/attachment_114625632" alt="" /></Link>
<Link to='/'><span className='px-1 text-[olive] font-bold text-2xl'>Ecom-Store</span></Link>
    </div>
  )
}

export default Logo