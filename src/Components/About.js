import React from "react";
import "../styles/bootstrap.min.css";
import "../styles/font-awesome.min.css";
import "../styles/elegant-icons.css";
import "../styles/magnific-popup.css";
import "../styles/nice-select.css";
import "../styles/owl.carousel.min.css";
import "../styles/slicknav.min.css";
import "../styles/style.css";
import "../styles/Home.css";


const About = () => {
    return (
        <div className="about-me-container">
            <header className="header-section">

            </header>

            <section className="about-me-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-me-text">
                                <h2>Blacksmith - Forge your own threads</h2>
                                <p>
                                    Welcome to Blacksmith, where fashion meets passion. We are more than just a clothing brand; we are a statement, an expression, and a celebration of individuality.
                                    At Blacksmith, we believe that what you wear is an extension of your personality, and we're here to help you make a bold statement.
                                </p>
                                <p>
                                    We take pride in curating collections that not only make you look good but also feel good. Each piece is meticulously crafted with attention to detail,
                                    using the finest materials to ensure a perfect blend of comfort and style. Blacksmith garments are made to be more than just clothing; they are an experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer-section">
                {/* Include your footer content here */}
            </footer>
        </div>
    );
};

export default About;
