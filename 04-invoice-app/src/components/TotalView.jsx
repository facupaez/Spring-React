import React from "react";

export const TotalView = ({ total }) => {
  return (
    <>
      <div className="text-end">
        <span>Total: ${new Intl.NumberFormat("es-AR").format(total)}</span>
      </div>
    </>
  );
};
