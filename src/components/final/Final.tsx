import s from "./Final.module.css";
import sword from "../../images/sword.png";
import { useNavigate } from "react-router-dom";
import useFightStore from "../../store/useFightStore";

const content = [
  "New chapters",
  "Attacking opponents",
  "Updated animation",
  "Artifacts for Thorvald",
  "New enemies",
];

const Final = () => {
  const { resetEnemy } = useFightStore();

  const navigate = useNavigate();

  const reset = () => {
    resetEnemy();
    navigate("/main");
  };

  return (
    <div className={s.container}>
      <div className={s.header}>
        <header>To be continued...</header>
      </div>
      <div className={s.common}>
        <div className={s.textBlock}>
          You have completed the initial stage of the game. We are developing
          its continuation, and in the future, you will see:
          <div>
            {content.map((item, index) => (
              <div className={s.items}>
                <img src={sword} className={s.sword} />
                <div className={s.item} key={index}>
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className={s.button} onClick={reset}>
          Exit the game
        </button>
      </div>
    </div>
  );
};

export default Final;
