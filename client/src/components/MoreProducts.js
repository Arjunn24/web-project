import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function MoreProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      {products.map(product => (
        <div key={product._id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
          <Link to={`/product/${product._id}`}>
            <img src={product.image} alt={product.name} style={{ width: '100%' }} />
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
