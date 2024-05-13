import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/Account")({
  component: Account,
});

function Account() {
  return <div>Welcome to my Account</div>;
}

export default Account;
