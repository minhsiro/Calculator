/* Buttons component, exported to Calculator */

export default function Buttons(props) {
  return (
    <div className="buttons">
      <button
        id="AC"
        onClick={() => props.handleClick("AC", "operator")}>AC</button>
      <button
        id="divide"
        onClick={() => props.handleClick("divide", "operator")}>/</button>
      <button
        id="multiply"
        onClick={() => props.handleClick("multiply", "operator")}>X</button>
      <button
        id="seven"
        onClick={() => props.handleClick("7", "number")}>7</button>
      <button
        id="eight"
        onClick={() => props.handleClick("8", "number")}>8</button>
      <button
        id="nine"
        onClick={() => props.handleClick("9", "number")}>9</button>
      <button
        id="subtract"
        onClick={() => props.handleClick("subtract", "operator")}>-</button>
      <button
        id="four"
        onClick={() => props.handleClick("4", "number")}>4</button>
      <button
        id="five"
        onClick={() => props.handleClick("5", "number")}>5</button>
      <button
        id="six"
        onClick={() => props.handleClick("6", "number")}>6</button>
      <button
        id="add"
        onClick={() => props.handleClick("add", "operator")}>+</button>
      <button
        id="one"
        onClick={() => props.handleClick("1", "number")}>1</button>
      <button
        id="two"
        onClick={() => props.handleClick("2", "number")}>2</button>
      <button
        id="three"
        onClick={() => props.handleClick("3", "number")}>3</button>
      <button
        id="zero"
        onClick={() => props.handleClick("0", "number")}>0</button>
      <button
        id="dot"
        onClick={() => props.handleClick(".", "operator")}>.</button>
      <button
        id="equal"
        onClick={() => props.handleClick("equal", "operator")}>=</button>
    </div>
  )
}