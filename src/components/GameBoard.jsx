import { useState } from "react"

const initialGameBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

export default function GameBoard ({onSelectSquare,board}){
    // const [gameBoard,setGameBoard]=useState(initialGameBoard);
    // function handleSelectSquare(rowIndex,colIndex){
    //     setGameBoard((prevGameBaord)=> {
    //         const updateBaord=[...prevGameBaord.map(innerArray=>[...innerArray])]
    //         updateBaord[rowIndex][colIndex]=activeplayerSymbol;
    //         return updateBaord;
            
    //     });
    //     onSelectSquare();
    // }
    
    return (
        <ol id="game-board">
   
         {board.map( (row,rowIndex)=> <li key={rowIndex}> 
            <ol>
                {row.map( (col,colIndex)=> <li key={colIndex}> <button onClick={()=> onSelectSquare(rowIndex,colIndex)} disabled={col !== null}> {col}</button> </li>   )}
            </ol>
         </li>  )}
        </ol>
    )
}