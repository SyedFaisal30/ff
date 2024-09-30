import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { useCart } from "../store/CartContext"; // Import useCart

const Header = () => {
  const { cartItems } = useCart(); // Get cartItems from useCart
  const [menuActive, setMenuActive] = useState(false);

  const handleToggle = () => {
    setMenuActive(!menuActive);
  };

  // Calculate the total quantity of items in the cart
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <div className="brand">Brand</div>
      <button
        className={`navbar-toggler ${menuActive ? "active" : ""}`}
        onClick={handleToggle}
      >
        <span className="toggler-icon"></span>
        <span className="toggler-icon"></span>
        <span className="toggler-icon"></span>
      </button>
      <div className={`navbar-menu ${menuActive ? "active" : ""}`}>
        <Link to="/" className="nav-link">
          <IoHomeOutline />
        </Link>
        <Link to="/cart" className="nav-link">
          <div className="cart-icon">
            <IoBagOutline />
            {totalQuantity > 0 && (
              <span className="badge">{totalQuantity}</span>
            )}{" "}
            {/* Display badge if quantity is greater than 0 */}
          </div>
        </Link>
        <Link to="/login" className="nav-link">
          <FaRegUser />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
