import s from "./Main.module.css";
import Button from "../../common/button/Button";
import { Header } from "../header/Header";

const Main = () => {
  return (
    <>
      <div className={s.header}>
        <Header title="Thorvald's revenge" />
      </div>
      <div className={s.common}>
        <div className={s.button}><Button title="Start game" url="/prologue" /></div>
      </div>
    </>
  );
};

export default Main;
