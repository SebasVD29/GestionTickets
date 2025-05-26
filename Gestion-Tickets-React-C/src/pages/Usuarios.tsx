import "../style/users.css";
import Form from "../components/Form";
import UserList from "../components/List";
import { useState } from "react";
import type { User, UserFormConfig } from "../models/UsersModel";
import { createUser } from "../services/userApiService";

const userFormConfig: UserFormConfig = {
  submitText: "Guardar Usuario",
  fields: [
    {
      name: "name",
      label: "Nombre completo",
      type: "text",
      required: true,
      placeholder: "Ej. Juan Pérez",
    },
    {
      name: "email",
      label: "Correo electrónico",
      type: "email",
      required: true,
      placeholder: "Ej. usuario@example.com",
    },
    {
      name: "password",
      label: "Contraseña",
      type: "password",
      required: true,
      placeholder: "Mínimo 8 caracteres",
    },
    {
      name: "role",
      label: "Rol",
      type: "select",
      required: true,
      options: [
        { value: "admin", label: "Administrador" },
        { value: "user", label: "Usuario normal" },
        { value: "editor", label: "Editor" },
      ],
    },
    {
      name: "isActive",
      label: "Usuario activo",
      type: "checkbox",
      defaultValue: true,
    },
  ],
};

function Usuarios() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [, setRefreshList] = useState(false);
  const [, setSelectedUser] = useState<User | null>(null);

  const handleSubmit = async (formData: Record<string, any>) => {
    try {
      const newUser = await createUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
        isActive: formData.isActive,
      });

      setCurrentUser(newUser);
      setRefreshList((prev) => !prev); // Forzar actualización de la lista
      console.log("Usuario creado:", newUser);
    } catch (error) {
      console.error("Error al crear usuario:", error);
      // Aquí podrías mostrar un mensaje de error al usuario
    }
  };

  return (
    <div className="page-container">
      <h2>Gestión de Usuarios</h2>

      <div className="stats-container">
        {/* Tarjeta del formulario */}
        <div className="stat-card">
          <h3>Gestión de Usuario</h3>
          <Form config={userFormConfig} onSubmit={handleSubmit} />
        </div>

        {/* Tarjeta de vista previa */}
        {currentUser && (
          <div className="stat-card">
            <h3>Usuario Actual</h3>
            <div className="user-preview">
              <p>
                <strong>Nombre:</strong> {currentUser.name}
              </p>
              <p>
                <strong>Email:</strong> {currentUser.email}
              </p>
              <p>
                <strong>Rol:</strong>{" "}
                <span className={`role-badge ${currentUser.role}`}>
                  {currentUser.role.toUpperCase()}
                </span>
              </p>
              <p>
                <strong>Estado:</strong>{" "}
                <span className={currentUser.isActive ? "active" : "inactive"}>
                  {currentUser.isActive ? "Activo" : "Inactivo"}
                </span>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Lista de usuarios */}
      <div className="stats-container">
        <div className="stat-card full-width">
          <h3>Lista de Usuarios</h3>
          <UserList onUserSelect={setSelectedUser} />
        </div>
      </div>
    </div>
  );
}

export default Usuarios;
