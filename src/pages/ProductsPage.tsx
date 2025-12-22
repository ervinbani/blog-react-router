import { Link } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
];

export default function ProductsPage() {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {sampleProducts.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
