import styles from "./Otrio.module.css";

export default function Otrio() {
    return (
        <>
            
            <Board/>
            <Tray />
        </>
    )
}

function Board() {
    return (
        <div className={styles.board}>
            <div id={styles["row-1"]} className={styles.row}>
                <Cell />
                <Cell centerCell={true} />
                <Cell />
            </div>
            <div id={styles["row-2"]} className={styles.row}>
                <Cell />
                <Cell centerCell={true} />
                <Cell />
            </div>
            <div id={styles["row-3"]} className={styles.row}>
                <Cell />
                <Cell centerCell={true} />
                <Cell />
            </div>
        </div>
    )
}

function Cell({ value, centerCell, onCellClick }) {
	
	// Add the class "cell" to all Cell components, and add the class "center cell" for those with the prop
	let classList = `${styles["cell"]}`;
	if (centerCell === true) {
		classList = classList.concat(` ${styles["center-cell"]}`)
	}

	return (
		<div className={classList}>
			<button className={styles["icon-button"]} onClick={onCellClick}>{value}</button>
		</div>
	)
}

function Tray() {
    return (
        <div className={styles["tray"]}>
            <TrayCell />
            <TrayCell />
            <TrayCell />
        </div>
    )
}

function TrayCell() {
    return (
        <div>
            <button className={styles["tray-icon-button"]}>O</button>
        </div>
    )
}