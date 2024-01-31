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
