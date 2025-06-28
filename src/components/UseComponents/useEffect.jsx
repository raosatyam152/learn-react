import React, {useState, useEffect } from "react";

// useEffect() = React Hook that tells React Do some code when (pick one ):
//               This component re-renders
//               This component mounts 
//               This state of value 

// useEffect(function,[dependencies])
//1. useEffect(() => {})                    Run after every re-render
//2. useEffect(() => {}, [])                Run only on mount
//3. useEffect(() => {}, [value])           Runs on mount + when value changes

//  Uses
// #1 Event Listners 
// #2 DOM maunupulation
// #3 Fetching Data from a API
// #5 Clean up when a component unmounts
function Effect(){

    const [count,setCount]= useState(0);


    return (<></>);

}
export default Effect