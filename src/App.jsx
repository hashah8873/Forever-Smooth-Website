import { useState } from "react";

import heroImage from "./assets/hero.jpg";
import logo from "./assets/logo.png";

import gallery1 from "./assets/gallery1.jpg.webp";
import gallery2 from "./assets/gallery2.jpg.webp";
import gallery3 from "./assets/gallery3.jpg.webp";
import gallery4 from "./assets/gallery4.jpg.webp";

import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa";
const App = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <div className="app">

      {/* NAVBAR */}

     <nav className="navbar">
  <div className="logo">
    <img src={logo} alt="Forever Smooth Logo" />
  </div>

 <button
  className="menu-toggle"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? "✕" : "☰ Menu"}
</button>

  <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
    <li><a href="#">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#pricing">Pricing</a></li>
    <li><a href="#reviews">Reviews</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>

  <a href="#contact" className="primary-btn nav-book-btn">
    Book Appointment
  </a>
</nav>

      {/* HERO SECTION */}

      <section className="hero">

        <div className="hero-left">

          <p className="hero-tag">
            SMOOTH • BEAUTIFUL • CONFIDENT
          </p>

          <h1 className="hero-title">
            Professional
            <br />
            <span>Laser Hair</span>
            <br />
            Removal Clinic
          </h1>

          <p className="hero-description">
            Advanced laser technology for long-lasting smooth skin,
            safe treatments, and luxurious care tailored for every
            skin type.
          </p>

         <div className="hero-buttons">

  <a href="#contact" className="primary-btn">
    Book Appointment
  </a>

  <a href="#about" className="secondary-btn">
    Learn More
  </a>

</div>

          <div className="features">

            <div className="feature">
              <div className="feature-icon">🛡️</div>

              <div>
                <h3>Safe</h3>
                <p>FDA-approved technology</p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">👑</div>

              <div>
                <h3>Luxury</h3>
                <p>Comfortable experience</p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">✨</div>

              <div>
                <h3>Results</h3>
                <p>Smooth glowing skin</p>
              </div>
            </div>

          </div>

        </div>

        <div className="hero-right">

          <div className="image-card">
            <img
              src={heroImage}
              alt="Laser Hair Removal"
              className="hero-image"
            />
          </div>

        </div>

      </section>

      {/* ABOUT SECTION */}

      <section id="about" className="about">

        <div className="about-left">

          <span className="section-tag">
            ABOUT FOREVER SMOOTH
          </span>

          <h2 className="about-title">
            Premium Laser Hair Removal
            <br />
            With Professional Care
          </h2>

          <p className="about-description">
            At Forever Smooth, we specialize in safe,
            effective, and comfortable laser hair removal
            treatments using advanced technology designed
            for all skin types.
          </p>

          <p className="about-description">
            Our mission is to help clients feel confident,
            smooth, and beautiful through personalized
            treatments and exceptional customer care.
          </p>

          <a href="#contact" className="about-btn">
  Book Free Consultation
</a>

        </div>

        <div className="about-right">

          <div className="about-card">

            <div className="stat-box">
              <h3>500+</h3>
              <p>Happy Clients</p>
            </div>

            <div className="stat-box">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>

            <div className="stat-box">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>

            <div className="stat-box">
              <h3>FDA</h3>
              <p>Approved Technology</p>
            </div>

          </div>

        </div>

      </section>

      {/* SERVICES SECTION */}

<section id="services" className="services">

  <div className="services-header">

    <span className="section-tag">
      OUR SERVICES
    </span>

    <h2 className="services-title">
      Professional Laser Hair
      <br />
      Removal Treatments
    </h2>

    <p className="services-text">
      Safe and effective laser treatments designed
      for smooth, beautiful and long-lasting results.
    </p>

  </div>

  <div className="services-grid">

    <div className="service-card">
      <div className="service-icon">😊</div>

      <h3>Face</h3>

      <p>
        Upper lip, chin, cheeks and complete facial
        laser hair removal treatment.
      </p>

      <a href="#contact" className="service-btn">
        Book This Treatment
      </a>
    </div>

    <div className="service-card">
      <div className="service-icon">💪</div>

      <h3>Arms</h3>

      <p>
        Effective treatment for smooth and beautiful
        arms with long-lasting results.
      </p>

      <a href="#contact" className="service-btn">
        Book This Treatment
      </a>
    </div>

    <div className="service-card">
      <div className="service-icon">🦵</div>

      <h3>Legs</h3>

      <p>
        Full-leg and lower-leg laser treatments for
        silky smooth skin.
      </p>

      <a href="#contact" className="service-btn">
        Book This Treatment
      </a>
    </div>

    <div className="service-card">
      <div className="service-icon">✨</div>

      <h3>Underarms</h3>

      <p>
        Quick sessions that reduce hair growth and
        improve comfort.
      </p>

      <a href="#contact" className="service-btn">
        Book This Treatment
      </a>
    </div>

    <div className="service-card">
      <div className="service-icon">👑</div>

      <h3>Bikini Area</h3>

      <p>
        Professional treatments with maximum privacy,
        care and comfort.
      </p>

      <a href="#contact" className="service-btn">
        Book This Treatment
      </a>
    </div>

    <div className="service-card">
      <div className="service-icon">💎</div>

      <h3>Full Body</h3>

      <p>
        Complete laser hair removal package for total
        body smoothness.
      </p>

      <a href="#contact" className="service-btn">
        Book This Treatment
      </a>
    </div>

  </div>

</section>
{/* PRICING */}

<section className="pricing" id="pricing">

  <div className="pricing-header">

    <span className="section-tag">
      PRICING
    </span>

    <h2 className="services-title">
      Popular Treatment Packages
    </h2>

    <p className="services-text">
      Affordable laser hair removal packages designed
      for every need.
    </p>

  </div>

  <div className="pricing-grid">

    <div className="pricing-card">

      <h3>Face</h3>

      <div className="price">
        $30 / Session
      </div>

      <div className="pricing-features">
        <p>Included:</p>
        <p>✓ Upper Lip</p>
        <p>✓ Chin</p>
        <p>✓ Full Face</p>
      </div>

      <a href="#contact" className="primary-btn">
        Book Appointment
      </a>

    </div>

    <div className="pricing-card featured">

      <h3>Full Body</h3>

      <div className="price">
        $160 / Session
      </div>

      <div className="pricing-features">
        <p>Included:</p>
        <p>✓ Legs</p>
        <p>✓ Arms</p>
        <p>✓ Underarms</p>
        <p>✓ Bikini Area</p>
      </div>

      <a href="#contact" className="primary-btn">
        Book Now
      </a>

    </div>

    <div className="pricing-card">

      <h3>Custom Package</h3>

      <div className="price">
        Contact Us
      </div>

      <div className="pricing-features">
        <p>Personalized Plan</p>
        <p>Flexible Areas</p>
        <p>Consultation Included</p>
      </div>

      <a href="#contact" className="primary-btn">
        Contact Us
      </a>

    </div>

  </div>

</section>

{/* REVIEWS */}

<section className="reviews" id="reviews">

  <div className="reviews-header">

    <span className="section-tag">
      CLIENT REVIEWS
    </span>

    <h2 className="reviews-title">
      What Our Clients Say
    </h2>

    <p className="reviews-description">
      Real experiences from clients who trusted Forever Smooth
      for their laser hair removal journey.
    </p>

  </div>

  <div className="reviews-grid">

    <div className="review-card">
      <div className="stars">★★★★★</div>

      <p>
        I had an amazing experience at this laser hair removal clinic.
        The staff were professional, friendly, and made me feel comfortable
        throughout the process. The results exceeded my expectations.
      </p>

      <h4>Emri Jokhadar</h4>
    </div>

    <div className="review-card">
      <div className="stars">★★★★★</div>

      <p>
        Hiba is a fantastic technician. Her home spa is clean, welcoming,
        and professional. She provides excellent care and her prices are amazing.
      </p>

      <h4>Elvira Dulic</h4>
    </div>

    <div className="review-card">
      <div className="stars">★★★★★</div>

      <p>
        The customer service was really good. She was patient,
        flexible with scheduling, and the overall result was amazing.
      </p>

      <h4>Pleb Meh</h4>
    </div>

  </div>

<div className="review-buttons">
  <a
    href="https://bit.ly/4477LdQ"
    target="_blank"
    rel="noopener noreferrer"
    className="review-btn"
  >
    See More Reviews on Google
  </a>

  <a
    href="https://bit.ly/4477LdQ"
    target="_blank"
    rel="noopener noreferrer"
    className="review-btn"
  >
    Leave a Google Review
  </a>
</div>
</section>
 {/* GALLERY */}

<section className="gallery-section" id="gallery">

  <div className="section-title">
    <span>OUR CLINIC</span>
    <h2>See Forever Smooth</h2>
  </div>

  <div className="gallery-grid">

    <div className="gallery-card">
      <img src={gallery1} alt="Treatment Room" />
    </div>

    <div className="gallery-card">
      <img src={gallery2} alt="Laser Treatment" />
    </div>

    <div className="gallery-card">
      <img src={gallery3} alt="Laser Device" />
    </div>

    <div className="gallery-card">
      <img src={gallery4} alt="Body Treatment" />
    </div>

  </div>

</section>

{/* CONTACT */}
<section className="booking-form">
  <h2>Book Your Appointment</h2>

  <form
    action="https://formspree.io/f/mykalkpy"
    method="POST"
  >
    <input
      type="text"
      name="name"
      placeholder="Full Name"
      required
    />

    <input
      type="tel"
      name="phone"
      placeholder="Phone Number"
      required
    />

    <input
      type="email"
      name="email"
      placeholder="Email Address"
      required
    />

    <textarea
      name="message"
      placeholder="Preferred Date and Service"
      rows="5"
    ></textarea>

    <button type="submit">
      Send Booking Request
    </button>
  </form>
</section>
<section className="contact" id="contact">
  <div className="contact-content">

    <span className="section-tag">
      CONTACT US
    </span>

    <h2 className="contact-title">
      Book Your Appointment Today
    </h2>

    <p className="contact-description">
      Ready for smooth and confident skin?
      Contact us today and schedule your consultation.
    </p>

    <div className="contact-info">

      <p>📞 +1 (548) 255-3143</p>

      <p>📧 foreversmooth2@gmail.com</p>

      <p>📍 74 The Country Way, Kitchener, ON</p>

      <p>🕒 Monday – Sunday: 9:00 AM – 9:00 PM</p>
    </div>

  </div>
</section>

{/* MAP */}
<section className="map-section">

  <div className="services-header">

    <span className="section-tag">
      FIND US
    </span>

    <h2 className="services-title">
      Visit Forever Smooth
    </h2>

    <p className="services-text">
      Conveniently located in Kitchener, Ontario.
    </p>

  </div>

  <div className="map-container">

    <iframe
      title="Forever Smooth Location"
      src="https://www.google.com/maps?q=74%20The%20Country%20Way%20Kitchener%20Ontario&output=embed"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>

  </div>

</section>


{/* WHATSAPP */}

<a
  href="https://wa.me/15482553143"
  className="whatsapp-btn"
  target="_blank"
  rel="noreferrer"
  aria-label="Chat on WhatsApp"
>
  <FaWhatsapp />
</a>

{/* FOOTER */}

<footer className="footer">

  <div className="footer-top">

    {/* LEFT - LOGO */}
    <div className="footer-left">
      <img
        src={logo}
        alt="Forever Smooth Logo"
        className="footer-logo"
      />
    </div>

    {/* CENTER - SLOGAN */}
    <div className="footer-center">
     <h2 className="footer-slogan">
  Luxury Laser Hair Removal
  <span>Experience</span>
</h2>
    </div>

    {/* RIGHT - SOCIAL LINKS */}
    <div className="footer-right">

  <a
    href="https://bit.ly/4477LdQ"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGoogle className="social-icon" />
    <span>Google Reviews</span>
  </a>

  <a
    href="https://bit.ly/4vFDM8O"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram className="social-icon" />
    <span>Instagram</span>
  </a>

  <a
    href="https://bit.ly/43vShQD"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebook className="social-icon" />
    <span>Facebook</span>
  </a>

</div>

  </div>

  {/* COPYRIGHT */}
  <div className="footer-bottom">
    © 2026 Forever Smooth Laser Hair Removal. All Rights Reserved.
  </div>

</footer>

</div>

</>
);
}

export default App;