import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home.js';
import Product from './pages/Product.js';
import Shop from './pages/Shop.js';
import Cart from './pages/Cart.js';
import Profile from './pages/Profile.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <Router>
          <Header />
          <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route path="/product" element={<Product />}/>
              <Route path="/Shop" element={<Shop />}/>
              <Route path="/cart" element={<Cart />}/>
              <Route path="/profile" element={<Profile />}/>
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
