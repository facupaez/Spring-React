import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";

function App() {
  return (
    <>
      <div className="container">
        <CatalogView />

        <div className="my-4 w-50"></div>
        <CartView />
      </div>
    </>
  );
}

export default App;
