import { BoardContext } from "./App";
import { useContext, useState } from "react";
import produce from "immer"

function TICTAKTOE() {

  let {board, setBoard} = useContext(BoardContext);
  let [player, setPLayer] = useState(0); //to know who's the current player

  return (
    <div style={{
      display: "flex",
      width:"100vw",  // to bring it
      height:"100vh", // in center
      flexDirection : "column",
      justifyContent: "center",
      alignItems: "center"
    }}>

    {
      board.map(function(row, rowIndex){           //to obtain the row
        return <div style={{
          display: "flex",
            flexDirection : "row"    //to give the ttt look
        }}>{
          row.map(function(item, colIndex){    //to find the column corresponding to the col
          return <button style={{
            width : "100px",
            height : "100px",
          }} onClick = {function(){
            const updated = produce(board, draftState => {
            if(draftState[rowIndex][colIndex]=== -1){   //if the state is empty
              draftState[rowIndex][colIndex] = player;  //update the player
            }
          })
          setBoard(updated);  //making a draft state, doing all the modifications in there, then update the actual nextState with the help of draftState
          setPLayer(player===0?1:0)  //if current player = 0 then set it to one for the next box as 0 has already played the move and now 1 will have to play
          }}>{item === -1 ? " ": item} </button> // if item = -1, then prit nothing, else print item
        })
        }</div>
        
      })
    }
      

      
    </div>
  );
}

export default TICTAKTOE;
