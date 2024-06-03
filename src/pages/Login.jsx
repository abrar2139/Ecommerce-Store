import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [eamil, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const handleSubmit = (e) =>{
    e.preventDefault()
    setPassword('')
    setEmail('')
  }
  return (
    <div>
        
        <section className="text-gray-600 h-[85vh] bg-gradient-to-b from-gray-500 to-[#f1f180]  body-font relative">
  <div className="container px-5 pt-20 mx-auto">
    <form   className="flex flex-col text-center w-full mb-6">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-3 text-gray-700">Login </h1>
    </form>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-lg text-gray-700">Email</label>
            <input type="email"
            value={eamil}
            onChange={(e)=>setEmail(e.target.value)}
              id="email"
              name="email"
              required
              className="w-full bg-transparent rounded border border-[#fafa6e] focus:border-[olive] focus:ring-2 focus:ring-[#f8f892] bg-gray-100 bg-opacity-50 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="password" className="leading-7 text-lg text-gray-700">Password</label>
            <input
             type="password" 
             id="password" 
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
             name="password"
             required
              className="w-full bg-transparent rounded border border-[#fafa6e] focus:border-[olive] focus:ring-2 focus:ring-[#f8f892] bg-gray-100 bg-opacity-50 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <p className=" p-2 my-1 w-full text-lg flex flex-wrap justify-center items-center text-gray-700"><span>Don't have an account</span><Link className='text-indigo-700 ml-5 700 hover:text-indigo-900' to='/signup'>Sign Up</Link></p>
        <div className="p-2 w-full">
          <button type='submit' className="flex mx-auto text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg">Login</button>
        </div>
      </form>
    </div>
  </div>
</section>

    </div>
  )
}

export default Login