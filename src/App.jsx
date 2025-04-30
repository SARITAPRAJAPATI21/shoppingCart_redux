import React, { useEffect, useState } from 'react';

import {useSelector,useDispatch} from "react-redux";
import { removeItem, todoAdded } from './features/counter/counterSlice';
import { products } from './assets/assets';
import LatestCollection from './components/LatestCollection';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home';
import FilterProduct from './pages/FilterProduct';


function App() {
 // const [items, setItems] = useState([]); // Initialize empty array
  const [text,SetText]=useState('')
  const items = useSelector(state => state.todos.list);
  const dispatch = useDispatch()

  
  useEffect(() =>{ console.log('app', items.length,items)},[items])
  

  return (
    <div className="p-4 continer">
    
    <Navbar/>
  
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/filter' element={<FilterProduct/>}/>
   </Routes>

    </div>
  );
}

export default App;
