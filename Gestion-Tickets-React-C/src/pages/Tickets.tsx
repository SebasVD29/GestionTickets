import Form from "../components/FormTicket";

function Tickets() {
  return (
    <div className="page-container">
      <h2>Tickets</h2>
      <div className="stats-container">
        <div className="stat-card">
          <h3>Gestion de Tickets</h3>
          <Form />
        </div>
      </div>
      <div className="stats-container">
        <div className="stat-card">
          <h3>Actividades hoy</h3>
          <p>3</p>
        </div>
      </div>
    </div>
  );
}

// Asegúrate de tener esta línea:
export default Tickets;
