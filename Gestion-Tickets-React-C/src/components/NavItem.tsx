import { NavLink } from "react-router-dom";
import "../style/dashboard.css";

interface NavItemProps {
  to: string;
  text: string;
}

const NavItem = ({ to, text }: NavItemProps) => {
  return (
    <li className="nav-item">
      <b></b>
      <b></b>
      <NavLink
        to={to}
        className={({ isActive }: { isActive: boolean }) =>
          isActive ? "active" : ""
        }
      >
        <span className="nav-icon"></span>
        <span className="nav-text">{text}</span>
      </NavLink>
    </li>
  );
};

export default NavItem;
