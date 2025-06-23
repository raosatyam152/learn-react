function ProfilePicture() {
        const imageUrl = "../src/assets/pic.png";
        const handleClick = () => {
            alert("Profile picture clicked!");}
        return (
            <img onClick={handleClick} src={imageUrl} alt="Profile" className="pic" />
    );
}
export default ProfilePicture