import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [discountCode, setDiscountCode] = useState("");
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);
  const [tot, setTot] = useState(0);
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout", { state: { total: total.toFixed(2) } });
  };

  // ... existing subtotal, shipping, and tax calculations remain the same

  // Check for discount code and apply 10% discount if applicable

  // Calculate the subtotal
  cartItems.forEach(function (item) {});
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.inCart, // Use inCart property, defaulting to 0 if it's undefined
    0
  );

  let shipping = 9.99; // Shipping cost
  const taxRate = 0.0825; // Tax rate (8.25%)

  // Apply discount if the code is correct
  const discountPercentage = isDiscountApplied ? 0.1 : 0;
  const discountAmount = subtotal * discountPercentage;

  let total = subtotal - discountAmount;

  // Calculate the total including tax and shipping
  switch (true) {
    case subtotal <= 0:
      shipping = 0;
      total = subtotal;
      break;
    case subtotal > 50:
      shipping = 0;
      // No need to subtract the discount again as it's already been applied to 'total'
      total = total + total * taxRate;
      break;
    default:
      // No need to subtract the discount again as it's already been applied to 'total'
      total = total + shipping + total * taxRate;
  }

  const applyDiscount = () => {
    if (discountCode === "DISCOUNT10" && !isDiscountApplied) {
      setIsDiscountApplied(true);
      // Make sure to update the total calculation when the discount is applied
      total =
        total -
        discountAmount +
        (isDiscountApplied ? 0 : shipping) +
        total * taxRate;
    } else {
      alert("Invalid discount code");
    }
  };

  const handleRemoveItem = (id) => {
    console.log(id + "asdf");
    removeFromCart(id); // Call the removeFromCart function from your context
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol lg="7">
                    <MDBTypography tag="h5">
                      <a href="#!" className="text-body">
                        <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                        shopping
                      </a>
                    </MDBTypography>

                    <hr />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-3">
                          You have {cartItems.length} items in your cart
                        </p>
                      </div>
                      <div>
                        <p>
                          <span className="text-muted">Sort by:</span>
                          <a href="#!" className="text-body">
                            price
                            <MDBIcon fas icon="angle-down mt-1" />
                          </a>
                        </p>
                      </div>
                    </div>

                    {cartItems.map((item) => (
                      <MDBCard className="mb-3" key={item.id}>
                        <MDBCardBody>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <MDBCardImage
                                  src={item.image}
                                  // Image URL
                                  fluid
                                  className="rounded-3"
                                  style={{ width: "65px" }}
                                  alt={item.name}
                                />
                              </div>
                              <div className="ms-3">
                                <MDBTypography tag="h5">
                                  <div>{item.name}</div>
                                  <div>
                                    <span
                                      style={{ fontSize: "80%", color: "gray" }}
                                    >
                                      Size: {item.size}
                                    </span>
                                  </div>
                                </MDBTypography>
                                <p className="small mb-0">{item.details}</p>
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center">
                              <div style={{ width: "50px" }}>
                                <MDBTypography
                                  tag="h5"
                                  className="fw-normal mb-0"
                                >
                                  {item.inCart}
                                </MDBTypography>
                              </div>
                              <div style={{ width: "80px" }}>
                                <MDBTypography tag="h5" className="mb-0">
                                  ${item.price.toFixed(2)}
                                </MDBTypography>
                              </div>

                              <a
                                href="#!"
                                style={{ color: "#cecece" }}
                                onClick={() => handleRemoveItem(item.uniqueId)}
                              >
                                <MDBIcon fas icon="trash-alt" />
                              </a>
                            </div>
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    ))}
                  </MDBCol>

                  <MDBCol lg="5">
                    <div className="mb-3">
                      <label htmlFor="discountCode" className="form-label">
                        Discount Code
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          id="discountCode"
                          className="form-control"
                          placeholder="Enter discount code"
                          value={discountCode}
                          onChange={(e) => setDiscountCode(e.target.value)}
                          disabled={isDiscountApplied}
                        />
                        <MDBBtn
                          color="success"
                          onClick={applyDiscount}
                          disabled={isDiscountApplied}
                        >
                          Apply
                        </MDBBtn>
                      </div>
                      {isDiscountApplied && (
                        <div className="alert alert-success mt-2">
                          Discount Applied!
                        </div>
                      )}
                    </div>
                    <MDBCard className="bg-primary text-white rounded-3">
                      <MDBCardBody>
                        <hr />

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>

                          <p className="mb-2">${subtotal.toFixed(2)}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Discount</p>

                          <p className="mb-2">${discountAmount.toFixed(2)}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">{`Tax (8.25%)`}</p>

                          <p className="mb-2">${(total * 0.0825).toFixed(2)}</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">${shipping.toFixed(2)}</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Total (Incl. taxes @ 8.25%)</p>
                          <p className="mb-2">${total.toFixed(2)}</p>
                        </div>

                        <MDBBtn
                          color="info"
                          block
                          size="lg"
                          onClick={handleCheckout}
                        >
                          <div className="d-flex justify-content-between">
                            <span>${total.toFixed(2)}</span>
                            <span>
                              Checkout{" "}
                              <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                          </div>
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
