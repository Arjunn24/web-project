import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '50px auto' }}>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product._id} style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}
