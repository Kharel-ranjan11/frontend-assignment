import React, { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Searchitem } from './Searchitem';


import { SingleProduct } from './SingleProduct';
export const Pageroutes = () => {
 
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home  ></Home>}></Route>
        <Route path='/Search' element={<Searchitem />} ></Route>
        <Route path='/detail/:id' element={<SingleProduct />} ></Route>
      </Routes>
    </>
  )
}
