import { useSearchParams } from "react-router-dom";
import Menu from "./Menu";

function CreditResult() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const res = searchParams.get("isRejected");
  return (
    <div>
      <Menu />

      <h1> Have you been rejected? {res ? "yes" : "no"}</h1>
    </div>
  );
}

export default CreditResult;
