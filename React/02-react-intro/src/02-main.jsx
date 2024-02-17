import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// asi se crean los archivos jsx
/* const h1 = React.createElement(
  "div",
  null,
  React.createElement("ul", null, React.createElement("li", null, "Hola mundo!"))
  ); */

// esta forma utilizamos para crear elementos html
const h1 = (
  <div>
    <ul>
      <li>Hola mundo!</li>
    </ul>
  </div>
);
ReactDOM.createRoot(document.getElementById("root")).render(h1);
/*   <React.StrictMode>
    <App />
  </React.StrictMode> */
