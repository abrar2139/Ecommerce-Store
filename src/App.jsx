import Navbar from "./components/Navbar"
import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
function App() {

  return (
    
    <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/about" element={<About/>} />
     <Route path="/cart" element={<Cart/>} />
     <Route path="/contact" element={<Contact/>} />
    </Routes>
    
  
  )
}

export default App
