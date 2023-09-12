import React, { useState, useEffect } from "react";
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

  const [state, setState] = useState({ counter: -1, hello: "wolrd" });
  useEffect(
    () => {
      // first

      //Use for the unmount of the component
      // return () => {
      //   second
      // }
    },
    [state]
  );

  useEffect(
    () => {
      setState({ ...state, counter: 0 });
    },
    /** Array of dependencies which are going to be observed. Empty => for the componentDidMount event */
    []
  );

  return (
    <div className="App">
      Counter value : {state.counter}
      <hr />
      <Button
        bgcolor="tomato"
        onClick={() => {
          /**
           * The spread operator alias ... duplicate the current object
           */
          setState({ ...state, counter: state.counter - 1 });
        }}
      >
        -
      </Button>
      <Button
        onClick={() => {
          setState({ ...state, counter: state.counter + 1 });
        }}
      >
        +
      </Button>
    </div>
  );
};

export default App;
