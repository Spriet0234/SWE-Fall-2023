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
import {Link, useNavigate} from "react-router-dom";
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
                      <div className="col-lg-7 offset-lg-4">
                          <div className="banner__item">
                              <div className="banner__item__pic">
                                  <img src="../images/banner/banner-1.jpg" alt="" />
                              </div>
                              <div className="banner__item__text">
                                  <h2>Clothing Collections 2030</h2>
                                  <a href="#">Shop now</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-5">
                          <div className="banner__item banner__item--middle">
                              <div className="banner__item__pic">
                                  <img src="../images/banner/banner-2.jpg" alt="" />
                              </div>
                              <div className="banner__item__text">
                                  <h2>Accessories</h2>
                                  <a href="#">Shop now</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-7">
                          <div className="banner__item banner__item--last">
                              <div className="banner__item__pic">
                                  <img src="../images/banner/banner-3.jpg" alt="" />
                              </div>
                              <div className="banner__item__text">
                                  <h2>Shoes Spring 2030</h2>
                                  <a href="#">Shop now</a>
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
                              <li data-filter=".new-arrivals">New Arrivals</li>
                              <li data-filter=".hot-sales">Hot Sales</li>
                          </ul>
                      </div>
                  </div>
                  <div className="row product__filter">
                      <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                          <div className="product__item">
                              <div className="product__item__pic set-bg" data-setbg="../images/product/product-1.jpg">
                                  <span className="label">New</span>
                                  <ul className="product__hover">
                                      <li><a href="#"><img src="../images/icon/heart.png" alt="" /></a></li>
                                      <li><a href="#"><img src="../images/icon/compare.png" alt="" /> <span>Compare</span></a></li>
                                      <li><a href="#"><img src="../images/icon/search.png" alt="" /></a></li>
                                  </ul>
                              </div>
                              <div className="product__item__text">
                                  <h6>Piqué Biker Jacket</h6>
                                  <a href="#" className="add-cart">+ Add To Cart</a>
                                  <div className="rating">
                                      <i className="fa fa-star-o" />
                                      <i className="fa fa-star-o" />
                                      <i className="fa fa-star-o" />
                                      <i className="fa fa-star-o" />
                                      <i className="fa fa-star-o" />
                                  </div>
                                  <h5>$67.24</h5>
                                  <div className="product__color__select">
                                      <label htmlFor="pc-1">
                                          <input type="radio" id="pc-1" />
                                      </label>
                                      <label className="active black" htmlFor="pc-2">
                                          <input type="radio" id="pc-2" />
                                      </label>
                                      <label className="grey" htmlFor="pc-3">
                                          <input type="radio" id="pc-3" />
                                      </label>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
                          <div className="product__item">
                              <div className="product__item__pic set-bg" data-setbg="../images/product/product-2.jpg">
                                  <ul className="product__hover">
                                      <li><a href="#"><img src="../images/icon/heart.png" alt="" /></a></li>
                                      <li><a href="#"><img src="../images/icon/compare.png" alt="" /> <span>Compare</span></a></li>
                                      <li><a href="#"><img src="../images/icon/search.png" alt="" /></a></li>
                                  </ul>
                              </div>
                              <div className="product__item__text">
                                  <h6>Piqué Biker Jacket</h6>
                                  <a href="#" className="add-cart">+ Add To Cart</a>
                                  <div className="rating">
                                      <i className="fa fa-star-o" />
                                      <i className="fa fa-star-o" />
                                      <i className="fa fa-star-o" />
                                      <i className="fa fa-star-o" />
                                      <i className="fa fa-star-o" />
                                  </div>
                                  <h5>$67.24</h5>
                                  <div className="product__color__select">
                                      <label htmlFor="pc-4">
                                          <input type="radio" id="pc-4" />
                                      </label>
                                      <label className="active black" htmlFor="pc-5">
                                          <input type="radio" id="pc-5" />
                                      </label>
                                      <label className="grey" htmlFor="pc-6">
                                          <input type="radio" id="pc-6" />
                                      </label>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                          <div className="product__item sale">
                              <div className="product__item__pic set-bg" data-setbg="../images/product/product-3.jpg">
                                  <span className="label">Sale</span>
                                  <ul className="product__hover">
                                      <li><a href="#"><img src="../images/icon/heart.png" alt="" /></a></li>
                                      <li><a href="#"><img src="../images/icon/compare.png" alt="" /> <span>Compare</span></a></li>
                                      <li><a href="#"><img src="../images/icon/search.png" alt="" /></a></li>
                                  </ul>
                              </div>
                              <div className="product__item__text">
                                  <h6>Multi-pocket Chest Bag</h6>
                                  <a href="#" className="add-cart">+ Add To Cart</a>
                                  <div className="rating">
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star-o" />
                                  </div>
                                  <h5>$43.48</h5>
                                  <div className="product__color__select">
                                      <label htmlFor="pc-7">
                                          <input type="radio" id="pc-7" />
                                      </label>
                                      <label className="active black" htmlFor="pc-8">
                                          <input type="radio" id="pc-8" />
                                      </label>
                                      <label className="grey" htmlFor="pc-9">
                                          <input type="radio" id="pc-9" />
                                      </label>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
                          <div className="product__item">
                              <div className="product__item__pic set-bg" data-setbg="../images/product/product-4.jpg">
                                  <ul className="product__hover">
                                      <li><a href="#"><img src="../images/icon/heart.png" alt="" /></a></li>
                                      <li><a href="#"><img src="../images/icon/compare.png" alt="" /> <span>Compare</span></a></li>
                                      <li><a href="#"><img src="../images/icon/search.png" alt="" /></a></li>
                                  </ul>
                              </div>
                              <div className="product__item__text">
                                  <h6>Diagonal Textured Cap</h6>
                                  <a href="#" className="add-cart">+ Add To Cart</a>
                                  <div className="rating">
                                      <i className="fa fa-star-o" />
                                      <i className="fa fa-star-o" />
                                      <i className="fa fa-star-o" />
                                      <i className="fa fa-star-o" />
                                      <i className="fa fa-star-o" />
                                  </div>
                                  <h5>$60.9</h5>
                                  <div className="product__color__select">
                                      <label htmlFor="pc-10">
                                          <input type="radio" id="pc-10" />
                                      </label>
                                      <label className="active black" htmlFor="pc-11">
                                          <input type="radio" id="pc-11" />
                                      </label>
                                      <label className="grey" htmlFor="pc-12">
                                          <input type="radio" id="pc-12" />
                                      </label>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                          <div className="product__item">
                              <div className="product__item__pic set-bg" data-setbg="../images/product/product-5.jpg">
                                  <ul className="product__hover">
                                      <li><a href="#"><img src="../images/icon/heart.png" alt="" /></a></li>
                                      <li><a href="#"><img src="../images/icon/compare.png" alt="" /> <span>Compare</span></a></li>
                                      <li><a href="#"><img src="../images/icon/search.png" alt="" /></a></li>
                                  </ul>
                              </div>
                              <div className="product__item__text">
                                  <h6>Lether Backpack</h6>
                                  <a href="#" className="add-cart">+ Add To Cart</a>
                                  <div className="rating">
                                      <i className="fa fa-star-o" />
                                      <i className="fa fa-star-o" />
                                      <i className="fa fa-star-o" />
                                      <i className="fa fa-star-o" />
                                      <i className="fa fa-star-o" />
                                  </div>
                                  <h5>$31.37</h5>
                                  <div className="product__color__select">
                                      <label htmlFor="pc-13">
                                          <input type="radio" id="pc-13" />
                                      </label>
                                      <label className="active black" htmlFor="pc-14">
                                          <input type="radio" id="pc-14" />
                                      </label>
                                      <label className="grey" htmlFor="pc-15">
                                          <input type="radio" id="pc-15" />
                                      </label>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
                          <div className="product__item sale">
                              <div className="product__item__pic set-bg" data-setbg="../images/product/product-6.jpg">
                                  <span className="label">Sale</span>
                                  <ul className="product__hover">
                                      <li><a href="#"><img src="../images/icon/heart.png" alt="" /></a></li>
                                      <li><a href="#"><img src="../images/icon/compare.png" alt="" /> <span>Compare</span></a></li>
                                      <li><a href="#"><img src="../images/icon/search.png" alt="" /></a></li>
                                  </ul>
                              </div>
                              <div className="product__item__text">
                                  <h6>Ankle Boots</h6>
                                  <a href="#" className="add-cart">+ Add To Cart</a>
                                  <div className="rating">
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star-o" />
                                  </div>
                                  <h5>$98.49</h5>
                                  <div className="product__color__select">
                                      <label htmlFor="pc-16">
                                          <input type="radio" id="pc-16" />
                                      </label>
                                      <label className="active black" htmlFor="pc-17">
                                          <input type="radio" id="pc-17" />
                                      </label>
                                      <label className="grey" htmlFor="pc-18">
                                          <input type="radio" id="pc-18" />
                                      </label>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                          <div className="product__item">
                              <div className="product__item__pic set-bg" data-setbg="../images/product/product-7.jpg">
                                  <ul className="product__hover">
                                      <li><a href="#"><img src="../images/icon/heart.png" alt="" /></a></li>
                                      <li><a href="#"><img src="../images/icon/compare.png" alt="" /> <span>Compare</span></a></li>
                                      <li><a href="#"><img src="../images/icon/search.png" alt="" /></a></li>
                                  </ul>
                              </div>
                              <div className="product__item__text">
                                  <h6>T-shirt Contrast Pocket</h6>
                                  <a href="#" className="add-cart">+ Add To Cart</a>
                                  <div className="rating">
                                      <i className="fa fa-star-o" />
                                      <i className="fa fa-star-o" />
                                      <i className="fa fa-star-o" />
                                      <i className="fa fa-star-o" />
                                      <i className="fa fa-star-o" />
                                  </div>
                                  <h5>$49.66</h5>
                                  <div className="product__color__select">
                                      <label htmlFor="pc-19">
                                          <input type="radio" id="pc-19" />
                                      </label>
                                      <label className="active black" htmlFor="pc-20">
                                          <input type="radio" id="pc-20" />
                                      </label>
                                      <label className="grey" htmlFor="pc-21">
                                          <input type="radio" id="pc-21" />
                                      </label>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
                          <div className="product__item">
                              <div className="product__item__pic set-bg" data-setbg="../images/product/product-8.jpg">
                                  <ul className="product__hover">
                                      <li><a href="#"><img src="../images/icon/heart.png" alt="" /></a></li>
                                      <li><a href="#"><img src="../images/icon/compare.png" alt="" /> <span>Compare</span></a></li>
                                      <li><a href="#"><img src="../images/icon/search.png" alt="" /></a></li>
                                  </ul>
                              </div>
                              <div className="product__item__text">
                                  <h6>Basic Flowing Scarf</h6>
                                  <a href="#" className="add-cart">+ Add To Cart</a>
                                  <div className="rating">
                                      <i className="fa fa-star-o" />
                                      <i className="fa fa-star-o" />
                                      <i className="fa fa-star-o" />
                                      <i className="fa fa-star-o" />
                                      <i className="fa fa-star-o" />
                                  </div>
                                  <h5>$26.28</h5>
                                  <div className="product__color__select">
                                      <label htmlFor="pc-22">
                                          <input type="radio" id="pc-22" />
                                      </label>
                                      <label className="active black" htmlFor="pc-23">
                                          <input type="radio" id="pc-23" />
                                      </label>
                                      <label className="grey" htmlFor="pc-24">
                                          <input type="radio" id="pc-24" />
                                      </label>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* Product Section End */}
          {/* Categories Section Begin */}
          <section className="categories spad">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-3">
                          <div className="categories__text">
                              <h2>Clothings Hot <br /> <span>Shoe Collection</span> <br /> Accessories</h2>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="categories__hot__deal">
                              <img src="../images/product-sale.png" alt="" />
                              <div className="hot__deal__sticker">
                                  <span>Sale Of</span>
                                  <h5>$29.99</h5>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 offset-lg-1">
                          <div className="categories__deal__countdown">
                              <span>Deal Of The Week</span>
                              <h2>Multi-pocket Chest Bag Black</h2>
                              <div className="categories__deal__countdown__timer" id="countdown">
                                  <div className="cd-item">
                                      <span>3</span>
                                      <p>Days</p>
                                  </div>
                                  <div className="cd-item">
                                      <span>1</span>
                                      <p>Hours</p>
                                  </div>
                                  <div className="cd-item">
                                      <span>50</span>
                                      <p>Minutes</p>
                                  </div>
                                  <div className="cd-item">
                                      <span>18</span>
                                      <p>Seconds</p>
                                  </div>
                              </div>
                              <a href="#" className="primary-btn">Shop now</a>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* Categories Section End */}
          {/* Instagram Section Begin */}
          <section className="instagram spad">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-8">
                          <div className="instagram__pic">
                              <div className="instagram__pic__item set-bg" data-setbg="../images/instagram/instagram-1.jpg" />
                              <div className="instagram__pic__item set-bg" data-setbg="../images/instagram/instagram-2.jpg" />
                              <div className="instagram__pic__item set-bg" data-setbg="../images/instagram/instagram-3.jpg" />
                              <div className="instagram__pic__item set-bg" data-setbg="../images/instagram/instagram-4.jpg" />
                              <div className="instagram__pic__item set-bg" data-setbg="../images/instagram/instagram-5.jpg" />
                              <div className="instagram__pic__item set-bg" data-setbg="../images/instagram/instagram-6.jpg" />
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="instagram__text">
                              <h2>Instagram</h2>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                  labore et dolore magna aliqua.</p>
                              <h3>#Male_Fashion</h3>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* Instagram Section End */}
          {/* Latest Blog Section Begin */}
          <section className="latest spad">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="section-title">
                              <span>Latest News</span>
                              <h2>Fashion New Trends</h2>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-6">
                          <div className="blog__item">
                              <div className="blog__item__pic set-bg" data-setbg="../images/blog/blog-1.jpg" />
                              <div className="blog__item__text">
                                  <span><img src="../images/icon/calendar.png" alt="" /> 16 February 2020</span>
                                  <h5>What Curling Irons Are The Best Ones</h5>
                                  <a href="#">Read More</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6">
                          <div className="blog__item">
                              <div className="blog__item__pic set-bg" data-setbg="../images/blog/blog-2.jpg" />
                              <div className="blog__item__text">
                                  <span><img src="../images/icon/calendar.png" alt="" /> 21 February 2020</span>
                                  <h5>Eternity Bands Do Last Forever</h5>
                                  <a href="#">Read More</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6">
                          <div className="blog__item">
                              <div className="blog__item__pic set-bg" data-setbg="../images/blog/blog-3.jpg" />
                              <div className="blog__item__text">
                                  <span><img src="../images/icon/calendar.png" alt="" /> 28 February 2020</span>
                                  <h5>The Health Benefits Of Sunglasses</h5>
                                  <a href="#">Read More</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* Latest Blog Section End */}
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

      <div>
        <div className="home-page">
          <header className="home-header">
            <h1>Clothes Shopping Site</h1>
            <div>
              <p>Your one-stop shop for the latest fashion!</p>
              <button onClick={addItem}>Add Items</button>
            </div>
          </header>
        </div>
        <section style={{ display: "flex", flexWrap: "wrap", margin: 10 }}>
          {filteredItems.map((item) => (
              <div key={item.id} className="item-container">
                <Item
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    quantity={item.quantity}
                    onClick={() => onProductClick(item.description)}
                />
              </div>
          ))}
        </section>
      </div>
      </div>
  );
};

export default Home;

