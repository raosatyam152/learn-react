import React, { useState } from 'react';
function UpdateArr(){
    const [items,setItems] = useState([]);
    const [newItem, setNewItem] = useState({ id: '', component: '', price: '' });
    function handleAddItem() {
        if (newItem.id && newItem.component && newItem.price) {
            setItems([...items, newItem]);
            setNewItem({ id: '', component: '', price: '' }); // Reset input fields
        } else {
            alert('Please fill all fields');
        }
    }
    function handleInputChange(event) {
        const { name, value } = event.target;
        setNewItem(prevItem => ({ ...prevItem, [name]: value }));
    }
    function handleDeleteItem(id) {
        setItems(items.filter(item => item.id !== id));
    }
    return (
        <div>
            <h1>Update Array Example</h1>
            <input
                type="number"
                name="id"
                placeholder="ID"
                value={newItem.id}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="component"
                placeholder="Component"
                value={newItem.component}
                onChange={handleInputChange}
            />
            <input
                type="number"
                name="price"
                placeholder="Price"
                value={newItem.price}
                onChange={handleInputChange}
            />
            <button onClick={handleAddItem}>Add Item</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.component} - ₹{item.price} 
                        <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default UpdateArr;