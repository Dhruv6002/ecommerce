import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Posters from './pages/Posters.jsx'
import Placeorder from './pages/Placeorder.jsx'
import Orders from './pages/Orders.jsx'
import Contactus from './pages/Contactus.jsx'
import Navbar from './components/Navbar.jsx'
import Gamedvdcover from './pages/Gamedvdcover.jsx'
import Footer from './components/Footer.jsx'
import Myprofile from './pages/Myprofile.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Cart from './pages/Cart.jsx'
const App = () => {
  return (
    <>
        <Navbar/>
        <div>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/posters' element={<Posters/>}></Route>
          <Route path='/posters/:id' element={<ProductDetails/>}></Route>
          <Route path='/placeorder' element={<Placeorder/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/orders' element={<Orders/>}></Route>
          <Route path='/contactus' element={<Contactus/>}></Route>
          <Route path='/gamedvdcover' element={<Gamedvdcover/>}></Route>
          <Route path='/myprofile' element={<Myprofile/>}></Route>
          <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
          <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      <Footer/>
    </div>
    </>
  )
}

export default App

           