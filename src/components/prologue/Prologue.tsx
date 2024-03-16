import s from "./Prologue.module.css";
import Button from "../../common/button/Button";

const Prologue = () => {
  return (
    <>
      <div className={s.header}>
        <header>Prologue</header>
      </div>
      <div className={s.common}>
        <div className={s.textBlock}>
          <p>
            Troll Thorvald was in his usual winter hibernation in swamp. But
            this time something woke him up prematurely.
          </p>
          <p>
            Familiar frogs informed him that the king had gone hunting with his
            entourage.
          </p>
          <p>And Thorvald set off in search of the intruder.</p>
        </div>
        <div className={s.button}>
          <Button title="Forward, on the search!" url="/fight" />
        </div>
      </div>
    </>
  );
};

export default Prologue;
