import { Outlet } from "react-router-dom";
import NavItem from "./NavItem";
import "../style/dashboard.css";

const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      <nav className="main-menu">
        <h1>Dashboard</h1>
        <ul>
          <NavItem to="/" text="Home" />
          <NavItem to="/users" text="Gestion de Usuarios" />
          <NavItem to="/tickets" text="Gestion de Tickets" />
        </ul>
      </nav>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
