 import React from "react";
import Counter from "./components/Counter";

function App() {
  return React.createElement(
    "div",
    null,
    [
      React.createElement("h1", { key: "h1", style: { textAlign: "center" } }, "Custom Hook Example"),
      React.createElement(Counter, { key: "counter" })
    ]
  );
}

export default App;
