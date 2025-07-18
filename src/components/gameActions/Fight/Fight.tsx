import { Fighter } from "../../enemies/Fighter/Fighter";
import s from "./Fight.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFightStore from "../../../store/useFightStore";

export const Fight = () => {
  const { enemiesForFight, thorvald, resetEnemy } = useFightStore();
  let enemyForFight = enemiesForFight;

  const navigate = useNavigate();

  if (enemyForFight.id === "Final") {
    navigate("/final");
  }

  const handleClick = () => {
    resetEnemy();
    navigate("/main");
  };

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
        <div className={s.wrapper}>
          <header>Chapter I: In the woods</header>
          <button onClick={handleClick} className={s.button}>
            Exit the game
          </button>
        </div>
      </div>
      <div className={s.main}>
        <Fighter fighter={thorvald} />
        <Fighter fighter={enemyForFight} />
      </div>
    </>
  );
};
