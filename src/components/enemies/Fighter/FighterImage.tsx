import { FighterType, Thorvald } from "../../../common/types/types";
import death from "../../../images/death.jpg";
import { useAppDispatch } from "../../../store/store";
import { clickOnDeadEnemy } from "../../../features/fightSlice";
import s from "./Fighter.module.css";

type PropsType = {
  fighter: FighterType | Thorvald;
  handleClick: () => void;
};

export const FighterImage = (props: PropsType) => {
  const dispatch = useAppDispatch();

  const clickedDeadEnemy = () => {
    dispatch(clickOnDeadEnemy());
  };

  switch (props.fighter?.name) {
    case "Thorvald":
      return <img src={props.fighter.avatar} className={s.imageThorvald} />;
    default:
      return (
        <>
          {props.fighter?.isDead === true ? (
            <img src={death} className={s.image} onClick={clickedDeadEnemy} />
          ) : (
            <img
              src={props.fighter?.avatar}
              onClick={props.handleClick}
              className={s.image}
            />
          )}
        </>
      );
  }
};
