import React, { useState } from "react";
import "../styles/checkout.css";

const CheckoutButton = ({ items }) => {
    const handleClick = () => {
        // Generate receipt
        const receipt = generateReceipt(items);
        console.log(receipt);
        // Navigate to the checkout page
    };

    const generateReceipt = (items) => {
        let total = 0;
        const itemsList = items.map((item, index) => {
            total += item.price;
            return (
                <div key={index}>
                    <span>{item.name}</span>
                    <span>${item.price.toFixed(2)}</span>
                </div>
            );
        });

        return (
            <div>
                <h2>Receipt</h2>
                {itemsList}
                <div>
                    <strong>Total:</strong>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>
        );
    };

    return (
        <button className="button" onClick={handleClick}>
            Proceed to Checkout
        </button>
    );
};

export default CheckoutButton;

