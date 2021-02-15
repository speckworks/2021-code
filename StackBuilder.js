import React, { useState } from "react";
import React from "react";
import ReactDOM from "react-dom";


function App() {
    const [stack, setStack] = useState([]);
    const [number, setNumber] = useState("");
    const handleChange = (event) => {
      // add validation for e and misc values
      setNumber(event.target.value);
    };
    const handlePush = () => {
      if (number === "") return;

      let newStack = [...stack];
      newStack.push(number);
      setStack(newStack);
      setNumber("");
    };

    console.log("stack", stack);

    const handlePop = () => {
      let newStack = [...stack];
      newStack.pop();
      setStack(newStack);
    };
    return (
      <div className="App">
        <h1>Stack Builder</h1>
        <form>
          <input type="number" value={number} onChange={handleChange} />
        </form>
        <button onClick={handlePush}>Push</button>
        <button onClick={handlePop}>Pop</button>
        <div style={{display:"flex", flexDirection:"column-reverse"}}>
          {stack.map((number) =><div>{number}</div>)}
        </div>
      </div>
    );
  }



const rootElement = document.getElementById("stackVisualizer");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

//import "./styles.css";

/* input takes numbers
buttons with push and pop
on push clear input
array that is the stack..
render boxes
render input
*/
