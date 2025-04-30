import React, { useContext, useEffect, useState } from 'react'
import { products } from '../assets/assets'
import { useDispatch,useSelector } from 'react-redux'
import { removeItem, todoAdded } from '../features/counter/counterSlice'
const ProductItem = ({id,image,name,price}) => {
      const dispatch = useDispatch()
      const items = useSelector(state => state.todos.list);
      const[visible,setvisible]=useState(true)

  useEffect(() =>{ console.log('product cart',)},[])

  
  return (
    <div>
      
      <div className='overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt='imaes'/>
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>${price}</p>
      { visible?
      <button onClick={() =>{  
        dispatch(todoAdded( {id,image,name,price,quantity:1})) 
        setvisible(!visible)} } 
        className={` px-3 py-2 bg-black text-white w-full border rounded-full font-mono`}> Add to cart</button>
        :
        <button onClick={() =>{  
        dispatch( removeItem(id )) 
        setvisible(true)} } 
        className={` px-3 py-2 bg-red-500 text-white w-full  border rounded-full font-mono`}> Remove from cart</button>
        
     }
    </div>
  )
}

export default ProductItem
