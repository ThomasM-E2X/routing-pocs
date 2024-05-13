import { Link, useRouterState } from "@tanstack/react-router";

function Menu() {
  const router = useRouterState();

  const basePath = router.location.pathname.split("/")[1].toLocaleLowerCase();

  return (
    <nav>
      <ul className="MenuBar">
        <Link
          to={"/Account"}
          data-is-active-path={basePath === "" || basePath === "account"}
        >
          Accounts
        </Link>
        <Link to={"/orders"} data-is-active-path={basePath === "orders"}>
          Orders
        </Link>
        <Link to={"/credit"} data-is-active-path={basePath === "credit"}>
          Credit
        </Link>
      </ul>
    </nav>
  );
}

export default Menu;
