import { RouteObject, createBrowserRouter } from "react-router-dom";
import Account from "../components/Account";
import Orders from "../components/Orders";
import Order from "../components/Order";
import Credit from "../components/Credit";
import CreditResult from "../components/CreditResult";

const account: RouteObject = {
  index: true,
  element: <Account />,
};

const credit: RouteObject = {
  path: "credit",
  children: [
    { index: true, element: <Credit /> },
    {
      path: "result",
      element: <CreditResult />,
    },
  ],
};

const orders: RouteObject = {
  path: "orders",
  children: [
    {
      index: true,
      element: <Orders />,
    },
    {
      path: ":orderId",
      element: <Order />,
    },
  ],
};

const browserRouter = createBrowserRouter([
  {
    path: "/",
    errorElement: <h1>PAGE NOT FOUND</h1>,
    children: [account, credit, orders],
  },
]);

export default browserRouter;
