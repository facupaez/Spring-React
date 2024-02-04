import PropTypes from "prop-types";

export const RowItemView = ({ product, price, quantity }) => {
  return (
    <>
      <tr>
        <td>{product}</td>
        <td>${new Intl.NumberFormat("es-AR").format(price)}</td>
        <td>{quantity}</td>
      </tr>
    </>
  );
};

RowItemView.propTypes = {
  product: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
