import React, { useContext } from "react";
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

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  console.log(cartItems);

  // Calculate the subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

  let shipping = 9.99; // Shipping cost
  const taxRate = 0.0825; // Tax rate (8.25%)
  let total = 0;

  // Calculate the total including tax and shipping
  switch (true) {
    case subtotal <= 0:
      shipping = 0;
      total = subtotal;
      break;
    case subtotal > 50:
      shipping = 0;
      total = subtotal + subtotal * taxRate;
      break;
    default:
      total = subtotal + shipping + subtotal * taxRate;
  }

  const handleRemoveItem = (id) => {
    console.log(id);
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
                                  {item.name}
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
                                  {item.quantity}
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
                                onClick={() => handleRemoveItem(item.id)}
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
                    <MDBCard className="bg-primary text-white rounded-3">
                      <MDBCardBody>
                        <hr />

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">${subtotal.toFixed(2)}</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">${shipping.toFixed(2)}</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Total (Incl. taxes @ 8.25%)</p>
                          <p className="mb-2">${total.toFixed(2)}</p>
                        </div>

                        <Link to="/checkout">
                          <MDBBtn color="info" block size="lg">
                            <div className="d-flex justify-content-between">
                              <span>${total.toFixed(2)}</span>
                              <span>
                                Checkout{" "}
                                <i className="fas fa-long-arrow-alt-right ms-2"></i>
                              </span>
                            </div>
                          </MDBBtn>
                        </Link>
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
