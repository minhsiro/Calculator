import "./styles/App.css"
import {initialState, reducer, CLICK} from "./State.js";
import * as React from "react";
import Buttons from "./Buttons.js";
import Messages from "./Messages.js";

export default function Calculator() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleClick = (value,id) => {
    dispatch({type:CLICK, value,id}); // or id:id
  }

  return (
    <div className="calculator">
      <Messages input={state.input} output={state.output}/>
      <Buttons handleClick={handleClick}/>
    </div>
  )
}



