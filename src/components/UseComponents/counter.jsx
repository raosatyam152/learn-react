// React hook = special function that lets you use state and other React features without writing a (after 16.8))
//              (eg. useState, useEffect, useContext, useReducer, UseCallback and more etc.)

// useState = A react hook that allows the creation of staeful variables in functional components.
//            And a setter function to update its value in the virtual DOM 
//            {name,setName}
import React, { useState } from 'react';
function Counter() {
    const [count,setCount] = useState(0);
    
    const increase = () => {
        setCount(count + 1);
    }
    const decrease = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }
    return (
        <div className= "counter">
            <h1>Counter: {count}</h1>
            <button className="btn" onClick={decrease}>Decrease</button>
            <button className="btn" onClick={reset}>Reset</button>
            <button className="btn" onClick={increase}>Increase</button>
            <p>Click the buttons to change the counter value.</p>
        </div>
    );
}
export default Counter;
     