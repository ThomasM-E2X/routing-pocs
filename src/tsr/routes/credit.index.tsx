import { useNavigate, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/credit/")({
  component: Credit,
});

function Credit() {
  const navigate = useNavigate();

  const creditResult = () =>
    new Promise(function (resolve) {
      setTimeout(() => {
        return resolve(new Date().getUTCSeconds() % 2 === 0);
      }, 2500);
    });

  const buttonHandler = async () => {
    const res = await creditResult();
    console.log(res);
    navigate({ to: `result?isRejected=${res}` });
  };

  return (
    <div>
      <h1>Apply for credit:</h1>

      <button onClick={buttonHandler}>Are you eligable?</button>
    </div>
  );
}

export default Credit;
