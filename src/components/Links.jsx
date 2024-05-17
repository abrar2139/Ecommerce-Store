import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../features/userSlice'

const Links = () => {
  const {totalQuantity,cart}=useSelector((state)=>state.userSlice);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCartTotal())
  },[cart])

  return (
    <>
     <Link className="text-[olive] font-semibold text-[18px] hover:text-[#646420]" to='/'>Home</Link>
     <Link className="text-[olive] font-semibold text-[18px] hover:text-[#696921]" to='/about'>About</Link>
     <Link className="text-[olive] font-semibold text-[18px] hover:text-[#686821]" to='/contact'>Contact</Link>
     <Link className="text-[olive] font-semibold text-[18px] hover:text-[#61611f]" to='/cart'>Cart (<span className='text-white'>{totalQuantity}</span>)</Link>
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
    <nav className='w-[43%] flex justify-end items-center '>
        <div className='hidden  md:flex justify-between w-full'>
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
