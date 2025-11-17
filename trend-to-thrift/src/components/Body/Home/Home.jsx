import React, { useState } from 'react';
import './Home.css';
import { Search } from 'lucide-react';
import Shirt1 from '../../Thrift_Files/Shirt1.jpg';
import Shirt2 from '../../Thrift_Files/Shirt2.jpg';
import Shirt3 from '../../Thrift_Files/Shirt3.jpg';
import Model1 from '../../Thrift_Files/model1.jpg';
import Model2 from '../../Thrift_Files/model2.jpg';
import Model3 from '../../Thrift_Files/model3.jpg';

const Home = ({ onCartUpdate, cart = [], showLoginPopup, setShowLoginPopup }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState('M');

  const models = [
    {
      id: 1,
      name: 'ACNE STUDIOS LOGO TEE RELAXED FIT',
      price: 23000,
      image: Model1,
      description: 'https://www.acnestudios.com/us/en/logo-t-shirt---relaxed-fit-faded-black/CL0196-BM0.html?g=man',
      size: 'M'
    },
    {
      id: 2,
      name: 'FEAR OF GOD ESSENTIALS Back Logo T-Shirt',
      price: 4784,
      image: Model2,
      description: 'https://www.flannels.com/fear-of-god-essentials-back-logo-t-shirt-583625#colcode=58362503',
      size: 'M'
    },
    {
      id: 3,
      name: 'Human Made Heart-Motif Cotton T-Shirt',
      price: 6189,
      image: Model3,
      description: 'https://www.farfetch.com/ph/shopping/men/human-made-heart-motif-cotton-t-shirt-item-31025085.aspx',
      size: 'M'
    }
  ];

  const shirts = [
    {
      id: 1,
      name: 'Prettiest® ‘CREATIVE DEPT’ CLASSIC TEE (CHARCOAL)',
      price: 899,
      image: Shirt1,
      description: 'https://shopee.ph/Prettiest%C2%AE-%E2%80%98CREATIVE-DEPT%E2%80%99-CLASSIC-TEE-(CHARCOAL)-i.325187478.42853546846?extraParams=%7B%22display_model_id%22%3A275300706062%7D',
      size: 'M'
    },
    {
      id: 2,
      name: 'THE HUSTLE CLUB- LOGO TEES REGULAR DROP SHOULDER',
      price: 850,
      image: Shirt2,
      description: 'https://shopee.ph/product/197875045/27121750644?d_id=b9ee3&uls_trackid=54797e7h0134&utm_content=zg1RtJZ4ge5885ZiPnu1AfswFBu',
      size: 'M'
    },
    {
      id: 3,
      name: 'THE HUSTLE CLUB- HEART OF THE HUSTLE COLLECTION',
      price: 899,
      image: Shirt3,
      description: 'https://shopee.ph/THE-HUSTLE-CLUB-HEART-OF-THE-HUSTLE-COLLECTION-OCTOBER-i.197875045.43372775489?extraParams=%7B%22display_model_id%22%3A266849887312%7D',
      size: 'M'
    }
  ];

  const handleCardClick = (item, type) => {
    setSelectedItem({ ...item, type });
    setSelectedSize('M');
  };

  const handleAddToCart = () => {
    if (selectedItem) {
      const newCart = [...cart, { ...selectedItem, size: selectedSize, cartId: Date.now() }];
      if (onCartUpdate) {
        onCartUpdate(newCart);
      }
      setSelectedItem(null);
    }
  };

  const filteredModels = models.filter(model =>
    model.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredShirts = shirts.filter(shirt =>
    shirt.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home">
      <div className="home-container">
        <h1 className="home-title">Affordable Trends. 
            <br></br>Sustainable Choices.</h1>
        
        
        <div className="search-container">
          <div className="search-wrapper">
            <Search className="search-icon" size={16} />
            <input
              type="text"
              className="search-input"
              placeholder="Search Outfits"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Trend-to-Thrift Matches Section */}
        {filteredModels.length > 0 && (
          <div className="section">
            <h2 className="section-title">Current Trends</h2>
            <div className="shirts-grid">
              {filteredModels.map(model => (
                <div key={model.id} className="shirt-card" onClick={() => handleCardClick(model, 'model')}>
                  <div className="shirt-image-container">
                    <img src={model.image} alt={model.name} className="shirt-image" />
                  </div>
                  <div className="shirt-info">
                    <h3 className="shirt-name">{model.name}</h3>
                    <p className="shirt-price">₱{model.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Shop Sustainable Fashion Section */}
        {filteredShirts.length > 0 && (
          <div className="section">
            <h2 className="section-title">Trend to Thrift Matches</h2>
            <div className="shirts-grid">
              {filteredShirts.map(shirt => (
                <div key={shirt.id} className="shirt-card" onClick={() => handleCardClick(shirt, 'shirt')}>
                  <div className="shirt-image-container">
                    <img src={shirt.image} alt={shirt.name} className="shirt-image" />
                  </div>
                  <div className="shirt-info">
                    <h3 className="shirt-name">{shirt.name}</h3>
                    <p className="shirt-price">₱{shirt.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Product Modal */}
        {selectedItem && (
          <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={selectedItem.image} alt={selectedItem.name} className="modal-image" />
              <h2>{selectedItem.name}</h2>
              <p className="modal-price">₱{selectedItem.price}</p>
              <div className="modal-description">
  <p>Order it here:</p>
  <a href={selectedItem.description} target="_blank" rel="noopener noreferrer" className="product-link">
    {selectedItem.description}
  </a>
</div>
              <div className="modal-size-container">
                <label>Size:</label>
                <div className="size-options">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                    <button
                      key={size}
                      className={`size-button ${selectedSize === size ? 'size-button-active' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;