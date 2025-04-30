import React, { useContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import ProductItem from "./ProductItem";
const LatestCollection = () => {
  
  const [latestProducts, setLatestProduct] = useState([]);

  useEffect(() => {
    setLatestProduct(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10 mx-10">
      <div className="text-center py-8 text-3xl">
      <p className="w-3/4 m-auto text-xs sm:text-sm md:text-lg text-gray-600 font-mono">
       Latest Collection
        </p>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 font-mono">
        From casual cool to elegant essentials — fashion made for you
        </p>
      </div>
      {/*Rendring product */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5  gap-4 gap-y-6">
        {
            latestProducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
        }
      </div>
    </div>
  );
};

export default LatestCollection;

