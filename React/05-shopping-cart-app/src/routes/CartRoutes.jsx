import { Navigate, Route, Routes } from "react-router-dom";
import { CatalogView } from "../components/CatalogView";
import { CartView } from "../components/CartView";

export const CartRoutes = ({
  handlerAddProductCart,
  handlerDeteleProductCart,
  cartItems,
}) => {
  return (
    <>
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
    </>
  );
};
