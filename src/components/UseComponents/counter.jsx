// React hook = special function that lets you use state and other React features without writing a (after 16.8))
//              (eg. useState, useEffect, useContext, useReducer, UseCallback and more etc.)

// useState = A react hook that allows the creation of staeful variables in functional components.
//            And a setter function to update its value in the virtual DOM 
//            {name,setName}
//updater function = A function passed as an argument to setState() usually
//                   ex. setYear(year => year + 1)
//                   Allow for safe updates based on the previous state value
//                   Used with multiple state updates and asyncronous operations
//                   Good practice to use updater function when the new state depends on the previous state


import React, { useState } from 'react';
function Counter() {
    const [count,setCount] = useState(0);
    
    const increase = () => {
//     setCount(count + 1); A normal use state function without update 
        setCount(count => count + 1); // A functional update to ensure the latest state is used
    }
    const decrease = () => {
        setCount(count => count - 1);
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
     