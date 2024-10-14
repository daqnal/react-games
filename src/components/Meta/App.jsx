import { useState } from "react";
import "./App.css";
import { SITE_TITLE } from "../../consts.ts";
import MenuButtonRow from "./MenuButtonRow";
import GameParent from "../GameParent/GameParent";

export default function App() {
  const [goHome, setGoHome] = useState(true);

  return (
    <>
      <h1 className="font-bold mb-0">{SITE_TITLE}</h1>

      <MenuButtonRow goHome={() => setGoHome(true)} />
      <GameParent
        selectorActive={goHome}
        setSelectorActive={(selectorActive) => setGoHome(selectorActive)}
        gamesActive={!goHome}
        setGamesActive={(gamesActive) => setGoHome(!gamesActive)}
      />
    </>
  );
}
