import React, { useState, useContext } from "react";
import "../styles/Home.css";
import "../styles/bootstrap.min.css";
import "../styles/font-awesome.min.css";
import "../styles/elegant-icons.css";
import "../styles/magnific-popup.css";
import "../styles/nice-select.css";
import "../styles/owl.carousel.min.css";
import "../styles/slicknav.min.css";
import "../styles/style.css";
import Item from "./Item";
import { useNavigate } from "react-router-dom";
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
      <div className="home-container">
        <section className="product-section">
          <div className="product-container">
            <div className="filter-controls">
              <ul>
                <h3 style={{ padding: 20 }}>Best Sellers</h3>
              </ul>
            </div>

            <div className="product-display">
              {filteredItems?.map((item) => (
                <div key={item.id} className="product-item">
                  <Item
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    quantity={item.quantity}
                    inCart={item.inCart}
                    onClick={() => onProductClick(item.description)}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      {/* Product Section End */}
      {/* Footer Section Begin */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer__about">
                <div className="footer__logo">
                  <a href="#">
                    <img src="../images/footer-logo.png" alt="" />
                  </a>
                </div>
                <p>
                  The customer is at the heart of our unique business model,
                  which includes design.
                </p>
                <a href="#">
                  <img src="../images/payment.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
              <div className="footer__widget">
                <h6>Shopping</h6>
                <ul>
                  <li>
                    <a href="#">Clothing Store</a>
                  </li>
                  <li>
                    <a href="#">Trending Shoes</a>
                  </li>
                  <li>
                    <a href="#">Accessories</a>
                  </li>
                  <li>
                    <a href="#">Sale</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="footer__widget">
                <h6>Shopping</h6>
                <ul>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Payment Methods</a>
                  </li>
                  <li>
                    <a href="#">Delivary</a>
                  </li>
                  <li>
                    <a href="#">Return &amp; Exchanges</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
              <div className="footer__widget">
                <h6>NewLetter</h6>
                <div className="footer__newslatter">
                  <p>
                    Be the first to know about new arrivals, look books, sales
                    &amp; promos!
                  </p>
                  <form action="#">
                    <input type="text" placeholder="Your email" />
                    <button type="submit">
                      <span className="icon_mail_alt" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="footer__copyright__text"></div>
            </div>
          </div>
        </div>
      </footer>

      <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch">+</div>
          <form className="search-model-form">
            <input
              type="text"
              id="search-input"
              placeholder="Search here....."
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
