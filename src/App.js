import React, {useState} from 'react';
import './App.css';
import ColorForm from './Components/ColorForm';
import ColorDisplay from './Components/ColorDisplay';



function App() {
  const [currentColor , setCurrentColor] = useState("");

  const setToNewColor = ( newColor ) => {
    setCurrentColor( newColor );

  }
  //setToNewColor is the entire function itself which is being passed as a prop into the component, then the component can use the onNewColor prop with a color passed in, which 
  //runs the setToNewColor function inside of App, taking the newColor and setting it to currentColor
  return (
    <div>
      <ColorForm onNewColor = { setToNewColor }/> 
      <ColorDisplay color = { currentColor } />
    </div>
  );
}

export default App;
