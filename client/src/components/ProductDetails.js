import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../CartContext';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [showViewCart, setShowViewCart] = useState(false);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setShowViewCart(true);
  };

  if (!product) return <p>Loading…</p>;

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', textAlign: 'center' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
      <h2>{product.name}</h2>
      <h3>Price: ₹{product.price}</h3>
      <button onClick={handleAddToCart} style={{ margin: '10px', padding: '10px 20px' }}>Add to Cart</button>

      {showViewCart && (
        <button
          onClick={() => navigate('/cart')}
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#28a745',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          View Cart
        </button>
      )}

      <div style={{ textAlign: 'left', marginTop: '20px' }}>
        <h4>Description</h4>
        <p>{product.description}</p>

        <h4>Best Features</h4>
        <ul>
          <li>High durability</li>
          <li>Easy to use</li>
          <li>Reliable performance</li>
          <li>Compact design</li>
        </ul>
      </div>
    </div>
  );
}
