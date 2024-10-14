import "./MenuButtonRow.css";
import { LuHome, LuGithub } from "react-icons/lu";
// import { useState } from "react";


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

      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-sm m-1 btn-component">
          Theme
          <svg
            width="12px"
            height="12px"
            className="inline-block h-2 w-2 fill-current opacity-60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048">
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
        <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-[1] w-30 p-2 shadow-2xl" data-choose-theme>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start mx-0 my-1"
              aria-label="Default"
              value="default" />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start mx-0 my-1"
              aria-label="Dark"
              value="dark" />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start mx-0 my-1"
              aria-label="Light"
              value="light" />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start mx-0 my-1"
              aria-label="Night"
              value="night" />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start mx-0 my-1"
              aria-label="Nord"
              value="nord" />
          </li>
        </ul>
      </div>

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
    <button className="btn btn-sm btn-component" onClick={onButtonClick}>
      {icon}
      {title}
    </button>
  );
}
