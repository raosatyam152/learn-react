// onChange = event handler is primarily used with form elements
//            ex. <input>, <textarea>, <select>, <radio>, etc.
//           It is triggered when the value of the element changes.
import React, { useState } from 'react';

function OnChange() {
    const[name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [description, setDescription] = useState("What item do you want to buy?");
    const [payment, setPayment] = useState();
    const [shipping, setShipping] = useState("");


    function handleChange(event){
        setName(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleDesChange(event){
        setDescription(event.target.value);
    }
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }
    function handleShippingChange(event){
        setShipping(event.target.value);
    }
    return (
        <div>
            <input value={name} onChange={handleChange} placeholder="Enter your name" />
            <p>Your name is: {name}</p>
            <input type="number" value={quantity} onChange={handleQuantityChange} min="1" />
            <p>how many {quantity}</p>
            <textarea value={description} onChange={handleDesChange} placeholder="what item do you want to buy?" />
            <p>Your Item is: {description}</p>

            <select value={payment || ""} onChange={handlePaymentChange}>
                <option value="">Select an Option</option>
                <option value="Master Card">Master Card</option>
                <option value="Visa">Visa</option>
                <option value="PayPal">PayPal</option>
            </select>
            <p>Your payment method is: {payment}</p>

            <div>
                <label>
                    <input
                        type="radio"
                        name="shipping"
                        value="Free Shipping"
                        checked={shipping === "Free Shipping"}
                        onChange={handleShippingChange}
                    />
                    Free Shipping
                </label>
                <label>
                    <input
                        type="radio"
                        name="shipping"
                        value="Express Shipping"
                        checked={shipping === "Express Shipping"}
                        onChange={handleShippingChange}
                    />
                    Express Shipping
                    <input
                        type="radio"
                        name="shipping"
                        value="Overnight Shipping"
                        checked={shipping === "Overnight Shipping"}
                        onChange={handleShippingChange}
                    />
                    Overnight Shipping
                </label>
            </div>
            <p>Your shipping method is: {shipping}</p>
        </div>
    );
}
export default OnChange;