import React from "react";
import { useParams } from "react-router-dom";

const Categories = () => {
  const { category } = useParams();

  return (
    <div>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Products</h1>
      {/* Render the products based on the category */}
    </div>
  );
};

export default Categories;
