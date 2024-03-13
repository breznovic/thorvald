import { Fighter } from "../../enemies/Fighter/Fighter";
import s from "./Fight.module.css";
import { RootState, useAppDispatch } from "../../../store/store";
import { useEffect, useState } from "react";
import { setEnemyForFight } from "../../../features/fightSlice";
import { useSelector } from "react-redux";
import Button from "../../../common/button/Button";
import { Header } from "../../header/Header";
import { useNavigate } from "react-router-dom";

export const Fight = () => {
  let enemyForFight = useSelector(
    (state: RootState) => state.fight.enemiesForFight
  );

  const thorvald = useSelector((state: RootState) => state.fight.thorvald);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setEnemyForFight());
  }, [dispatch]);

  if (enemyForFight.name === "Final") {
    navigate("/final");
  }

  const [showModal, setShowModal] = useState(true);

  const modalClose = () => setShowModal(false);

  return (
    <>
      {showModal && (
        <div className={s.modal}>
          <div className={s.modalContent}>
            <p>Tap on the image of the enemy to hit him!</p>
            <button onClick={modalClose}>Ok</button>
          </div>
        </div>
      )}
      <div className={s.header}>
        <div className={s.title}>
          <Header title="Chapter I: In the woods" />
        </div>
        <div className={s.button}>
          <Button title="Exit the game" url="/main"></Button>
        </div>
      </div>
      <div className={s.fight}>
        <Fighter fighter={thorvald} />
        <Fighter fighter={enemyForFight} />
      </div>
    </>
  );
};
