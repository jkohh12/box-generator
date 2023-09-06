import React, {useState} from 'react';


export const ColorDisplay = ({color}) => {
    // const [boxColor , setBoxColor] = useState("");

    // const colorBox = () => {

    //     console.log("TEST");
    //     if(props.color == "red") {
            
    //         setBoxColor("red")
    //         console.log(boxColor)
    //     }
        
    // };

    const boxStyle = {
        width: '200px',
        height: '200px',
        backgroundColor: color,
        margin: '10px',
    }




    return (
        //<div className = 'box' style= {{backgroundColor: props.color}}></div>
        <div style = {boxStyle}></div>
        
    );
}

export default ColorDisplay