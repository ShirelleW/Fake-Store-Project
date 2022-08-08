import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Electronics from './pages/Electronics';
import Jewelery from './pages/Jewelery';
import MensClothing from './pages/MensClothing';
import WomensClothing from './pages/WomensClothing';
import Home from './pages/Home';
import Cart from './components/CartContainer';
import Modal from "./components/Modal"

import { useSelector, useDispatch } from "react-redux"
import { calculateTotals, getCartItems } from "./features/Cart/cartSlice"
import { useEffect } from "react"

function App() {

  const { cartItems } = useSelector((store) => store.cart)
  const {isOpen} = useSelector((store) => store.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])


  return (
    <div>
      <Router>
        <div>
        {isOpen && <Modal/>}
          <Navbar />
          
        </div>
   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/mensclothing" element={<MensClothing />} />
          <Route path="/womensclothing" element={<WomensClothing />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
