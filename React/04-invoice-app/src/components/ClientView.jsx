import PropTypes from "prop-types";

export const ClientView = ({ title, client }) => {
  // agregando dos puntos podemos crear un alias
  // agregando dos puntos y llaves podemos desestructurar un objeto anidado
  const {
    name: clientName,
    lastname,
    address: { country, city, street, number },
  } = client;

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
