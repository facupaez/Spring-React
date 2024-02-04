import React from "react";

export const TotalView = ({ totalInvoice }) => {
  return (
    <>
      <div className="text-end">
        <span>
          Total ${new Intl.NumberFormat("es-AR").format(totalInvoice)}
        </span>
      </div>
    </>
  );
};
