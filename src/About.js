import React from "react";
import "./About.css";
import Footer from "./Components/Footer";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaReddit,
} from "react-icons/fa";
import img1 from "./Images/The Batman.png";
import img2 from "./Images/super cat profile icon.png";

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <section className="about-content">
        <p>
          Welcome to <strong>Excellence Art Gallery</strong>, where we showcase
          exquisite artworks from various artists. Our collection includes
          pieces from different genres and styles, catering to all art
          enthusiasts.
        </p>
        <p>
          Our mission is to provide a platform for artists to display their
          talent and for art lovers to discover and appreciate new artworks. We
          believe in the power of art to inspire, provoke thought, and bring
          beauty into our lives.
        </p>
        <p>
          At <strong>Excellence Art Gallery</strong>, we strive to create a
          community where artists and art lovers can connect, share ideas, and
          celebrate creativity. We host regular exhibitions, events, and
          workshops to engage our audience and promote artistic expression.
        </p>
        <h2>Meet Our Artists</h2>
        <div className="artist-profiles">
          <div className="artist-profile">
            <img src={img1} alt="Artist 1" className="artist-photo" />
            <h3>Batman</h3>
            <p>
              Batman is a contemporary artist known for his vibrant abstract
              paintings. His work explores the intersection of color and form,
              creating dynamic compositions that challenge the viewer's
              perception.
            </p>
          </div>
          <div className="artist-profile">
            <img src={img2} alt="Artist 2" className="artist-photo" />
            <h3>Starman</h3>
            <p>
              Starman's work focuses on the beauty of everyday moments. Her
              realistic paintings capture the essence of her subjects, evoking a
              sense of nostalgia and tranquility.
            </p>
          </div>
          {/* Add more artist profiles as needed */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
