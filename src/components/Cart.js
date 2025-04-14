import { Link } from 'react-router-dom';
import './Cart.css';

import { useCart } from './CartContext'; 
const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useCart(); // Step 2: Use context
  
    const calculateSubtotal = () => {
      return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = subtotal > 0 ? 5.99 : 0; // Flat rate shipping
    return subtotal + shipping;
  };

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="cart-title">Your Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is currently empty.</p>
            <Link to="/shop" className="btn btn-primary">Continue Shopping</Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              <div className="cart-header">
                <div className="header-product">Product</div>
                <div className="header-price">Price</div>
                <div className="header-quantity">Quantity</div>
                <div className="header-subtotal">Subtotal</div>
                <div className="header-remove"></div>
              </div>
              
              {cartItems.map(item => (
                <div className="cart-item" key={item.id}>
                  <div className="item-product">
                    <img src={item.image} alt={item.name} className="item-image" />
                    <div className="item-details">
                      <h3 className="item-name">{item.name}</h3>
                      {item.selectedSize && (
                        <p className="item-size">Size: {item.selectedSize}</p>
                      )}
                    </div>
                  </div>
                  <div className="item-price">${item.price.toFixed(2)}</div>
                  <div className="item-quantity">
                    <button 
                      className="quantity-btn" 
                      onClick={() => handleQuantityChange(item, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button 
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="item-subtotal">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <div className="item-remove">
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      &times;
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <div className="summary-card">
                <h3 className="summary-title">Order Summary</h3>
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${calculateSubtotal().toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>${calculateSubtotal() > 0 ? '5.99' : '0.00'}</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
                <button className="btn btn-primary checkout-btn">
                  Proceed to Checkout
                </button>
                <Link to="/shop" className="continue-shopping">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;