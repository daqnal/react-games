import "./Game.css";

export default function Game() {
	return (
		<>
			<Board/>
		</>
	)
}

function Board() {
	return (
		<>
			<div className="board">
				<div class="row" id="row-1">
					<Cell class="cell"/>
					<Cell class="cell center-cell"/>
					<Cell class="cell"/>
				</div>
				<div class="row" id="row-2">
					<Cell class="cell"/>
					<Cell class="cell center-cell"/>
					<Cell class="cell"/>
				</div>
				<div class="row" id="row-3">
					<Cell class="cell"/>
					<Cell class="cell center-cell"/>
					<Cell class="cell"/>
				</div>
			</div>
		</>
	)
}

function Cell() {
	return (
		<>
			<div className="cell">
				<span class="icon-span">❌</span>
			</div>
		</>
	)
}

