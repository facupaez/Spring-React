import { UserForm } from "./UserForm";

export const UserModalForm = ({
  userSelected,
  initialUserForm,
  handlerAddUser,
  handlerCloseForm,
}) => {
  return (
    <div className="abrir-modal animacion fadeIn">
      <div className="modal" style={{ display: "block" }} tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {userSelected.id > 0 ? "Editar usuario" : "Crear usuario"}
              </h5>
            </div>
            <div className="modal-body">
              <UserForm
                handlerAddUser={handlerAddUser}
                initialUserForm={initialUserForm}
                userSelected={userSelected}
                handlerCloseForm={handlerCloseForm}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
