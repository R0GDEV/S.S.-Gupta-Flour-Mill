import React from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  pricePerKg: number;
  image: string;
}

interface ProductListProps {
  products: Product[];
  onAddToCart: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {products.map((product) => (
      <div key={product.id} className="bg-white p-6 rounded shadow">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>₹{product.pricePerKg} / Kg</p>
        <button onClick={() => onAddToCart(product.id)}>Add to Cart</button>
      </div>
    ))}
  </div>
);

export default ProductList;
