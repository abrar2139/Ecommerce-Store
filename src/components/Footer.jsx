import { ChevronRight } from 'lucide-react'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
 function Footer() {
  return (
    <footer className="w-full bg-gray-400 p-4">
      <div className="mx-auto flex max-w-6xl flex-col items-start space-x-4 md:flex-row">
        <div className="w-full px-4 md:w-1/2 lg:px-0">
          <h1 className="w-full text-[olive] text-2xl sm:rext-3xl md:text-3xl lg:text-3xl xl:text-3xl font-bold">Subscribe to our Newsletter</h1>
          <form action="" className="mt-4 inline-flex w-full items-center md:w-3/4">
            <input
              className="flex h-10 w-full text-[olive] rounded-md border border-[olive] bg-transparent px-3 py-2 text-sm placeholder:text-[olive] focus:outline-none focus:ring-1 focus:ring-[olive] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Email"
            ></input>
            <button
              type="button"
              className="ml-4 rounded-full bg-[olive] px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[olive]"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </form>
        </div>
        <div className="mt-8 gap-14 flex justify-between items-center w-full md:w-1/2 flex-wrap  ">
          
            <div className="mb-4 mx-3 lg:mb-0 flex items-center justify-center flex-col">
              <p className="mb-6 text-lg font-semibold text-[olive] ">Explores</p>
              <ul className="flex flex-col space-y-4 text-[16px] font-medium text-gray-500 items-center mx-auto w-[100px]">
              <li className='cursor-pointer hover:text-[olive]'>Favourite</li>
              <li className='cursor-pointer hover:text-[olive]'>Offers </li>
              <li className='cursor-pointer hover:text-[olive]'>Promos</li>
              <li className='cursor-pointer hover:text-[olive]'>Our Vision</li>
              </ul>
            </div>
            <div className="mb-4 mx-3 lg:mb-0 flex items-center justify-center flex-col">
              <p className="mb-6 text-lg font-semibold text-[olive] ">Important Links</p>
              <ul className="flex flex-col space-y-4 text-[16px] font-medium text-gray-500 items-center w-[100px]">
              <li className='cursor-pointer hover:text-[olive]'>Shop</li>
              <li className='cursor-pointer hover:text-[olive]'>About</li>
              <li className='cursor-pointer hover:text-[olive]'>Cart</li>
              <li className='cursor-pointer hover:text-[olive]'>Cony</li>

              </ul>
            </div>
            <div className="mb-4 mx-3 lg:mb-0 flex items-center justify-center flex-col">
              <p className="mb-6 text-lg font-semibold text-[olive] ">Social media</p>
              <ul className="flex flex-col justify-center items-center space-y-4 text-[25px] font-medium text-gray-500 w-[100px]">
                <li className='cursor-pointer hover:text-[olive]'><FaFacebookF /></li>
                <li className='cursor-pointer hover:text-[olive]'><FaTwitter /></li>
                <li className='cursor-pointer hover:text-[olive]'><FaInstagram /></li>
                <li className='cursor-pointer hover:text-[olive]'><FaWhatsapp /></li>
              </ul>
            </div>
          
        </div>
      </div>
    </footer>
  )
}
export default Footer