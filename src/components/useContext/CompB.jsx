import CompC from "./CompC"
// function CompB(props)
function CompB(){
    return(
        <div className= 'box'>
            <h1>Element B</h1>
            {/* <CompC user= {props.user}/>  in this props are transfer from each element to element*/}
            <CompC/>
        </div>
    )
}
export default CompB