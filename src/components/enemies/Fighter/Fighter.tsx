import s from "./Fighter.module.css";
import { RootState, useAppDispatch } from "../../../store/store";
import { useSelector } from "react-redux";
import { FighterType, Thorvald } from "../../../common/types/types";
import { clickOnDeadEnemy, hitEnemy } from "../../../features/fightSlice";
import { useEffect, useState } from "react";
import death from "../../../images/death.jpg";

type PropsType = {
  fighter: FighterType | Thorvald;
};

export const Fighter = (props: PropsType) => {
  let thorvald = useSelector((state: RootState) => state.fight.thorvald);
  const fighterLevel = useSelector(
    (state: RootState) => state.fight.enemiesForFight.level
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    fighterLevel >= 1 ? setAnimateClass(s.animate) : setAnimateClass(s.line);
  }, [fighterLevel]);

  const [animateClass, setAnimateClass] = useState("");

  const clickedDeadEnemy = () => {
    dispatch(clickOnDeadEnemy());
  };

  const handleClick = () => {
    dispatch(hitEnemy());
  };

  return (
    <>
      {props.fighter.isDead === false ? (
        <div className={s.fighter}>
          <div className={`${s.line} ${animateClass}`}>
            {props.fighter?.name}
          </div>
          <div className={`${s.line} ${animateClass}`}>
            Level: {props.fighter?.level}
          </div>
          <div className={s.line}>
            XP: {props.fighter.XP}
            {props.fighter.name === "Thorvald"
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
