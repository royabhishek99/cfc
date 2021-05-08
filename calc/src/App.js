import './App.css';
import { useState } from "react";

function App() {

  let [oldExpression, setOldExpression] = useState("");
  let [expression, setExpression] = useState("Faggot"); //expression=object setExpression= setter 
                                                    //object assigned the value and setter updates on the screen   
  let [prev, setPrev] = useState("ANS");                                
  let numerics = new Set("0123456789.");
  let operators  = new Set("+-*/%");

  let buttons = ["(",")","%","AC",
                 "7","8","9","/",
                 "6","5","4","*",
                 "3","2","1","-",
                 "0",".","=","+"];

  let evaluateExpression = function(){
    let evaluation = eval(expression);   //evaluate the current expression 
    setOldExpression(expression);      //set current expression to old expression
    setExpression(String(evaluation));  //setting the evaluated value to the current expression
    setPrev("ANS");        //the existing thing we have right now is the answer               
  }

  let putNumerics = function(value){   //value = event.key
    if (prev === "ANS"){
      setOldExpression("Last Ans = " + expression); //jo last ansswer hoga, wo uper likha hua aaega
      setExpression(value); ////if the previous numerics was answer, toh ab jab humlog koi naya value likhenge, wo purane answer ka sath merge nahi hoga, balki answer ko hatakar pura naya likhaaega    
    }else {
      setExpression(expression + value);
    }
    setPrev("NUM");    //the existing thing we have right now is the number
  };

  let putOperators = function(value){
    if(prev!=="OP"){                         //agar isse previous value is an operator, you cannot give another sign.
      setExpression(expression + value);
    }
    else{
      setExpression(expression.slice(0,-1) + value);  //if you have pressed a wrong operator, it will remove that and bring in the uppdated operator
    }
    setPrev("OP");
  }

  let putAnswers = function(value){
    evaluateExpression();
  }

  let putDelete = function(){
    if(expression.length>=1){
      setExpression(expression.slice(0,-1));     //from current state removing the most recent string
    }
    setPrev("DEL");  
  }

  let forAC = function(){
    setExpression(expression.slice(+9,0)); //ac dabane pe sab gayab ho jata hai, toh sliced up everything 
  }

  let handleKeyUp= function(event){
    console.log(event.key);
    if(event.key==="Backspace"){
      putDelete();
    } 
    else if(numerics.has(event.key)){  //to check if the numerics has the given event key or not
       putNumerics(event.key);
    } 
    else if(operators.has(event.key)){
      putOperators(event.key);
    }
    else if(event.key==="Enter"){
      putAnswers(event.key);
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
      borderRadius: "10px",
      overflow : "hidden"
      }}>

        <h6>{oldExpression}</h6> 
        <h1>{expression}</h1>   

      </div>

      <div style={{
      width: "400px", 
      background: "#ffffff",
      display: "flex",
      flexDirection:"row",
      alignItems: "flex-end", //end of the flex pe saman phek do
      padding: "20px",
      borderRadius: "10px",
      flexWrap: "wrap"
      }}>
        {buttons.map(function(buttonValue, idx){
          return<button style={{
            width : "90px",
            margin: "5px",
            padding: "5px"
          }}
          onClick={function(){
            if(buttonValue==="AC"){
             forAC();
             setOldExpression("WASSUP BITCH!!");  //ac manje sab gayab, toh wahi kiye
            } 
            else if(numerics.has(buttonValue)){  //to check if the numerics has the given event key or not
             putNumerics(buttonValue);
            } 
            else if(operators.has(buttonValue)){
             putOperators(buttonValue);
            }
            else if(buttonValue==="="){
             putAnswers(buttonValue);
            }
          }}
          >{buttonValue}</button>     //instead of making individual buttons, making one single function that calls the buttons list and drops in it the button
        })}
      </div>
      
    </div>
  );
}

export default App;
