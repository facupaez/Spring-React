import PropTypes from "prop-types";

export const RowItemView = ({
  product,
  price,
  quantity,
  handlerDeleteItem,
  id,
}) => {
  return (
    <>
      <tr>
        <td>{product}</td>
        <td>${new Intl.NumberFormat("es-AR").format(price)}</td>
        <td>{quantity}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => handlerDeleteItem(id)}
          >
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
};

RowItemView.propTypes = {
  product: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
