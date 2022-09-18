import "./Nav.scss";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className="topnav">
      <NavLink activeclassName="active" to="/" exact>
        Home
      </NavLink>
      <NavLink to="/timer">Timer App</NavLink>
      <NavLink to="/todo">Todo App</NavLink>
      <NavLink to="/blog">Blog App</NavLink>
      <NavLink to="/more">More</NavLink>
    </div>
  );
};
export default Nav;
