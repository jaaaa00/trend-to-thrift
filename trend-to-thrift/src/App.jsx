import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar_Footer/Navbar';
import Home from './components/Body/Home/Home';
import Footer from './components/Navbar_Footer/Footer';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
   <Navbar cart={cart} onCartUpdate={setCart} />
    <Home cart={cart} onCartUpdate={setCart} />
      <Footer />
    </div>
  );
}

export default App;