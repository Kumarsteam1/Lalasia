// src/components/TestimonialsSection.jsx
import React from "react";
import "../App.css"; // Or use a separate TestimonialsSection.css
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    text: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    name: "Janne Cooper",
    rating: 4.3,
    avatar: "https://ui-avatars.com/api/?name=Janne+Cooper&background=518581&color=ffffff"
  },
  {
    text: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    name: "Cobocannaeru",
    rating: 4.5,
    avatar: "https://ui-avatars.com/api/?name=Cobocannaeru&background=518581&color=ffffff"
  },
  {
    text: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    name: "Rizky Gunawan",
    rating: 3.5,
    avatar: "https://ui-avatars.com/api/?name=Rizky+Gunawan&background=518581&color=ffffff"
  }
];


const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <p className="section-tag">Testimonials</p>
      <h2 className="section-title">What our customer say</h2>
      <p className="section-description">
        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
        placerat nisi, adipiscing mauris non purus parturient.
      </p>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="quote-icon">“</div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-footer">
              <div className="user-info">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="user-avatar"
                />
                <strong>{testimonial.name}</strong>
              </div>
              <div className="rating">
                <FaStar color="#FBBF24" size={16} /> {testimonial.rating}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
