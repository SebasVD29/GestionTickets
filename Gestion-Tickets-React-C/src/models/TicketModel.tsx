export type FieldType = "text" | "select";

export interface FormTicketField {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: { value: string; label: string }[]; // Para select
  defaultValue?: string | boolean;
}

export interface TicketFormConfig {
  fields: FormTicketField[];
  submitText?: string;
}
