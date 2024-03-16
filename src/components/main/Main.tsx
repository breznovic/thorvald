import s from "./Main.module.css";
import Button from "../../common/button/Button";

const Main = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <header>Thorvald's revenge</header>
      </div>
      <div className={s.common}>
        <div className={s.button}>
          <Button title="Start game" url="/prologue" />
        </div>
      </div>
    </div>
  );
};

export default Main;
