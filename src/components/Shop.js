import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';
import { useCart } from './CartContext';

// Image imports
import prod1Img from '../assets/prod1.png';
import prod2Img from '../assets/prod2.png';
import prod3Img from '../assets/prod3.png';
import prod4Img from '../assets/prod4.png';
import prod5Img from '../assets/prod5.png';
import prod6Img from '../assets/prod6.png';
import prod7Img from '../assets/prod7.png';
import prod8Img from '../assets/prod8.png';

const Shop = () => {
    const { addToCart } = useCart(); // Step 2: get addToCart from context
  
    const [quickViewProduct, setQuickViewProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [activeCategory, setActiveCategory] = useState('All');
    const [sortOption, setSortOption] = useState('featured');
  

  const categories = [
    'All',
    'Performance Tops',
    'Training Bottoms',
    'Compression Wear',
    'Accessories'
  ];

  const products = [
    {
      id: 1,
      name: "Performance Training Tee",
      price: 39.99,
      image: prod1Img,
      category: "Performance Tops",
      badge: "Best Seller",
      description: "Ultra-lightweight training tee with moisture-wicking technology to keep you dry during intense workouts.",
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Gray'],
      details: [
        "92% Polyester, 8% Spandex",
        "Machine wash cold, tumble dry low",
        "Flatlock seams reduce chafing",
        "UPF 50+ sun protection"
      ],
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: "Elite Compression Shorts",
      price: 44.99,
      image: prod2Img,
      category: "Compression Wear",
      badge: "New",
      description: "High-performance compression shorts designed to support muscles and reduce fatigue during training.",
      sizes: ['S', 'M', 'L'],
      colors: ['Black', 'Royal Blue', 'Red'],
      details: [
        "88% Nylon, 12% Spandex",
        "Machine wash cold, line dry",
        "Anti-odor technology",
        "Gripper elastic waistband"
      ],
      rating: 4.9,
      reviews: 87
    },
    {
      id: 3,
      name: "Flex Training Joggers",
      price: 59.99,
      image: prod3Img,
      category: "Training Bottoms",
      description: "Versatile training joggers with exceptional flexibility and comfort.",
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Charcoal', 'Black', 'Olive'],
      details: [
        "85% Cotton, 15% Polyester",
        "Machine wash cold, tumble dry low",
        "Elastic waistband with drawstring",
        "Zippered security pockets"
      ],
      rating: 4.7,
      reviews: 203
    },
    {
      id: 4,
      name: "Breathable Workout Hoodie",
      price: 64.99,
      image: prod4Img,
      category: "Performance Tops",
      badge: "Sale",
      description: "Performance hoodie with mesh paneling for optimal airflow.",
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Dark Gray', 'Navy'],
      details: [
        "80% Polyester, 20% Cotton",
        "Machine wash cold, hang dry",
        "Thumbhole cuffs for added coverage",
        "Adjustable drawstring hood"
      ],
      rating: 4.6,
      reviews: 156
    },
    {
      id: 5,
      name: "Performance Tank Top",
      price: 34.99,
      image: prod5Img,
      category: "Performance Tops",
      description: "Lightweight tank top with superior ventilation for intense workouts.",
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'White', 'Gray'],
      details: [
        "100% Polyester",
        "Machine wash cold, tumble dry low",
        "Racerback design for mobility",
        "UPF 30+ sun protection"
      ],
      rating: 4.5,
      reviews: 92
    },
    {
      id: 6,
      name: "Training Shorts",
      price: 49.99,
      image: prod6Img,
      category: "Training Bottoms",
      badge: "New",
      description: "Performance shorts with built-in liner for maximum comfort.",
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Dark Gray'],
      details: [
        "90% Polyester, 10% Spandex",
        "Machine wash cold, line dry",
        "7-inch inseam",
        "Moisture-wicking fabric"
      ],
      rating: 4.7,
      reviews: 78
    },
    {
      id: 7,
      name: "Compression Leggings",
      price: 54.99,
      image: prod7Img,
      category: "Compression Wear",
      description: "High-compression leggings for support and performance.",
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Charcoal', 'Dark Blue'],
      details: [
        "85% Nylon, 15% Spandex",
        "Machine wash cold, hang dry",
        "High waist design",
        "Sweat-wicking technology"
      ],
      rating: 4.8,
      reviews: 145
    },
    {
      id: 8,
      name: "Gym Training Gloves",
      price: 29.99,
      image: prod8Img,
      category: "Accessories",
      description: "Premium workout gloves with enhanced grip and wrist support.",
      sizes: ['S/M', 'L/XL'],
      colors: ['Black', 'Gray', 'Red'],
      details: [
        "Leather palm with breathable mesh",
        "Adjustable wrist strap",
        "Padded palm for protection",
        "Machine washable"
      ],
      rating: 4.6,
      reviews: 63
    }
  ];

  const openQuickView = (product) => {
    setQuickViewProduct(product);
    setSelectedSize(product.sizes[0]);
    setQuantity(1);
    document.body.style.overflow = 'hidden';
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
    document.body.style.overflow = 'auto';
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      ...quickViewProduct,
      selectedSize,
      quantity
    });
    closeQuickView();
  };

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortOption) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  return (
    <div className="shop-page">
      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="quick-view-modal">
          <div className="quick-view-overlay" onClick={closeQuickView}></div>
          <div className="quick-view-container">
            <button className="quick-view-close" onClick={closeQuickView}>
              &times;
            </button>
            
            <div className="quick-view-content">
              <div className="quick-view-image">
                <img src={quickViewProduct.image} alt={quickViewProduct.name} />
                {quickViewProduct.badge && (
                  <span className={`badge badge-${quickViewProduct.badge.toLowerCase().replace(/\s+/g, "-")}`}>
                    {quickViewProduct.badge}
                  </span>
                )}
              </div>
              
              <div className="quick-view-details">
                <h2>{quickViewProduct.name}</h2>
                
                <div className="quick-view-meta">
                  <span className="price">${quickViewProduct.price.toFixed(2)}</span>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(quickViewProduct.rating) ? "star filled" : "star"}>
                        ★
                      </span>
                    ))}
                    <span>({quickViewProduct.reviews} reviews)</span>
                  </div>
                  <span className="category">{quickViewProduct.category}</span>
                </div>
                
                <p className="description">{quickViewProduct.description}</p>
                
                <div className="product-options">
                  <div className="option-group">
                    <label>Size:</label>
                    <div className="size-options">
                      {quickViewProduct.sizes.map(size => (
                        <button
                          key={size}
                          className={`size-option ${selectedSize === size ? 'active' : ''}`}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="option-group">
                    <label>Quantity:</label>
                    <div className="quantity-selector">
                      <button onClick={() => handleQuantityChange(-1)}>-</button>
                      <span>{quantity}</span>
                      <button onClick={() => handleQuantityChange(1)}>+</button>
                    </div>
                  </div>
                </div>
                
                <div className="product-details">
                  <h3>Product Details</h3>
                  <ul>
                    {quickViewProduct.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="quick-view-actions">
                  <button 
                    className="btn btn-primary add-to-cart"
                    onClick={handleAddToCart}
                  >
                    Add to Cart - ${(quickViewProduct.price * quantity).toFixed(2)}
                  </button>
                  <button className="btn btn-secondary wishlist">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Shop Header */}
      <div className="shop-header">
        <div className="container">
          <h1>Shop Performance Gear</h1>
          <p>Premium fitness apparel engineered for athletes</p>
        </div>
      </div>

      {/* Shop Content */}
      <div className="shop-content">
        <div className="container">
          <div className="shop-controls">
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-filter ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="sort-options">
              <label htmlFor="sort">Sort by:</label>
              <select 
                id="sort" 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          <div className="products-grid">
            {sortedProducts.map(product => (
              <div className="product-card" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  {product.badge && (
                    <span className={`badge badge-${product.badge.toLowerCase().replace(/\s+/g, "-")}`}>
                      {product.badge}
                    </span>
                  )}
                  <div className="product-actions">
                    <button 
                      className="quick-view" 
                      onClick={() => openQuickView(product)}
                    >
                      Quick View
                    </button>
                    <button 
                      className="add-to-cart"
                      onClick={() => addToCart({ ...product, quantity: 1 })}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <span className="product-price">${product.price.toFixed(2)}</span>
                  <div className="product-rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(product.rating) ? "star filled" : "star"}>
                        ★
                      </span>
                    ))}
                    <span>({product.reviews})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;