import React, { useState } from 'react';


function MyComponent() {
    const[name,setName] = useState();
    const updateName = () => {
        setName("Satyam"); // Set name to "Satyam"
    }
    const [age, setAge] = useState(0);
    
    const updateAge = () => {
            if (age < 19) {
                setAge(age + 1);
            } else {
                alert("Satyam is already 19 years old!"); // Alert if age is already 19
            }
        }
    const [alive, setAlive] = useState(true);
    const toggleAlive = () => {
        setAlive(!alive);
    }
  return (
    <div className="counter">
      <p>Name: {name}</p>
      <button className="btn" onClick={updateName}>Set Name</button>
      <p>Age: {age}</p>
      <button className="btn" onClick={updateAge}>Increase Age</button>
      <p>Alive: {alive ? "Yes" : "No"}</p>
      <label>
      <button className="btn" onClick={toggleAlive}>Toggle Alive</button>
      </label>
    </div>
  );
}
export default MyComponent;