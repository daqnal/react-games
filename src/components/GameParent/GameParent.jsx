import "./GameParent.css";
import { useState } from "react";
import TTT from "../TicTacToe/TTT";

export default function GameParent({
  selectorActive,
  setSelectorActive,
  gamesActive,
  setGamesActive,
}) {
  // const [showSelector, setShowSelector] = useState(true);
  const [playTTT, setPlayTTT] = useState(false);

  function handleClick(title) {
    if (title === 0) {
      let game = "Tic-Tac-Toe";
      loadGame(game);
    } else if (title === 1) {
      let game = "Otrio";
      // loadGame(1);
      console.log(`Sorry ${game} not support yet :(`);
    }
  }

  function loadGame(game) {
    // Remove GameSelector element
    setSelectorActive(false);
    setGamesActive(true);
    // Load in game
    if (game === "Tic-Tac-Toe") {
      setPlayTTT(true);
    }
    // 0 = TTT
    // 1 = Otrio
  }

  return (
    <>
      {selectorActive && (
        <GameSelector handleClick={(title) => handleClick(title)} />
      )}
      {playTTT && gamesActive && <TTT />}
    </>
  );
}

function GameSelector({ handleClick }) {
  return (
    <div id="buttons-container">
      <GameButton
        title={"Tic-Tac-Toe"}
        description={"The classic game with X and O"}
        image={"/images/ttt.png"}
        onButtonClick={() => handleClick(0)}
      />
      <GameButton
        title={"Otrio"}
        description={"Think Tic-Tac-Toe, but 3D"}
        image={"/images/ttt.png"}
        onButtonClick={() => handleClick(1)}
      />
    </div>
  );
}

function GameButton({ title, description, image, onButtonClick }) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-primary" onClick={onButtonClick}>
            Play!
          </button>
        </div>
      </div>
    </div>
  );
}
