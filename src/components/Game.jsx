import { useState } from 'react';
import "./Game.css";

export default function Game() {
	return (
		<>
			<Board/>
		</>
	)
}

function Board() {
	let x = "❌";
	let o = "⭕";

	// let boardMatrix = [
	// 	[o, x, x],
	// 	[null, null, null],
	// 	[x, o, x]
	// ];

	const [cells, setCells] = useState(Array(9).fill(""));

	function handleClick(i) {
		// let cellCoords = [Math.floor(i/3), i%3];
		// // Update the matrix -> does not change UI
		// boardMatrix[cellCoords[0], cellCoords[1]] = x;

		let boardArr = [...cells];

		boardArr[i] = x;
		setCells(boardArr);
	}


	return (
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

