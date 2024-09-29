import "./MenuButtonRow.css";
import { LuHome, LuGithub } from "react-icons/lu";
import { useState } from "react";

export default function MenuButtonRow({ goHome }) {
  function handleClick(i) {
    if (i === 0) {
      goHome();
    } else if (i === 1) {
      window.open("https://github.com/daqnal/react-games", "_blank").focus();
    }
  }

  return (
    <div id="button-row">
      <Button
        icon={<LuHome />}
        title={"Home"}
        onButtonClick={() => handleClick(0)}
      />
      <Button
        icon={<LuGithub />}
        title={"Github"}
        onButtonClick={() => handleClick(1)}
      />
    </div>
  );
}

function Button({ icon, title, onButtonClick }) {
  return (
    <button className="btn btn-sm" onClick={onButtonClick}>
      {icon}
      {title}
    </button>
  );
}
