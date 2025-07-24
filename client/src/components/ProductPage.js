import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import "./ProductsPage.css";

const products = [
  {
    name: "High-Precision Furnace Thermometer",
    image: "https://your-real-image-1.jpg",
    price: "₹25,000",
  },
  {
    name: "Digital Steel Temperature Sensor",
    image: "https://your-real-image-2.jpg",
    price: "₹30,000",
  },
  {
    name: "Advanced Heat Gauge",
    image: "https://your-real-image-3.jpg",
    price: "₹40,000",
  },
];

const ProductsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleViewMore = () => {
    navigate("/more-products");
  };

  return (
    <div className="products-page">
      <header className="products-header">
        <div className="logo-section">
          <img
            src="https://cdn-icons-png.flaticon.com/512/482/482239.png"
            alt="Six Sense Logo"
            className="logo-img"
            style={{ width: "50px", marginRight: "10px" }}
          />
          <h1>Six Sense</h1>
        </div>
      </header>

      <main>
        <h2>Our Temperature Indicators</h2>
        <div className="products-list">
          {products.map((product, idx) => (
            <div className="product-card" key={idx}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>

        <div className="view-more">
          <button onClick={handleViewMore}>View More Products</button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductsPage;
