import { Navigate, Route, Routes } from "react-router-dom";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { useItemsCart } from "./hooks/useItemsCart";
import { Navbar } from "./components/Navbar";

function App() {
  const { cartItems, handlerAddProductCart, handlerDeteleProductCart } =
    useItemsCart();

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route
            path="catalog"
            element={
              <CatalogView handlerAddProductCart={handlerAddProductCart} />
            }
          />
          <Route
            path="cart"
            element={
              cartItems.length <= 0 ? (
                <div>
                  <h3 className="text-center">Cart App - Carro de compras</h3>
                  <p className="alert alert-warning text-center">
                    No hay prouctos en el carrito de compras
                  </p>
                </div>
              ) : (
                <CartView
                  items={cartItems}
                  handlerDeteleProductCart={handlerDeteleProductCart}
                />
              )
            }
          />
          <Route path="/" element={<Navigate to={"/catalog"} />} />
        </Routes>
        <div className="my-4 w-50"></div>
      </div>
    </>
  );
}

export default App;
