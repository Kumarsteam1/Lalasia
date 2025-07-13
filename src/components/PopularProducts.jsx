import React from "react";
import Slider from "react-slick";
import "../App.css";
import product1 from "../assets/products/product1.png";
import product2 from "../assets/products/product2.jpg";
import product3 from "../assets/products/product3.jpg";
import product4 from "../assets/products/product4.jpg";

const products = [
  { id: 1, image: product1, category: "Bookshelf", title: "Bookshelf", description: "of wood and wool", price: "63.47" },
  { id: 2, image: product2, category: "Chair", title: "White Aesthetic Chair", description: "Combination of wood and wool", price: "63.47" },
  { id: 3, image: product3, category: "Lamp", title: "Bardono Smart Lamp", description: "Easy to use with bluetooth connection", price: "62.23" },
  { id: 4, image: product4, category: "Sofa", title: "Sofa Empuk Banget", description: "Using kapuk randu material", price: "58.39" },
  { id: 5, image: product2, category: "Chair", title: "White Aesthetic Chair", description: "Combination of wood and wool", price: "63.47" },
  { id: 6, image: product3, category: "Lamp", title: "Bardono Smart Lamp", description: "Easy to use with bluetooth connection", price: "62.23" },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

const PopularProducts = () => {
  return (
    <section className="popular-products-section">
      <p className="section-tag">Product</p>
      <h2 className="section-title">Our popular product</h2>
      <p className="section-description">
        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
        placerat nisi, adipiscing mauris non purus parturient.
      </p>

      <Slider {...settings}>
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} className="product-img" />
            <p className="product-category">{item.category}</p>
            <h3 className="product-title">{item.title}</h3>
            <p className="product-description">{item.description}</p>
            <p className="product-price">${item.price}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default PopularProducts;
