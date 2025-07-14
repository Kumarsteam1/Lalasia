import React from 'react';
import { Container, Form, FormControl, Button } from 'react-bootstrap';
import "../App.css"
import heroImage from "../assets/hero-img.png";
import littleStar from "../assets/little-star.png";
import greenArrow from '../assets/green-arrow.png';


const HeroSection = () => {
	return (
		<section className="hero-section">
			<Container className="text-center py-5">
				<h1 className="hero-title">Discover Furniture With</h1>
				<h1 className="hero-title-two">
					High Quality Wood
					<img src={littleStar} alt="star" className="hero-star" />
				</h1>

				<div className="hero-paragraph-wrapper">
					<img src={greenArrow} alt="arrow" className="green-arrow-decor" />
					<p className="hero-subtext">
						Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi,
						adipiscing mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt
						aliquam adipiscing tempor.
					</p>
				</div>

				<div className="search-bar-overlay">
					<Form className="search-box-wrapper">
						<FormControl
							type="search"
							placeholder="Search property"
							className="search-input"
							aria-label="Search"
						/>
						<Button variant="none" className="search-button">Search</Button>
					</Form>
				</div>

			</Container>


			<div className="hero-image-wrapper">
				<img src={heroImage} alt="Furniture Display" />
			</div>
		</section>
	);
};

export default HeroSection;
