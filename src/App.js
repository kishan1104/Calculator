import React, { useState } from "react";
import "./app.css";
export default function App() {
  const [exp, setExp] = useState("");

  function handleClick(e) {
    setExp(exp.concat(e.target.name));
  }

  function clear(params) {
    setExp("");
  }
  function backSpace(params) {
    setExp(exp.slice(0, -1));
  }
  function solve() {
    try {
      setExp(eval(exp).toString());
    } catch {
      setExp("error");
    }
  }
  return (
    <div>
      <div className="container">
        <input id="textbox" type="text" value={exp}></input>
        <div className="keypad">
          <button onClick={clear} className="columns">
            C
          </button>
          <button onClick={backSpace} id="backspace" className="columns">
            &larr;
          </button>
          <button name="+" onClick={handleClick} className="columns">
            +
          </button>
          <button name="7" onClick={handleClick} className="columns">
            7
          </button>
          <button name="8" onClick={handleClick} className="columns">
            8
          </button>
          <button name="9" onClick={handleClick} className="columns">
            9
          </button>
          <button name="-" onClick={handleClick} className="columns">
            -
          </button>
          <button name="4" onClick={handleClick} className="columns">
            4
          </button>
          <button name="5" onClick={handleClick} className="columns">
            5
          </button>
          <button name="6" onClick={handleClick} className="columns">
            6
          </button>
          <button name="*" onClick={handleClick} className="columns">
            *
          </button>
          <button name="1" onClick={handleClick} className="columns">
            1
          </button>
          <button name="2" onClick={handleClick} className="columns">
            2
          </button>
          <button name="3" onClick={handleClick} className="columns">
            3
          </button>
          <button name="/" onClick={handleClick} className="columns">
            /
          </button>
          <button onClick={solve} className="columns">
            =
          </button>
        </div>
      </div>
    </div>
  );
}
