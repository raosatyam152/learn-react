import ProfilePicture from "../button/profilePicture";
function Header(){
    return (<>
        <header>
            <ProfilePicture />
        <h1>My name is Satyam</h1>
        <nav>   
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                {/* <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Portfolio</a></li> */}
                <li><a href="fav">Faviorate</a></li>
                <li><a href="/props">properties testing</a></li>
                <li><a href="/user">User</a></li>
                <li><a href="/use">Use of diffrent components</a></li>
            </ul>
        </nav>
        </header></>
    )
}
export default Header;