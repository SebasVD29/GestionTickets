import { useState } from "react";
import type { FormField } from "../models/UsersModel";

interface DynamicFormProps {
  config: {
    fields: FormField[];
    submitText?: string;
  };
  onSubmit: (data: Record<string, any>) => void;
}

const DynamicForm = ({ config, onSubmit }: DynamicFormProps) => {
  // Estado inicial basado en los campos
  const initialValues = config.fields.reduce(
    (acc, field) => ({
      ...acc,
      [field.name]:
        field.defaultValue || (field.type === "checkbox" ? false : ""),
    }),
    {} as Record<string, any>
  );

  const [formData, setFormData] = useState(initialValues);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const renderField = (field: FormField) => {
    switch (field.type) {
      case "select":
        return (
          <select
            name={field.name}
            value={formData[field.name] as string}
            onChange={handleChange}
            required={field.required}
            className="form-field"
          >
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case "checkbox":
        return (
          <input
            type="checkbox"
            name={field.name}
            checked={formData[field.name] as boolean}
            onChange={handleChange}
            className="form-checkbox"
          />
        );

      default:
        return (
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name] as string}
            onChange={handleChange}
            required={field.required}
            placeholder={field.placeholder}
            className="form-field"
          />
        );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="dynamic-form">
      {config.fields.map((field) => (
        <div key={field.name} className={`form-group ${field.type}-group`}>
          <label htmlFor={field.name}>{field.label}</label>
          {renderField(field)}
        </div>
      ))}
      <button type="submit" className="submit-button">
        {config.submitText || "Guardar"}
      </button>
    </form>
  );
};

export default DynamicForm;
