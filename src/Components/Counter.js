import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Store/action/counter";

function Counter() {
  const myState = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  
  return (
    <div>
      <p>{myState}</p>
      <button onClick={() => dispatch(decrement())} disabled={myState<=0}> - </button>
      <button onClick={() => dispatch(increment())}> + </button>
    </div>
  );
}

export default Counter;
