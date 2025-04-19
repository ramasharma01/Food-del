import React, { useState } from 'react'
import assets from './assets/assets'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import ExploreMenu from './components/ExploreMenu/ExploreMenu'
import FoodDisplay from './components/FoodDisplay/FoodDisplay'
import AppDownload from './components/AppDownload/AppDownload'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Contact from './pages/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import Footer from "./components/Footer/Footer"
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <BrowserRouter>
      <>
        {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
        <div className='app'>
          <Navbar setShowLogin={setShowLogin} />

         
          <Routes>
            
            <Route path='/' element={<Home />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/order' element={<PlaceOrder />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        </div>
        <Footer/>
      </>
    </BrowserRouter>
  )
}


export default App
