// components/UserList.tsx
import React, { useState, useEffect } from "react";
import { fetchUsers } from "../services/userApiService";
import type { User } from "../models/UsersModel";

interface UserListProps {
  onUserSelect?: (user: User) => void;
}

const UserList: React.FC<UserListProps> = ({ onUserSelect }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        const data = await fetchUsers();
        setUsers(data);

        // Seleccionar el primer usuario por defecto si existe
        if (data.length > 0 && onUserSelect) {
          onUserSelect(data[0]);
          setSelectedUserId(data[0].id);
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Error al cargar usuarios"
        );
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, [onUserSelect]);

  const handleUserClick = (user: User) => {
    setSelectedUserId(user.id);
    if (onUserSelect) {
      onUserSelect(user);
    }
  };

  if (loading) {
    return (
      <div className="loading-state">
        <div className="spinner"></div>
        <p>Cargando usuarios...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-state">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Reintentar</button>
      </div>
    );
  }

  if (users.length === 0) {
    return <div className="empty-state">No se encontraron usuarios</div>;
  }

  return (
    <ul className="user-list">
      {users.map((user) => (
        <li
          key={user.id}
          className={`user-item ${
            selectedUserId === user.id ? "selected" : ""
          }`}
          onClick={() => handleUserClick(user)}
        >
          <div className="user-info">
            <h4>{user.name}</h4>
            <p>{user.email}</p>
          </div>
          <span className={`user-role ${user.role.toLowerCase()}`}>
            {user.role}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
