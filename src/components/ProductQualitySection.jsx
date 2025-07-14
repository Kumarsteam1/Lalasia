import React from "react";
import "../App.css";
import imgTools from "../assets/quality/quality-left.png";
import imgSofa from "../assets/quality/quality-right.jpg";

const ProductQualitySection = () => {
	return (
		<>
			<p className="section-tag">Our Product</p>
			<section className="product-quality-section">

				<div className="quality-left">

					<h2 className="section-title">
						Crafted by talented and <br /> high quality material
					</h2>
					<p className="section-description">
						Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
						placerat nisi, adipiscing mauris non purus parturient. morbi fermentum,
						vivamus et accumsan dui tincidunt pulvinar
					</p>
					<button className="learn-more-btn">Learn More</button>
					<img src={imgTools} alt="Craft Tools" className="quality-bottom-image" />
				</div>

				<div className="quality-right">
					<div className="quality-stats">
						<div className="stat">
							<h3>20+</h3>
							<p>Years Experience</p>
						</div>
						<div className="stat">
							<h3>483</h3>
							<p>Happy Client</p>
						</div>
						<div className="stat">
							<h3>150+</h3>
							<p>Project Finished</p>
						</div>


					</div>
					<img src={imgSofa} alt="Sofa Product" className="quality-main-image" />
				</div>
			</section>
		</>
	);
};

export default ProductQualitySection;
