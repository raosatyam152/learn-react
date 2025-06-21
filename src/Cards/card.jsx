import pic from '../assets/pic.png'
function Card(){
    return (
        <>
        <div className="card">
            <img className="card-image" src={pic} alt="profile pic"></img>
            <h2 className='card-title'>Satyam</h2>
            <p className='card-text'>I'm a coder who love to learn and try diffrent languages</p>
        </div>
        <div className="card-footer">
                <a href="/">go back to  home</a>
            </div>
        </>
    );
}
export default Card;