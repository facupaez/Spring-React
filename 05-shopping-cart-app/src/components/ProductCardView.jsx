export const ProductCardView = ({
  id,
  name,
  description,
  price,
  handlerAddProductCart,
}) => {
  const onAddItem = (product) => {
    handlerAddProductCart(product);
  };
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            ${new Intl.NumberFormat("es-AR").format(price)}
          </p>
          <button
            className="btn btn-success"
            onClick={() => onAddItem({ id, name, description, price })}
          >
            Agregar a carrito
          </button>
        </div>
      </div>
    </>
  );
};
