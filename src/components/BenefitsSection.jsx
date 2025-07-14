import React from 'react';
import icon1 from '../assets/benefit-icon1.png';
import icon2 from '../assets/benefit-icon2.png';
import icon3 from '../assets/benefit-icon3.png';
import '../App.css';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: icon1,
      title: 'Many Choices',
      description:
        'Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.',
    },
    {
      icon: icon2,
      title: 'Fast and On Time',
      description:
        'Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.',
    },
    {
      icon: icon3,
      title: 'Affordable Price',
      description:
        'Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.',
    },
  ];

  return (
    <section className="benefits-section">
      <div className="benefits-header">
        <div>
          <p className="section-label">Benefits</p>
          <h2 className="section-title">Benefits when using <br></br> our services</h2>
        </div>
        <p className="section-description">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </div>

      <div className="benefits-grid">
        {benefits.map((item, index) => (
          <div className="benefit-card" key={index}>
            <img src={item.icon} alt={item.title} className="benefit-icon" />
            <h5 className="benefit-title">{item.title}</h5>
            <p className="benefit-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
