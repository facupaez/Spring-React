import { useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";

const initialCartItems = [];

function App() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  return (
    <>
      <div className="container">
        <CatalogView />

        <div className="my-4 w-50"></div>
        <CartView items={cartItems} />
      </div>
    </>
  );
}

export default App;
