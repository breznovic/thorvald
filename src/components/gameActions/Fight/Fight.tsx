import { Fighter } from "../../enemies/Fighter/Fighter";
import s from "./Fight.module.css";
import { RootState, useAppDispatch } from "../../../store/store";
import { useEffect, useState } from "react";
import { setEnemyForFight } from "../../../features/fightSlice";
import { useSelector } from "react-redux";
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

  const handleClick = () => navigate("/main");

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
      <div className={s.main}>
        <div className={s.header}>
          <header>Chapter I: In the woods</header>
          <button onClick={handleClick} className={s.button}>
            Exit the game
          </button>
        </div>
        <div className={s.fight}>
          <Fighter fighter={thorvald} />
          <Fighter fighter={enemyForFight} />
        </div>
      </div>
    </>
  );
};
