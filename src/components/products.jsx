import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { userData } from '../features/userSlice';
import { addToCart } from '../features/userSlice';
import { toast } from 'react-toastify';
const Products = () => {
  const {data,loading,error} = useSelector((state)=>state.userSlice)
const dispatch = useDispatch();

useEffect(() => {
  dispatch(userData());

}, [dispatch])

console.log("Data:", data);
  
if (loading) {
  return <h1 className='h-screen flex items-center justify-center'><div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-[olive]" /></h1>;
}

if (error !== null) {
  return <h1>Something went wrong, please refresh</h1>;
}
const truncateDescription = (description) => {
  const words = description.split(' ');
  if (words.length > 11) {
    return words.slice(0, 11).join(' ') + '...';
  }
  return description;
};
const truncateTitle = (title) => {
  const words = title.split(' ');
  if (words.length > 6) {
    return words.slice(0, 6).join(' ') + '...';
  }
  return title;
};
const handleAddToCart = (product) => {
  dispatch(addToCart(product));
  toast.success('Product added to cart.');
};
  return (
    <>
    <h1 className='text-center text-4xl  bg-[#f1f180] text-[olive] font-bold py-20'>Best Collection</h1>
  <div className='flex pb-10 bg-gradient-to-b  to-[olive] from-[#f1f180] flex-wrap gap-5 justify-center items-center'>
      {data.map((product) => (
        <div key={product.id} className="w-full m-1 h-[420px] sm:w-[350px] sm:h-[420px] md:w-[350px] md:h-[420px] lg:w-[350px] lg:h-[420px] xl:w-[350px] xl:h-[420px] bg-white border border-gray-200 rounded-lg shadow hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
          <a href="#">
            <img className="rounded-t-lg object-contain h-[200px] w-full hover:scale-105 transition duration-300 ease-in-out" src={product.image} alt={product.title} />
          </a>
          <div className="p-1  sm:p-4 md:p-4 lg:p-4 xl:p-4">
            <a href="#">
              <h5 className="mb-1 text-[20px] sm:text-2xl md:text-2xl xl:text-2xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{truncateTitle(product.title)}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {truncateDescription(product.description)}
            </p>
            <button onClick={()=>handleAddToCart(product)} href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[olive] rounded-lg hover:bg-[#6d6d12] focus:ring-4 focus:outline-none focus:ring-[#fafa68] ">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Products