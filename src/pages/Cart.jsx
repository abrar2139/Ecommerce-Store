import React, { useEffect } from 'react'
import { Minus, Plus, Trash2, X } from 'lucide-react'
import { useSelector,useDispatch } from 'react-redux'
import { getCartTotal,removeItem,decreaseItemQuantity, increaseItemQuantity } from '../features/userSlice'
import { toast } from 'react-toastify'
const Cart = () => {
  const {cart,totalQuantity,totalPrice} = useSelector((state)=>state.userSlice)

  const dispatch = useDispatch()
  useEffect(() => {
   
    dispatch(getCartTotal())
  }, [cart])
  
  const handleRemoveItem = (productId) => {
    dispatch(removeItem(productId));
    toast.warning('Item removed from cart.');
  };
  return (
    <div className='bg-gradient-to-b  from-[olive] to-[#f1f180]'>
    <div className="mx-auto bg-gradient-to-b from-[olive] to-[#f1f180] py-5 sm:py-20 md:py-30 lg;py-40 xl:py-30  max-w-4xl ">
      <div className="overflow-hidden rounded-xl border border-gray-100 shadow">
          <div className='py-1 text-[olive] px-1 sm:px-8 md:px-8 lg:px-8 xl:px-8'>Cart Items - <span className='font-bold text-lg'>{cart.length}</span></div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product List */}
          <div className="px-1 sm:px-5 lg:px-8 xl:px-8 py-6 md:border-r md:border-r-gray-200 md:px-8">
            <div className="flow-root">
              <ul className="-my-7 divide-y divide-gray-200">
                {cart.map((product) => (
                  <li
                    key={product.id}
                    className="flex items-stretch justify-between space-x-1 sm:space-x-1 md:space-x-1 lg:space-x-1 xl:space-x-1 py-7"
                  >
                    <div className="flex-col flex-1">
                      <div className="flex-shrink-0">
                        <img
                          className="h-20 w-20 mb-2  rounded-lg border border-gray-200 object-contain"
                          src={product.image}
                          alt={product.image}
                        />
                      </div>
                      <div className=" flex flex-col justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-bold text-gray-900">{product.title}</p>
                        </div>
                        <p className="mt-4 text-2xl gap-2 font-medium flex text-gray-500 items-center"><span onClick={()=>dispatch(increaseItemQuantity(product.id))} className='text-green-600 hover:bg-green-300 text-[20px] cursor-pointer '><Plus /></span>{product.quantity} <span onClick={() => product.quantity > 1 && dispatch(decreaseItemQuantity(product.id))} className='text-red-600 text-[20px] cursor-pointer hover:bg-red-300 '><Minus /></span></p>
                      </div>
                    </div>
                    <div className="ml-auto flex flex-col items-end justify-between">
                      <p className="text-right text-sm font-semi-bold text-gray-900">${product.price}</p>
                      <p className="text-right text-sm font-bold text-gray-900">${product.price}</p>
                      <button onClick={()=>handleRemoveItem(product.id)} 
                        type="button"
                        className="-m-2 inline-flex rounded p-2 text-red-400 transition-all duration-200 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                      >
                        <span className="sr-only">Remove</span>
                        <Trash2 />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <hr className="mt-6 border-gray-200" />
              <ul className="mt-6 space-y-3">
                <li className="flex items-center justify-between">
                  <p className=" font-2xl font-bold ">Total Amount</p>
                  <p className="text-sm font-bold ">${totalPrice}</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-5 py-6 md:px-8">
            <div className="flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="py-3">
                  <h2 className=" text-2xl font-bold text-black">Details</h2>
                  <p className="fontmedium mt-3 text-1xl flex items-center justify-between text-gray-700"><span>Products</span> <span className='pr-0 sm:pr-20 md:pr-20 lg:pr-20 xl:pr-20'><span className='px-1 text-[11px]'>X</span><span className='text-1xl'>{totalQuantity}</span></span></p>
                  <p className="fontmedium mt-3 text-1xl flex items-center justify-between text-gray-700"><span>Shipping</span> <span className='pr-0 sm:pr-20 md:pr-20 lg:pr-20 xl:pr-20'>Sholtis</span></p>

                </div>
                <div className="flex justify-between items-center py-3">
                  <div>

                  <h2 className="mb-2 text-base font-bold text-black">Total amount</h2>
                  <p className="mt-3 text-xs font-medium text-gray-700">(Including Taxes)</p>
                  </div>
                  <p className='pr-0 sm:pr-20 md:pr-20 lg:pr-20 xl:pr-20'>${totalPrice}</p>
                </div>
                <div className="py-3 text-center">
                <button
                    type="button"
                    className="mt-4 rounded-md bg-[olive] px-8 py-2 text-1xl font-semibold text-white shadow-sm hover:bg-[olive]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[olive]"
                  >
                    Go To Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Cart