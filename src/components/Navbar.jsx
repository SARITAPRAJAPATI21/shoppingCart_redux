import React from 'react';
import { ShoppingCart } from 'lucide-react';
import {useSelector,useDispatch} from "react-redux";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
     const items = useSelector(state => state.todos.list);
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href='/'>
        <div className="text-2xl font-bold text-indigo-600">
          ShopCart
        </div>
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6 text-gray-600 font-medium">
          <a href="/" className="hover:text-indigo-600">Home</a>
          <a href="/filter" className="hover:text-indigo-600">Search</a>
          <a href="#" className="hover:text-indigo-600">About</a>
          <a href="#" className="hover:text-indigo-600">Contact</a>
        </div>

        {/* Cart */}
        
        <div className="relative">
        <Link to='/cart'>
          <ShoppingCart className="w-6 h-6 text-gray-700" />
          <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full px-1.5">
            {items.length}
          </span>
          </Link>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
