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
		<div className="board">
			<div className="row" id="row-1">
				<Cell />
				<Cell centerCell={true}/>
				<Cell />
			</div>
			<div className="row" id="row-2">
				<Cell />
				<Cell centerCell={true}/>
				<Cell />
			</div>
			<div className="row" id="row-3">
				<Cell />
				<Cell centerCell={true}/>
				<Cell />
			</div>
		</div>
	)
}

function Cell({centerCell}) {
	let classList = "cell";

	if (centerCell === true) {
		classList = "cell center-cell";
	}

	return (
		<div className={classList}>
			<span className="icon-span">❌</span>
		</div>
	)
}

