import React, { useReducer } from "react";

export default function TodoUsingUseReducer() {
  let [input, dispatcherInput] = useReducer((currentState, action) => {
    return action;
  }, "");

  let [button, dispatcherButton] = useReducer((currentState, action) => {
    switch (action.type) {
      case "add":
        return [...currentState, input];
      case "delete":
        return currentState.filter((task, index) => index !== action.payload);
      default:
    }
  }, []);

  let updateData = ({ target: { value } }) => {
    dispatcherInput(value);
  };

  let deleteData = (i) => {
    dispatcherButton({ type: "delete", payload: i });
  };

  let inpStyle = {margin: "20px",padding: "1rem 4rem",border: "none",borderBottom: "1px solid black",backgroundColor: "transparent",outline: "none",fontSize: "25px",};
  let btnStyle = {border: "none",borderRadius: "10px",color: "white",backgroundColor: "seagreen",padding: "1rem 1.5rem",};
  
  return (
    <div style={{ height: "500px", width: "500px", margin: "100px auto" }}>
      <h1>Todo list </h1>

      <input
        type="text"
        onChange={updateData}
        placeholder="Enter the task"
        style={inpStyle}
      />
      <button
        onClick={() => {
          dispatcherButton({ type: "add" });
        }}
        style={btnStyle}
      >
        Add task
      </button>

      <div>
        {button.map((t, i) => {
          return (
            <div key={i} style={{ margin: "10px" }}>
              <span style={{ margin: "10px", fontSize: "26px" }}>{t}</span>
              <button
                onClick={() => {
                  deleteData(i);
                }}
                style={{
                  width: "20%",
                  border: "none",
                  borderRadius: "5px",
                  color: "white",
                  backgroundColor: "crimson",
                  padding: "0.4rem 1rem",
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
