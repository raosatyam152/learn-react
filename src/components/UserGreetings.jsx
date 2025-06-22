//conditional rendering= allows you to control what is displayed/rendered based on certain conditions
                        //  (show, hide, or change components)
import PropTypes from "prop-types";
function UserGreeting(props){
    if(props.isloggedIn){
        return (
            <div>
                <h1>Welcome back {props.username}</h1>
                <a href="/">Home</a>
            </div>
    );}
    else{
        return (
            <div>
                <h1>Please log in</h1>
                <a href="/">Home</a>
            </div>
        );
    }
}

UserGreeting.propTypes = {
    isloggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string,
};
UserGreeting.defaultProps = {
    isloggedIn: false,
    username: "Guest"
};

export default UserGreeting