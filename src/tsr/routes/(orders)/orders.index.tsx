//import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/(orders)/orders/")({
  component: Orders,
});

function Orders() {
  const orders = [
    { id: uuidv4() },
    { id: uuidv4() },
    { id: uuidv4() },
    { id: uuidv4() },
    { id: uuidv4() },
  ];

  return (
    <div>
      <h1>orders</h1>
      <ul className="OrdersList">
        {orders.map((order) => (
          <Link to={`./${order.id}`} key={order.id}>
            {" "}
            {order.id}{" "}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Orders;
