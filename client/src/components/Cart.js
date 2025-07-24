import { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import axios from 'axios';

export default function Cart() {
  const { cart, clearCart } = useContext(CartContext);
  const [showAddress, setShowAddress] = useState(false);
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handlePlaceOrder = () => {
    setShowAddress(true);
  };

  const handleSubmitOrder = async () => {
    try {
      const products = cart.map(item => ({
        productId: item._id,
        name: item.name
      }));

      await axios.post('http://localhost:5000/api/orders', {
        email,
        address,
        products
      });

      clearCart();
      setAddress("");
      setShowAddress(false);
      setOrderConfirmed(true);
    } catch (err) {
      console.error(err);
      alert("Failed to place order");
    }
  };

  if (orderConfirmed) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <div className="tick-mark"></div>
        <h2 style={{ color: 'green' }}>Order Confirmed!</h2>
      </div>
    );
  }

  if (cart.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div style={{ maxWidth: '800px', margin: '50px auto' }}>
      <h2>Your Cart</h2>

      {cart.map((item, index) => (
        <div key={index} style={{ display: 'flex', gap: '20px', marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
          <img src={item.image} alt={item.name} style={{ width: '150px' }} />
          <div>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
          </div>
        </div>
      ))}

      {!showAddress && (
        <button
          onClick={handlePlaceOrder}
          style={{ marginTop: '20px', padding: '10px 20px', background: 'green', color: 'white', border: 'none' }}
        >
          Place Order (COD)
        </button>
      )}

      {showAddress && (
        <div style={{ marginTop: '20px' }}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ display: 'block', marginBottom: '10px', width: '100%' }}
          />
          <textarea
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows={4}
            style={{ width: '100%', marginBottom: '10px' }}
          />
          <button
            onClick={handleSubmitOrder}
            style={{ padding: '10px 20px', background: 'blue', color: 'white', border: 'none' }}
          >
            Submit Order
          </button>
        </div>
      )}
    </div>
  );
}
