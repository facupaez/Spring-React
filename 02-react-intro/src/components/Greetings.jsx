import React from "react";

export const Greetings = ({ user, id }) => {
  return (
    <div>
      <p>
        Saludos {user.name + " " + user.lastname} con el {id}
      </p>
    </div>
  );
};
