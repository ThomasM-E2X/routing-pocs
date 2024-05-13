import { createFileRoute } from "@tanstack/react-router";
import Account from "./Account";

export const Route = createFileRoute("/")({
  component: Account,
});
