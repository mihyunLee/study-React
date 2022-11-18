import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  fetchIncrement,
} from "./couterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <span>{count}</span>
        <br />
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(fetchIncrement(count))}>
          Fetch Increment
        </button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      </div>
    </div>
  );
}
