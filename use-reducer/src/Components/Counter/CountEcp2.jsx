import React, { useReducer } from "react";

let initialState = { count1: 0, count2: 0 };

let countReducerFun = (cstate, action) => {
  switch (action) {
    case "increment1":
      return { ...cstate, count1: cstate.count1 + 1 };
    case "decrement1":
      return { ...cstate, count1: cstate.count1 - 1 };
    case "increment2":
      return { ...cstate, count2: cstate.count2 + 1 };
    case "decrement2":
      return { ...cstate, count2: cstate.count2 - 1 };
    case "reset":
      return initialState;
    default:
  }
  return cstate;
};

function CountEcp2() {
  let [state, dispatcher] = useReducer(countReducerFun, initialState);

    return (
    <div>
      <h1>Count : {state.count1}</h1>
      <button
        onClick={() => {
          dispatcher("increment1");
        }}
      >
        inc
      </button>
      <button
        onClick={() => {
          dispatcher("decrement1");
        }}
      >
        Dec
      </button>

      <br />
      <br />

      <h1>Count : {state.count2}</h1>
      <button
        onClick={() => {
          dispatcher("increment2");
        }}
      >
        inc
      </button>
      <button
        onClick={() => {
          dispatcher("decrement2");
        }}
      >
        Dec
      </button>

      <br />
      <br />

      <button
        onClick={() => {
          dispatcher("reset");
        }}
      >
        reset
      </button>
    </div>
  );
}

export default CountEcp2;
