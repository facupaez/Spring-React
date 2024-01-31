import React from "react";

const App = () => {
  const counter = 0;

  const counterSum = () => {
    console.log("click");
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>El valor del contador es: {counter}</h2>
      <button
        onClick={() => {
          counterSum();
        }}
      >
        Incrementar contador +1
      </button>
    </>
  );
};

export default App;
