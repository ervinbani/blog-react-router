import React from "react";
import { useParams } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Product 1", description: "This is the first product." },
  { id: 2, name: "Product 2", description: "This is the second product." },
  { id: 3, name: "Product 3", description: "This is the third product." },
];

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = sampleProducts.find((p) => p.id.toString() === productId);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>
        <strong>ID:</strong> {product.id}
      </p>
    </div>
  );
};

export default ProductDetailPage;
