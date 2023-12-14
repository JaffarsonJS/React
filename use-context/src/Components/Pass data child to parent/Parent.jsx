import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [msg, setmsg] = useState("Hello World");

  let choosemsg = (msg) => {
    setmsg(msg);
  };

  return (
    <div>
      <h1>{msg}</h1>
      <Child choosemsg={choosemsg} />
    </div>
  );
}

export default Parent;