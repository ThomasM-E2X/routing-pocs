import { useLocation } from "react-router-dom";
import Menu from "./Menu";

function Order() {
  const { pathname } = useLocation();

  const id = pathname.split("/").reverse()[0];

  console.log(pathname);
  console.log(id);

  return (
    <div>
      <Menu />
      <h1>{id}</h1>
    </div>
  );
}

export default Order;
