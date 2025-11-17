import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { ShoppingCart, Menu, X, Trash2 } from 'lucide-react';

const Navbar = ({ cart = [], onCartUpdate }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
const [selectAll, setSelectAll] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


const handleSelectAll = () => {
  if (selectAll) {
    setSelectedItems([]);
  } else {
    setSelectedItems(cart.map((item, index) => index));
  }
  setSelectAll(!selectAll);
};

const handleSelectItem = (index) => {
  if (selectedItems.includes(index)) {
    setSelectedItems(selectedItems.filter(i => i !== index));
  } else {
    setSelectedItems([...selectedItems, index]);
  }
};

const handleRemoveItem = (index, e) => {
  e.stopPropagation();
  const newCart = cart.filter((_, i) => i !== index);
  // Update selected items indices after removal
  setSelectedItems(selectedItems.filter(i => i !== index).map(i => i > index ? i - 1 : i));
  // Reset select all if cart becomes empty
  if (newCart.length === 0) {
    setSelectAll(false);
  }
  // Call the parent update function
  if (onCartUpdate) {
    onCartUpdate(newCart);
  }
};
  return (
    <nav className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="navbar-container">
        <div className="navbar-logo">TREND-TO-THRIFT</div>
        
        <div className="navbar-right">
          {/* <div className="navbar-login">Login</div> */}
          <div className="navbar-cart" onClick={() => setShowCart(!showCart)}>
            <ShoppingCart size={24} />
            {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
          </div>
          <div className="navbar-menu-icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-item">Login</div>
        <div className="mobile-menu-item" onClick={() => setShowCart(!showCart)}>
          <ShoppingCart size={20} /> Cart {cart.length > 0 && `(${cart.length})`}
        </div>
      </div>

    {/* Cart Dropdown */}
{showCart && (
  <div className="cart-dropdown">
    <h3>Shopping Cart</h3>
    {cart.length === 0 ? (
      <p>Your cart is empty</p>
    ) : (
      <>
        <div className="select-all-container">
          <input 
            type="checkbox" 
            id="select-all"
            checked={selectAll}
            onChange={handleSelectAll}
          />
          <label htmlFor="select-all">All</label>
        </div>
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <input 
              type="checkbox"
              checked={selectedItems.includes(index)}
              onChange={() => handleSelectItem(index)}
              className="cart-item-checkbox"
            />
            <img src={item.image} alt={item.name} />
           <div className="cart-item-details">
  <p>{item.name}</p>
  <p className="cart-item-size">Size: {item.size}</p>
  <p>${item.price}</p>
</div>
          <Trash2 
  size={18} 
  className="cart-item-remove"
  onClick={(e) => handleRemoveItem(index, e)}
/>
          </div>
        ))}
        <div className="cart-total">
          <strong>Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</strong>
        </div>
        <button className="checkout-btn">Proceed to Checkout</button>
      </>
    )}
  </div>
)}
    </nav>
  );
};

export default Navbar;