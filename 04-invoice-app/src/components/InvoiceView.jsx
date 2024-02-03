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
