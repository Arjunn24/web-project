import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';
import ProductPage from './components/ProductPage';
import MoreProducts from "./components/MoreProducts";
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/more-products" element={<MoreProducts />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />


      </Routes>
    </Router>
  );
}

export default App;
