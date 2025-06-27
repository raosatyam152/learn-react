import React, {useState} from "react";
function UpdateArrOBJ() {
    const [car, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carModel, setCarModel] = useState("");
    const [carMake, setCarMake] = useState("");
    function handleAddCar(){
        const newCar = {
            year: carYear,
            model: carModel,
            make: carMake
        };
        setCars(c =>[...c, newCar]);
        setCarYear(new Date().getFullYear());
        setCarModel("");
        setCarMake("");
    }
    function handleRemoveCar(index){
        setCars(c => c.filter((_, i) => i !== index));
    }
    function handleYearChange(event){
        setCarYear(event.target.value);

    }
    function handleModelChange(event){
        setCarModel(event.target.value);

    }
    function handleMakeChange(event){
        setCarMake(event.target.value);
    }
    return(<div>
        <h2>List of Car Objects</h2>
        <ul>
            {car.map((car, index) =>
                <li key={index}>
                    {car.year} - {car.model} - {car.make}
                    <button onClick={() => handleRemoveCar(index)}>Delete</button>
                </li>)}
        </ul>
        <input type="number" placeholder="Year" value={carYear} onChange={handleYearChange} />
        <input type="text" placeholder="Model" value={carModel} onChange={handleModelChange} />
        <input type="text" placeholder="Make" value={carMake} onChange={handleMakeChange} />
        <button onClick={handleAddCar}>Add Car</button>
        

    </div>);
}
export default UpdateArrOBJ;