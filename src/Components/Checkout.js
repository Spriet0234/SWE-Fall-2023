import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/checkout.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const Checkout = () => {
  const [checkoutCompleted, setCheckoutCompleted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    middleInitial: "",
    lastName: "",
    streetAddress: "",
    city: "",
    state: "",
    zipcode: "",
    apartmentNumber: "",
    phoneNumber: "",
    email: "",
    cardholderName: "",
    cardNumber: "",
    cardExpiration: "",
    cardCvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process or send form data here

    // Assuming data submission is successful, show confirmation page
    setCheckoutCompleted(true);
  };
  if (checkoutCompleted) {
    return (
      <div className="checkout-container">
        <h1>Thank you for your purchase!</h1>
        <div className="confirmation-details">
          <p>
            <strong>Name:</strong> {formData.firstName} {formData.middleInitial}{" "}
            {formData.lastName}
          </p>
          <p>
            <strong>Address:</strong> {formData.streetAddress},{" "}
            {formData.apartmentNumber && `Apt ${formData.apartmentNumber},`}{" "}
            {formData.city}, {formData.state} {formData.zipcode}
          </p>
          <p>
            <strong>Phone:</strong> {formData.phoneNumber}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
        </div>
        <Link to="/" className="back-link">
          Back to Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <h5>Personal Information</h5>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <label htmlFor="middleInitial">Middle Initial (Optional)</label>
          <input
            type="text"
            name="middleInitial"
            id="middleInitial"
            value={formData.middleInitial}
            onChange={handleChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <h5>Shipping Information</h5>
          <label htmlFor="streetAddress">Street Address</label>
          <input
            type="text"
            name="streetAddress"
            id="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
          />
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            value={formData.city}
            onChange={handleChange}
          />
          <label htmlFor="state">State</label>
          <input
            type="text"
            name="state"
            id="state"
            value={formData.state}
            onChange={handleChange}
          />
          <label htmlFor="zipcode">Zipcode</label>
          <input
            type="text"
            name="zipcode"
            id="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
          />
          <label htmlFor="apartmentNumber">Apartment Number (Optional)</label>
          <input
            type="text"
            name="apartmentNumber"
            id="apartmentNumber"
            value={formData.apartmentNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <h5>Contact Information</h5>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <h5>Payment Information</h5>
          <label htmlFor="cardholderName">Cardholder's Name</label>
          <input
            type="text"
            name="cardholderName"
            id="cardholderName"
            value={formData.cardholderName}
            onChange={handleChange}
          />
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            id="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
          />
          <label htmlFor="cardExpiration">Expiration Date (MM/YYYY)</label>
          <input
            type="text"
            name="cardExpiration"
            id="cardExpiration"
            value={formData.cardExpiration}
            onChange={handleChange}
          />
          <label htmlFor="cardCvv">CVV</label>
          <input
            type="text"
            name="cardCvv"
            id="cardCvv"
            value={formData.cardCvv}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="checkout-button">
          Complete Purchase
        </button>
      </form>
      <Link to="/cart" className="back-link">
        Back to Cart
      </Link>
    </div>
  );
};

export default Checkout;
