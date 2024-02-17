import React from "react";
import ReactDOM from "react-dom/client";
import { HelloWorldApp } from "./HelloWorldApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelloWorldApp user={{ name: "Juan", lastname: "Doe" }} id={2} />
  </React.StrictMode>
);
