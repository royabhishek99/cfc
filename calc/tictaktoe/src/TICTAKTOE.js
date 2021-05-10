import { BoardContext } from "./App";
import { useContext, useState } from "react";
import produce from "immer"

function TICTAKTOE() {

  let {board, setBoard} = useContext(BoardContext);  // taking property/object from App.js (context provider) and assigning it a state
  let [player, setPLayer] = useState(0); //to know who's the current player
  let moves = 0;
  let checkWinner = (board) => {
    const winningScene = [
      [
        [0, 0],
        [0, 1],
        [0, 2],
      ],
      [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 2],
        [1, 1],
        [2, 0],
      ],
      [
        [0, 2],
        [1, 2],
        [2, 2],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [2, 0],
        [2, 1],
        [2, 2],
      ],
    ];
    for(let i=0;i<winningScene.length;i++){
      const[[a,b],[c,d],[e,f]] = winningScene[i];
      if(
        board[a][b] === board[c][d],
        board[a][b] === board[e][f],
        board[a][b]!== -1
      ){
        return player;
      }
      else{
        return null;
      }
    }
  }

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
          
          let answer = checkWinner(updated);
          moves++;
          if (answer != null || moves === 9) {
            if(answer == null && moves === 9){
              window.alert(
                 "Unfortunately the game is Tied. Try once more ! :)"
              );
              }else{
                window.alert(
                  "Congratulations " + (answer === 1 ? "1" : "0")
                );
                }
                window.location.reload();
                }
                setBoard(updated);  //making a draft state, doing all the modifications in there, then update the actual nextState with the help of draftState
                setPLayer(player===0?1:0)  //if current player = 0 then set it to 1 for the next box as 0 has already played the move and now 1 will have to play
                }}
            >{item === -1 ? " ": item} </button> // if item = -1, then prit nothing, else print item
             })
            }</div>
        
      })
    }
      

      
    </div>
  );
}

export default TICTAKTOE;
