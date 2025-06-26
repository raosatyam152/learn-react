import React, { useState } from 'react';
function UpdateOBJ(){
    const [items, setItems] = useState({
        id: 0,
        component: 'monitor',
        price: 13000,
    });
    function handlePriceChange(event){
        setItems(c => ({...c, price: event.target.value})); //update the price of the item

    }
    function handleComponentChange(event){
        setItems({...items, component: event.target.value}); //update the component of the item
    }
    return(
        <div>
            <h1>Update Object Example</h1>
            <label>Your Item: {items.component} is of ₹{items.price}</label><br/>
            <input type="number" value={items.price} onChange={handlePriceChange}/><br/>
            <input type="text" value={items.component} onChange={handleComponentChange}/><br/>
            </div>
    );
}
export default UpdateOBJ;