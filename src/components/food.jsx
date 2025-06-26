function Food(){
    const food1 = "Pizza";
    const food2 = "Burger";
    return(<>
        <h1>My favorite foods are:</h1>
        <ul>
            <li>chocolate</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
            <li>Ice Cream</li>
            <li>Uttapam</li>
            <li>Masala Dhosa</li>

        </ul><a href="/">Home</a></>

    );

}
export default Food