import type { FormTicketField } from "../models/TicketModel";
import { useState } from "react";

type FromProps = {
  config: {
    fields: FormTicketField[];
    submitText?: string;
  };
  onSubmit: (data: Record<string, any>) => void;
};

function TicketForm({ config, onSubmit }: FromProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
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
}

export default TicketForm;
