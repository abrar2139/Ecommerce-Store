import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../features/userSlice'
import { FaCartArrowDown } from "react-icons/fa";
const Links = () => {
  const {totalQuantity,cart}=useSelector((state)=>state.userSlice);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCartTotal())
  },[cart])

  return (
    <>
    {/* <div className='flex w-[300px] justify-between items-center  '> */}

     <Link className="text-[olive]  font-semibold text-[18px] hover:text-[#646420]" to='/'>Shop</Link>
     <Link className="text-[olive]  font-semibold text-[18px] hover:text-[#696921]" to='/about'>About</Link>
     <Link className="text-[olive]  font-semibold text-[18px] hover:text-[#686821]" to='/contact'>Contact</Link>
    {/* </div> */}
     {/* <div className='flex w-[170px] justify-between items-center  '> */}

     <Link className="text-[olive] border-solid border-[olive] border-2 py-1 px-6 rounded-3xl hover:bg-[olive] hover:text-gray-700 font-semibold text-[18px] " to='/login'>Login</Link>
     <Link className="text-[olive]  relative  justify-center items-center flex font-semibold text-[18px] hover:text-[#61611f]" to='/cart'><FaCartArrowDown className='text-[40px]'/> <span className='text-black text-sm absolute flex justify-center items-center -right-2 -top-2 bg-white h-4 w-4 rounded-full '>{totalQuantity}</span></Link>
     {/* </div> */}
    </>
  )
}
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleNavbar = ()=>{
        setIsOpen(!isOpen)
    }
  return (
    <>
    <nav className=' w-[50%] lg:w-[50%] xl:w-[50%] md:w-[60%]    flex justify-end items-center '>
        <div className='hidden  md:flex justify-between items-center w-full'>
        <Links/>
        </div>
        <div className='md:hidden text-white absolute top-8 right-4'>
            <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu/>}</button>
        </div>
    </nav>
    {isOpen && (
        <div className='md:hidden mt-4 lg:hideen xl:hidden xxl:hidden flex basis-full flex-col items-center gap-6 text-[olive]'>
            <Links/>
        </div>

    )}
    </>
  )
}

export default Nav
