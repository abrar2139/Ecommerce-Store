import React, { useState } from 'react'

const Contact = () => {
  const [email, setEmail]= useState('')
  const [name, setName]= useState('')
  const [textarea, setTextarea]= useState('')
  const handleSubmit = (e) =>{
    e.preventDefault()
    setName('')
    setEmail('')
    setTextarea('')
  }
  return (
    <div>
      <section className="text-gray-600 bg-gradient-to-r from-[olive] to-[#fafa83] body-font relative  max-h-fit">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe 
              width="100%" 
              height="100%" 
              className="absolute inset-0 border-0"
              title="map" 
              style={{border: 0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54449.51889883374!2d74.25025105476377!3d31.466574666814857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907633594995b%3A0x37d3adc935a48e75!2sLevel%20Pakistan!5e0!3m2!1sen!2s!4v1715561246608!5m2!1sen!2s"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">Ecom-Store model town lahore punjab pakistan</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a className="text-indigo-500 leading-relaxed">ecomstore786@gmail.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="lg:w-1/3 md:w-1/2 bg-transparent flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-[olive] text-3xl text-center mb-4 font-bold title-font">Contact Us</h2>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-xl text-[olive]">Name</label>
              <input type="text" required value={name} onChange={(e)=>setName(e.target.value)} id="name" name="name" className="w-full bg-transparent rounded border border-[#f7f78d] focus:border-[olive] focus:ring-2 focus:ring-[#f8f8b2] text-base outline-none text-[olive] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-xl text-[olive]">Email</label>
              <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} id="email" name="email" className="w-full bg-transparent rounded border border-[#fafa8b] focus:border-[olive] focus:ring-2 focus:ring-[#fdfda7] text-base outline-none text-[olive] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-xl text-[olive]">Message</label>
              <textarea value={textarea} required rows='3' cols='30' onChange={(e)=>setTextarea(e.target.value)} id="message" name="message" className="w-full bg-transparent rounded border border-[#fafa6e] focus:border-[olive] focus:ring-2 focus:ring-[#f8f892] h-32 text-base outline-none text-[olive] py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button type='submit' className="text-white bg-[olive] border-0 py-2 px-6 focus:outline-none hover:bg-[#747414] rounded text-lg font-medium">Send</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
