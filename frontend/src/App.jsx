import React, { useState } from 'react'
import assets from './assets/assets'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import ExploreMenu from './components/ExploreMenu/ExploreMenu'
import FoodDisplay from './components/FoodDisplay/FoodDisplay'
import Footer from './components/Footer/Footer'
import AppDownload from './components/AppDownload/AppDownload'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Contact from './pages/Contact/Contact'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>

        {/* <Navbar setShowLogin={setShowLogin} /> */}

        {/* <PlaceOrder/> */}
        {/* <Cart/> */}
        {/* <Contact/> */}
        <Header />
        <ExploreMenu />
        <FoodDisplay />
        <AppDownload />
        <BrowserRouter>
          <Routes>
            <Route path='/' elemen={<Home />} />
            <Route path='/Cart' elemen={<Cart />} />
            <Route path='/order' elemen={<PlaceOrder />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      <Footer />
      </div>
    </>
  )
}

export default App
