import Navbar from "./components/Navbar"
import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
function App() {

  return (
    
    <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/about" element={<About/>} />
     <Route path="/cart" element={<Cart/>} />
     <Route path="/contact" element={<Contact/>} />
     <Route path="/login" element={<Login/>}/>
     <Route path="/signup" element={<Signup/>}/>
    </Routes>
    
  
  )
}

export default App
