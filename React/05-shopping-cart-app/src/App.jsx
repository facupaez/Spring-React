import { useItemsCart } from "./hooks/useItemsCart";
import { Navbar } from "./components/Navbar";
import { CartRoutes } from "./routes/CartRoutes";

function App() {
  const { cartItems, handlerAddProductCart, handlerDeteleProductCart } =
    useItemsCart();

  return (
    <>
      <Navbar />
      <div className="container">
        <CartRoutes
          cartItems={cartItems}
          handlerAddProductCart={handlerAddProductCart}
          handlerDeteleProductCart={handlerDeteleProductCart}
        />
        <div className="my-4 w-50"></div>
      </div>
    </>
  );
}

export default App;
