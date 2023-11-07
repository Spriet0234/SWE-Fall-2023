import React, { useState, useContext } from "react";
import "../styles/Home.css";
import "../styles/bootstrap.min.css"
import "../styles/font-awesome.min.css"
import "../styles/elegant-icons.css"
import "../styles/magnific-popup.css"
import "../styles/nice-select.css"
import "../styles/owl.carousel.min.css"
import "../styles/slicknav.min.css"
import "../styles/style.css"
import Item from "./Item";
import {useNavigate} from "react-router-dom";
import { CartContext } from "./CartContext";

const Home = ({ items }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const onProductClick = (itemName) => {
    console.log(`${itemName} clicked!`);
    // Add additional logic here for when an item is clicked
  };

  const addItem = () => {
    navigate(`/add-item`);
  };

  return (
      <div>

          {/* Header Section End */}
          {/* Hero Section Begin */}
          <section className="hero">
              <div className="hero__slider owl-carousel">
                  <div className="hero__items set-bg" data-setbg="../images/hero/hero-1.jpg">
                      <div className="container">
                          <div className="row">
                              <div className="col-xl-5 col-lg-7 col-md-8">
                                  <div className="hero__text">
                                      <h6>Summer Collection</h6>
                                      <h2>Fall - Winter Collections 2030</h2>
                                      <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                          commitment to exceptional quality.</p>
                                      <a href="#" className="primary-btn">Shop now <span className="arrow_right" /></a>
                                      <div className="hero__social">
                                          <a href="#"><i className="fa fa-facebook" /></a>
                                          <a href="#"><i className="fa fa-twitter" /></a>
                                          <a href="#"><i className="fa fa-pinterest" /></a>
                                          <a href="#"><i className="fa fa-instagram" /></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="hero__items set-bg" data-setbg="../images/hero/hero-2.jpg">
                      <div className="container">
                          <div className="row">
                              <div className="col-xl-5 col-lg-7 col-md-8">
                                  <div className="hero__text">
                                      <h6>Summer Collection</h6>
                                      <h2>Fall - Winter Collections 2030</h2>
                                      <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                          commitment to exceptional quality.</p>
                                      <a href="#" className="primary-btn">Shop now <span className="arrow_right" /></a>
                                      <div className="hero__social">
                                          <a href="#"><i className="fa fa-facebook" /></a>
                                          <a href="#"><i className="fa fa-twitter" /></a>
                                          <a href="#"><i className="fa fa-pinterest" /></a>
                                          <a href="#"><i className="fa fa-instagram" /></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* Hero Section End */}
          {/* Banner Section Begin */}
          <section className="banner spad">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-5">
                          <div className="banner__item banner__item--middle">
                              <div className="banner__item__pic">
                                  <img src="../images/banner/banner-2.jpg" alt="" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* Banner Section End */}
          {/* Product Section Begin */}
          <section className="product spad">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <ul className="filter__controls">
                              <li className="active" data-filter="*">Best Sellers</li>
                          </ul>
                      </div>
                  </div>
              </div>

              <div className="row product__filter">
                  {filteredItems?.map((item) => (
                      <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                          <div key={item.id}>
                              <Item
                                  image={item.image}
                                  name={item.name}
                                  price={item.price}
                                  description={item.description}
                                  quantity={item.quantity}
                                  onClick={() => onProductClick(item.description)}
                              />
                          </div>
                      </div>
                    ))}
              </div>
          </section>
          {/* Product Section End */}
          {/* Footer Section Begin */}
          <footer className="footer">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-3 col-md-6 col-sm-6">
                          <div className="footer__about">
                              <div className="footer__logo">
                                  <a href="#"><img src="../images/footer-logo.png" alt="" /></a>
                              </div>
                              <p>The customer is at the heart of our unique business model, which includes design.</p>
                              <a href="#"><img src="../images/payment.png" alt="" /></a>
                          </div>
                      </div>
                      <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                          <div className="footer__widget">
                              <h6>Shopping</h6>
                              <ul>
                                  <li><a href="#">Clothing Store</a></li>
                                  <li><a href="#">Trending Shoes</a></li>
                                  <li><a href="#">Accessories</a></li>
                                  <li><a href="#">Sale</a></li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-6">
                          <div className="footer__widget">
                              <h6>Shopping</h6>
                              <ul>
                                  <li><a href="#">Contact Us</a></li>
                                  <li><a href="#">Payment Methods</a></li>
                                  <li><a href="#">Delivary</a></li>
                                  <li><a href="#">Return &amp; Exchanges</a></li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                          <div className="footer__widget">
                              <h6>NewLetter</h6>
                              <div className="footer__newslatter">
                                  <p>Be the first to know about new arrivals, look books, sales &amp; promos!</p>
                                  <form action="#">
                                      <input type="text" placeholder="Your email" />
                                      <button type="submit"><span className="icon_mail_alt" /></button>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-12 text-center">
                          <div className="footer__copyright__text">
                              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                              <p>Copyright ©
                                  2020
                                  All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                              </p>
                              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                          </div>
                      </div>
                  </div>
              </div>
          </footer>
          {/* Footer Section End */}
          {/* Search Begin */}
          <div className="search-model">
              <div className="h-100 d-flex align-items-center justify-content-center">
                  <div className="search-close-switch">+</div>
                  <form className="search-model-form">
                      <input type="text" id="search-input" placeholder="Search here....." />
                  </form>
              </div>
          </div>

      </div>
  );
};

export default Home;

