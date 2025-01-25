import './App.css'
import Navbar from './components/navbar'
import { Route,Routes } from 'react-router-dom'
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import Product from './pages/products';


function App() {
 

  return (
    <>
      <div>
      <h1>My First Ecommerce Store</h1>
       <Navbar />
       <Routes>
       <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Product />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
       </Routes>
      </div>
    </>
  )
}

export default App
