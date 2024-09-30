import React, { useEffect } from "react";
import { useCart } from "../store/CartContext"; // Import useCart
import { FaAngleRight, FaAngleLeft } from "react-icons/fa"; // Import icons
import "./Cart.css"; // Link to your CSS file
import { AiOutlineDelete } from "react-icons/ai";

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  // Calculate the total price of items in the cart
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.discounted_price * item.quantity,
    0
  );

  // Use useEffect to store cart data in local storage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]); // Update local storage whenever cartItems change

  return (
    <section className="detail-section">
      <h2 id="tp">Total Price: ₹{totalPrice}</h2>
      <div className="product-wrapper">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <ProductItem
              key={item.id}
              product={item}
              removeFromCart={removeFromCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          ))
        ) : (
          <p className="no-products">
            <p>
              Your cart is empty! &#128722; Please add some items. &#128722;
            </p>
            .
          </p>
        )}
      </div>
    </section>
  );
};

// Product Item Component
const ProductItem = ({
  product,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const showNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  const showPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <div className="product-item">
      <div className="slides-detail">
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`slide-detail ${index === currentIndex ? "active" : ""}`}
            alt={`Image ${index + 1} of ${product.name}`}
          />
        ))}
        <FaAngleLeft className="prev-detail" onClick={showPrevSlide} />
        <FaAngleRight className="next-detail" onClick={showNextSlide} />
      </div>
      <div className="detail">
        <AiOutlineDelete id="del" onClick={() => removeFromCart(product.id)} />
        <h2>{product.name}</h2>
        <p>
          <del>₹{product.price}</del> <b>₹{product.discounted_price}</b> 20% off
        </p>
        <div className="buy-cart">
          <button id="cart" onClick={() => increaseQuantity(product.id)}>
            +
          </button>
          <span>{product.quantity}</span> {/* Display the current quantity */}
          <button id="buy" onClick={() => decreaseQuantity(product.id)}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
