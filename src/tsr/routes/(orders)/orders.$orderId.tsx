import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/(orders)/orders/$orderId")({
  component: Order,
});

function Order() {
  const params = Route.useParams();

  return (
    <div>
      <h1>{params.orderId}</h1>
    </div>
  );
}

export default Order;
