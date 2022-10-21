import React, { useReducer } from "react";

const State = () => {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "reset":
        return initialState;
      case "increase":
        return { count: state.count + 1 };
      case "decrease":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count(Reducer): {state.count}
      <br />
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "decrease" })}>-</button>
      <button onClick={() => dispatch({ type: "increase" })}>+</button>
    </div>
  );
};

export default State;
