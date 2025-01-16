import s from "./Fighter.module.css";
import { FighterType, Thorvald } from "../../../common/types/types";
import { useEffect, useState } from "react";
import death from "../../../images/death.jpg";
import useFightStore from "../../../store/useFightStore";

type PropsType = {
  fighter: FighterType | Thorvald | null;
};

export const Fighter = (props: PropsType) => {
  const { thorvald, hitEnemy, clickOnDeadEnemy, enemiesForFight } =
    useFightStore();

  const fighterLevel = enemiesForFight.level;

  useEffect(() => {
    if (fighterLevel) {
      fighterLevel >= 1 ? setAnimateClass(s.animate) : setAnimateClass(s.line);
    }
  }, [fighterLevel]);

  const [animateClass, setAnimateClass] = useState("");

  const clickedDeadEnemy = () => {
    clickOnDeadEnemy();
  };

  const handleClick = () => {
    hitEnemy();
  };

  return (
    <>
      {props.fighter?.isDead === false ? (
        <div className={s.fighter}>
          <div className={`${s.line} ${animateClass}`}>
            {props.fighter?.name}
          </div>
          <div className={`${s.line} ${animateClass}`}>
            Level: {props.fighter?.level}
          </div>
          <div className={s.line}>
            XP: {props.fighter.XP}
            {thorvald && props.fighter.name === "Thorvald"
              ? "/" + thorvald.levelsScore
              : ""}
          </div>
          {props.fighter.name === "Thorvald" ? (
            <img src={props.fighter.avatar} className={s.image} />
          ) : (
            <img
              src={props.fighter.avatar}
              className={s.image}
              onClick={handleClick}
            />
          )}
          <div className={s.line}>Strength: {props.fighter?.strength}</div>
          <div className={s.line}>Armor: {props.fighter?.armor}</div>
          <div className={s.line}>HP: {props.fighter?.fullHP}</div>
        </div>
      ) : (
        <div className={s.fighter}>
          <div className={s.deadEnemyBlock}>
            <div className={s.line}>Enemy is dead!</div>
            <img src={death} className={s.image} onClick={clickedDeadEnemy} />
            <div className={s.line}>Click to fight another foe!</div>
          </div>
        </div>
      )}
    </>
  );
};
