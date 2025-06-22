    //import prop-types from node module prop-types
// defaultprops = default values for props in case they are not passed by parent component
//                name: "Guest"
import PropTypes from 'prop-types'


function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name} </p>
            <p>Age: {props.age} </p>
            <p>Student: {props.isStudent ? "Yes" : "No"} </p>
            {/* <a href="/">Home</a> */}
        </div>
    );
}
// Define prop types for the Student component
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
// Student.defaultProps = {
//     name: "Guest",
//     age: 0,
//     isStudent: true,
// }
export default Student

//props= read-only properties that are shared between components.
//props are used to pass data from parent to child components in React.
// <Component Key="value" /> is how you pass props to a component.
//In this case, the Student component receives a prop called "name" with the value "Satyam".
//The Student component then uses this prop to display the name in a paragraph element.