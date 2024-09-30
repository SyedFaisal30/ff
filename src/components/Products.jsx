import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const products = [
    {
      imgSrc: "Images/Producta/Accessorie.jpeg", // Updated image path
      name: "Accessories", // Category name
    },
    {
      imgSrc: "Images/Producta/Men.jpg",
      name: "Men's",
    },
    {
      imgSrc: "Images/Producta/Women.jpg",
      name: "Women's",
    },
    {
      imgSrc: "Images/Producta/Kid.jpg",
      name: "Kids",
    },
    {
      imgSrc: "Images/Producta/Footwear.jpeg",
      name: "Footwear",
    },
  ];

  return (
    <div className="product">
      {products.map((product, index) => (
        <ProductCard key={index} imgSrc={product.imgSrc} name={product.name} />
      ))}
    </div>
  );
};

export default Products;
