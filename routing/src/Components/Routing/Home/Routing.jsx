import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import Login from './Login'
import Register from './Register'
import PageNotFound from './PageNotFound'
import Mobiles from '../Nested Routing/Mobiles';
import Laptops from '../Nested Routing/Laptops';
import Cameras from '../Nested Routing/Cameras';
import Toys from '../Nested Routing/Toys';
import Tv from '../Nested Routing/Tv';
import Navbar from './Navbar'
import ProductHome from '../Nested Routing/ProductHome'
import navStyle from "../style.module.css"

function Routing() {

  return (
    <BrowserRouter>
    <Navbar navName={{key1:"Home",key2:"Products",key3:"Login",key4:"Register"}}
    navLinks={{url1:"/",url2:"/products",url3:"/login",url4:"/register"}} cssStyle={navStyle.navbar}/>
        

        <Routes>
            <Route path='/' element={<Home/>}/>

            {/* Nested Routing */}
            <Route path='/products' element={<Products/>}>
              
                <Route index element={<ProductHome/>}/>
                <Route path='mobiles' element={<Mobiles/>}/>
                <Route path='laptops' element={<Laptops/>}/>
                <Route path='cameras' element={<Cameras/>}/>
                <Route path='toys' element={<Toys/>}/>
                <Route path='television' element={<Tv/>}/>
            </Route>

            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing
