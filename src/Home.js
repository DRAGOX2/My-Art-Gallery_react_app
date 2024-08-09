import React, { useState, useEffect } from "react";
import "./Home.css";
import Footer from "./Components/Footer";
import { Navigate, useNavigate } from "react-router-dom";
import img1 from "./Images/Home/sukuna-purple-5120x2880-16958.png";
import img2 from "./Images/Home/mob-psycho-100-3840x2160-16205.png";
import img3 from "./Images/Home/satoru-gojo-purple-3840x2160-16581.png";
import img4 from "./Images/Home/goku-amoled-super-3840x2160-12116.png";
import img5 from "./Images/Home/goku-chibi-dragon-3840x2160-13232.png";
import Navbar from "./Components/Navbar";

const Home = () => {
  const [reviews, setReviews] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchedReviews = [
      {
        id: 1,
        name: "John Doe",
        review: "Amazing gallery with stunning artworks!",
      },
      {
        id: 2,
        name: "Jane Smith",
        review: "A must-visit place for art lovers.",
      },
      {
        id: 3,
        name: "Sam Wilson",
        review: "Great collection and friendly staff.",
      },
    ];
    setReviews(fetchedReviews);
  }, []);

  const openImageViewer = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImageViewer = () => {
    setSelectedImage(null);
  };
  const Navigate =useNavigate();
  return (
    
    <div className="home-container">
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h2>Welcome to Excellence Art Gallery</h2>
          <p>
            Discover stunning artworks from talented artists around the world.
            At Excellence Art Gallery, we believe in the power of art to
            inspire, transform, and elevate the human experience. Whether you
            are an avid art collector or a casual admirer, we have something
            that will captivate your senses and enrich your soul.
          </p>
          <button className="cta-button" onClick={() =>Navigate('/Arts')}>Explore Now</button>
        </div>
      </section>

      <section id="image-gallery" className="image-gallery-section">
        <h2>Sample Gallery</h2>
        <div className="image-gallery">
          <img
            src={img1}
            alt="Sample 1"
            className="gallery-image"
            onClick={() => openImageViewer(img1)}
          />
          <img
            src={img4}
            alt="Sample 1"
            className="gallery-image"
            onClick={() => openImageViewer(img4)}
          />
          <img
            src={img5}
            alt="Sample 1"
            className="gallery-image"
            onClick={() => openImageViewer(img5)}
          />
          <img
            src={img2}
            alt="Sample 2"
            className="gallery-image"
            onClick={() => openImageViewer(img2)}
          />
          <img
            src={img3}
            alt="Sample 3"
            className="gallery-image"
            onClick={() => openImageViewer(img3)}
          />
        </div>
      </section>

      <section id="reviews" className="review-section">
        <h2>Customer Reviews</h2>
        <div className="reviews">
          {reviews.map((review) => (
            <div key={review.id} className="review">
              <h3>{review.name}</h3>
              <p>{review.review}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      {selectedImage && (
        <div className="image-viewer" onClick={closeImageViewer}>
          <img
            src={selectedImage}
            alt="Selected"
            className="image-viewer-img"
          />
        </div>
      )}
    </div>
  );
};

export default Home;
