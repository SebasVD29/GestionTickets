// models/UsersModel.ts
export type FieldType = "text" | "email" | "password" | "select" | "checkbox";

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[]; // Para select
  defaultValue?: string | boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  isActive: boolean;
}

export interface UserFormConfig {
  fields: FormField[];
  submitText?: string;
}

export interface UserListResponse {
  success: boolean;
  message?: string;
  data: User[];
  totalItems?: number;
}

export interface ApiConfig {
  baseUrl: string;
  endpoints: {
    getUsers: string;
    createUser: string;
    updateUser: string;
    deleteUser: string;
  };
}
export interface UserFromApi {
  Id: string;
  Nombre: string;
  Email: string;
  Password: string;
  Rol: string;
  IsActive: boolean;
}
