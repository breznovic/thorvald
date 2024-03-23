import s from "./Button.module.css"
import { useNavigate } from "react-router-dom";
import { TitleType } from "../types/types";


const Button = (props: TitleType & { url: string }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(props.url);

  return (
    <button className={s.button} onClick={handleClick}>
      {props.title}
    </button>
  );
};

export default Button;