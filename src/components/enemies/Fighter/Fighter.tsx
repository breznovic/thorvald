import s from "./Fighter.module.css";
import { RootState, useAppDispatch } from "../../../store/store";
import { useSelector } from "react-redux";
import { FighterType, Thorvald } from "../../../common/types/types";
import { hitEnemy } from "../../../features/fightSlice";
import { FighterImage } from "./FighterImage";
import { useEffect, useState } from "react";

type PropsType = {
  fighter: FighterType | Thorvald;
};

export const Fighter = (props: PropsType) => {
  let thorvald = useSelector((state: RootState) => state.fight.thorvald);
  const fighterLevel = useSelector(
    (state: RootState) => state.fight.enemiesForFight.level
  );
  const thorvaldLevel = useSelector(
    (state: RootState) => state.fight.thorvald.level
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (fighterLevel > 1 || thorvaldLevel > 1) {
      setAnimateClass(s.animate);
    } else {
      setAnimateClass(s.line);
    }
  }, [fighterLevel, thorvaldLevel]);

  const [animateClass, setAnimateClass] = useState("");

  const handleClick = () => {
    dispatch(hitEnemy(props.fighter));
  };

  return (
    <>
      {props.fighter.isDead === false ? (
        <div className={s.fighter}>
          <div className={s.line}>{props.fighter?.name}</div>
          <div className={`${s.line} ${animateClass}`}>
            Level: {props.fighter?.level}
          </div>
          <div className={s.line}>
            XP: {props.fighter.XP}
            {props.fighter.name === "Thorvald"
              ? "/" + thorvald.levelsScore
              : ""}
          </div>
          <FighterImage fighter={props.fighter} handleClick={handleClick} />
          <div className={s.line}>Strength: {props.fighter?.strength}</div>
          <div className={s.line}>Armor: {props.fighter?.armor}</div>
          <div className={s.line}>HP: {props.fighter?.fullHP}</div>
        </div>
      ) : (
        <div className={s.fighter}>
          <div className={s.deadEnemyBlock}>
            <div className={s.line}>Enemy is dead!</div>
            <FighterImage fighter={props.fighter} handleClick={handleClick} />
            <div className={s.line}>Click to fight another foe!</div>
          </div>
        </div>
      )}
    </>
  );
};
