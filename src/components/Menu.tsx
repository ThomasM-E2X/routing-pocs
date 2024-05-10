import { Link, useLocation } from "react-router-dom";

function Menu() {
  const { pathname } = useLocation();

  const basePath = pathname.split("/")[1];

  return (
    <nav>
      <ul className="MenuBar">
        <Link to={"/"} data-is-active-path={basePath === ""}>
          Accounts
        </Link>
        <Link to={"/Orders"} data-is-active-path={basePath === "Orders"}>
          Orders
        </Link>
        <Link to={"/Credit"} data-is-active-path={basePath === "Credit"}>
          Credit
        </Link>
      </ul>
    </nav>
  );
}

export default Menu;
