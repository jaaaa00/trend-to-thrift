import React, { useState } from 'react';
import './Home.css';
import { Search } from 'lucide-react';
import Shirt1 from '../../Thrift_Files/Shirt1.jpg';
import Shirt2 from '../../Thrift_Files/Shirt2.jpg';
import Shirt3 from '../../Thrift_Files/Shirt3.jpg';
import Model1 from '../../Thrift_Files/model1.jpg';
import Model2 from '../../Thrift_Files/model2.jpg';
import Model3 from '../../Thrift_Files/model3.jpg';
import Blog1 from '../../Thrift_Files/blog1.jpg';
import Blog2 from '../../Thrift_Files/blog2.jpg';
import Blog3 from '../../Thrift_Files/blog3.jpg';
import Hoodie from '../../Thrift_Files/hoodie.jpg';
import Sweatshirt from '../../Thrift_Files/sweatshirt.jpg';
import Fullzip from '../../Thrift_Files/fullzip.jpg';

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

  

  const blogPosts = [
  {
    id: 1,
    title: 'HOW TO TALK ABOUT TREND-TO-THRIFT: A SALES AND STORYTELLING GUIDE',
    date: 'Oct 20, 2025',
    image: Blog1, 
    description: 'Here’s the deal: Customers want apparel that feels amazing, looks great, decorates beautifully, and lasts—and Trend-to-Thrift delivers with premium comfort, durable sustainable fabrics, a meaningful impact story, fair-labor production, and tools that help you showcase real value and long-term quality.'
  },
  {
    id: 2,
    title: 'RECYCLED POLYESTER: WHY WE\'RE STILL WEARING PLASTIC',
    date: 'Oct 08, 2025',
    image: Blog2, 
    description: 'Here’s what’s up with recycled polyester: Part 1 shows how plastic bottles become soft, wearable tees, while Part 2 explores why recycled polyester is used in apparel, what makes it the better option, and how to choose what belongs in your closet.'
  },
  {
    id: 3,
    title: 'IF TRENDTOTHRIFT TEES WERE ZODIAC SIGNS',
    date: 'Oct 01, 2025',
    image: Blog3, 
    description: 'Forget star charts—your wardrobe may reveal more than your zodiac. Trend-to-Thrift tees and fleece each have their own personality, from bold mineral dyes to cozy organic cotton, creating a cosmic closet that matches your vibe and spirit perfectly.'
  }
];

const newProducts = [
  {
    id: 1,
    name: 'UNISEX ORGANIC CVC FLEECE PULLOVER HOODIE',
    price: 1299,
    image: Hoodie,
    description: 'https://www.sevenheavens.de/en-nl/collections/alle-prints/products/sevenheavens-hoodie-2',
    colors: '12 colors',
    size: 'M',
    impact: {
      water: '0.16',
      co2: '11.17',
      energy: '166.13'
    }
  },
  {
    id: 2,
    name: 'UNISEX ORGANIC CVC FLEECE CREWNECK SWEATSHIRT',
    price: 1199,
    image: Sweatshirt,
    description: 'https://www.sevenheavens.de/en-nl/collections/alle-prints/products/washed-logo-hoodie-6',
    colors: '6 colors',
    size: 'M',
    impact: {
      water: '0.16',
      co2: '11.17',
      energy: '166.13'
    }
  },
  {
    id: 3,
    name: 'MAN\'S ORGANIC CVC FLEECE FULL-ZIP HOODIE',
    price: 1399,
    image: Fullzip,
    description: 'https://www.sevenheavens.de/en-nl/collections/alle-prints/products/raglan-zip-hoodie-8',
    colors: '5 colors',
    size: 'M',
    impact: {
      water: '0.16',
      co2: '11.17',
      energy: '166.13'
    }
  }
];

const filteredNewProducts = newProducts.filter(product =>
  product.name.toLowerCase().includes(searchQuery.toLowerCase())
);


  return (
  <div className="home">
   {/* Hero Section */}
<div className="hero-section">
  <div className="hero-content">
    <h1 className="hero-title">
      <span className="hero-title-line">JOIN</span>
      <br />
      <span className="hero-title-line">THE</span>
      <br />
      <span className="hero-title-line">MOVEMENT</span>
    </h1>

    <p className="hero-description">
      We'd love to see you adventuring, printing, and sharing Trend-to-Thrift® 
      stories! Tag us for a chance to have your impact featured.
    </p>

    <div className="hero-tags">
      <p>▸ @trendtothrift</p>
      <p>▸ #TrendToThrift</p>
    </div>
  </div>
</div>

    {/* Blog Section */}
    <div className="blog-section">
      <h2 className="blog-title">FROM THE BLOG</h2>
      <div className="blog-grid">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-card">
            <div className="blog-image-container">
              <img src={post.image} alt={post.title} className="blog-image" />
            </div>
            <div className="blog-info">
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-date">| {post.date}</p>
              <p className="blog-description">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="home-container">
        
        
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

         {/* New Products Section */}
{filteredNewProducts.length > 0 && (
  <div className="section">
    <h2 className="section-title">Eco Friendly Products</h2>
    <div className="new-products-grid">
      {filteredNewProducts.map(product => (
        <div key={product.id} className="new-product-card" onClick={() => handleCardClick(product, 'newProduct')}>
          <div className="new-product-image-container">
            <img src={product.image} alt={product.name} className="new-product-image" />
          </div>
          <div className="new-product-info">
            <h3 className="new-product-name">{product.name}</h3>
            <p className="new-product-colors">{product.colors}</p>
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
      
      {selectedItem.colors && (
        <p className="modal-colors">{selectedItem.colors}</p>
      )}
      
      <div className="modal-description">
        <p>Order it here:</p>
        <a href={selectedItem.description} target="_blank" rel="noopener noreferrer" className="product-link">
          {selectedItem.description}
        </a>
      </div>

      {/* Impact Section - Only for New Products */}
      {selectedItem.impact && (
        <div className="impact-section">
          <h3 className="impact-title">SEE THE POSITIVE IMPACT OF CHOOSING THIS PRODUCT</h3>
          <div className="impact-grid">
            <div className="impact-item">
              <div className="impact-icon">💧</div>
              <p className="impact-value">{selectedItem.impact.water}</p>
              <p className="impact-label">cubic meters<br />of water consumed</p>
            </div>
            <div className="impact-item">
              <div className="impact-icon">☁️</div>
              <p className="impact-value">{selectedItem.impact.co2}</p>
              <p className="impact-label">kilogram of<br />co2 equivalent</p>
            </div>
            <div className="impact-item">
              <div className="impact-icon">⚡</div>
              <p className="impact-value">{selectedItem.impact.energy}</p>
              <p className="impact-label">MEGAJOULES</p>
            </div>
          </div>
        </div>
      )}

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