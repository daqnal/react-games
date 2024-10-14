import "./Otrio.css";

export default function Otrio() {
    return (
        <>
            <Board/>
        </>
    )
}

function Board() {
    return (
        <>
            <div id="row-1" className="row">
                <Cell />
                <Cell />
                <Cell />
            </div>
            <div id="row-2" className="row">
                <Cell />
                <Cell />
                <Cell />
            </div>
            <div id="row-3" className="row">
                <Cell />
                <Cell />
                <Cell />
            </div>
        </>
    )
}

function Cell() {
    return (
        <p>Hi</p>
    )
}