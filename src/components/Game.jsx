import { useState, useEffect } from 'react';
import "./Game.css";

export default function Game() {

	return (
		<>
			<Board/>
		</>
	)
}

function Board() {
	const x = "❌";
	const o = "⭕";

	const [turn, setTurn] = useState("x");
	const [turnCounter, setTurnCounter] = useState(1);
	const [cells, setCells] = useState(Array(9).fill(""));
	const [winner, setWinner] = useState("");
	const [gameState, setGameState] = useState("❌ TO MOVE");
	const [showResetButton, setShowResetButton] = useState(false);

	const winningCombos = {
		across: [[0, 1, 2], [3, 4, 5], [6, 7, 8]],
		down: [[0, 3, 6], [1, 4, 7], [2, 5, 8]],
		diagonal: [[0, 4, 8], [2, 4, 6]]
	};		

	function handleClick(i) {

		let boardArr = [...cells];

		// First check if game is over or cell is already filled
		if (boardArr[i] !== "") {
			return;
		}
		
		if (turn === "x") {
			boardArr[i] = x;
			setTurn("o");
			setGameState(`${o} TO MOVE`);
		} else {
			boardArr[i] = o;
			setTurn("x");
			setGameState(`${x} TO MOVE`);
		}

		setTurnCounter(turnCounter + 1);
		
		setCells(boardArr);
		
		checkWinner(boardArr);
		
	}

	useEffect(() => {

		if (winner !== "") {
			if (winner === "❌") {
				setGameState("❌ WINS!");
			} else if (winner === "⭕") {
				setGameState("⭕ WINS!");
			} else if (winner === "tie") {
				setGameState("TIE!");
			}
	
			setShowResetButton(true);
		}

	}, [winner]);

	function checkWinner(boardArr) {

		for (let combo in winningCombos) {
			winningCombos[combo].forEach((pattern) => {
			  if (boardArr[pattern[0]] === "" || boardArr[pattern[1]] === "" || boardArr[pattern[2]] === "") {
				// Do nothing if any cell in the combination is empty.
			  } else if (boardArr[pattern[0]] === boardArr[pattern[1]] && boardArr[pattern[1]] === boardArr[pattern[2]]) {
				
				setWinner(boardArr[pattern[0]]);
			  } else if (turnCounter === 9) {
				setWinner("tie")
			  }
			});
		  }
		  
	}

	function handleGameReset() {
		setShowResetButton(false);
		setWinner("");
		setGameState("❌ TO MOVE");
		setTurn("x");
		setTurnCounter(1);
		setCells(Array(9).fill(""));
	}

	function handleReset() {
		setWinner();
  		setCells(Array(9).fill(""));
	}


	return (
		<>
			<div id="game-text-container">
				<h1 id='game-title'>Tic-Tac-Toe</h1>
				<div id='status-bar'>
					<h2 id='game-state'>{gameState}</h2>
					{showResetButton && (
						<button id='reset-button' className='btn btn-error' onClick={() => handleGameReset()}>Reset</button>
					)}
				</div>
				
			</div>
			
			<div className="board">
				<div className="row" id="row-1">
					<Cell value={cells[0]} onCellClick={() => handleClick(0)}/>
					<Cell value={cells[1]} onCellClick={() => handleClick(1)} centerCell={true}/>
					<Cell value={cells[2]} onCellClick={() => handleClick(2)}/>
				</div>
				<div className="row" id="row-2">
					<Cell value={cells[3]} onCellClick={() => handleClick(3)}/>
					<Cell value={cells[4]} onCellClick={() => handleClick(4)} centerCell={true}/>
					<Cell value={cells[5]} onCellClick={() => handleClick(5)}/>
				</div>
				<div className="row" id="row-3">
					<Cell value={cells[6]} onCellClick={() => handleClick(6)}/>
					<Cell value={cells[7]} onCellClick={() => handleClick(7)} centerCell={true}/>
					<Cell value={cells[8]} onCellClick={() => handleClick(8)}/>
				</div>
			</div>
		</>
		
	)
}

function Cell({ value, centerCell, onCellClick }) {
	
	// Add the class "cell" to all Cell components, and add the class "center cell" for those with the prop
	let classList = "cell";
	if (centerCell === true) {
		classList = classList.concat(" center-cell");
	}

	return (
		<div className={classList}>
			<button className="icon-button" onClick={onCellClick}>{value}</button>
		</div>
	)
}