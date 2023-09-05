import React, {useState} from 'react';


export const ColorDisplay = (props) => {
    // const [boxColor , setBoxColor] = useState("");

    // const colorBox = () => {

    //     console.log("TEST");
    //     if(props.color == "red") {
            
    //         setBoxColor("red")
    //         console.log(boxColor)
    //     }
        
    // };




    return (
        <div className = 'box' style= {{backgroundColor: props.color}}></div>
        
    );
}

export default ColorDisplay