import React, { useState } from "react";
import Button from "./components/Button/Button.jsx";

/**
 *
 * @param {*} props
 * @returns
 */
const App = (props) => {
  /**
   * State utilization. As many states as wanted in function, only one in class
   * schema as follow const [name, setter] = useState(intialValue)
   */

  const [state, setState] = useState({counter:0,hello:"world"})
  return (
    <div className="App">
      Counter value : {state.counter}
      <hr />
      <Button
        bgcolor="tomato"
        onClick={() => {
          setState({...state, counter: state.counter - 1 });
          console.log(state);
        }}
      >
        -
      </Button>
      <Button
        onClick={() => {
          setState({...state, counter: state.counter + 1 });
          console.log(state);
        }}
      >+
      </Button>
    </div>
  )
}

export default App;
