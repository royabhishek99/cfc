import TICTAKTOE from "./TICTAKTOE";
import React, { useState } from "react";
import {createBoard} from "./utils/boardUtil";

let BoardContext = React.createContext();
function App() {


  let [board, setBoard] = useState(createBoard());    //in the board, initial value will be -1(or empty), cause player 1 means 0 and player 2 means 1. According to that the state will change
  //suppose cur player is 0, so wherever he taps, that value will be 0 at that position(in a 2d array), can the cur player will change to 1. Same procedure for 1 and once it's done, cur state will change to 0               
  // create board called so that we get a new board whenever we restart the game.
  return (                                                  //so now due to this context API I can call board and setBoard inside TICTACTOE
                                                      //we giving object first {} is for javascript, the 2nd {} is for the object 
    <BoardContext.Provider value={{board, setBoard}}>    
      <TICTAKTOE/>                                
    </BoardContext.Provider>
    
  )
   
}

export  {App, BoardContext};
