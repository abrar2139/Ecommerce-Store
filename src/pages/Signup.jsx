import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [firstName, setFirstName]= useState('')
    const [lastName, setLastName]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    const handleSubmit = (e) =>{
        e.preventDefault
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
    }
  return (
    <div>
        
        <section className="text-gray-600 bg-gradient-to-b from-[#f1f180] to-gray-500  body-font relative">
  <div className="container px-5 pb-10 pt-4 mx-auto">
    <div className="flex flex-col text-center w-full mb-6">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-500">Sign Up </h1>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="firstName" className="leading-7 text-lg text-gray-700">First Name</label>
            <input type="text" required value={firstName} onChange={(e)=>setFirstName(e.target.value)} id="firstName" name="fistName" className="w-full bg-transparent rounded border border-[#fafa6e] focus:border-[olive] focus:ring-2 focus:ring-[#f8f892] bg-gray-100 bg-opacity-50 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="lastName" className="leading-7 text-lg text-gray-700">Last Name</label>
            <input type="text" id="lastName" required value={lastName} onChange={(e)=>{setLastName(e.target.value)}} name="lastName" className="w-full bg-transparent rounded border border-[#fafa6e] focus:border-[olive] focus:ring-2 focus:ring-[#f8f892] bg-gray-100 bg-opacity-50 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-lg text-gray-700">Email</label>
            <input type="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required name="email" className="w-full bg-transparent rounded border border-[#fafa6e] focus:border-[olive] focus:ring-2 focus:ring-[#f8f892] bg-gray-100 bg-opacity-50 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="password" className="leading-7 text-lg text-gray-700">Password</label>
            <input type="password" required id="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" className="w-full bg-transparent rounded border border-[#fafa6e] focus:border-[olive] focus:ring-2 focus:ring-[#f8f892] bg-gray-100 bg-opacity-50 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <p className=" p-2 my-0 sm:my-1 md:my-1 lg:my-1 xl:my-1 w-full text-lg flex flex-wrap justify-center items-center text-gray-700"><span>If you have an account</span><Link className='text-indigo-700 hover:text-indigo-900 ml-5' to='/login'>Login</Link></p>
        <div className="p-2 w-full">
          <button type='Submit' className="flex mx-auto text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</section>

    </div>
  )
}

export default Signup