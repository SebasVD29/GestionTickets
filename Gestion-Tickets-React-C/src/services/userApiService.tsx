// services/apiService.ts
import type { User } from "../models/UsersModel";

const API_BASE_URL = "http://localhost:5190";

// services/apiService.ts
export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/Usuario/GetUsers`);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Formato de respuesta inesperado");
    }

    // Validación y transformación de datos
    return data.map((item: any) => ({
      id: item.id?.toString() || "unknown-id",
      name: item.nombre || item.name || "Nombre no disponible",
      email: item.email || "Email no disponible",
      password: item.password || "",
      role: item.rol || item.role || "user",
      isActive: item.isActive ?? false,
    }));
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("No se pudo obtener la lista de usuarios");
  }
};

export const createUser = async (userData: Omit<User, "id">): Promise<User> => {
  const response = await fetch(`${API_BASE_URL}/Usuario`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return await response.json();
};

// Más funciones para update y delete según necesidad
