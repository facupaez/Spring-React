import React from "react";

export const LoginPage = () => {
  return (
    <div className="modal" style={{ display: "block" }} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Log in</h5>
          </div>
          <form>
            <div className="modal-body">
              <input
                className="form-control my-3"
                placeholder="Usuario"
                name="username"
                type="text"
              ></input>
              <input
                className="form-control my-3"
                placeholder="Contraseña"
                name="password"
                type="password"
              ></input>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
