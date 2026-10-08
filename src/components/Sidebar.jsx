 import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        🌤️
        <span>Weatherly</span>
      </div>

      <nav>

        <NavLink to="/" className="nav-item">
          🏠
          <span>Home</span>
        </NavLink>

        <NavLink to="/forecast" className="nav-item">
          📊
          <span>Forecast</span>
        </NavLink>

        <NavLink to="/hourly" className="nav-item">
          🕐
          <span>Hourly</span>
        </NavLink>

        <NavLink to="/favorites" className="nav-item">
          ⭐
          <span>Favorites</span>
        </NavLink>

        <NavLink to="/settings" className="nav-item">
          ⚙️
          <span>Settings</span>
        </NavLink>

        <NavLink to="/about" className="nav-item">
          ℹ️
          <span>About</span>
        </NavLink>

      </nav>

      <div className="sidebar-bottom">
        <p>Weatherly</p>
        <small>Version 1.0</small>
      </div>

    </aside>
  );
}

export default Sidebar;