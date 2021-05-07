import './App.css';
import { useState } from "react";

function App() {

  let [oldExpression, setOldExpression] = useState("");
  let [expression, setExpression] = useState(""); //expression=object setExpression= setter 
                                                    //object assigned the value and setter updates on the screen                                   
  let numerics = new Set("0123456789");
  let operators  = new Set("+-*/")

  let handleKeyUp= function(event){
    console.log(event.key);
    if(event.key==="Backspace"){
      setExpression(expression.slice(0,-1));  //from current state removing the most recent string
    } else if(numerics.has(event.key) || operators.has(event.key)){  //to check if the numerics has the given event key or not
      setExpression(expression + event.key);
    } else if(event.key==="Enter"){
      let evaluation = eval(expression);   //evaluate the current expression 
      setOldExpression(expression);      //set current expression to old expression
      setExpression(String(evaluation));   //setting the evaluated value to the current expression
    }
  }

  return (
    <div className="App" tabIndex={0} onKeyUp={handleKeyUp} style={{  //tabIndex to focus only on this division so that it can take the i/p
      width: "100%",
      height: "100vh",   //vh=viewport height, the screen which we see
      background: "#999999",
      display: "flex", //how things will be wrapped up
      flexDirection: "column", //m    ajor axis = y
      justifyContent: "center", //aligns the flexible container's items when the items do not use all available space on the main-axis
      alignItems: "center", //for the axis perpendicular to the major axis
    }}>

      <div style={{
      width: "400px", 
      background: "#ffffff",
      display: "flex",
      flexDirection:"column",
      alignItems: "flex-end", //end of the flex pe saman phek do
      padding: "20px",
      borderRadius: "10px"
      }}>

        <h6>{oldExpression}</h6> 
        <h1>{expression}</h1>   

      </div>
      
    </div>
  );
}

export default App;
