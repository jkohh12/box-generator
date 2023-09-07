import React, {useState} from 'react';
import './App.css';
import ColorForm from './Components/ColorForm';
import ColorDisplay from './Components/ColorDisplay';



function App() {
  const [currentColor , setCurrentColor] = useState("");
  const [colors, setColors] = useState([]); //creates state variable named 'colors' and initializes with empty array


  //setToNewColor is the entire function itself which is being passed as a prop into the component, then the component can use the onNewColor prop with a color passed in, which 
  //runs the setToNewColor function inside of App, taking the newColor and using it for setColors
  const setToNewColor = ( newColor ) => {
   // setCurrentColor( newColor );
    
    setColors([...colors, newColor]); //copies all previous colors along with new color into array


  }

  return (
    <div>
      <ColorForm onNewColor = { setToNewColor }/> 
        <div className = 'container'>
          {
              colors.map((color, index) => ( //It takes two parameters: color (the current element in the array) and index (the index of the current element).
              //Iterates through each element of array and returns a new array with modified elements based on provided function
                <ColorDisplay key = {index} color = {color} /> //    This JSX code generates a <ColoredBox /> component for each color in the colors array. 
                        //key={index} is used to provide a unique identifier for each <ColoredBox /> component. 
                        //It's essential for React to efficiently update and manage the list of components when items are added or removed from the array. 
                        //color={color} is passing the color value as a prop to the <ColoredBox /> component. 
                        //This prop is used by the <ColoredBox /> component to determine the background color of the box it renders.
              ))
              
          }
        </div>
      
    </div>
  );
}

export default App;


//
// const MyComponent = props => {
//   const onClickHandler = (e, value) => {
//       alert(value);
//   }

//   return props.movies.map( (item, index) => { 
//       return <button onClick={ (e) => onClickHandler(e, item) }>{ item }</button> //calling onClickHandler, but also passing in item value so that it can alert with the value
//   });
// }
// I think you could also do
// return <button onClick={ (e) => onClickHandler(item) }>{ item }</button>
// and change const onClickHandler = (e, value) => { to const onClickHandler = (e) => {
// only difference is that e won't be passed, and won't be used