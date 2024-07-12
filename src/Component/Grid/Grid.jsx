import { useState } from 'react'
import Card from '../Card/Card'
import './Grid.css'

function isWinner(board, symbol) {
    if (board[0] === symbol && board[1] === symbol && board[2] === symbol) return [0, 1, 2];
    if (board[3] === symbol && board[4] === symbol && board[5] === symbol) return [3, 4, 5];
    if (board[6] === symbol && board[7] === symbol && board[8] === symbol) return [6, 7, 8];
    // Column
    if (board[0] === symbol && board[3] === symbol && board[6] === symbol) return [0, 3, 6];
    if (board[1] === symbol && board[4] === symbol && board[7] === symbol) return [1, 4, 7];
    if (board[2] === symbol && board[5] === symbol && board[8] === symbol) return [2, 5, 8];
    // Diagonal
    if (board[0] === symbol && board[4] === symbol && board[8] === symbol) return [0, 4, 8];
    if (board[2] === symbol && board[4] === symbol && board[6] === symbol) return [2, 4, 6];

    return null;  // Return null instead of empty string
}


function Grid({ numbeOfCard }) {
    const [turn, setTurn] = useState(true);
    const[board,setboard]=useState(Array(numbeOfCard).fill(""))
    const [winner,setWinner]=useState(null);
    const [winningCombination, setWinningCombination] = useState([]);

    function play(index) {
        console.log("move played ",index);
        if (board[index] || winner) return;
        const newBoard = [...board];
        if(turn){
            newBoard[index] = "o";
        }
        else{
            newBoard[index] = "x";
        }
        setboard(newBoard);
        const win = isWinner(newBoard , turn ? 'o':'x');
        // console.log(board)
        if(win){
            setWinner(win);
        }
        const winCombination = isWinner(newBoard, turn ? "o" : "x");

        // higlighting winning cell
        if (winCombination) {
            setWinner(turn ? "o" : "x");
            setWinningCombination(winCombination);
        }
         
        setTurn(!turn)
    }
    function reset(){
        setboard(Array(numbeOfCard).fill(""));
        setWinner(null);
        setWinningCombination([]); 
        setTurn(true)

    }

    return (

        <>
           <div className="main">
           {winner &&  <h1 className='Winner'>Winner is :  { winner}</h1>}
            <h1 className='Current'>Current Move : {(turn) ? '0' : 'x'}</h1>
            <button className='Reset' onClick={reset}>Reset</button>
            <div className="Grid"
            //  onClick={(e) => console.log(e)}
             >
                {
                // Array(numbeOfCard).fill(<Card />) initialy we were having array now we create board to track tge card
                board.map((value, idx) => {
                    return  <Card onPlay={play}
                     player={value}
                      key={idx} 
                      index ={idx}
                      isWinningCell={winningCombination.includes(idx)} 
                      /> 
                    
                })}
            </div>
           </div>
        </>

    )

}
export default Grid;