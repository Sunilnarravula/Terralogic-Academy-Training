import React from "react";
import useCounter from "../hooks/useCounter";

function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);

  return React.createElement(
    "div",
    { style: { textAlign: "center", marginTop: "30px" } },
    [
      React.createElement("h2", { key: "h2" }, `Count: ${count}`),
      React.createElement("button", { key: "inc", onClick: increment }, "➕ Increment"),
      React.createElement("button", { key: "dec", onClick: decrement }, "➖ Decrement"),
      React.createElement("button", { key: "res", onClick: reset }, "🔁 Reset"),
    ]
  );
}

export default Counter;
