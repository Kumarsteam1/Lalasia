import React from "react";
import "../App.css";
import article1 from "../assets/articles/article1.jpg";
import article2 from "../assets/articles/article2.jpg";
import article3 from "../assets/articles/article3.jpg";
import article4 from "../assets/articles/article4.jpg";

const ArticlesSection = () => {
	return (
		<section className="articles-section">
			<div className="articles-header">
				<p className="section-tag">Articles</p>

			</div>

			<div className="articles-content">
				<div className="article-left">
					<div>
						<h2 className="section-title">The best furniture comes <br></br> from Lalasia</h2>
						<p className="section-description">
							Pellentesque etiam blandit in tincidunt at donec.
						</p>
					</div>
					<div className="main-article">
						<img src={article1} alt="main article" className="main-article-img" />
						<div className="main-article-info">
							<p className="article-category">Tips and Trick</p>
							<h3 className="article-title">Create Cozy Dinning Room Vibes</h3>
							<p className="article-excerpt">
								Decorating with neutrals brings balance to the dining room...
							</p>
							<a href="#" className="read-more">Read More</a>
						</div>
					</div>
				</div>

				<div className="article-list">
					<div className="article-card">
						<img src={article2} alt="article" />
						<div>
							<p className="article-category">Tips and Trick</p>
							<h4 className="article-title-sm">6 ways to give your home minimalistic vibes</h4>
							<p className="article-meta">By Jeremey Jean - Friday, 1 April 2022</p>
						</div>
					</div>
					<div className="article-card">
						<img src={article3} alt="article" />
						<div>
							<p className="article-category">Design Inspiration</p>
							<h4 className="article-title-sm">How to make your interiors cooler and more stylish</h4>
							<p className="article-meta">By Michaela Augus - Friday, 1 April 2022</p>
						</div>
					</div>
					<div className="article-card">
						<img src={article4} alt="article" />
						<div>
							<p className="article-category">Tips and Trick</p>
							<h4 className="article-title-sm">Elements to add character to your space</h4>
							<p className="article-meta">By Kim Gumareh - Friday, 1 April 2022</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ArticlesSection;
