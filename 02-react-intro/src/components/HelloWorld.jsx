import PropTypes from "prop-types";

export const HelloWorld = ({ user, id, title = "Hola mundo!" }) => {
  /*   const user = "Pepe"; */

  return (
    <>
      <h1>{title}</h1>
      <p>
        Soy {user.name + " " + user.lastname} con el {id}
      </p>
    </>
  );
};

HelloWorld.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};
