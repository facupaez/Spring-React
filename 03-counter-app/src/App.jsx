import { useState } from "react";

const App = ({ value }) => {
  // use state se divide en 3 partes
  // primer parte: variable
  // segunda parte: funcion a ejecutar
  // tercera parte: valor inicial
  const [counter, setCounter] = useState(value);

  const counterSum = () => {
    /* console.log("click"); */
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>El valor del contador es: {counter}</h2>
      <button onClick={() => counterSum()}>Incrementar contador +1</button>
    </>
  );
};

export default App;
