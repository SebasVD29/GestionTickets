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
          <NavItem to="/activities" text="Activities" />
          <NavItem to="/OTROS" text="OTROS" />
        </ul>
      </nav>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
