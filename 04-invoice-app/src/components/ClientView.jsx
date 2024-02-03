import PropTypes from "prop-types";

export const ClientView = ({ title, client }) => {
  const { name: clientName, lastname, address } = client;
  const { country, city, street, number } = address;

  return (
    <>
      <h3>{title}</h3>
      <ul className="list-group">
        <li className="list-group-item">
          Nombre: {clientName} {lastname}
        </li>
        <li className="list-group-item">
          Dirección: {country}, {city}, {street + " " + number}
        </li>
      </ul>
    </>
  );
};

ClientView.propTypes = {
  title: PropTypes.string.isRequired,
  client: PropTypes.object.isRequired,
};
