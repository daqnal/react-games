import "./GameSelector.css";

export default function GameSelector() {

    // const [buttonClicked, setButtonClick] = useState();

    function handleClick(title) {
        // if (title === "Tic-Tac-Toe") {
        //     console.log("ttt");
        // }
        console.log("hi")

    }

    return (
        <div id="buttons-container">
            <GameButton title={"Tic-Tac-Toe"} description={"The classic game with X and O"} image={"/images/ttt.png"} onButtonClick={() => handleClick("Tic-Tac-Toe")} />
            <GameButton title={"Otrio"} description={"Think Tic-Tac-Toe, but 3D"} image={"/images/ttt.png"} onButtonClick={() => console.log("title")}/>
        </div>
    )
}

function GameButton({ title, description, image, onButtonClick }) {
    
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={image}
                alt={title}
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions">
                <button className="btn btn-primary" onClick={onButtonClick}>Play!</button>
                </div>
            </div>
        </div>
    )
}