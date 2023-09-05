import React, {useState} from 'react';

export const ColorForm = (props) => {
    const [color,setColor] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewColor(color);
        setColor("");
    }
    return (
        <div className = "App">
            <form onSubmit = {handleSubmit}>
                <label>Color: </label>
                <input 
                    type = "text" 
                    value = {color} 
                    onChange = { (e) => setColor(e.target.value) }
                />
                <input 
                    type = "submit" 
                    value = "Add Color" 
                    className = "button"
                />



            </form>
        </div>

    );
}

export default ColorForm