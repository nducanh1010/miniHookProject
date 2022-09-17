import "./Nav.scss";
const Nav = () => {
  return (
    <div className="topnav">
      <a className="active" href="/">
        Home
      </a>
      <a href="/timer">Timer App</a>
      <a href="/todo">Todo App</a>
      <a href="/more">More</a>
    </div>
  );
};
export default Nav;
