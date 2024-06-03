import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { userData } from '../features/userSlice';
import { addToCart } from '../features/userSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Products = () => {
  const { data, loading, error } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userData());
  }, [dispatch]);

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

  if (loading) {
    return (
      <h1 className='h-screen bg-gradient-to-b to-[olive] from-[#f1f180] flex items-center justify-center'>
        <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-[olive]" />
      </h1>
    );
  }

  if (error) {
    return <h1 className='h-screen text-gray-500 bg-gradient-to-b to-[olive] from-[#f1f180] flex items-center justify-center text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl'>Something went wrong, please try later!</h1>;
  }

  return (
    <>
      <h1 className='text-center text-4xl bg-[#f1f180] text-[olive] font-bold py-20'>Best Collection</h1>
      <div className='flex pb-10 bg-gradient-to-b to-[olive] from-[#f1f180] flex-wrap gap-5 justify-center items-center'>
        {data.map((product) => (
          <div key={product.id} className="w-full m-1 h-[420px] sm:w-[350px] sm:h-[420px] md:w-[350px] md:h-[420px] lg:w-[350px] lg:h-[420px] xl:w-[350px] xl:h-[420px] bg-white border border-gray-200 rounded-lg shadow hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="#">
              <img className="rounded-t-lg object-contain h-[200px] w-full hover:scale-105 transition duration-300 ease-in-out" src={product.image} alt={product.title} />
            </a>
            <div className="p-1 sm:p-4 md:p-4 lg:p-4 xl:p-4">
              <a href="#">
                <h5 className="mb-1 text-[20px] sm:text-2xl md:text-2xl xl:text-2xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{truncateTitle(product.title)}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {truncateDescription(product.description)}
              </p>
              <div className='flex justify-between items-center'>

              <button onClick={() => handleAddToCart(product)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[olive] rounded-lg hover:bg-[#6d6d12] focus:ring-4 focus:outline-none focus:ring-[#fafa68] ">
                Add to Cart
              </button>
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-200 ">
                <Link to='/cart'>
                Go to Cart
                </Link>
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
