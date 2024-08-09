import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./App.css";
import "./Art.css";
import Footer from "./Components/Footer"
import img1 from "./Images/catoru gojo.jpg";
import img2 from "./Images/download (3).jpg";
import img3 from "./Images/Yuta Okkotsu.jpg";
import img4 from "./Images/itadori _33.jpg";
import img5 from "./Images/Sukuna chibi pin.jpg";
import img6 from "./Images/killua doodle.jpg";

function Art() {
  const artworks = [
    { id: 1, name: "Catoru GOJO", price: 2000, image: img1 },
    { id: 2, name: "Satoru GOJO", price: 3000, image: img2 },
    { id: 3, name: "Yuta Otuski", price: 4000, image: img3 },
    { id: 4, name: "Itadori Yuji", price: 5999, image: img4 },
    { id: 5, name: "Sukuna", price: 4999, image: img5 },
    { id: 6, name: "Killua Zoldyck", price: 6999, image: img6 },
  ];

  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (art) => {
    const existingItem = cart.find(item => item.id === art.id);
    if (existingItem) {
      setCart(cart.map(item => item.id === art.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...art, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem.quantity === 1) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item));
    }
  };

  const filteredArtworks = artworks.filter(art =>
    art.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="art-container">
      <div className="head">
        <strong>Excellence Art Gallery</strong>
      </div>
      <br />
      <div className="search-container">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search artworks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
      <div className="images">
        {filteredArtworks.map((art) => (
          <div className="image" key={art.id}>
            <img src={art.image} alt={art.name} className="art-image" />
            <div className="art-info">
              <p>Name: {art.name}</p>
              <p>Price: ${art.price.toFixed(2)}</p>
              <button className="button" onClick={() => addToCart(art)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart">
        <h3>Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price.toFixed(2)} x {item.quantity}
                <button className="button" onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="payment-methods">
        <h3>Payment Methods</h3>
        <p>We accept the following payment methods:</p>
        <ul>
          <li>Credit Card</li>
          <li>Debit Card</li>
          <li>PayPal</li>
          <li>Apple Pay</li>
          <li>Google Pay</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Art;
