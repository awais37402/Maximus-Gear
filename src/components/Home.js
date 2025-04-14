import { useState } from 'react';
import "./Home.css"

// Image Imports
import prod1Img from "../assets/prod1.png"
import prod2Img from "../assets/prod2.png"
import prod3Img from "../assets/prod3.png"
import prod4Img from "../assets/prod4.png"

import cat1Img from "../assets/cat1.png"
import cat2Img from "../assets/cat2.png"
import cat3Img from "../assets/cat3.png"
import cat4Img from "../assets/cat4.png"

const Home = () => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const featuredProducts = [
    {
      id: 1,
      name: "Performance Training Tee",
      price: 39.99,
      image: prod1Img,
      category: "Tops",
      badge: "Best Seller",
      description: "Ultra-lightweight training tee with moisture-wicking technology to keep you dry during intense workouts. Features strategic ventilation zones for maximum breathability.",
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Gray'],
      details: [
        "92% Polyester, 8% Spandex",
        "Machine wash cold, tumble dry low",
        "Flatlock seams reduce chafing",
        "UPF 50+ sun protection",
        "4-way stretch for full range of motion"
      ],
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: "Elite Compression Shorts",
      price: 44.99,
      image: prod2Img,
      category: "Bottoms",
      badge: "New",
      description: "High-performance compression shorts designed to support muscles and reduce fatigue during training. Features a secure pocket for keys or cards.",
      sizes: ['S', 'M', 'L'],
      colors: ['Black', 'Royal Blue', 'Red'],
      details: [
        "88% Nylon, 12% Spandex",
        "Machine wash cold, line dry",
        "Anti-odor technology",
        "Gripper elastic waistband",
        "Reflective logo for low-light visibility"
      ],
      rating: 4.9,
      reviews: 87
    },
    {
      id: 3,
      name: "Flex Training Joggers",
      price: 59.99,
      image: prod3Img,
      category: "Bottoms",
      description: "Versatile training joggers with exceptional flexibility and comfort. Perfect for gym sessions or casual wear with a tapered athletic fit.",
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Charcoal', 'Black', 'Olive'],
      details: [
        "85% Cotton, 15% Polyester",
        "Machine wash cold, tumble dry low",
        "Elastic waistband with drawstring",
        "Zippered security pockets",
        "Ankle cuffs for adjustable fit"
      ],
      rating: 4.7,
      reviews: 203
    },
    {
      id: 4,
      name: "Breathable Workout Hoodie",
      price: 64.99,
      image: prod4Img,
      category: "Tops",
      badge: "Sale",
      description: "Performance hoodie with mesh paneling for optimal airflow. Lightweight yet warm enough for outdoor workouts in cooler weather.",
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Dark Gray', 'Navy'],
      details: [
        "80% Polyester, 20% Cotton",
        "Machine wash cold, hang dry",
        "Thumbhole cuffs for added coverage",
        "Adjustable drawstring hood",
        "Kangaroo pocket for storage"
      ],
      rating: 4.6,
      reviews: 156
    },
  ];

  const categories = [
    {
      id: 1,
      name: "Performance Tops",
      image: cat1Img,
      count: "24 Products",
    },
    {
      id: 2,
      name: "Training Bottoms",
      image: cat2Img,
      count: "18 Products",
    },
    {
      id: 3,
      name: "Compression Wear",
      image: cat3Img,
      count: "12 Products",
    },
    {
      id: 4,
      name: "Accessories",
      image: cat4Img,
      count: "15 Products",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Michael R.",
      text: "The quality of Maximus Gear is unmatched. I've tried many fitness brands, but nothing compares to the durability and comfort.",
      rating: 5,
    },
    {
      id: 2,
      name: "Jason T.",
      text: "Perfect fit and great performance. These clothes actually help improve my workouts with their moisture-wicking technology.",
      rating: 5,
    },
    {
      id: 3,
      name: "David K.",
      text: "Customer service is excellent and the products are top-notch. Will definitely be a repeat customer.",
      rating: 4,
    },
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

  return (
    <div className="home">
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
                  <button className="btn btn-primary add-to-cart">
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

      {/* Rest of your existing JSX remains exactly the same */}
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>ELEVATE YOUR TRAINING</h1>
          <p>Premium fitness apparel engineered for peak performance</p>
          <div className="hero-buttons">
            <a href="/shop" className="btn btn-primary">Shop New Arrivals</a>
            <a href="/collections/bestsellers" className="btn btn-secondary">Best Sellers</a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="benefits-grid">
            {/* Icons and Text */}
            {/* Keep SVGs here (no change) */}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <a href="/shop" className="view-all">View All</a>
          </div>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  {product.badge && (
                    <span className={`badge badge-${product.badge.toLowerCase().replace(/\s+/g, "-")}`}>
                      {product.badge}
                    </span>
                  )}
                  <div className="product-actions">
                    <button className="quick-view" onClick={() => openQuickView(product)}>Quick View</button>
                    <button className="add-to-cart">Add to Cart</button>
                  </div>
                </div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <span className="product-price">${product.price.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of your existing sections remain exactly the same */}
      {/* Shop by Category Section */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Shop by Category</h2>
          </div>
          <div className="categories-grid">
            {categories.map((category) => (
              <a
                href={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="category-card"
                key={category.id}
              >
                <div className="category-image">
                  <img src={category.image} alt={category.name} />
                </div>
                <div className="category-info">
                  <h3>{category.name}</h3>
                  <span>{category.count}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="banner-section">
        <div className="banner-content">
          <h2>NEW PERFORMANCE COLLECTION</h2>
          <p>Engineered for elite athletes and fitness enthusiasts</p>
          <a href="/collections/performance" className="btn btn-light">
            Explore Collection
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Customers Say</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < testimonial.rating ? "star filled" : "star"}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Join the Maximus Community</h2>
            <p>Subscribe to get exclusive offers, fitness tips, and new product announcements</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;