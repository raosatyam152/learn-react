// Use state()= RE-renders the component when the state value changes 

// useRef() = "Use reference" Does not cause re-renders when its value changes 
//            When you want a comonent to "remmember" some information 
//            but you don't want that information to trigger new renders

//            1. Acessing/ interecting wiht DOM elements 
//            2. Handeling Focus Animations and transitions 
//            3. managing timers and intervals 

import React, {useState, useEffect, useRef} from 'react'

function UseRef(){
    // let [number,setNumber] = useState(0)

    const ref =useRef(0)
    console.log(ref) // this will show ref as an object in console and with a current propery 
    const inputRef = useRef(null)

    useEffect(()=>{
        console.log("COMPONENT RERENDERED")
    })
    function handleClick(){
        // setNumber(n=> n+1)
        ref.current++;
        console.log(ref.current)
        inputRef.current.focus()
        inputRef.current.style.backgroundColor ="purple"
    }
    return(
        <div>
        <button onClick={handleClick}>
            Click me ☠️
        </button>
        <input ref={inputRef}/>

        </div>
    )


}
export default UseRef
