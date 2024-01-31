import React from "react";
import ReactDOM from "react-dom/client";
import { HelloWorld } from "../src/components/HelloWorld";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelloWorld user={"Juan"} id={2} />
  </React.StrictMode>
);
