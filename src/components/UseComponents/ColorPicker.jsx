import React, {useState} from 'react';
function ColorPicker(){
    const[color, setColor] = useState('#ffffff');
    function handleColorChange(event){
        setColor(event.target.value);
    }
    return(
        <div ClassName="color-picker">
            <h1>Color Picker</h1>
            <div ClassName="color-display" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Set a Color:
            </label>
            <input 
                type="color" 
                value={color} 
                onChange={handleColorChange}></input>
        </div>
    )

}
export default ColorPicker;