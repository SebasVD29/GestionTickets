// components/UserDetails.tsx
import React from "react";
import type { User } from "../models/UsersModel";

interface UserDetailsProps {
  user: User;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <div className="user-details">
      <div className="detail-row">
        <span className="detail-label">ID:</span>
        <span className="detail-value">{user.id}</span>
      </div>
      <div className="detail-row">
        <span className="detail-label">Nombre:</span>
        <span className="detail-value">{user.name}</span>
      </div>
      <div className="detail-row">
        <span className="detail-label">Email:</span>
        <span className="detail-value">{user.email}</span>
      </div>
      <div className="detail-row">
        <span className="detail-label">Rol:</span>
        <span className="detail-value">{user.role}</span>
      </div>
      <div className="detail-row">
        <span className="detail-label">Estado:</span>
        <span
          className={`detail-value ${user.isActive ? "active" : "inactive"}`}
        >
          {user.isActive ? "Activo" : "Inactivo"}
        </span>
      </div>
    </div>
  );
};

export default UserDetails;
