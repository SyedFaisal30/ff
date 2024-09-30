import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import productsData from "../data/products.json";
import { useCart } from "../store/CartContext"; // Import useCart
import "./Detail.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { MdPayment } from "react-icons/md";

const Detail = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Use the cart context
  const [category, setCategory] = useState("Men");
  const [currentIndexes, setCurrentIndexes] = useState({}); // Store slide indexes per product

  const filteredProducts = productsData.products.filter(
    (product) => product.group === category
  );

  const getCurrentIndex = (productId) => {
    // If there's no index for this product yet, initialize it as 0
    return currentIndexes[productId] ?? 0;
  };

  const showNextSlide = (productId, productLength) => {
    setCurrentIndexes((prevIndexes) => ({
      ...prevIndexes,
      [productId]: (getCurrentIndex(productId) + 1) % productLength,
    }));
  };

  const showPrevSlide = (productId, productLength) => {
    setCurrentIndexes((prevIndexes) => ({
      ...prevIndexes,
      [productId]:
        (getCurrentIndex(productId) - 1 + productLength) % productLength,
    }));
  };

  const handleAddToCart = (product) => {
    addToCart(product); // Add product to cart
    navigate("/cart"); // Redirect to cart page
  };

  return (
    <section className="detail-section">
      <div className="category-buttons">
        {["Men", "Women", "Kid", "Footwear", "Accessories"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`category-button ${cat === category ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="product-wrapper">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <article key={product.id} className="product-item">
              <div className="slides-detail">
                {product.images.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    className={`slide-detail ${
                      imageIndex === getCurrentIndex(product.id) ? "active" : ""
                    }`}
                    alt={`Image ${imageIndex + 1} of ${product.name}`}
                  />
                ))}
                <FaAngleLeft
                  className="prev-detail"
                  onClick={() =>
                    showPrevSlide(product.id, product.images.length)
                  }
                />
                <FaAngleRight
                  className="next-detail"
                  onClick={() =>
                    showNextSlide(product.id, product.images.length)
                  }
                />
              </div>
              <div className="detail">
                <h2 className="product-name">{product.name}</h2>
                <p className="price">
                  <del>₹{product.price}</del> <b>₹{product.discounted_price}</b>{" "}
                  -{" "}
                  {Math.round(
                    ((product.price - product.discounted_price) /
                      product.price) *
                      100
                  )}
                  % off
                </p>
                <p className="product-note">{product.note}</p>
                <div className="buy-cart">
                  <IoBagOutline
                    id="cart"
                    onClick={() => handleAddToCart(product)}
                  />
                  <MdPayment id="buy" />
                </div>
              </div>
            </article>
          ))
        ) : (
          <p className="no-products">No products available in this category.</p>
        )}
      </div>
    </section>
  );
};

export default Detail;
