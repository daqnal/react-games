import styles from "./Otrio.module.css";

export default function Otrio() {

    return (
        <div id={styles["game-wrapper"]}>
            <Tray orientation={"horizontal"}/>
            <div id={styles["tray-board-row"]}>
                <Tray orientation={"vertical"}/>
                <Board/>
                <Tray orientation={"vertical"}/>
            </div>
            <Tray orientation={"horizontal"}/>
        </div>
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

function Tray({ orientation }) {

    let classList = `${styles["tray"]}`

    if (orientation === "horizontal") {
        classList = classList.concat(` ${styles["tray-horizontal"]}`)
    } else if (orientation === "vertical") {
        classList = classList.concat(` ${styles["tray-vertical"]}`)
    }

    return (
        <div className={classList}>
            <TrayCell />
            <TrayCell />
            <TrayCell />
        </div>
    )
}

function TrayCell() {

    return (
        <div className={styles["tray-cell"]}>
            <button className={styles["tray-icon-button"]}>⭕</button>
        </div>
    )
}