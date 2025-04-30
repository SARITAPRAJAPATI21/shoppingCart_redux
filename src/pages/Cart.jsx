import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { products } from '../assets/assets';
import { removeItem } from '../features/counter/counterSlice';

const Cart = () => {
    const dispatch = useDispatch()
    const cartItem = useSelector(state => state.todos.list);
    const [total,setTotal]=useState()
   const delevery=20;
   
  useEffect(()=>{
   
    let totals=0;
     for( const items in cartItem){ 
        totals+=cartItem[items].price
        console.log('items',cartItem[items].price ,totals)
     }
     setTotal(totals)
   

  },[cartItem])
  console.log('cart info',  total)
  return (
    <div>
     <h1 className='text-3xl font-bold'>Search Product</h1>
     <div className='flex flex-col md:flex-row gap-1' >
     
      <p>kids</p>
      <p>men</p>
      <p>women</p>
      <p>topwear</p>
     </div>
       {
        cartItem.map((item,index)=>{
        
          const productData=products.find((product)=>product._id ===item.id)
          return(
            <div key={index} className='py-4 border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
            <div className='flex items-start gap-6'>
              <img  className='w-16 sm:w-20 'src={productData.image[0] }alt =""/>
            <div className="">
              <p className='text-xs sm:text-lg font-medium '>{productData.name}</p>
              <div className='flex items-center gap-5 mt-2'>
                <p>${productData.price}</p>
                <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>

              </div>
              
            </div>
            
            </div>
            <button  onClick={ () => dispatch(removeItem(item.id)) } className='px-3 py-2 text-white bg-red-500 hover:bg-red-200 font-mono'> Remove</button>
            
            </div>
          )
        })
      }
      <div className='w-full'>

    <div className='text-2xl'>
    
    </div>

      <div className='flex flex-col gap-2 mt-2 text-sm  lg:w-1/2  my-5  '>
      <h1 className='text-3xl font-bold'>cart totals</h1>
        <div className='flex justify-between'>
     
          <p>Subtotals</p>
          <p>${total}</p>
        </div>
        <hr/>
        <div className='flex justify-between'>
          <p>delevery Fee</p>
          <p>${delevery}</p>
        </div>
        <hr/>
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>${delevery*cartItem.length}</p>
        </div>
        <hr/>
        <div className='flex justify-between'>
          <b>Total</b>
          <b>${total+ ( delevery*cartItem.length)}.00</b>
        </div>

        <button className='bg-black px-3 py-2 text-white font-mono'> Pay to proceed</button> 
      </div>
    </div>
    </div>
  )
}

export default Cart
