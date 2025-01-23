import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combination";
import GameOver from "./components/GameOver";

const initialGameBoard=[
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

function deriveActivePlayer(gameTurns){
  let currentPlayer= 'X';
      if(gameTurns.length>0 &&  gameTurns[0].player==='X'){
        currentPlayer='O';
      }
      return currentPlayer;
}

function App() {
  const [players,setPlayers]=useState({
    'X': 'Player 1',
    'O': 'Player 2'
  });
  const [gameTurns,setGameTurns]=useState([]);
    // const [activePlayer,setActivePlayer]=useState('X');
  const activePlayer=deriveActivePlayer(gameTurns);

  let gameBoard= [...initialGameBoard.map(array=> [...array])];
  for(const turn of gameTurns){
      const {square,player}=turn;
      const {row,col}=square;
      gameBoard[row][col]=player;
  }

let winner;
  for (const combination of WINNING_COMBINATIONS)
  {
    const firstSquareSymbol=gameBoard[combination[0].row] [combination[0].column]
    const secondSquareSymbol=gameBoard[combination[1].row] [combination[1].column]
    const thirdSquareSymbol=gameBoard[combination[2].row] [combination[2].column]
    if(firstSquareSymbol && firstSquareSymbol=== secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol ){
           winner=players[firstSquareSymbol];
    }

  }
  const hasDraw=gameTurns.length===9 && !winner;
  function handleSelectSquare(rowIndex,colIndex){
    // setActivePlayer((curActivePlayer)=> curActivePlayer==='X'? 'O':'X' )
    setGameTurns(prevTurns=>{
      const activePlayer=deriveActivePlayer(prevTurns);
      const updatedTurns=[{square: {row: rowIndex, col: colIndex}, player:activePlayer},...prevTurns]
      return updatedTurns;
    })
  }

  function handleRestart(){
    setGameTurns([]);
  }


  function handlePlayerName(symbol,newName){
    setPlayers(PrevPlayers=> {
      return {...PrevPlayers, 
      [symbol]: newName
  }
});
  }
  return (
    <main>
    <div id="game-container">
      Players
      <ol id="players" className="highlight-player">
        <Player name={"player1"} symbol={'X'} isActive={activePlayer==='X'} onChangeName={handlePlayerName}></Player>
        <Player name={"player2"} symbol={'O'} isActive={activePlayer==='O'} onChangeName={handlePlayerName}></Player>
      </ol>
      {(winner || hasDraw) && (<GameOver winner={winner} restart={handleRestart}/>) }
      <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
    </div>
     <Log turnList={gameTurns}/>

    </main>
  )
}

export default App
