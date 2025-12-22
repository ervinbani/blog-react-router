import React from "react";

const sampleProducts = [
  { id: 1, name: "Product 1", description: "This is the first product." },
  { id: 2, name: "Product 2", description: "This is the second product." },
  { id: 3, name: "Product 3", description: "This is the third product." },
];

const ProductsPage: React.FC = () => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {sampleProducts.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong>: {product.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
