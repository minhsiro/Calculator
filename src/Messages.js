/* Messages component, exported to Calculator */

export default function Messages(props) {
  return (
    <div className="messages">
      <div id="output">{props.output}</div>
      <div id="input">{props.input}</div>
    </div>
  )
}