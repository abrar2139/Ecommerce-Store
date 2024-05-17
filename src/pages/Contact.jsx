import React from 'react'

const Contact = () => {
  return (
    <div>
      <section class="text-gray-600 bg-gradient-to-r from-[olive] to-[#fafa83] body-font relative  max-h-fit">
  <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54449.51889883374!2d74.25025105476377!3d31.466574666814857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907633594995b%3A0x37d3adc935a48e75!2sLevel%20Pakistan!5e0!3m2!1sen!2s!4v1715561246608!5m2!1sen!2s"></iframe>
      <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p class="mt-1">Ecom-Store model town lahore punjab pakistan</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a class="text-indigo-500 leading-relaxed">ecomstore786@gmail.com</a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p class="leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div>
    <div class="lg:w-1/3 md:w-1/2 bg-transparent flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 class="text-[olive] text-3xl text-center mb-4 font-bold title-font">Contact Us</h2>
      
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-xl text-[olive]">Name</label>
        <input type="text" id="name" name="name" class="w-full bg-transparent rounded border border-[#f7f78d] focus:border-[olive] focus:ring-2 focus:ring-[#f8f8b2] text-base outline-none text-[olive] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-xl text-[olive]">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-transparent rounded border border-[#fafa8b] focus:border-[olive] focus:ring-2 focus:ring-[#fdfda7] text-base outline-none text-[olive] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-xl text-[olive]">Message</label>
        <textarea id="message" name="message" class="w-full bg-transparent rounded border border-[#fafa6e] focus:border-[olive] focus:ring-2 focus:ring-[#f8f892] h-32 text-base outline-none text-[olive] py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button class="text-white bg-[olive] border-0 py-2 px-6 focus:outline-none hover:bg-[#747414] rounded text-lg font-medium">Send</button>
    </div>
  </div>
</section>
    </div>
  )
}

export default Contact