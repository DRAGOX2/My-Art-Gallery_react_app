import React, { useState } from "react";
import "./Contact.css";
import Footer from "./Components/Footer";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  const getuserdata = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const postdata = async (e) => {
    e.preventDefault();

    const { name, email, message } = user;

    try {
      const response = await fetch(
        "https://real-data-react-default-rtdb.firebaseio.com/REal-data-react.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );

      if (response.ok) {
        alert("Data successfully submitted");
        setUser({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to submit data");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting data");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>
      <section className="contact-content">
        <p>
          Feel free to reach out to us for any inquiries or to learn more about
          our gallery.
        </p>
        <div className="contact-info">
          <p>
            Email:{" "}
            <a href="mailto:info@Excellenceartgallery.com">
              info@Excellenceartgallery.com
            </a>
          </p>
          <p>Phone: ********** </p>
          <p>Address: 666 Ranip street, Gotham city, 6900</p>
        </div>
        <h2>Send Us a Message</h2>
        <form className="contact-form" method="POST" onSubmit={postdata}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            value={user.name}
            onChange={getuserdata}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            value={user.email}
            onChange={getuserdata}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            autoComplete="off"
            value={user.message}
            onChange={getuserdata}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
