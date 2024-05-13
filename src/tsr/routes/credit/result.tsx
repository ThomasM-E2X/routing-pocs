import { createFileRoute, useSearch } from "@tanstack/react-router";

export const Route = createFileRoute("/credit/result")({
  component: CreditResult,
});

function CreditResult() {
  const search: { isRejected: string } = useSearch({
    strict: true,
    from: "/credit/result",
  });

  const res = search["isRejected"];
  return (
    <div>
      <h1> Have you been rejected? {res ? "yes" : "no"}</h1>
    </div>
  );
}

export default CreditResult;
