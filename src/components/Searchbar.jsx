import React from 'react'
import { useState } from 'react';
import { products } from '../assets/assets';
import ProductItem from './ProductItem';


const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterproduct, setFilterproduct] = useState([]);

    const handleSearch = () => {
      console.log("Searching for:", searchTerm);
      // You can add your search logic here
     const search=  products.filter(item => item.category.toLowerCase()==searchTerm.toLowerCase() || item.subCategory.toLowerCase()==searchTerm.toLowerCase())
      setFilterproduct(search.slice(0, 5))
    };
    console.log("Searching product:", filterproduct);
  return (
    <div>
      <div className="flex items-center space-x-2 p-4 justify-center my-3">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-sm"
      />
      <button
        onClick={handleSearch}
        className="px-6 py-2 bg-black text-white  font-mono rounded-lg hover:bg-blue-700 transition "
      >
        Search
      </button>
    </div>
    <h1 className='text-3xl font-bold'>Search Product</h1>
     <h1 className='text-xl mb-3'> search Product category by typing..</h1>
         <div className='flex flex-col md:flex-row gap-2 mb-3' >
      
         
          <p className='bg-gray-200 px-4 py-1 border-2 rounded-2xl'>kids</p>
          <p  className='bg-gray-200 px-4 py-1 border-2 rounded-2xl'>men</p>
          <p  className='bg-gray-200 px-4 py-1 border-2 rounded-2xl'>women</p>
       
         </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5  gap-4 gap-y-6">
        {
            filterproduct.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
        }
      </div>
    </div>
  )
}

export default Searchbar
