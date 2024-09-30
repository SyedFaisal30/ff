import React from "react";
import { Link } from "react-router-dom";

const ProductCard = React.memo(({ imgSrc, name }) => {
  return (
    <div className="cards menuslg3 menusmd2 menussm1">
      <Link to="./categories" className="product-card">
        <img className="thumbnail" src={imgSrc} alt={name} />
        <div className="category-name">{name}</div>
      </Link>
    </div>
  );
});

export default ProductCard;
