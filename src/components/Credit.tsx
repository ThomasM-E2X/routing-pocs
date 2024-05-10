import Menu from "./Menu";
import { useNavigate } from "react-router-dom";

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
    navigate(`result?isRejected=${res}`);
  };

  return (
    <div>
      <Menu />
      <h1>Apply for credit:</h1>

      <button onClick={buttonHandler}>Are you eligable?</button>
    </div>
  );
}

export default Credit;
