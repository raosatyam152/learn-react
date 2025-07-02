// useContext() = React hook that allows you to share Values between multiple levels of components without passing props through each level

// PROVIDER COMPONENT 
// 1. import{createContext} from 'react'
// 2. export const MyContext-{Name it whatever you want = createContext();
// 3. <MyContext.Provider value={value}>
//      <Child/>
//    </MyContext.Provider>

// COUSTOMER COMPONENTS
//  1. import React, {useContext} from 'react'
//     import {MyContext } from './CompA.jsx'
//  2. const value = constContext{MyContext}

import React, {useState, createContext} from 'react'
import CompB from './CompB'
export const UserContext = createContext()

function CompA(){
    const [user,setUser] = useState("Satyam")
    return(
        <div className= 'box'>
            <h1>Element A</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <CompB user={user}/>
            </UserContext.Provider>   </div>
    )
}
export default CompA
