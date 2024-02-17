import PropTypes from "prop-types";

export const InvoiceView = ({ id, invoiceName }) => {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item">Id: {id}</li>
        <li className="list-group-item">Nombre: {invoiceName}</li>
      </ul>
    </>
  );
};

InvoiceView.propTypes = {
  id: PropTypes.number.isRequired,
  invoiceName: PropTypes.string.isRequired,
};
