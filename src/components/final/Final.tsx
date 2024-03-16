import s from "./Final.module.css";
import Button from "../../common/button/Button";
import sword from "../../images/sword.png";

const content = [
  "New chapters",
  "Attacking opponents",
  "Updated animation",
  "Artifacts for Thorvald",
  "New enemies",
];

const Final = () => {
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
        <div className={s.button}>
          <Button title="Exit the game" url="/main"></Button>
        </div>
      </div>
    </div>
  );
};

export default Final;
