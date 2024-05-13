import { createRootRoute, Outlet } from "@tanstack/react-router";
import TSRMenu from "../../components/TSRMenu";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <TSRMenu />
        <Outlet />
      </div>
    </>
  ),
});
