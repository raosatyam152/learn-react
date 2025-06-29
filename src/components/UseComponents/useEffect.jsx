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
    const [color,setColor]= useState("green");
    useEffect(() =>{
        document.title = `Count: ${count} ${color}`
    },[count,color])


    function addCount(){
        if(color != "red"){
        setCount(c => c+1);
        }else{
            alert("Change color to green")
        }
    }
    function changeColor(){
        setColor(c => c === "green" ? "red" : "green")
    }
    useEffect(() =>{
    // now window width
        window.addEventListener("resize", handleResize)
        console.log("Event Listner added")

         return() => {
         window.removeEventListener("resize",handleResize)
         console.log("Event listner removed")
        }  // Some clean up code}   when no dependencies
    },[])


    const [width,setWidth] = useState(window.innerWidth)
    const [height,setHeight] = useState(window.innerHeight)

    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }





    return (<>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add 1</button>
        <button onClick={changeColor}>Change Color</button><br/>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}</p>
        
    
    </>);

}
export default Effect