import { Link, useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();

  return (
    <div>
      <h2>Product Detail</h2>
      <p>
        Details for Product: <strong>{productId}</strong>
      </p>
      <Link to="/products">← Back to Products</Link>
    </div>
  );
}
