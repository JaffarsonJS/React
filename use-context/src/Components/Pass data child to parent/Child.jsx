import React from "react";

function Child({ choosemsg }) {
  let msg = "Good bye";

  return (
    <div>
      <button onClick={() => {
          choosemsg(msg);
        }}>
        Change Message
      </button>
    </div>
  );
}
export default Child;