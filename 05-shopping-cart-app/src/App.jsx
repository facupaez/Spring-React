import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { useItemsCart } from "./hooks/useItemsCart";

function App() {
  const { cartItems, handlerAddProductCart, handlerDeteleProductCart } =
    useItemsCart();

  return (
    <>
      <div className="container">
        <CatalogView handlerAddProductCart={handlerAddProductCart} />

        {cartItems.length <= 0 || (
          <CartView
            items={cartItems}
            handlerDeteleProductCart={handlerDeteleProductCart}
          />
        )}
        <div className="my-4 w-50"></div>
      </div>
    </>
  );
}

export default App;
