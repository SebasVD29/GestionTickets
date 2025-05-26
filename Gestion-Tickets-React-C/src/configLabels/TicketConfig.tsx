import type { TicketFormConfig } from "../models/TicketModel";

export const ticketFormConfig: TicketFormConfig = {
  submitText: "Guardar Usuario",
  fields: [
    {
      name: "titulo",
      label: "Titulo del Ticket",
      type: "text",
      required: true,
    },
    {
      name: "descripcion",
      label: "Descripcion del Ticket",
      type: "text",
      required: true,
    },
    {
      name: "estado",
      label: "Estado",
      type: "select",
      required: true,
      options: [
        { value: "abierto", label: "Abierto" },
        { value: "enProceso", label: "En Progreso" },
        { value: "resuelto", label: "Resuelto" },
        { value: "cerrado", label: "Cerrado" },
      ],
    },
    {
      name: "prioridad",
      label: "Prioridad",
      type: "select",
      required: true,
      options: [
        { value: "baja", label: "Baja" },
        { value: "media", label: "Media" },
        { value: "alta", label: "Alta" },
        { value: "critica", label: "Critica!" },
      ],
    },
    {
      name: "categoria",
      label: "Categoria",
      type: "select",
      required: true,
      options: [
        { value: "categoria1", label: "categoria 1" },
        { value: "categoria2", label: "categoria 2" },
        { value: "categoria3", label: "categoria 3" },
      ],
    },
  ],
};
